package org.akilincarslan.ahrarwood

import androidx.compose.runtime.*
import com.varabyte.kobweb.compose.ui.modifiers.*
import com.varabyte.kobweb.core.App
import com.varabyte.kobweb.core.rememberPageContext
import com.varabyte.kobweb.silk.SilkApp
import com.varabyte.kobweb.silk.components.layout.Surface
import com.varabyte.kobweb.silk.style.common.SmoothColorStyle
import com.varabyte.kobweb.silk.style.toModifier
import dev.gitlive.firebase.FirebaseApp
import dev.gitlive.firebase.FirebaseOptions
import dev.gitlive.firebase.analytics.analytics
import dev.gitlive.firebase.analytics.logEvent
import dev.gitlive.firebase.app
import dev.gitlive.firebase.initialize
import dev.gitlive.firebase.installations.installations
import dev.gitlive.firebase.js
import org.jetbrains.compose.web.css.*
import org.akilincarslan.ahrarwood.firebase.FirebaseConfig

@App
@Composable
fun AppEntry(content: @Composable () -> Unit) {
    LaunchedEffect(Unit) {
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
    
    SilkApp {
        Surface(SmoothColorStyle.toModifier().minHeight(100.vh)) {
            content()
        }
    }
}
