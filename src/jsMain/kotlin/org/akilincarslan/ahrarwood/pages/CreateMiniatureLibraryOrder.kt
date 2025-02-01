package org.akilincarslan.ahrarwood.pages

import androidx.compose.runtime.Composable
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import com.varabyte.kobweb.compose.css.Cursor
import com.varabyte.kobweb.compose.css.FontWeight
import com.varabyte.kobweb.compose.foundation.layout.Arrangement
import com.varabyte.kobweb.compose.foundation.layout.Box
import com.varabyte.kobweb.compose.foundation.layout.Column
import com.varabyte.kobweb.compose.ui.Alignment
import com.varabyte.kobweb.compose.ui.Modifier
import com.varabyte.kobweb.compose.ui.graphics.Colors
import com.varabyte.kobweb.compose.ui.modifiers.backgroundColor
import com.varabyte.kobweb.compose.ui.modifiers.borderRadius
import com.varabyte.kobweb.compose.ui.modifiers.color
import com.varabyte.kobweb.compose.ui.modifiers.cursor
import com.varabyte.kobweb.compose.ui.modifiers.fillMaxHeight
import com.varabyte.kobweb.compose.ui.modifiers.fillMaxSize
import com.varabyte.kobweb.compose.ui.modifiers.fillMaxWidth
import com.varabyte.kobweb.compose.ui.modifiers.fontSize
import com.varabyte.kobweb.compose.ui.modifiers.fontWeight
import com.varabyte.kobweb.compose.ui.modifiers.height
import com.varabyte.kobweb.compose.ui.modifiers.margin
import com.varabyte.kobweb.compose.ui.modifiers.onMouseLeave
import com.varabyte.kobweb.compose.ui.modifiers.onMouseOver
import com.varabyte.kobweb.compose.ui.modifiers.padding
import com.varabyte.kobweb.compose.ui.modifiers.size
import com.varabyte.kobweb.compose.ui.styleModifier
import com.varabyte.kobweb.core.Page
import com.varabyte.kobweb.core.rememberPageContext
import com.varabyte.kobweb.navigation.UpdateHistoryMode
import com.varabyte.kobweb.silk.components.forms.Button
import com.varabyte.kobweb.silk.components.graphics.Image
import com.varabyte.kobweb.silk.components.text.SpanText
import com.varabyte.kobweb.silk.theme.breakpoint.rememberBreakpoint
import kotlinx.browser.window
import kotlinx.coroutines.flow.collect
import kotlinx.coroutines.flow.onEach
import org.akilincarslan.ahrarwood.base.HomeFooter
import org.akilincarslan.ahrarwood.base.HomeHeader
import org.akilincarslan.ahrarwood.base.TwoWeightText
import org.akilincarslan.ahrarwood.base.UnderlinedTextButton
import org.akilincarslan.ahrarwood.constants.Constants
import org.akilincarslan.ahrarwood.constants.ImagePaths
import org.akilincarslan.ahrarwood.constants.PageRoutes
import org.akilincarslan.ahrarwood.extensions.isMobileCompatible
import org.akilincarslan.ahrarwood.models.BookListModel
import org.akilincarslan.ahrarwood.utils.SharedViewModel
import org.akilincarslan.ahrarwood.utils.Utils
import org.akilincarslan.ahrarwood.utils.primaryColor
import org.akilincarslan.ahrarwood.utils.secondaryColor
import org.jetbrains.compose.web.css.px
import org.w3c.dom.HTMLElement
import kotlin.random.Random

@Page("create-miniature-library/order")
@Composable
fun CreateMiniatureLibraryOrderPage(
    modifier: Modifier = Modifier
) {
    val ctx = rememberPageContext()
    val breakpoint = rememberBreakpoint()
    var items = remember { mutableStateOf<List<BookListModel>>(emptyList()) }
    var uniqueId = remember { mutableStateOf<String>("") }
    LaunchedEffect(Unit) {
        SharedViewModel.bookItems.onEach {
            items.value = it.second
            uniqueId.value = it.first
        }.collect()
    }
    val list = items.value
    if (uniqueId.value.isNotEmpty())
        Utils.createBookListPdf(list,uniqueId.value,false)
    else
        ctx.router.navigateTo(PageRoutes.CREATE_MINIATURE_LIBRARY, updateHistoryMode = UpdateHistoryMode.REPLACE)
    Box(modifier = Modifier.fillMaxSize()) {
        HomeHeader(PageRoutes.CREATE_MINIATURE_LIBRARY, modifier)


        Box(modifier = modifier
            .fillMaxSize()
            .padding(top = 104.px, bottom = 96.px)
        ) {
            Box(
                modifier = modifier
                    .fillMaxWidth()
                    .height(160.px)
                    .padding(leftRight = 96.px)
                    .align(Alignment.TopCenter)
                    .backgroundColor(color = primaryColor),
            ) {
                SpanText(Res.string.library_header_title2, modifier = modifier.fontSize(36.px).fontWeight(FontWeight.Bold)
                    .color(Colors.White)
                    .align(Alignment.CenterStart))
                SpanText(Res.string.library_header_desc2,
                    modifier = modifier.fontSize(16.px).fontWeight(FontWeight.Thin).color(Colors.White)
                        .align(Alignment.BottomStart)
                        .margin(bottom = 8.px))
            }

            Box(
                modifier = modifier
                    .fillMaxSize()
                    .padding(top = 160.px)
                    .align(Alignment.CenterStart),
                contentAlignment = Alignment.Center
            ) {
                Column(
                    modifier = modifier.fillMaxWidth()
                        .fillMaxHeight()
                        .align(Alignment.Center),
                    verticalArrangement = Arrangement.Center,
                    horizontalAlignment = Alignment.CenterHorizontally
                ) {
                    Image(ImagePaths.SUCCESS,
                        modifier = modifier.size(124.px))
                    TwoWeightText(modifier,Res.string.copy_your_id, uniqueId.value)
                    Button(
                        onClick = {
                         window.open(Constants.ETSY_MINIBOOK_URL, target = "_blank")
                        },
                        modifier = Modifier
                            .backgroundColor(secondaryColor)
                            .padding(topBottom = 12.px, leftRight = 24.px)
                            .margin(32.px)
                            .borderRadius(25.px)
                            .cursor(Cursor.Pointer)
                            // Hover effect
                            .styleModifier {
                                property("transition", "all 0.3s ease")
                                property("box-shadow", "0 4px 8px rgba(0, 0, 0, 0.1)")
                                property("transform", "scale(1)")
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
                            },
                        enabled =  true
                    ) {
                        SpanText(
                            text = "Order",
                            modifier = Modifier
                                .color(Colors.SaddleBrown)
                                .fontSize(if (!breakpoint.isMobileCompatible()) 18.px else 12.px)
                                .styleModifier {
                                    property("font-weight", "600")
                                }
                        )
                    }
                    UnderlinedTextButton(
                        modifier = modifier.margin(top = 12.px),
                        text = Res.string.download_book_list,
                        onClick = {
                            val list = items.value
                            Utils.createBookListPdf(list, uniqueId.value,true)
                        }
                    )
                }
            }
        }

        Box(
            modifier = modifier
                .align(Alignment.BottomCenter)
                .fillMaxWidth()
        ) {
            HomeFooter(breakpoint,modifier)
        }
    }
}