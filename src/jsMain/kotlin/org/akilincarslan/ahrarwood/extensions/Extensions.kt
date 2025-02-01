package org.akilincarslan.ahrarwood.extensions

import com.varabyte.kobweb.silk.style.breakpoint.Breakpoint
import io.ktor.util.encodeBase64
import kotlinx.browser.window
import kotlin.random.Random

fun Breakpoint.isMobileCompatible() : Boolean {
    return this < Breakpoint.MD
}
fun Breakpoint.isLargerSize() : Boolean  {
    return this >= Breakpoint.XL
}
fun String.encodeToBase64(): String {
    // Use standard Base64 encoding with no padding
    return this.encodeToByteArray().encodeBase64()
        .replace("-", "+")  // Convert URL-safe chars back to standard Base64
        .replace("_", "/")  // Convert URL-safe chars back to standard Base64
}

fun executeDynamicJs(code: String) : String {
    val dynamicJs = js("eval")
    return dynamicJs(code)
}

fun getRandomHexColor(): Int {
    return Random.nextInt(0x000000, 0xFFFFFF)
}

fun copyToClipboard(text: String) {
    runCatching {
        window.navigator.clipboard.writeText(text)
            .then { println("Copied to clipboard: $text") }
            .catch { println("Failed to copy text") }
    }
}


fun Int?.ignoreNull() : Int = this ?: -1
fun String?.ignoreNull() : String = this ?: "-"
