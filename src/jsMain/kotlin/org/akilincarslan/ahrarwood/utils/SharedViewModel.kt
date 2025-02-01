package org.akilincarslan.ahrarwood.utils

import androidx.compose.runtime.*
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.StateFlow
import org.akilincarslan.ahrarwood.models.BookListModel
import org.akilincarslan.ahrarwood.network.model.Doc

object SharedViewModel {
    private val _bookItems = MutableStateFlow< Pair<String,List<BookListModel>>>(Pair("",emptyList()))
    val bookItems: StateFlow<Pair<String,List<BookListModel>>> = _bookItems

    fun setItems(newItems: Pair<String,List<BookListModel>>) {
        _bookItems.value = newItems
    }
}
