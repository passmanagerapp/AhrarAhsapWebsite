package org.akilincarslan.ahrarwood.firebase

import dev.gitlive.firebase.Firebase
import dev.gitlive.firebase.analytics.analytics

object Analytics {

    fun logEvent(name: String) {
        val fb = Firebase
        fb.analytics.logEvent(name)
    }
}

