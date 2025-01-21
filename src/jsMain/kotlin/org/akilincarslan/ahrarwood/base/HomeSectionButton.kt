package org.akilincarslan.ahrarwood.base

import androidx.compose.runtime.Composable
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import com.varabyte.kobweb.compose.css.Cursor
import com.varabyte.kobweb.compose.ui.Modifier
import com.varabyte.kobweb.compose.ui.graphics.Colors
import com.varabyte.kobweb.compose.ui.modifiers.color
import com.varabyte.kobweb.compose.ui.modifiers.cursor
import com.varabyte.kobweb.compose.ui.modifiers.margin
import com.varabyte.kobweb.compose.ui.modifiers.onClick
import com.varabyte.kobweb.compose.ui.modifiers.onMouseEnter
import com.varabyte.kobweb.compose.ui.modifiers.onMouseLeave
import com.varabyte.kobweb.compose.ui.styleModifier
import com.varabyte.kobweb.silk.components.text.SpanText
import org.akilincarslan.ahrarwood.utils.brownColor
import org.akilincarslan.ahrarwood.utils.primaryColor
import org.jetbrains.compose.web.css.px


@Composable
fun HomeSectionButton(
    modifier: Modifier,
    title: String,
    path: String,
    currentPath: String,
    onClick : (path: String) -> Unit
) {
    val isHovered =remember { mutableStateOf(false) }

    SpanText(title,modifier
        .cursor(Cursor.Pointer)
        .color(if (isHovered.value) brownColor else if (currentPath == path) brownColor else Colors.Black)
        .onClick {
            if (isHovered.value)
                onClick(path)
        }
        .margin(right = 8.px)
        .onMouseEnter { isHovered.value = true }
        .onMouseLeave { isHovered.value = false }
    )
}