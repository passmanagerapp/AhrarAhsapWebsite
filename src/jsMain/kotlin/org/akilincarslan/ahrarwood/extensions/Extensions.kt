package org.akilincarslan.ahrarwood.extensions

import androidx.compose.runtime.Composable
import com.varabyte.kobweb.compose.ui.Modifier
import com.varabyte.kobweb.compose.ui.modifiers.margin
import com.varabyte.kobweb.compose.ui.modifiers.onClick
import com.varabyte.kobweb.compose.ui.modifiers.size
import com.varabyte.kobweb.silk.components.graphics.Image
import kotlinx.browser.window
import org.akilincarslan.ahrarwood.constants.Constants
import org.jetbrains.compose.web.css.px

@Composable
fun AboutExternalIcon(
    modifier: Modifier,
    iconPath: String,
    externalUrl: String
)  {
    Image(src = iconPath, alt = iconPath.substringBefore(".png"), modifier = modifier.size(32.px).margin(right = 6.px).onClick {
        window.open(externalUrl, target = "_blank")
    })
}