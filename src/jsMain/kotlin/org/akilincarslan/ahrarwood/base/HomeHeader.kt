package org.akilincarslan.ahrarwood.base

import androidx.compose.runtime.Composable
import com.varabyte.kobweb.compose.foundation.layout.Box
import com.varabyte.kobweb.compose.foundation.layout.Row
import com.varabyte.kobweb.compose.ui.Alignment
import com.varabyte.kobweb.compose.ui.Modifier
import com.varabyte.kobweb.compose.ui.modifiers.fillMaxWidth
import com.varabyte.kobweb.compose.ui.modifiers.height
import com.varabyte.kobweb.compose.ui.modifiers.margin
import com.varabyte.kobweb.compose.ui.modifiers.width
import com.varabyte.kobweb.silk.components.graphics.Image
import org.akilincarslan.ahrarwood.constants.PageRoutes
import org.akilincarslan.ahrarwood.firebase.Analytics
import org.jetbrains.compose.web.css.px

@Composable
fun HomeHeader(
    modifier: Modifier
) {
    Box(modifier = modifier
        .fillMaxWidth()
        .margin(top = 36.px)
        ,contentAlignment = Alignment.TopCenter) {
        Row(
            modifier = modifier
                .margin(16.px)
                .align(Alignment.TopStart)
        ) {
            Image("/banner_logo.jpg", modifier = modifier.width(360.px).height(120.px))
        }

        Row(
            modifier = modifier
                .margin(16.px)
                .align(Alignment.CenterEnd),
        ) {
            HomeSectionButton(modifier, Res.string.home, PageRoutes.HOME, onClick = {
                //ctx.router.navigateTo(it)
                Analytics.logEvent("homeClick")
            })
            HomeSectionButton(modifier,Res.string.book_stands, PageRoutes.BOOK_STANDS, onClick = {
                //ctx.router.navigateTo(it)
            })
            HomeSectionButton(modifier,Res.string.about, PageRoutes.ABOUT, onClick = {
                //ctx.router.navigateTo(it)
            })
            HomeSectionButton(modifier,Res.string.contact, PageRoutes.CONTACT, onClick = {
                //ctx.router.navigateTo(it)
            })
        }
    }
}