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
import org.akilincarslan.ahrarwood.constants.Constants
import org.akilincarslan.ahrarwood.extensions.AboutExternalIcon
import org.jetbrains.compose.web.attributes.ButtonType
import org.jetbrains.compose.web.attributes.InputType
import org.jetbrains.compose.web.css.px
import org.jetbrains.compose.web.dom.Text


@Page
@Composable
fun ContactPage(modifier: Modifier = Modifier) {
    Box(modifier = Modifier.fillMaxSize(),
    ) {
        val name = remember { mutableStateOf("") }
        var title = remember { mutableStateOf("") }
        val message = remember { mutableStateOf("") }
        val email = remember { mutableStateOf("") }
        SpanText("Contact us", modifier = modifier.fontSize(28.px).align(Alignment.TopCenter))

        Column(modifier = modifier.align(Alignment.Center)) {
            Row(modifier = modifier) {
                Input(type = InputType.Text, value = name.value, onValueChange = {name.value = it}, placeholder = "Name")
                Input(type = InputType.Text, value = email.value, onValueChange = {email.value = it}, placeholder = "Email address")
            }
            Input(type = InputType.Text, value = title.value, onValueChange = {title.value = it}, placeholder = "Title")
            Input(type = InputType.Text, value = message.value, onValueChange = {message.value = it}, placeholder = "Message", modifier = modifier.fillMaxWidth().height(180.px))
            Button(onClick = {
                val mailtoLink = "mailto:${email.value}?subject=${message.value}"
                window.location.href = mailtoLink
            }, modifier = modifier.fillMaxWidth(), type = ButtonType.Submit, enabled = name.value.isNotEmpty() && email.toString().isNotEmpty()) {
                Text("Submit")
            }
        }

        Row(modifier = modifier.align(Alignment.CenterStart)) {
            AboutExternalIcon(modifier,"/etsy.png", Constants.ETSY_SHOP_URL)
            AboutExternalIcon(modifier,"/instagram.png", Constants.INSTAGRAM_SHOP_URL)
            AboutExternalIcon(modifier,"/youtube.png", Constants.YOUTUBE_SHOP_URL)
            AboutExternalIcon(modifier,"/pinterest.png", Constants.PINTEREST_SHOP_URL)
        }
    }
}