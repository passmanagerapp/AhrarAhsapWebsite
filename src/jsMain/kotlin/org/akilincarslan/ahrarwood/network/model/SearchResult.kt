package org.akilincarslan.ahrarwood.network.model

import kotlinx.serialization.SerialName
import kotlinx.serialization.Serializable

@Serializable
data class SearchResult(
    val docs: List<Doc>
)

@Serializable
data class Doc(
    val author_name : List<String>,
    val title: String,
    @SerialName("isbn") val isbn: List<String>? = emptyList(),
    @SerialName("publisher") val publisher: List<String>? = emptyList(),
    @SerialName("publish_year") val publishYear: List<Int>? = emptyList()
)