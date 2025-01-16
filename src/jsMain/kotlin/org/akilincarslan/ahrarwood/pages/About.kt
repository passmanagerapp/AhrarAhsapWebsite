package org.akilincarslan.ahrarwood.pages

import androidx.compose.runtime.Composable
import com.varabyte.kobweb.compose.css.FontWeight
import com.varabyte.kobweb.compose.foundation.layout.Arrangement
import com.varabyte.kobweb.compose.foundation.layout.Box
import com.varabyte.kobweb.compose.foundation.layout.Column
import com.varabyte.kobweb.compose.foundation.layout.Row
import com.varabyte.kobweb.compose.ui.Alignment
import com.varabyte.kobweb.compose.ui.Modifier
import com.varabyte.kobweb.compose.ui.graphics.Colors
import com.varabyte.kobweb.compose.ui.modifiers.backgroundColor
import com.varabyte.kobweb.compose.ui.modifiers.color
import com.varabyte.kobweb.compose.ui.modifiers.fillMaxSize
import com.varabyte.kobweb.compose.ui.modifiers.fillMaxWidth
import com.varabyte.kobweb.compose.ui.modifiers.fontFamily
import com.varabyte.kobweb.compose.ui.modifiers.fontSize
import com.varabyte.kobweb.compose.ui.modifiers.fontWeight
import com.varabyte.kobweb.compose.ui.modifiers.height
import com.varabyte.kobweb.core.Page
import com.varabyte.kobweb.silk.components.graphics.Image
import com.varabyte.kobweb.silk.components.layout.SimpleGrid
import com.varabyte.kobweb.silk.components.text.SpanText
import com.varabyte.kobweb.silk.style.CssStyle
import com.varabyte.kobweb.silk.style.breakpoint.ResponsiveValues
import com.varabyte.kobweb.silk.style.extendedBy
import com.varabyte.kobweb.silk.style.toModifier
import org.jetbrains.compose.web.css.px
import org.jetbrains.compose.web.dom.Br
import org.jetbrains.compose.web.dom.Span
import org.jetbrains.compose.web.dom.Text

@Page
@Composable
fun AboutPage(modifier: Modifier = Modifier) {
    Box(modifier = modifier.fillMaxSize()) {
        SimpleGrid(numColumns = ResponsiveValues(3,3,3,3,3), modifier = modifier.align(Alignment.TopCenter)) {
            Image(src = "/about2.png", alt = "about", width = 560, height = 600,)
            Image(src = "/about.png", alt = "about", width = 560, height = 600)
            Image(src = "/about3.png", alt = "about", width = 560, height = 600,)
        }
        Column(modifier = modifier.fillMaxWidth().height(260.px)
            .backgroundColor(Colors.LightGray)
            .align(Alignment.BottomCenter),
            verticalArrangement = Arrangement.SpaceAround,
            horizontalAlignment = Alignment.CenterHorizontally
        ) {
            SpanText("Us in numbers", modifier = modifier.fontSize(24.px))
            Row(modifier = modifier) {
                SpanText("We have achieved export success in 4 different continents,from North America to Australia, from Europe to Asia.")
                SpanText("So far, we have been successful in marketing our products in 18 different countries.")
                SpanText("We have reached over 1000 orders so far in our country and abroad.")
                SpanText("AhrarWood has been in service for 4 years.")
            }
        }
    }
}