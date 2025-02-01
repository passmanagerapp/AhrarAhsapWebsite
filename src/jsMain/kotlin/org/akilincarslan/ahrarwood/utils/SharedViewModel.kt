package org.akilincarslan.ahrarwood.utils

import androidx.compose.runtime.*
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.StateFlow
import org.akilincarslan.ahrarwood.models.BookListModel
import org.akilincarslan.ahrarwood.network.model.Doc

object SharedViewModel {
    private val _bookItems = MutableStateFlow<List<BookListModel>>(emptyList())
    val bookItems: StateFlow<List<BookListModel>> = _bookItems

    fun setItems(newItems: List<BookListModel>) {
        _bookItems.value = newItems
    }
}
