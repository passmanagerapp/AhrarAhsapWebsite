package org.akilincarslan.ahrarwood.base


import androidx.compose.runtime.*
import com.varabyte.kobweb.compose.foundation.layout.Box
import com.varabyte.kobweb.compose.ui.Modifier
import com.varabyte.kobweb.compose.ui.modifiers.*
import com.varabyte.kobweb.compose.ui.toAttrs
import kotlinx.browser.document
import org.jetbrains.compose.web.css.px
import org.jetbrains.compose.web.dom.Canvas
import org.w3c.dom.HTMLCanvasElement

@Composable
fun ModelViewer3D(
    modelPath: String,
    modifier: Modifier = Modifier
) {
    var canvas: HTMLCanvasElement? by remember { mutableStateOf(null) }
    var cleanup: dynamic = remember { mutableStateOf(null) }

    Box(
        modifier = modifier
            .fillMaxWidth()
            .height(600.px)
    ) {
        Canvas(
            attrs = Modifier
                .id("model-viewer")
                .fillMaxSize()
                .toAttrs()
        )
    }

    LaunchedEffect(Unit) {
        kotlinx.browser.window.requestAnimationFrame {
            val element = document.getElementById("model-viewer") as HTMLCanvasElement?
            if (element != null) {
                canvas = element
                cleanup = js("load3DModel")(element, modelPath)
            }
        }
    }

    DisposableEffect(Unit) {
        onDispose {
            cleanup?.invoke()
        }
    }
}