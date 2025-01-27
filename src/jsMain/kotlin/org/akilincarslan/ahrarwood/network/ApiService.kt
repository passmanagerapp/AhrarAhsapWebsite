package org.akilincarslan.ahrarwood.network

import io.ktor.client.call.body
import io.ktor.client.request.get
import io.ktor.client.request.request
import io.ktor.client.statement.HttpResponse
import io.ktor.http.ContentType
import io.ktor.http.HttpMethod
import io.ktor.http.HttpStatusCode
import io.ktor.http.URLProtocol
import io.ktor.http.contentType
import io.ktor.http.path
import org.akilincarslan.ahrarwood.network.model.SearchResult

object ApiService {
    private val OPEN_LIBRARY_BASE_URL =  "openlibrary.org"
    val client = ApiClient.client

    suspend fun fetchBooks(author: String) : Result<ApiResponse<SearchResult>>{
        return try {
            val response: HttpResponse = client.get {
                url {
                    protocol = URLProtocol.HTTPS
                    host = OPEN_LIBRARY_BASE_URL
                    path("search.json")
                    parameters.append("author",author)
                }
            }
            if (response.status == HttpStatusCode.OK) {
                val responseBody =  response.body<SearchResult>()
                Result.success(ApiResponse(success = true, data = responseBody, error = null))
            } else {
                Result.success(ApiResponse(success = false, data = null, error = "Not found"))
            }
        } catch (e: Exception) {
            Result.failure(e)
        }
    }


}