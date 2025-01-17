package org.akilincarslan.ahrarwood.base

import androidx.compose.runtime.Composable
import com.varabyte.kobweb.compose.css.Cursor
import com.varabyte.kobweb.compose.ui.Modifier
import com.varabyte.kobweb.compose.ui.modifiers.cursor
import com.varabyte.kobweb.compose.ui.modifiers.margin
import com.varabyte.kobweb.compose.ui.modifiers.onClick
import com.varabyte.kobweb.compose.ui.modifiers.onMouseLeave
import com.varabyte.kobweb.compose.ui.modifiers.onMouseOver
import com.varabyte.kobweb.compose.ui.modifiers.size
import com.varabyte.kobweb.silk.components.graphics.Image
import kotlinx.browser.window
import org.jetbrains.compose.web.css.px
import org.w3c.dom.HTMLElement

@Composable
fun AboutExternalIcon(
    modifier: Modifier,
    iconPath: String,
    externalUrl: String
) {

    Image(src = iconPath, alt = iconPath.substringBefore(".png"), modifier =
    modifier
        .size(24.px)
        .margin(right = 36.px)
        .cursor(Cursor.Pointer)
        .onClick {
            window.open(externalUrl, target = "_blank")
        }
        .onMouseOver {
            (it.target as? HTMLElement)?.style?.apply {
                transform = "scale(1.05)"
                boxShadow = "0 6px 12px rgba(0, 0, 0, 0.15)"
            }
        }
        .onMouseLeave {
            (it.target as? HTMLElement)?.style?.apply {
                transform = "scale(1)"
                boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)"
            }
        }
    )
}