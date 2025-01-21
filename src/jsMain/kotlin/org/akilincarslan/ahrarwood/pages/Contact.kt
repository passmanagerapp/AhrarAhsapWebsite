package org.akilincarslan.ahrarwood.pages

import androidx.compose.runtime.Composable
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import com.varabyte.kobweb.compose.foundation.layout.Arrangement
import com.varabyte.kobweb.compose.foundation.layout.Box
import com.varabyte.kobweb.compose.foundation.layout.Column
import com.varabyte.kobweb.compose.foundation.layout.Row
import com.varabyte.kobweb.compose.ui.Alignment
import com.varabyte.kobweb.compose.ui.Modifier
import com.varabyte.kobweb.compose.ui.modifiers.fillMaxHeight
import com.varabyte.kobweb.compose.ui.modifiers.fillMaxSize
import com.varabyte.kobweb.compose.ui.modifiers.fillMaxWidth
import com.varabyte.kobweb.compose.ui.modifiers.fontSize
import com.varabyte.kobweb.compose.ui.modifiers.height
import com.varabyte.kobweb.compose.ui.modifiers.margin
import com.varabyte.kobweb.compose.ui.modifiers.onClick
import com.varabyte.kobweb.compose.ui.modifiers.size
import com.varabyte.kobweb.core.Page
import com.varabyte.kobweb.navigation.Anchor
import com.varabyte.kobweb.silk.components.forms.Button
import com.varabyte.kobweb.silk.components.forms.Input
import com.varabyte.kobweb.silk.components.graphics.Image
import com.varabyte.kobweb.silk.components.text.SpanText
import kotlinx.browser.window
import org.akilincarslan.ahrarwood.base.AboutExternalIcon
import org.akilincarslan.ahrarwood.base.HomeFooter
import org.akilincarslan.ahrarwood.base.HomeHeader
import org.akilincarslan.ahrarwood.constants.Constants
import org.jetbrains.compose.web.attributes.ButtonType
import org.jetbrains.compose.web.attributes.InputType
import org.jetbrains.compose.web.css.*
import com.varabyte.kobweb.compose.ui.modifiers.*
import com.varabyte.kobweb.silk.theme.breakpoint.rememberBreakpoint
import com.varabyte.kobweb.compose.css.Cursor
import com.varabyte.kobweb.compose.css.FontWeight
import com.varabyte.kobweb.compose.css.Transition
import com.varabyte.kobweb.compose.ui.graphics.Colors
import com.varabyte.kobweb.silk.style.breakpoint.Breakpoint
import org.akilincarslan.ahrarwood.base.GoogleMap
import org.akilincarslan.ahrarwood.constants.PageRoutes
import org.akilincarslan.ahrarwood.utils.brownColor
import org.jetbrains.compose.web.dom.Text
import org.jetbrains.compose.web.dom.TextArea

@Page
@Composable
fun ContactPage(modifier: Modifier = Modifier) {
    val breakpoint = rememberBreakpoint()

    Box(modifier = Modifier.fillMaxSize()) {
        val name = remember { mutableStateOf("") }
        var title = remember { mutableStateOf("") }
        val message = remember { mutableStateOf("") }

        HomeHeader(PageRoutes.CONTACT,modifier)
        Row(
            modifier =
                modifier
                    .align(Alignment.Center)
                    .fillMaxWidth(),
            horizontalArrangement = Arrangement.Center,
            verticalAlignment = Alignment.CenterVertically
        ) {
            GoogleMap(breakpoint,modifier)
            Column(
                modifier = modifier
                    .fillMaxWidth(if (breakpoint >= Breakpoint.MD) 30.percent else 80.percent)
                    .margin( left = 30.px)
                    .padding(all = 24.px)
                    .borderRadius(8.px)
                    .boxShadow(
                        offsetX = 0.px,
                        offsetY = 2.px,
                        blurRadius = 8.px,
                        color = rgba(0, 0, 0, 0.1)
                    ),
                horizontalAlignment = Alignment.CenterHorizontally
            ) {
                SpanText(
                    Res.string.contact_title,
                    modifier = Modifier
                        .margin(bottom = 24.px)
                        .fontSize(20.px)
                        .color(rgb(100, 100, 100))
                )

                // Name Input
                Input(
                    type = InputType.Text,
                    value = name.value,
                    onValueChange = { name.value = it },
                    placeholder = Res.string.contact_email_name,
                    focusBorderColor = brownColor,
                    modifier = Modifier
                        .fillMaxWidth()
                        .height(50.px)
                        .margin(bottom = 16.px)
                        .padding(16.px)
                        .backgroundColor(Colors.White)
                        .borderRadius(4.px)
                        .border(1.px, LineStyle.Solid, rgb(200, 200, 200))
                )

                // Title Input
                Input(
                    type = InputType.Text,
                    value = title.value,
                    onValueChange = { title.value = it },
                    placeholder = Res.string.contact_email_subject,
                    focusBorderColor = brownColor,
                    modifier = Modifier
                        .fillMaxWidth()
                        .height(50.px)
                        .margin(bottom = 16.px)
                        .padding(16.px)
                        .backgroundColor(Colors.White)
                        .borderRadius(4.px)
                        .border(1.px, LineStyle.Solid, rgb(200, 200, 200))
                )

                // Replace the Message Input with TextArea
                TextArea(
                    value = message.value,
                    attrs = {
                        this.onInput {
                            message.value = it.value
                        }
                        attr("placeholder", Res.string.contact_email_subject)
                        style {
                            width(100.percent)
                            height(180.px)
                            marginBottom(24.px)
                            padding(16.px)
                            backgroundColor(Colors.White)
                            borderRadius(4.px)
                            border(1.px, LineStyle.Solid, rgb(200, 200, 200)
                            )
                            property("font-family", "inherit")
                            property("font-size", "inherit")
                            property("resize", "none")
                        }
                    },
                )

                Button(
                    onClick = {
                        val mailtoLink = "mailto:${Constants.EMAIL_ADDRESS}?subject=${title.value}&body=From: ${name.value}%0D%0A%0D%0A${message.value}"
                        window.location.href = mailtoLink
                    },
                    modifier = Modifier
                        .fillMaxWidth(if (breakpoint >= Breakpoint.MD) 30.percent else 100.percent)
                        .height(50.px)
                        .backgroundColor(if (title.value.isNotEmpty() && message.value.isNotEmpty()) rgb(67, 83, 52) else rgb(200, 200, 200))
                        .color(Colors.White)
                        .borderRadius(4.px)
                        .cursor(Cursor.Pointer)
                        .transition(Transition.of("background-color",300.ms)),
                    type = ButtonType.Submit,
                    enabled = title.value.isNotEmpty() && message.value.isNotEmpty()
                ) {
                    Text(Res.string.contact_email_send_message)
                }
            }
        }


        Box(
            modifier = modifier
                .align(Alignment.BottomCenter)
                .fillMaxWidth()
        ) {
            HomeFooter(modifier)
        }
    }
}