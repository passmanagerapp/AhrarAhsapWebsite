package org.akilincarslan.ahrarwood.base

import androidx.compose.runtime.*
import com.varabyte.kobweb.compose.css.Cursor
import com.varabyte.kobweb.compose.foundation.layout.Box
import com.varabyte.kobweb.compose.foundation.layout.Row
import com.varabyte.kobweb.compose.foundation.layout.Arrangement
import com.varabyte.kobweb.compose.ui.Alignment
import com.varabyte.kobweb.compose.ui.Modifier
import com.varabyte.kobweb.compose.ui.modifiers.*
import com.varabyte.kobweb.silk.components.graphics.Image
import org.akilincarslan.ahrarwood.constants.PageRoutes
import org.akilincarslan.ahrarwood.firebase.Analytics
import org.jetbrains.compose.web.css.*
import com.varabyte.kobweb.compose.ui.attrsModifier
import com.varabyte.kobweb.silk.components.forms.TextInput
import kotlinx.coroutines.delay
import kotlinx.coroutines.launch
import com.varabyte.kobweb.compose.css.Transition
import com.varabyte.kobweb.compose.css.TransitionProperty
import com.varabyte.kobweb.compose.css.TransitionTimingFunction
import com.varabyte.kobweb.compose.ui.graphics.Colors
import com.varabyte.kobweb.core.rememberPageContext
import org.akilincarslan.ahrarwood.constants.ImagePaths
import org.jetbrains.compose.web.ExperimentalComposeWebApi

@OptIn(ExperimentalComposeWebApi::class)
@Composable
fun HomeHeader(
    currentPath: String,
    modifier: Modifier
) {
    var searchText = remember { mutableStateOf("") }
    var isSearchExpanded = remember { mutableStateOf(false) }
    val scope = rememberCoroutineScope()
    val ctx = rememberPageContext()
    Box(modifier = modifier
        .fillMaxWidth()
        .position(Position.Fixed)
        .zIndex(100)
        .backgroundColor(Color.white)
        .padding(leftRight = 96.px),
        contentAlignment = Alignment.TopCenter
    ) {
        Row(
            modifier = modifier
                .margin(topBottom = 16.px)
                .align(Alignment.TopStart)
        ) {
            Image(ImagePaths.LOGO,
                modifier = modifier
                    .width(216.px)
                    .height(72.px)
                    .cursor(Cursor.Pointer)
                    .onClick { ctx.router.navigateTo(PageRoutes.HOME) }
            )
        }

        Row(
            modifier = modifier
                .margin(topBottom = 16.px)
                .align(Alignment.CenterEnd),
            verticalAlignment = Alignment.CenterVertically
        ) {
            val transition = Transition()
            Row(
                modifier = modifier
                    .width(if (isSearchExpanded.value) 240.px else 40.px)
                    .height(40.px)
                    .margin(right = 24.px)
                    .border {
                        width(1.px)
                        style(LineStyle.Solid)
                        color(Color.lightgray)
                    }
                    .borderRadius(4.px)
                    .transition(Transition.all(300.ms,TransitionTimingFunction.EaseInOut)),
                horizontalArrangement = Arrangement.End,
                verticalAlignment = Alignment.CenterVertically
            ) {
                if (isSearchExpanded.value) {
                    TextInput(
                        text = searchText.value,
                        onTextChange = { searchText.value = it },
                        modifier = modifier
                            .fillMaxWidth(85.percent)
                            .height(100.percent)
                            .border(0.px)
                            .padding(leftRight = 12.px)
                            .outline(0.px)
                            .backgroundColor(Colors.Transparent)
                            .attrsModifier {
                                attr("placeholder", Res.string.search)
                                attr("type", "search")
                            }
                    )
                }

                Box(
                    modifier = modifier
                        .width(40.px)
                        .height(40.px)
                        .cursor(Cursor.Pointer)
                        .padding(8.px)
                        .onClick {
                            scope.launch {
                                if (isSearchExpanded.value && searchText.value.isNotEmpty()) {
                                    Analytics.logEvent("searchSubmit")
                                } else {
                                    isSearchExpanded.value = !isSearchExpanded.value
                                    if (isSearchExpanded.value) {
                                        delay(100)
                                    } else {
                                        searchText.value = ""
                                    }
                                }
                            }
                        },
                    contentAlignment = Alignment.Center
                ) {
                    Image(
                        src = ImagePaths.SEARCH_ICON,
                        modifier = modifier
                            .width(20.px)
                            .height(20.px)
                    )
                }
            }

            HomeSectionButton(modifier, Res.string.home, PageRoutes.HOME, currentPath, onClick = {
                ctx.router.navigateTo(it)
            })
            HomeSectionButton(modifier, Res.string.book_stands, PageRoutes.BOOK_STANDS, currentPath, onClick = {
                //ctx.router.navigateTo(it)
            })
            HomeSectionButton(modifier, Res.string.about, PageRoutes.ABOUT,currentPath, onClick = {
                //ctx.router.navigateTo(it)
            })
            HomeSectionButton(modifier, Res.string.contact, PageRoutes.CONTACT, currentPath, onClick = {
                ctx.router.navigateTo(it)
            })
        }
    }
}