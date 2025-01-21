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
import org.akilincarslan.ahrarwood.base.HomeFooter
import org.akilincarslan.ahrarwood.base.HomeHeader
import org.akilincarslan.ahrarwood.base.HomeSection
import org.akilincarslan.ahrarwood.base.HomeSectionButton
import org.akilincarslan.ahrarwood.base.HomeShipping
import org.akilincarslan.ahrarwood.constants.Constants
import org.akilincarslan.ahrarwood.constants.PageRoutes
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
    Column(
        modifier = modifier.fillMaxSize(),
        horizontalAlignment = Alignment.CenterHorizontally
    ) {
        HomeHeader(PageRoutes.HOME,modifier)
        Column(
            modifier = modifier
                .fillMaxSize()
                .margin(top = 102.px),
            horizontalAlignment = Alignment.CenterHorizontally
        ) {
            HomeBanner(modifier)
            HomeSection(modifier)
            HomeShipping(modifier)
            HomeFooter(modifier)
        }
    }
}
