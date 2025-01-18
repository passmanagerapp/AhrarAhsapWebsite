package org.akilincarslan.ahrarwood

import androidx.compose.runtime.*
import com.varabyte.kobweb.compose.ui.modifiers.*
import com.varabyte.kobweb.core.App
import com.varabyte.kobweb.silk.SilkApp
import com.varabyte.kobweb.silk.components.layout.Surface
import com.varabyte.kobweb.silk.style.common.SmoothColorStyle
import com.varabyte.kobweb.silk.style.toModifier
import dev.gitlive.firebase.FirebaseOptions
import dev.gitlive.firebase.analytics.analytics
import dev.gitlive.firebase.initialize
import dev.gitlive.firebase.installations.installations
import io.github.skeptick.libres.LibresSettings
import kotlinx.browser.localStorage
import kotlinx.browser.window
import org.akilincarslan.ahrarwood.firebase.FirebaseConfig
import org.jetbrains.compose.web.css.*

@App
@Composable
fun AppEntry(content: @Composable () -> Unit) {
    LaunchedEffect(Unit) {
      initFirebase()
    }
    initLocalization()
    SilkApp {
        Surface(SmoothColorStyle.toModifier().minHeight(100.vh)) {
            content()
        }
    }
}

private fun initFirebase() {
    val app = dev.gitlive.firebase.Firebase.initialize(
        options = FirebaseOptions(
            applicationId = FirebaseConfig.APP_ID,
            apiKey = FirebaseConfig.API_KEY,
            storageBucket = FirebaseConfig.STORAGE_BUCKET,
            projectId = FirebaseConfig.PROJECT_ID,
            gcmSenderId = FirebaseConfig.MESSAGING_SENDER_ID,
            authDomain = FirebaseConfig.AUTH_DOMAIN
        )
    )
    val fb=  dev.gitlive.firebase.Firebase
    fb.installations(app)
    fb.analytics.setAnalyticsCollectionEnabled(true)
}

private fun initLocalization() {
    val locales = listOf("en", "tr","de")
    LibresSettings.languageCode =
        localStorage.getItem("locale")
            ?: locales.find { it == window.navigator.language.substringBefore("-") }
                    ?: locales.first()
    println("browserLanguage ${window.navigator.language}")
}
