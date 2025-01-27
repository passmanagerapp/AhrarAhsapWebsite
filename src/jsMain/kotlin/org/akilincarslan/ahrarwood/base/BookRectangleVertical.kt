package org.akilincarslan.ahrarwood.base

import androidx.compose.runtime.Composable
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import com.varabyte.kobweb.compose.css.Cursor
import com.varabyte.kobweb.compose.css.cursor
import org.jetbrains.compose.web.css.Color
import org.jetbrains.compose.web.css.DisplayStyle
import org.jetbrains.compose.web.css.LineStyle
import org.jetbrains.compose.web.css.backgroundColor
import org.jetbrains.compose.web.css.border
import org.jetbrains.compose.web.css.display
import org.jetbrains.compose.web.css.height
import org.jetbrains.compose.web.css.px
import org.jetbrains.compose.web.css.width
import org.jetbrains.compose.web.dom.Div

@Composable
fun BookRectangleVertical(
    isAdded: Boolean,
    onClick: () -> Unit
) {
    val isHovered = remember { mutableStateOf(false) }

    Div(
        attrs = {
            style {
                width(20.px)
                height(80.px)
                backgroundColor(if (isAdded) Color.brown else Color.white)
                display(DisplayStyle.Block)
                border(1.px, LineStyle.Solid, Color.black)
                cursor(Cursor.Pointer)
            }
            onClick {
                onClick()
            }
            onMouseOver {
                isHovered.value = true
            }
            onMouseLeave {
                isHovered.value = false
            }
        }
    )
    if (isHovered.value) {
       // Text("book name...")
    }
}