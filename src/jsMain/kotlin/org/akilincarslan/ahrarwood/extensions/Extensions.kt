package org.akilincarslan.ahrarwood.extensions

import com.varabyte.kobweb.silk.style.breakpoint.Breakpoint

fun Breakpoint.isMobileCompatible() : Boolean {
    return this < Breakpoint.MD
}