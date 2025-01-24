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
import com.varabyte.kobweb.silk.style.breakpoint.Breakpoint
import com.varabyte.kobweb.silk.theme.breakpoint.rememberBreakpoint
import org.akilincarslan.ahrarwood.constants.Constants
import org.akilincarslan.ahrarwood.constants.ImagePaths
import org.akilincarslan.ahrarwood.utils.footerBgColor
import org.jetbrains.compose.web.css.px

@Composable
fun HomeFooter(
    breakpoint: Breakpoint,
    modifier: Modifier
) {
    Box(
        modifier = modifier.fillMaxWidth()
            .height(if (breakpoint >= Breakpoint.MD) 96.px else 56.px)
            .padding(leftRight = if (breakpoint >= Breakpoint.MD) 36.px else 16.px)
            .backgroundColor(footerBgColor),
    ) {
        SpanText(text = Res.string.footer_author, modifier = modifier.align(Alignment.CenterStart))
        Row(modifier = modifier.align(Alignment.CenterEnd)) {
            AboutExternalIcon(modifier,breakpoint, ImagePaths.WHATSAPP, Constants.WHATSAPP_URL)
            AboutExternalIcon(modifier,breakpoint, ImagePaths.ETSY, Constants.ETSY_SHOP_URL)
            AboutExternalIcon(modifier,breakpoint, ImagePaths.INSTAGRAM, Constants.INSTAGRAM_SHOP_URL)
            AboutExternalIcon(modifier,breakpoint, ImagePaths.YOUTUBE, Constants.YOUTUBE_SHOP_URL)
            AboutExternalIcon(modifier,breakpoint, ImagePaths.PINTEREST, Constants.PINTEREST_SHOP_URL)
        }
    }

}