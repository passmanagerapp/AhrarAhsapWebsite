package org.akilincarslan.ahrarwood.utils

import kotlinx.browser.window

object Utils {

    fun isBrowserLanguageEn() : Boolean {
       return window.navigator.language.substringBefore("-") == "en"
    }
}