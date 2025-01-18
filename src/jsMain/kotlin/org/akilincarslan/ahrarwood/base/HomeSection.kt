package org.akilincarslan.ahrarwood.base

import androidx.compose.runtime.Composable
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import com.varabyte.kobweb.compose.css.Cursor
import com.varabyte.kobweb.compose.css.ObjectFit
import com.varabyte.kobweb.compose.css.Overflow
import com.varabyte.kobweb.compose.css.ScrollBehavior
import com.varabyte.kobweb.compose.css.WhiteSpace
import com.varabyte.kobweb.compose.foundation.layout.Arrangement
import com.varabyte.kobweb.compose.foundation.layout.Box
import com.varabyte.kobweb.compose.foundation.layout.Column
import com.varabyte.kobweb.compose.foundation.layout.Row
import com.varabyte.kobweb.compose.ui.Alignment
import com.varabyte.kobweb.compose.ui.Modifier
import com.varabyte.kobweb.compose.ui.graphics.Colors
import com.varabyte.kobweb.compose.ui.modifiers.backgroundColor
import com.varabyte.kobweb.compose.ui.modifiers.borderRadius
import com.varabyte.kobweb.compose.ui.modifiers.bottom
import com.varabyte.kobweb.compose.ui.modifiers.color
import com.varabyte.kobweb.compose.ui.modifiers.cursor
import com.varabyte.kobweb.compose.ui.modifiers.display
import com.varabyte.kobweb.compose.ui.modifiers.fillMaxHeight
import com.varabyte.kobweb.compose.ui.modifiers.fillMaxSize
import com.varabyte.kobweb.compose.ui.modifiers.fillMaxWidth
import com.varabyte.kobweb.compose.ui.modifiers.flex
import com.varabyte.kobweb.compose.ui.modifiers.fontSize
import com.varabyte.kobweb.compose.ui.modifiers.gap
import com.varabyte.kobweb.compose.ui.modifiers.height
import com.varabyte.kobweb.compose.ui.modifiers.id
import com.varabyte.kobweb.compose.ui.modifiers.left
import com.varabyte.kobweb.compose.ui.modifiers.margin
import com.varabyte.kobweb.compose.ui.modifiers.objectFit
import com.varabyte.kobweb.compose.ui.modifiers.onClick
import com.varabyte.kobweb.compose.ui.modifiers.onMouseLeave
import com.varabyte.kobweb.compose.ui.modifiers.onMouseOver
import com.varabyte.kobweb.compose.ui.modifiers.overflow
import com.varabyte.kobweb.compose.ui.modifiers.padding
import com.varabyte.kobweb.compose.ui.modifiers.position
import com.varabyte.kobweb.compose.ui.modifiers.scrollBehavior
import com.varabyte.kobweb.compose.ui.modifiers.size
import com.varabyte.kobweb.compose.ui.modifiers.whiteSpace
import com.varabyte.kobweb.compose.ui.modifiers.width
import com.varabyte.kobweb.compose.ui.styleModifier
import com.varabyte.kobweb.compose.ui.toAttrs
import com.varabyte.kobweb.core.rememberPageContext
import com.varabyte.kobweb.silk.components.graphics.Image
import com.varabyte.kobweb.silk.components.text.SpanText
import kotlinx.browser.document
import kotlinx.browser.window
import org.akilincarslan.ahrarwood.constants.Constants
import org.akilincarslan.ahrarwood.constants.PageRoutes
import org.akilincarslan.ahrarwood.models.Section
import org.jetbrains.compose.web.css.Color
import org.jetbrains.compose.web.css.DisplayStyle
import org.jetbrains.compose.web.css.Position
import org.jetbrains.compose.web.css.percent
import org.jetbrains.compose.web.css.px
import org.jetbrains.compose.web.dom.Div
import org.jetbrains.compose.web.dom.Text
import org.w3c.dom.HTMLDivElement
import org.w3c.dom.HTMLElement

@Composable
fun HomeSection(
    modifier: Modifier
) {
    val ctx = rememberPageContext()
    val banners = listOf<Section>(
        Section(title = Res.string.section1_title, description = Res.string.section1_desc,
            buttonTitle = Res.string.section1_button, navPath = PageRoutes.PACKAGING, imagePath = "/packaging.png", imagePath2 = "/packaging2.png"),
        Section(title = Res.string.section2_title,Res.string.section2_desc,
            buttonTitle = Res.string.section2_button, navPath = null, imagePath = "/section2_1.png", imagePath2 = "/section2_2.png"),
        Section(title = Res.string.section3_title,Res.string.section3_desc,
            buttonTitle = Res.string.section3_button, navPath = null, imagePath = "/section3.png", imagePath2 = "/section3.png"),
    )
    val currentIndex = remember { mutableStateOf(0) }
    val containerId = "sectionContainer"
    Box(
        modifier = modifier
            .fillMaxWidth()
            .height(640.px)
            .position(Position.Relative)
            .overflow(Overflow.Hidden)
            .margin(topBottom = 64.px)
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
            banners.forEach { section ->
                Row(
                    modifier  = modifier.backgroundColor(Color("#A96532"))
                        .color(Colors.White)
                        .fillMaxHeight()
                        .width(100.percent)
                        .flex(0,0,100.percent)
                        .padding(leftRight = 96.px),
                    horizontalArrangement = Arrangement.SpaceBetween,
                    verticalAlignment = Alignment.CenterVertically
                ) {
                    Column(
                        modifier = modifier
                            .fillMaxSize(),
                        verticalArrangement = Arrangement.Center
                    ) {
                        SpanText(section.title,
                            modifier = modifier.fontSize(48.px).margin(bottom = 12.px))
                        SpanText(section.description)
                        Box(modifier = Modifier.height(24.px))

                        // Beautiful Order Now button
                        Box(
                            modifier = Modifier
                                .backgroundColor(Colors.White)
                                .padding(topBottom = 12.px, leftRight = 24.px)
                                .borderRadius(25.px)
                                .cursor(Cursor.Pointer)
                                // Hover effect
                                .styleModifier {
                                    property("transition", "all 0.3s ease")
                                    property("box-shadow", "0 4px 8px rgba(0, 0, 0, 0.1)")
                                    property("transform", "scale(1)")
                                }
                                .onClick {
                                    /*section.navPath?.let { path ->
                                        ctx.router.navigateTo(path)
                                    }*/
                                    window.open(Constants.ETSY_SHOP_URL, target = "_blank")
                                }
                                // Hover states
                                .onMouseOver {
                                    (it.target as? HTMLElement)?.style?.apply {
                                        transform = "scale(1.05)"
                                        boxShadow = "0 6px 12px rgba(0, 0, 0, 0.15)"
                                    }
                                }
                                .onMouseLeave {
                                    (it.target as? HTMLElement)?.style?.apply {
                                        transform = "scale(1)"
                                        boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)"
                                    }
                                }
                        ) {
                            SpanText(
                                text = section.buttonTitle,
                                modifier = Modifier
                                    .color(Colors.SaddleBrown)
                                    .fontSize(18.px)
                                    .styleModifier {
                                        property("font-weight", "600")
                                    }
                            )
                        }
                    }
                    Column(
                        modifier = modifier
                            .height(225.px)
                            .width(450.px),
                        verticalArrangement = Arrangement.Center,
                        horizontalAlignment = Alignment.CenterHorizontally) {
                        Box(
                            modifier = modifier
                                .fillMaxSize()
                                .backgroundColor(Colors.Transparent)
                                .borderRadius(32.px)
                                .overflow(Overflow.Hidden)
                                .styleModifier {
                                    property("box-shadow", "0 4px 8px rgba(0, 0, 0, 0.1)")
                                }
                        ) {
                            Image(
                                src = section.imagePath,
                                modifier = Modifier
                                    .fillMaxSize(),
                                alt = "About Image"
                            )
                        }
                    }

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
                                container?.scrollTo(x = (container.clientWidth * index).toDouble(), y = 0.0)
                            }
                        })
                )
            }
        }
    }
}