import androidx.compose.runtime.CompositionLocalProvider
import com.varabyte.kobweb.core.AppGlobals
import com.varabyte.kobweb.navigation.BasePath
import com.varabyte.kobweb.navigation.Router
import com.varabyte.kobweb.navigation.UpdateHistoryMode
import com.varabyte.kobweb.navigation.remove
import com.varabyte.kobweb.silk.defer.DeferringHost
import kotlinx.browser.document
import kotlinx.browser.window
import org.jetbrains.compose.web.renderComposable

public fun main() {
    AppGlobals.initialize(mapOf("title" to "AhrarWood"))
    BasePath.set("")
    val router = Router()
    com.varabyte.kobweb.core.init.initKobweb(router) { ctx ->
        ctx.router.register("/") { org.akilincarslan.ahrarwood.pages.HomePage() }

    }
    router.addRouteInterceptor {
        path = path.removeSuffix(".html").removeSuffix(".htm")
    }

    com.varabyte.kobweb.silk.init.additionalSilkInitialization = { ctx ->
        com.varabyte.kobweb.silk.init.initSilkWidgets(ctx)
        com.varabyte.kobweb.silk.init.initSilkWidgetsKobweb(ctx)
    }

    router.tryRoutingTo(BasePath.remove(window.location.href.removePrefix(window.origin)),
            UpdateHistoryMode.REPLACE)

    // For SEO, we may bake the contents of a page in at build time. However, we will
    // overwrite them the first time we render this page with their composable, dynamic
    // versions. Think of this as poor man's hydration :)
    // See also: https://en.wikipedia.org/wiki/Hydration_(web_development)
    val root = document.getElementById("root")!!
    while (root.firstChild != null) { root.removeChild(root.firstChild!!) }

    renderComposable(rootElementId = "root") {
        org.akilincarslan.ahrarwood.AppEntry {
            router.renderActivePage { DeferringHost { it() } }
        }
    }
}
