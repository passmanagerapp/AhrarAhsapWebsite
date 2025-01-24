package org.akilincarslan.ahrarwood.pages

import androidx.compose.runtime.*
import com.varabyte.kobweb.compose.foundation.layout.Column
import com.varabyte.kobweb.compose.ui.Alignment
import com.varabyte.kobweb.compose.ui.Modifier
import com.varabyte.kobweb.compose.ui.modifiers.fillMaxSize
import com.varabyte.kobweb.compose.ui.modifiers.margin
import com.varabyte.kobweb.core.Page
import com.varabyte.kobweb.core.rememberPageContext
import com.varabyte.kobweb.silk.theme.breakpoint.rememberBreakpoint
import com.varabyte.kobweb.worker.rememberWorker
import org.akilincarslan.ahrarwood.base.HomeBanner
import org.akilincarslan.ahrarwood.base.HomeFooter
import org.akilincarslan.ahrarwood.base.HomeHeader
import org.akilincarslan.ahrarwood.base.HomeSection
import org.akilincarslan.ahrarwood.base.HomeShipping
import org.akilincarslan.ahrarwood.base.HomeShippingMobile
import org.akilincarslan.ahrarwood.constants.PageRoutes
import org.akilincarslan.ahrarwood.extensions.isMobileCompatible
import org.akilincarslan.ahrarwood.worker.EchoWorker
import org.jetbrains.compose.web.css.px

@Page
@Composable
fun HomePage(modifier: Modifier = Modifier) {
    val worker = rememberWorker { EchoWorker { output -> console.log("Echoed: $output") } }
    LaunchedEffect(Unit) {
        worker.postInput("Hello, worker!")
    }
    val ctx = rememberPageContext()
    val breakpoint = rememberBreakpoint()
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
            HomeSection(breakpoint,modifier)
            if (breakpoint.isMobileCompatible())
                HomeShippingMobile(modifier)
            else
                HomeShipping(modifier)
            HomeFooter(breakpoint,modifier)
        }
    }
}
