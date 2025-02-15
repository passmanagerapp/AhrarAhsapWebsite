package org.akilincarslan.ahrarwood.pages

import androidx.compose.runtime.Composable
import androidx.compose.runtime.LaunchedEffect
import com.varabyte.kobweb.compose.ui.Modifier
import com.varabyte.kobweb.core.Page
import com.varabyte.kobweb.silk.theme.breakpoint.rememberBreakpoint
import kotlinx.browser.window
import org.akilincarslan.ahrarwood.base.ContactContent
import org.akilincarslan.ahrarwood.base.ContactContentMobile
import org.akilincarslan.ahrarwood.constants.Constants
import org.akilincarslan.ahrarwood.extensions.isMobileCompatible

@Page
@Composable
fun ContactPage(
    modifier: Modifier = Modifier
) {
    LaunchedEffect(Unit) {
        window.location.href = Constants.AHRAR_WOOD
    }
    val breakpoint = rememberBreakpoint()
     if (breakpoint.isMobileCompatible())
         ContactContentMobile(breakpoint,modifier)
    else
         ContactContent(breakpoint,modifier)
}