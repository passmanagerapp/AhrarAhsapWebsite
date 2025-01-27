package org.akilincarslan.ahrarwood.network

import com.varabyte.kobweb.browser.file.readBytes
import io.ktor.client.*
import io.ktor.client.call.body
import io.ktor.client.request.*
import io.ktor.client.statement.*
import io.ktor.http.*
import io.ktor.http.ContentDisposition.Companion.File
import io.ktor.util.encodeBase64
import kotlinx.serialization.json.Json
import kotlinx.serialization.json.jsonArray
import kotlinx.serialization.json.jsonObject
import kotlinx.serialization.json.jsonPrimitive
import org.akilincarslan.ahrarwood.extensions.encodeToBase64
import org.khronos.webgl.ArrayBuffer
import org.khronos.webgl.Int8Array
import org.w3c.files.File
import org.w3c.xhr.ARRAYBUFFER
import org.w3c.xhr.XMLHttpRequest
import org.w3c.xhr.XMLHttpRequestResponseType
import kotlin.coroutines.resume
import kotlin.coroutines.resumeWithException
import kotlin.coroutines.suspendCoroutine
import kotlin.js.Date

class ForgeService {
    private val clientId = "OB4cvu6hxGbWkJMCmUtGBD4KMGv6VcmM6IEfq6wYbpIbcJGG"
    private val clientSecret = "FR6ubzIHA9isjCb6R3lu8CoEzE3ShqNy4jARoWOONqfxiANnF7A2j2ta5o8eEohq"
    private val client = HttpClient()

    private suspend fun readFileBytes(filePath: String): ByteArray = suspendCoroutine { continuation ->
        val xhr = XMLHttpRequest()
        xhr.open("GET", filePath, true)
        xhr.responseType = XMLHttpRequestResponseType.ARRAYBUFFER

        xhr.onload = {
            if (xhr.status == 200.toShort()) {
                val buffer = xhr.response as ArrayBuffer
                val bytes = Int8Array(buffer).unsafeCast<ByteArray>()
                continuation.resume(bytes)
            } else {
                continuation.resumeWithException(Exception("Failed to load file: ${xhr.statusText}"))
            }
        }

        xhr.onerror = {
            continuation.resumeWithException(Exception("Failed to load file"))
        }

        xhr.send()
    }

    suspend fun getAccessToken() : String {
        val response = client.post("https://developer.api.autodesk.com/authentication/v2/token") {
            contentType(ContentType.Application.FormUrlEncoded)
            setBody(
                "client_id=$clientId" +
                        "&client_secret=$clientSecret" +
                        "&grant_type=client_credentials" +
                        "&scope=data:read data:write bucket:create bucket:read viewables:read"
            )        }
        val jsonResponse = Json.parseToJsonElement(response.bodyAsText()).jsonObject
        return jsonResponse["access_token"]?.jsonPrimitive?.content
            ?: throw Exception("Failed to get access token")
    }

    suspend fun getModelUrn(filePath: String): String {
        // 1. Get access token

        val token = getAccessToken()
        println("getModelUrn token ${token}")
        val bucketKey = "ahrarwood_bucket_${Date.now()}"
        client.post("https://developer.api.autodesk.com/oss/v2/buckets") {
            header("Authorization", "Bearer $token")
            contentType(ContentType.Application.Json)
            setBody("""{"bucketKey": "$bucketKey", "policyKey": "transient"}""")
        }

        client.get("https://developer.api.autodesk.com/oss/v2/buckets/$bucketKey/details") {
            header("Authorization", "Bearer $token")
        }

        val fileName = filePath.split("/").last()
        val file : ByteArray = readFileBytes(filePath)

        val getModel = client.get("https://developer.api.autodesk.com/oss/v2/buckets/$bucketKey/objects/$fileName/signeds3upload") {
            header("Authorization","Bearer $token")
            header("Content-Type","application/json")
        }
        val uploadJson2 = Json.parseToJsonElement(getModel.bodyAsText()).jsonObject
        val uploadKey = uploadJson2["uploadKey"]?.jsonPrimitive?.content
        val url = uploadJson2["urls"]?.jsonArray?.get(0)?.jsonPrimitive?.content
        url?.let {
            client.put(it)
        }
        val uploadResponse = client.post("https://developer.api.autodesk.com/oss/v2/buckets/$bucketKey/objects/$fileName/signeds3upload") {
            header("Authorization", "Bearer $token")
            header("Content-Type","application/json")
            header("x-ads-meta-Content-Type","application/octet-stream")
            setBody("""{
            "uploadKey": "$uploadKey"
                    }""")
        }

        val uploadJson = Json.parseToJsonElement(uploadResponse.bodyAsText()).jsonObject
        val objectId = uploadJson["objectId"]?.jsonPrimitive?.content
            ?: throw Exception("Failed to get object ID")
        client.post("https://developer.api.autodesk.com/modelderivative/v2/designdata/job") {
            header("Authorization", "Bearer $token")
            contentType(ContentType.Application.Json)
            setBody("""
                {
                    "input": {
                        "urn": "${objectId.encodeToBase64()}"
                    },
                    "output": {
                        "formats": [
                            {
                                "type": "svf2",
                                "views": ["2d", "3d"]
                            }
                        ]
                    }
                }
            """.trimIndent())
        }

        return objectId.encodeToBase64()
    }

}