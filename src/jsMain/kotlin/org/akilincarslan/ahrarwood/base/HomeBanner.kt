package org.akilincarslan.ahrarwood.base

import androidx.compose.runtime.Composable
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import com.varabyte.kobweb.compose.css.Cursor
import com.varabyte.kobweb.compose.css.ObjectFit
import com.varabyte.kobweb.compose.css.Overflow
import com.varabyte.kobweb.compose.css.ScrollBehavior
import com.varabyte.kobweb.compose.css.WhiteSpace
import com.varabyte.kobweb.compose.foundation.layout.Box
import com.varabyte.kobweb.compose.foundation.layout.Row
import com.varabyte.kobweb.compose.ui.Modifier
import com.varabyte.kobweb.compose.ui.graphics.Colors
import com.varabyte.kobweb.compose.ui.modifiers.backgroundColor
import com.varabyte.kobweb.compose.ui.modifiers.borderRadius
import com.varabyte.kobweb.compose.ui.modifiers.bottom
import com.varabyte.kobweb.compose.ui.modifiers.cursor
import com.varabyte.kobweb.compose.ui.modifiers.display
import com.varabyte.kobweb.compose.ui.modifiers.fillMaxHeight
import com.varabyte.kobweb.compose.ui.modifiers.fillMaxSize
import com.varabyte.kobweb.compose.ui.modifiers.fillMaxWidth
import com.varabyte.kobweb.compose.ui.modifiers.flex
import com.varabyte.kobweb.compose.ui.modifiers.gap
import com.varabyte.kobweb.compose.ui.modifiers.height
import com.varabyte.kobweb.compose.ui.modifiers.id
import com.varabyte.kobweb.compose.ui.modifiers.left
import com.varabyte.kobweb.compose.ui.modifiers.objectFit
import com.varabyte.kobweb.compose.ui.modifiers.overflow
import com.varabyte.kobweb.compose.ui.modifiers.position
import com.varabyte.kobweb.compose.ui.modifiers.scrollBehavior
import com.varabyte.kobweb.compose.ui.modifiers.size
import com.varabyte.kobweb.compose.ui.modifiers.whiteSpace
import com.varabyte.kobweb.compose.ui.modifiers.width
import com.varabyte.kobweb.compose.ui.toAttrs
import com.varabyte.kobweb.silk.components.graphics.Image
import kotlinx.browser.document
import org.akilincarslan.ahrarwood.constants.Constants
import org.jetbrains.compose.web.css.DisplayStyle
import org.jetbrains.compose.web.css.Position
import org.jetbrains.compose.web.css.percent
import org.jetbrains.compose.web.css.px
import org.jetbrains.compose.web.dom.Div
import org.w3c.dom.HTMLDivElement
import androidx.compose.runtime.DisposableEffect
import androidx.compose.runtime.LaunchedEffect
import com.varabyte.kobweb.compose.ui.modifiers.onMouseEnter
import com.varabyte.kobweb.compose.ui.modifiers.onMouseLeave
import kotlinx.coroutines.delay
import org.akilincarslan.ahrarwood.constants.ImagePaths
import kotlin.time.Duration.Companion.seconds

@Composable
fun HomeBanner(
    modifier: Modifier
) {
    val banners = listOf<String>(ImagePaths.BANNER1, ImagePaths.BANNER2, ImagePaths.BANNER3, ImagePaths.BANNER4)
    val currentIndex = remember { mutableStateOf(0) }
    val containerId = "carouselContainer"
    val isHovered = remember { mutableStateOf(false) }
    
    LaunchedEffect(Unit) {
        while (true) {
            delay(5.seconds)
            if (!isHovered.value) {
                currentIndex.value = (currentIndex.value + 1) % banners.size
                val container = document.getElementById(containerId) as? HTMLDivElement
                container?.scrollTo(
                    x = (container.clientWidth * currentIndex.value).toDouble(),
                    y = 0.0
                )
            }
        }
    }

    // Add cleanup when component is disposed
    DisposableEffect(Unit) {
        onDispose {
            // Cleanup if needed
        }
    }

    Box(
        modifier = modifier
            .fillMaxWidth()
            .height(420.px)
            .position(Position.Relative)
            .overflow(Overflow.Hidden)
            .onMouseEnter { isHovered.value = true }
            .onMouseLeave { isHovered.value = false }
    ) {
        Div(
            attrs = Modifier
                .id(containerId)
                .fillMaxSize()
                .display(DisplayStyle.Flex)
                .whiteSpace(WhiteSpace.NoWrap)
                .overflow(Overflow.Hidden)
                .scrollBehavior(ScrollBehavior.Smooth)
                .toAttrs()
        ){
            banners.forEach {
                Box(
                    modifier = Modifier
                        .fillMaxHeight()
                        .width(100.percent)
                        .flex(0, 0, 100.percent)
                ) {
                    Image(
                        src = it,
                        modifier = Modifier
                            .fillMaxSize()
                            .objectFit(ObjectFit.Cover),
                        alt = Constants.BANNER_ALT
                    )
                }
            }
        }

        Row(
            modifier = Modifier
                .position(Position.Absolute)
                .bottom(8.px)
                .left(16.px)
                .gap(8.px)
        ) {
            repeat(banners.size) { index ->
                Div(
                    attrs = Modifier
                        .size(12.px)
                        .backgroundColor(if (index == currentIndex.value) Colors.White else Colors.LightGray)
                        .borderRadius(50.percent)
                        .cursor(Cursor.Pointer)
                        .toAttrs({
                            onClick {
                                currentIndex.value = index
                                val container = document.getElementById(containerId) as? HTMLDivElement
                                container?.scrollTo(
                                    x = (container.clientWidth * index).toDouble(),
                                    y = 0.0
                                )
                            }
                        })
                )
            }
        }
    }
}