package org.akilincarslan.ahrarwood.pages

import androidx.compose.runtime.Composable
import androidx.compose.runtime.DisposableEffect
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.rememberCoroutineScope
import com.varabyte.kobweb.compose.css.Cursor
import com.varabyte.kobweb.compose.css.FontWeight
import com.varabyte.kobweb.compose.css.height
import com.varabyte.kobweb.compose.foundation.layout.Arrangement
import com.varabyte.kobweb.compose.foundation.layout.Box
import com.varabyte.kobweb.compose.foundation.layout.Column
import com.varabyte.kobweb.compose.foundation.layout.Row
import com.varabyte.kobweb.compose.ui.Alignment
import com.varabyte.kobweb.compose.ui.Modifier
import com.varabyte.kobweb.compose.ui.graphics.Colors
import com.varabyte.kobweb.compose.ui.modifiers.backgroundColor
import com.varabyte.kobweb.compose.ui.modifiers.borderRadius
import com.varabyte.kobweb.compose.ui.modifiers.color
import com.varabyte.kobweb.compose.ui.modifiers.cursor
import com.varabyte.kobweb.compose.ui.modifiers.fillMaxSize
import com.varabyte.kobweb.compose.ui.modifiers.fillMaxWidth
import com.varabyte.kobweb.compose.ui.modifiers.fontSize
import com.varabyte.kobweb.compose.ui.modifiers.fontWeight
import com.varabyte.kobweb.compose.ui.modifiers.height
import com.varabyte.kobweb.compose.ui.modifiers.id
import com.varabyte.kobweb.compose.ui.modifiers.margin
import com.varabyte.kobweb.compose.ui.modifiers.onClick
import com.varabyte.kobweb.compose.ui.modifiers.onMouseLeave
import com.varabyte.kobweb.compose.ui.modifiers.onMouseOver
import com.varabyte.kobweb.compose.ui.modifiers.padding
import com.varabyte.kobweb.compose.ui.modifiers.size
import com.varabyte.kobweb.compose.ui.styleModifier
import com.varabyte.kobweb.compose.ui.toAttrs
import com.varabyte.kobweb.core.Page
import com.varabyte.kobweb.silk.components.text.SpanText
import com.varabyte.kobweb.silk.theme.breakpoint.rememberBreakpoint
import kotlinx.browser.document
import kotlinx.browser.window
import kotlinx.coroutines.launch
import org.akilincarslan.ahrarwood.base.Dialog
import org.akilincarslan.ahrarwood.base.HomeFooter
import org.akilincarslan.ahrarwood.base.HomeHeader
import org.akilincarslan.ahrarwood.base.ModelViewer3D
import org.akilincarslan.ahrarwood.base.SearchView
import org.akilincarslan.ahrarwood.constants.PageRoutes
import org.akilincarslan.ahrarwood.extensions.execute3dViewJs
import org.akilincarslan.ahrarwood.extensions.executeDynamicJs
import org.akilincarslan.ahrarwood.extensions.isMobileCompatible
import org.akilincarslan.ahrarwood.network.ApiService
import org.akilincarslan.ahrarwood.network.ForgeService
import org.akilincarslan.ahrarwood.network.model.SearchResult
import org.jetbrains.compose.web.css.percent
import org.jetbrains.compose.web.css.px
import org.jetbrains.compose.web.css.width
import org.jetbrains.compose.web.dom.Canvas
import org.jetbrains.compose.web.dom.Div
import org.jetbrains.compose.web.dom.Text
import org.w3c.dom.Element
import org.w3c.dom.HTMLCanvasElement
import org.w3c.dom.HTMLDivElement
import org.w3c.dom.HTMLElement



@Page
@Composable
fun CreateMiniatureLibraryPage(
    modifier: Modifier = Modifier
) {
    val breakpoint = rememberBreakpoint()
    val response = remember { mutableStateOf<SearchResult?>(null) }
    val errorMessage = remember { mutableStateOf("") }
    val scope = rememberCoroutineScope()
    var searchText = remember { mutableStateOf("") }
    var isSearchExpanded = remember { mutableStateOf(true) }
    val isHovered = remember { mutableStateOf(false) }
    var selectedBooks = remember { mutableStateOf(listOf<Pair<String, String>>()) }
    var isLoading = remember { mutableStateOf(false) }
    var isDialogOpen = remember { mutableStateOf(Triple<Boolean, String, String>(false,"","")) }
    var modelUrn = remember { mutableStateOf<String?>(null) }
    var accessToken = remember { mutableStateOf<String?>(null) }
    var cleanup: dynamic = remember { mutableStateOf(null) }
    var canvas = remember { mutableStateOf<HTMLDivElement?>(null) }

    Box(modifier = Modifier.fillMaxSize()) {

        HomeHeader(PageRoutes.CREATE_MINIATURE_LIBRARY,modifier)
        Box(modifier = modifier.fillMaxWidth()
            .height(76.percent)
            .align(Alignment.Center)) {
            Column(
                modifier = modifier
                    .fillMaxWidth()
                    .height(40.px)
                    .align(Alignment.TopCenter),
                horizontalAlignment = Alignment.CenterHorizontally
            ) {
                SpanText("Create your own library", modifier = modifier.fontSize(28.px).fontWeight(FontWeight.Bold))
                SpanText("Search your favorite author, add your books and let's us to create your mini library...", modifier = modifier.fontSize(14.px).fontWeight(
                    FontWeight.Normal))
                Row(modifier = modifier.fillMaxWidth()
                    .margin(leftRight = 36.px, top = 12.px),
                    horizontalArrangement = Arrangement.SpaceAround) {
                    Text("${selectedBooks.value.size}/60")
                    SearchView(
                        modifier = modifier,
                        scope = scope,
                        isSearchExpanded = isSearchExpanded.value,
                        searchText = searchText.value,
                        onSearchTextChange = {searchText.value =it},
                        onSearchExpanded = { isSearchExpanded.value = !isSearchExpanded.value},
                        onSubmit = { search ->
                            response.value = null
                            isLoading.value = true
                            scope.launch {
                                ApiService.fetchBooks(author = search)
                                    .onSuccess { result ->
                                        isLoading.value = false
                                        response.value = result.data
                                    }
                                    .onFailure {
                                        isLoading.value = false
                                        errorMessage.value = it.message ?: ""
                                    }
                            }
                        }
                    )
                }
            }
            Box(
                modifier = modifier
                    .fillMaxWidth()
                    .align(Alignment.Center),
                contentAlignment = Alignment.Center
            ) {
                /*Column(
                    modifier = modifier.fillMaxWidth(70.percent)
                        .height(240.px)
                ) {
                    Row(
                        modifier = modifier.fillMaxWidth()
                            .height(80.px)
                    ) {
                        for (index in 1..20) {
                            key(index) {
                                BookRectangleVertical(
                                    selectedBooks.value.size >= index,
                                    onClick = {
                                        if (selectedBooks.value.size >= index){
                                            val clickedIsbn = selectedBooks.value.get(index -1).first
                                            val title = selectedBooks.value.get(index -1).second
                                            val coverUrl = "https://covers.openlibrary.org/b/isbn/$clickedIsbn-L.jpg"
                                            isDialogOpen.value = Triple(true,title, coverUrl)
                                        }
                                    }
                                )
                            }
                        }
                    }
                    Row(
                        modifier = modifier.fillMaxWidth()
                            .height(80.px)
                    ) {
                        for (index in 1..20) {
                            key(index) {
                                BookRectangleVertical(
                                    selectedBooks.value.size  >= index + 20,
                                    onClick = {
                                        if (selectedBooks.value.size >= index + 20){
                                            val clickedIsbn = selectedBooks.value.get(index -1 + 20).first
                                            val title = selectedBooks.value.get(index -1 + 20).second
                                            val coverUrl = "https://covers.openlibrary.org/b/isbn/$clickedIsbn-L.jpg"
                                            isDialogOpen.value = Triple(true,title, coverUrl)
                                            //window.open("https://covers.openlibrary.org/b/isbn/$clickedIsbn-L.jpg", target = "_blank")
                                        }
                                    }
                                )
                            }
                        }
                    }
                    Row(
                        modifier = modifier.fillMaxWidth()
                            .height(80.px)
                    ) {
                        for (index in 1..20) {
                            key(index) {
                                BookRectangleVertical(
                                    selectedBooks.value.size >= index + 40,
                                    onClick = {
                                        if (selectedBooks.value.size >= index + 40){
                                            val clickedIsbn = selectedBooks.value.get(index -1 + 40).first
                                            val title = selectedBooks.value.get(index -1 + 40).second
                                            val coverUrl = "https://covers.openlibrary.org/b/isbn/$clickedIsbn-L.jpg"
                                            isDialogOpen.value = Triple(true,title, coverUrl)
                                        }
                                    }
                                )
                            }
                        }
                    }
                }
                response.value?.let {
                    Box(
                        modifier = modifier
                            .fillMaxWidth(30.percent)
                            .maxHeight(320.px)
                            .overflow(Overflow.Auto)
                            .scrollBehavior(ScrollBehavior.Smooth)
                            .align(Alignment.TopEnd),
                    ) {
                        Column(
                            modifier = Modifier
                                .gap(16.px)
                                .padding(all = 16.px)
                        ) {

                            it.docs.forEach { doc ->
                                val isbn = if (doc.isbn.isNullOrEmpty()) doc.title else doc.isbn.first()
                                key(isbn) {
                                    Row(
                                        modifier = Modifier
                                            .styleModifier {
                                                property("transition", "all 0.3s ease")
                                                property("box-shadow", "0 4px 8px rgba(0, 0, 0, 0.1)")
                                                property("transform", "scale(1)")
                                            }
                                            .cursor(Cursor.Pointer)
                                            .fillMaxWidth()
                                            .padding(16.px)
                                            .backgroundColor(Colors.White)
                                            .borderRadius(8.px)
                                            .boxShadow(0.px, 2.px, 4.px,null, rgba(0, 0, 0, 0.1))
                                            .onMouseOver {
                                                isHovered.value = true
                                                (it.target as? HTMLElement)?.style?.apply {
                                                    transform = "scale(1.05)"
                                                    // boxShadow = "0 6px 12px rgba(0, 0, 0, 0.15)"
                                                }
                                            }
                                            .onMouseLeave {
                                                isHovered.value = false
                                                (it.target as? HTMLElement)?.style?.apply {
                                                    transform = "scale(1)"
                                                    // boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)"
                                                }
                                            }
                                            .onClick {
                                                if (!doc.isbn.isNullOrEmpty()) {
                                                    if (selectedBooks.value.isNotEmpty() && selectedBooks.value.map { it.first }.contains(doc.isbn.first())) {
                                                        selectedBooks.value = selectedBooks.value - Pair(doc.isbn.first(),doc.title)
                                                        return@onClick
                                                    }
                                                    if (!doc.isbn.isEmpty())
                                                        selectedBooks.value = selectedBooks.value + Pair(doc.isbn.first(),doc.title)
                                                    println("added covert to list ${selectedBooks}")
                                                }
                                                else
                                                    println("Can't add to favorite list , book don't have any isbn")
                                            },

                                        ) {
                                        if (selectedBooks.value.isNotEmpty() && selectedBooks.value.map { it.first }.contains(if (doc.isbn.isNullOrEmpty()) "" else doc.isbn.first()))
                                            FaCircleMinus()
                                        else
                                            FaCirclePlus()
                                        val publisher = if (doc.publisher.isNullOrEmpty()) "-" else doc.publisher.first()
                                        val publishYear = if (doc.publishYear.isNullOrEmpty()) "-" else doc.publishYear.first()
                                        Column {
                                            SpanText(
                                                text = doc.title,
                                                modifier = Modifier
                                                    .fontSize(16.px)
                                                    .margin(left = 16.px)
                                            )
                                            SpanText(
                                                text = "${publisher},$publishYear",
                                                modifier = Modifier
                                                    .fontSize(12.px)
                                                    .margin(left = 16.px)
                                            )
                                        }

                                    }
                                }

                            }
                        }
                    }
                }
                    ?: run {
                        if (isLoading.value)
                            Box(
                                modifier = Modifier.fillMaxWidth().height(50.px)
                                    .align(Alignment.CenterEnd),
                                contentAlignment = Alignment.Center
                            ) {
                                FaSpinner(
                                    modifier = modifier.styleModifier {
                                        property("animation", "fa-spin 1s infinite linear")
                                    }
                                )
                            }
                    }*/
/*                LaunchedEffect(Unit) {
                    scope.launch {
                        try {
                            modelUrn.value = ForgeService().getModelUrn("/raw/sample1.dwg")
                            accessToken.value = ForgeService().getAccessToken()
                            println("modelUrn is ${modelUrn.value}")
                        } catch (e: Exception) {
                            console.error("Error getting model URN: ${e.message}")
                        }
                    }
                }
                if (modelUrn.value != null && accessToken.value != null)  {
                    Box(
                        modifier = Modifier
                            .id("cad-viewer")
                            .fillMaxWidth()
                            .height(600.px)
                    ) {
                        DisposableEffect(modelUrn.value) {
                            execute3dViewJs(accessToken.value!!,modelUrn.value!!)
                            onDispose {  }
                        }
                    }
                }*/
                ModelViewer3D("/raw/sample1.obj")
            }

            Box(
                modifier = Modifier
                    .backgroundColor(Colors.White)
                    .padding(topBottom = 12.px, leftRight = 24.px)
                    .borderRadius(25.px)
                    .cursor(Cursor.Pointer)
                    .align(Alignment.BottomCenter)
                    // Hover effect
                    .styleModifier {
                        property("transition", "all 0.3s ease")
                        property("box-shadow", "0 4px 8px rgba(0, 0, 0, 0.1)")
                        property("transform", "scale(1)")
                    }
                    .onClick {
                    }
                    // Hover states
                    .onMouseOver {
                        (it.target as? HTMLElement)?.style?.apply {
                            transform = "scale(1.05)"
                            boxShadow = "0 6px 12px rgba(0, 0, 0, 0.15)"
                        }
                    }
                    .onMouseLeave {
                        (it.target as? HTMLElement)?.style?.apply {
                            transform = "scale(1)"
                            boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)"
                        }
                    }
            ) {
                SpanText(
                    text = "Create now!",
                    modifier = Modifier
                        .color(Colors.SaddleBrown)
                        .fontSize(if (!breakpoint.isMobileCompatible()) 18.px else 12.px)
                        .styleModifier {
                            property("font-weight", "600")
                        }
                )
            }

        }

        Box(
            modifier = modifier
                .align(Alignment.BottomCenter)
                .fillMaxWidth()
        ) {
            HomeFooter(breakpoint,modifier)
        }

        if (isDialogOpen.value.first) {
            Dialog(
                isOpen = isDialogOpen.value.first,
                onClose = {isDialogOpen.value = Triple(false,"","")},
                title = isDialogOpen.value.second,
                coverUrl = isDialogOpen.value.third
            )
        }
    }

}

