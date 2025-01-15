package org.akilincarslan.ahrarwood.pages

import androidx.compose.runtime.*
import com.varabyte.kobweb.compose.foundation.layout.Arrangement
import com.varabyte.kobweb.compose.foundation.layout.Box
import com.varabyte.kobweb.compose.foundation.layout.Column
import com.varabyte.kobweb.compose.foundation.layout.Row
import com.varabyte.kobweb.compose.ui.Alignment
import com.varabyte.kobweb.compose.ui.Modifier
import com.varabyte.kobweb.compose.ui.modifiers.fillMaxSize
import com.varabyte.kobweb.compose.ui.modifiers.margin
import com.varabyte.kobweb.compose.ui.modifiers.padding
import com.varabyte.kobweb.core.Page
import com.varabyte.kobweb.core.rememberPageContext
import com.varabyte.kobweb.silk.components.forms.Button
import com.varabyte.kobweb.silk.components.graphics.Image
import org.jetbrains.compose.web.dom.Text
import com.varabyte.kobweb.worker.rememberWorker
import org.akilincarslan.ahrarwood.worker.EchoWorker
import org.jetbrains.compose.web.css.px

@Page
@Composable
fun HomePage() {
    val worker = rememberWorker { EchoWorker { output -> console.log("Echoed: $output") } }
    LaunchedEffect(Unit) {
        worker.postInput("Hello, worker!")
    }
    val ctx = rememberPageContext()
    Box(Modifier.fillMaxSize(), contentAlignment = Alignment.Center) {

        Row(
            modifier = Modifier
                .margin(8.px)
                .align(Alignment.TopEnd)
        ) {
            Button(onClick = {  },) {
                Text("Home")
            }
            Button(onClick = {  },) {
                Text("Book stands")
            }
            Button(onClick = { ctx.router.navigateTo("/about") },) {
                Text("About")
            }
            Button(onClick = { ctx.router.navigateTo("/contact") },) {
                Text("Contact")
            }
        }

        Column(
            verticalArrangement = Arrangement.Center,
            horizontalAlignment = Alignment.CenterHorizontally
        ) {
            Image("/icon.jpg", alt = "ahrarWood", width = 240, height = 240)
            Text("Welcome to AhrarWood")
        }
    }
}
