package org.akilincarslan.ahrarwood.pages

import androidx.compose.runtime.*
import com.varabyte.kobweb.compose.css.Cursor
import com.varabyte.kobweb.compose.foundation.layout.Arrangement
import com.varabyte.kobweb.compose.foundation.layout.Box
import com.varabyte.kobweb.compose.foundation.layout.Column
import com.varabyte.kobweb.compose.foundation.layout.Row
import com.varabyte.kobweb.compose.ui.Alignment
import com.varabyte.kobweb.compose.ui.Modifier
import com.varabyte.kobweb.compose.ui.graphics.Colors
import com.varabyte.kobweb.compose.ui.modifiers.backgroundColor
import com.varabyte.kobweb.compose.ui.modifiers.color
import com.varabyte.kobweb.compose.ui.modifiers.cursor
import com.varabyte.kobweb.compose.ui.modifiers.fillMaxSize
import com.varabyte.kobweb.compose.ui.modifiers.fillMaxWidth
import com.varabyte.kobweb.compose.ui.modifiers.height
import com.varabyte.kobweb.compose.ui.modifiers.margin
import com.varabyte.kobweb.compose.ui.modifiers.onClick
import com.varabyte.kobweb.compose.ui.modifiers.onMouseEnter
import com.varabyte.kobweb.compose.ui.modifiers.onMouseLeave
import com.varabyte.kobweb.compose.ui.modifiers.padding
import com.varabyte.kobweb.compose.ui.modifiers.width
import com.varabyte.kobweb.core.Page
import com.varabyte.kobweb.core.rememberPageContext
import com.varabyte.kobweb.silk.components.forms.Button
import com.varabyte.kobweb.silk.components.graphics.Image
import com.varabyte.kobweb.silk.components.text.SpanText
import org.jetbrains.compose.web.dom.Text
import com.varabyte.kobweb.worker.rememberWorker
import org.akilincarslan.ahrarwood.base.HomeBanner
import org.akilincarslan.ahrarwood.base.HomeSectionButton
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
    Column(modifier.fillMaxSize(),
        horizontalAlignment = Alignment.CenterHorizontally) {

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
    }
}
