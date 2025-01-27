package org.akilincarslan.ahrarwood.base


import androidx.compose.runtime.*
import com.varabyte.kobweb.compose.css.FontWeight
import com.varabyte.kobweb.compose.css.ObjectFit
import com.varabyte.kobweb.compose.foundation.layout.Box
import com.varabyte.kobweb.compose.foundation.layout.Column
import com.varabyte.kobweb.compose.ui.Alignment
import com.varabyte.kobweb.compose.ui.Modifier
import com.varabyte.kobweb.compose.ui.modifiers.*
import com.varabyte.kobweb.silk.components.text.SpanText
import org.jetbrains.compose.web.css.*
import com.varabyte.kobweb.silk.components.forms.Button
import com.varabyte.kobweb.compose.foundation.layout.Row
import com.varabyte.kobweb.compose.foundation.layout.Arrangement
import com.varabyte.kobweb.compose.ui.graphics.Colors
import com.varabyte.kobweb.silk.components.graphics.Image

@Composable
fun Dialog(
    isOpen: Boolean,
    onClose: () -> Unit,
    title: String,
    coverUrl: String
) {
    if (!isOpen) return

    val isHovered = remember { mutableStateOf(false) }
    Box(
        modifier = Modifier
            .fillMaxSize()
            .position(Position.Fixed)
            .top(0.px)
            .left(0.px)
            .backgroundColor(rgba(0, 0, 0, 0.5))
            .zIndex(999)
            .onClick { onClose() },
        contentAlignment = Alignment.Center
    ) {
        // Dialog kutusu
        Box(
            modifier = Modifier
                .padding(20.px)
                .backgroundColor(Colors.White)
                .borderRadius(8.px)
                .maxWidth(400.px)
                .onClick { it.stopPropagation() } // Overlay tıklamasını engelle
        ) {
            Column(
                modifier = Modifier.padding(16.px).gap(16.px)
            ) {
                // Başlık
                SpanText(
                    text = title,
                    modifier = Modifier
                        .fontSize(20.px)
                        .fontWeight(FontWeight.Bold)
                )

                // Mesaj
                Image(
                    src = coverUrl,
                    modifier = Modifier
                        .size(200.px)
                        .objectFit(ObjectFit.Contain)
                        .margin(topBottom = 16.px)
                )

                // Butonlar
                Row(
                    modifier = Modifier.fillMaxWidth(),
                    horizontalArrangement = Arrangement.End
                ) {
                    Button(
                        onClick = { onClose() },
                        modifier = Modifier
                            .padding(8.px)
                            .backgroundColor(if (isHovered.value) rgb(29, 78, 216) else rgb(59, 130, 246))
                            .color(Colors.White)
                            .borderRadius(4.px)
                            .padding(leftRight = 16.px, topBottom = 8.px)
                            .onMouseEnter {
                                isHovered.value = true
                            }
                            .onMouseLeave {
                                isHovered.value = false
                            }
                    ) {
                        SpanText("Tamam")
                    }
                }
            }
        }
    }
}