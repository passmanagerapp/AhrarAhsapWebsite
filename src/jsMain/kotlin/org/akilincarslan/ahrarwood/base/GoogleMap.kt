package org.akilincarslan.ahrarwood.base

import androidx.compose.runtime.Composable
import com.varabyte.kobweb.compose.foundation.layout.Box
import com.varabyte.kobweb.compose.ui.Modifier
import com.varabyte.kobweb.compose.ui.modifiers.height
import com.varabyte.kobweb.compose.ui.modifiers.margin
import com.varabyte.kobweb.compose.ui.modifiers.width
import com.varabyte.kobweb.silk.style.breakpoint.Breakpoint
import org.akilincarslan.ahrarwood.constants.Constants
import org.jetbrains.compose.web.css.px
import org.jetbrains.compose.web.dom.Iframe

@Composable
fun GoogleMap(breakpoint: Breakpoint,modifier: Modifier) {
    Box(
        modifier = modifier.width(480.px).height(360.px)
            .margin(right = 30.px)

    ) {
        Iframe(
            attrs = {
                attr("src", Constants.MAP_URL)
                attr("style", "border:0")
                attr("loading", "lazy")
                attr("referrerpolicy", "no-referrer-when-downgrade")
                attr("width", "100%")
                attr("height", "100%")
            }
        )
    }

}