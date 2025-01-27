package org.akilincarslan.ahrarwood.base

import org.w3c.dom.HTMLElement
import kotlin.js.Promise

external class Scene {
    fun add(obj: Object3D)
    fun remove(obj: Object3D)
}

external class PerspectiveCamera(fov: Number, aspect: Number, near: Number, far: Number) {
    var position: Vector3
}

external class WebGLRenderer {
    fun setSize(width: Number, height: Number)
    fun render(scene: Scene, camera: PerspectiveCamera)
    fun domElement(): HTMLElement
}

external class Vector3(var x: Number, var y: Number, var z: Number)

open external class Object3D {
    var position: Vector3
    var rotation: Vector3
    var scale: Vector3
}

external class BoxGeometry(width: Number, height: Number, depth: Number)

external class MeshBasicMaterial(params: dynamic)

external class Mesh(geometry: BoxGeometry, material: MeshBasicMaterial) : Object3D