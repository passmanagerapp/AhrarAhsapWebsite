import com.varabyte.kobweb.gradle.application.util.configAsKobwebApplication
import kotlinx.html.link
import kotlinx.html.meta
import kotlinx.html.script
import org.jetbrains.kotlin.gradle.targets.js.webpack.KotlinWebpackConfig

plugins {
    alias(libs.plugins.kotlin.multiplatform)
    alias(libs.plugins.compose.compiler)
    alias(libs.plugins.kobweb.application)
    alias(libs.plugins.kobwebx.markdown)
    alias(libs.plugins.libres)
    kotlin("plugin.serialization") version "1.9.0"
}

group = "org.akilincarslan.ahrarwood"
version = "1.0-SNAPSHOT"

kobweb {
    app {
        index {
            description.set("El yapımı ahşap işçilik, kitap severlere ahşap hediye")
            head.add {
                link(rel = "stylesheet", href = "/fonts/faces.css")
                meta(name = "google-site-verification", content = "JzYhq_J3Dm6Fm9CrSeD0xCmuk0ZSU6kB2GvyuIBPHNI")
            }
        }
    }
}

kotlin {
    configAsKobwebApplication("ahrarwood", includeServer = true)
    js(IR) {
        useCommonJs()
        browser {
            commonWebpackConfig {
                cssSupport {
                    enabled.set(true)
                }
            }
        }
        binaries.executable()
    }
    sourceSets {
        commonMain.dependencies {
            implementation(libs.compose.runtime)
            implementation(libs.libres)
        }

        jsMain.dependencies {
            implementation(libs.compose.html.core)
            implementation(libs.kobweb.core)
            implementation(libs.kobweb.silk)
            implementation(libs.silk.icons.fa)
            implementation(libs.kobwebx.markdown)
            implementation(project(":worker"))
            implementation("dev.gitlive:firebase-installations:2.1.0")
            implementation("dev.gitlive:firebase-analytics:2.1.0")
            implementation("dev.gitlive:firebase-storage:2.1.0")
            implementation("io.ktor:ktor-client-core:3.0.3")
            implementation("io.ktor:ktor-client-js:3.0.3")
            implementation("io.ktor:ktor-client-logging:3.0.3")
            implementation("io.ktor:ktor-client-content-negotiation:3.0.3")
            implementation("io.ktor:ktor-serialization-kotlinx-json:3.0.3")
            implementation("org.jetbrains.kotlinx:kotlinx-serialization-json:1.5.1")
            implementation(npm("three", "0.172.0"))
            implementation(npm("jspdf", "2.5.1"))
        }

        jvmMain.dependencies {
            compileOnly(libs.kobweb.api)
        }
    }
}

libres {
    generatedClassName = "Res"
    generateNamedArguments = true
    baseLocaleLanguageCode = "en"
}
