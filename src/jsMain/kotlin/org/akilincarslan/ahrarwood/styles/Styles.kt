package org.akilincarslan.ahrarwood.styles

import com.varabyte.kobweb.compose.ui.Modifier
import com.varabyte.kobweb.compose.ui.graphics.Colors
import com.varabyte.kobweb.compose.ui.modifiers.backgroundColor
import com.varabyte.kobweb.silk.style.CssStyle
import com.varabyte.kobweb.silk.style.breakpoint.Breakpoint
import org.jetbrains.compose.web.css.StyleSheet

val CustomStyle = CssStyle {
    base {
        Modifier.backgroundColor(Colors.Red)
    }

    Breakpoint.XL {
        Modifier.backgroundColor(Colors.Black)
    }
}
