@file:JsModule("three/examples/jsm/loaders/GLTFLoader")
@file:JsNonModule

package org.akilincarslan.ahrarwood.base.threemodel

external class GLTFLoader {
    fun load(
        url: String,
        onLoad: (gltf: GLTF) -> Unit,
        onProgress: ((dynamic) -> Unit)? = definedExternally,
        onError: ((dynamic) -> Unit)? = definedExternally
    )
}

external interface GLTF {
    val scenes: Array<Scene>
    val scene: Scene
    val assets: dynamic
}
