package org.akilincarslan.ahrarwood.pages

import androidx.compose.runtime.*
import com.varabyte.kobweb.compose.foundation.layout.Box
import com.varabyte.kobweb.compose.foundation.layout.Column
import com.varabyte.kobweb.compose.foundation.layout.Row
import com.varabyte.kobweb.compose.ui.Alignment
import com.varabyte.kobweb.compose.ui.Modifier
import com.varabyte.kobweb.compose.ui.graphics.Colors
import com.varabyte.kobweb.compose.ui.modifiers.backgroundColor
import com.varabyte.kobweb.compose.ui.modifiers.fillMaxSize
import com.varabyte.kobweb.compose.ui.modifiers.fillMaxWidth
import com.varabyte.kobweb.compose.ui.modifiers.height
import com.varabyte.kobweb.compose.ui.modifiers.margin
import com.varabyte.kobweb.compose.ui.modifiers.padding
import com.varabyte.kobweb.compose.ui.modifiers.width
import com.varabyte.kobweb.core.Page
import com.varabyte.kobweb.core.rememberPageContext
import com.varabyte.kobweb.silk.components.graphics.Image
import com.varabyte.kobweb.silk.components.text.SpanText
import com.varabyte.kobweb.worker.rememberWorker
import dev.gitlive.firebase.analytics.analytics
import org.akilincarslan.ahrarwood.base.AboutExternalIcon
import org.akilincarslan.ahrarwood.base.HomeBanner
import org.akilincarslan.ahrarwood.base.HomeSection
import org.akilincarslan.ahrarwood.base.HomeSectionButton
import org.akilincarslan.ahrarwood.constants.Constants
import org.akilincarslan.ahrarwood.firebase.Analytics
import org.akilincarslan.ahrarwood.worker.EchoWorker
import org.jetbrains.compose.web.css.Color
import org.jetbrains.compose.web.css.px
import kotlin.js.Date

@Page
@Composable
fun HomePage(modifier: Modifier = Modifier) {
    val worker = rememberWorker { EchoWorker { output -> console.log("Echoed: $output") } }
    LaunchedEffect(Unit) {
        worker.postInput("Hello, worker!")
    }
    val ctx = rememberPageContext()
    Box(modifier.fillMaxSize()) {
        Column(
            modifier = modifier.fillMaxWidth(),
            horizontalAlignment = Alignment.CenterHorizontally
        ) {
            Box(modifier = modifier
                .fillMaxWidth()
                .margin(top = 36.px)
                , contentAlignment = Alignment.TopCenter) {
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
                        .align(Alignment.TopEnd),
                ) {
                    HomeSectionButton(modifier,"Home","/", onClick = {
                        //ctx.router.navigateTo(it)
                        Analytics.logEvent("homeClick")
                    })
                    HomeSectionButton(modifier,"Book stands","/book-stands", onClick = {
                        //ctx.router.navigateTo(it)
                    })
                    HomeSectionButton(modifier,"About","/about", onClick = {
                        //ctx.router.navigateTo(it)
                    })
                    HomeSectionButton(modifier,"Contact","/contact", onClick = {
                        //ctx.router.navigateTo(it)
                    })
                }
            }
            HomeBanner(modifier)
            //HomeSection(modifier)
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


    }
}
