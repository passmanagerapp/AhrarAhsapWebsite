package org.akilincarslan.ahrarwood.base

import androidx.compose.runtime.Composable
import com.varabyte.kobweb.compose.css.Cursor
import com.varabyte.kobweb.compose.css.Transition
import com.varabyte.kobweb.compose.css.TransitionTimingFunction
import com.varabyte.kobweb.compose.foundation.layout.Arrangement
import com.varabyte.kobweb.compose.foundation.layout.Box
import com.varabyte.kobweb.compose.foundation.layout.Row
import com.varabyte.kobweb.compose.ui.Alignment
import com.varabyte.kobweb.compose.ui.Modifier
import com.varabyte.kobweb.compose.ui.attrsModifier
import com.varabyte.kobweb.compose.ui.graphics.Colors
import com.varabyte.kobweb.compose.ui.modifiers.backgroundColor
import com.varabyte.kobweb.compose.ui.modifiers.border
import com.varabyte.kobweb.compose.ui.modifiers.borderRadius
import com.varabyte.kobweb.compose.ui.modifiers.cursor
import com.varabyte.kobweb.compose.ui.modifiers.fillMaxWidth
import com.varabyte.kobweb.compose.ui.modifiers.height
import com.varabyte.kobweb.compose.ui.modifiers.margin
import com.varabyte.kobweb.compose.ui.modifiers.onClick
import com.varabyte.kobweb.compose.ui.modifiers.outline
import com.varabyte.kobweb.compose.ui.modifiers.padding
import com.varabyte.kobweb.compose.ui.modifiers.transition
import com.varabyte.kobweb.compose.ui.modifiers.width
import com.varabyte.kobweb.silk.components.forms.TextInput
import com.varabyte.kobweb.silk.components.graphics.Image
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.delay
import kotlinx.coroutines.launch
import org.akilincarslan.ahrarwood.constants.ImagePaths
import org.akilincarslan.ahrarwood.firebase.Analytics
import org.jetbrains.compose.web.attributes.Scope
import org.jetbrains.compose.web.css.Color
import org.jetbrains.compose.web.css.LineStyle
import org.jetbrains.compose.web.css.ms
import org.jetbrains.compose.web.css.percent
import org.jetbrains.compose.web.css.px

@Composable
fun SearchView(
    modifier: Modifier,
    scope: CoroutineScope,
    isSearchExpanded: Boolean,
    searchText: String,
    onSearchTextChange: (query: String)-> Unit,
    onSearchExpanded: () -> Unit,
    onSubmit: (search:String) -> Unit,
) {
    Row(
        modifier = modifier
            .width(if (isSearchExpanded) 560.px else 40.px)
            .height(40.px)
            .margin(right = 24.px)
            .border {
                width(1.px)
                style(LineStyle.Solid)
                color(Color.lightgray)
            }
            .borderRadius(4.px)
            .transition(Transition.all(300.ms,TransitionTimingFunction.EaseInOut)),
        horizontalArrangement = Arrangement.End,
        verticalAlignment = Alignment.CenterVertically
    ) {
        if (isSearchExpanded) {
            TextInput(
                text = searchText,
                onTextChange = {onSearchTextChange(it) },
                modifier = modifier
                    .fillMaxWidth(85.percent)
                    .height(100.percent)
                    .border(0.px)
                    .padding(leftRight = 12.px)
                    .outline(0.px)
                    .backgroundColor(Colors.Transparent)
                    .attrsModifier {
                        attr("placeholder", "Search author to add its books to list")
                        attr("type", "search")
                    }
            )
        }

        Box(
            modifier = modifier
                .width(40.px)
                .height(40.px)
                .cursor(Cursor.Pointer)
                .padding(8.px)
                .onClick {
                    scope.launch {
                        if (isSearchExpanded && searchText.isNotEmpty()) {
                            onSubmit(searchText)
                        } else {
                            onSearchExpanded()
                            if (isSearchExpanded) {
                                delay(100)
                            } else {
                                onSearchTextChange("")
                            }
                        }
                    }
                },
            contentAlignment = Alignment.Center
        ) {
            Image(
                src = ImagePaths.SEARCH_ICON,
                modifier = modifier
                    .width(20.px)
                    .height(20.px)
            )
        }
}
}