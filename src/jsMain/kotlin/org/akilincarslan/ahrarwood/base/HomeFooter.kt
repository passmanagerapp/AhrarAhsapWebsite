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
import org.akilincarslan.ahrarwood.constants.ImagePaths
import org.akilincarslan.ahrarwood.utils.footerBgColor
import org.jetbrains.compose.web.css.px

@Composable
fun HomeFooter(
    modifier: Modifier
) {
    Box(
        modifier = modifier.fillMaxWidth()
            .height(96.px)
            .padding(leftRight = 36.px)
            .backgroundColor(footerBgColor),
    ) {
        SpanText(text = Res.string.footer_author, modifier = modifier.align(Alignment.CenterStart))
        Row(modifier = modifier.align(Alignment.CenterEnd)) {
            AboutExternalIcon(modifier, ImagePaths.WHATSAPP, Constants.WHATSAPP_URL)
            AboutExternalIcon(modifier, ImagePaths.ETSY, Constants.ETSY_SHOP_URL)
            AboutExternalIcon(modifier, ImagePaths.INSTAGRAM, Constants.INSTAGRAM_SHOP_URL)
            AboutExternalIcon(modifier, ImagePaths.YOUTUBE, Constants.YOUTUBE_SHOP_URL)
            AboutExternalIcon(modifier, ImagePaths.PINTEREST, Constants.PINTEREST_SHOP_URL)
        }
    }

}