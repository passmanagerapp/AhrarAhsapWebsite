package org.akilincarslan.ahrarwood.base

import androidx.compose.runtime.Composable
import com.varabyte.kobweb.compose.foundation.layout.Box
import com.varabyte.kobweb.compose.foundation.layout.Row
import com.varabyte.kobweb.compose.ui.Alignment
import com.varabyte.kobweb.compose.ui.Modifier
import com.varabyte.kobweb.compose.ui.modifiers.backgroundColor
import com.varabyte.kobweb.compose.ui.modifiers.fillMaxWidth
import com.varabyte.kobweb.compose.ui.modifiers.height
import com.varabyte.kobweb.compose.ui.modifiers.padding
import com.varabyte.kobweb.silk.components.text.SpanText
import org.akilincarslan.ahrarwood.constants.Constants
import org.jetbrains.compose.web.css.Color
import org.jetbrains.compose.web.css.px

@Composable
fun HomeFooter(
    modifier: Modifier
) {
    Box(
        modifier = modifier.fillMaxWidth()
            .height(96.px)
            .padding(leftRight = 36.px)
            .backgroundColor(Color("#E6E6E6")),
    ) {
        SpanText(text = "Copyright 2025 dev0029", modifier = modifier.align(Alignment.CenterStart))
        Row(modifier = modifier.align(Alignment.CenterEnd)) {
            AboutExternalIcon(modifier,"/whatsapp.png", Constants.WHATSAPP_URL)
            AboutExternalIcon(modifier,"/etsy.png", Constants.ETSY_SHOP_URL)
            AboutExternalIcon(modifier,"/instagram.png", Constants.INSTAGRAM_SHOP_URL)
            AboutExternalIcon(modifier,"/youtube.png", Constants.YOUTUBE_SHOP_URL)
            AboutExternalIcon(modifier,"/pinterest.png", Constants.PINTEREST_SHOP_URL)
        }
    }

}