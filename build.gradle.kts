import com.varabyte.kobweb.gradle.application.util.configAsKobwebApplication
import kotlinx.html.link

plugins {
    alias(libs.plugins.kotlin.multiplatform)
    alias(libs.plugins.compose.compiler)
    alias(libs.plugins.kobweb.application)
    alias(libs.plugins.kobwebx.markdown)
    alias(libs.plugins.libres)
}

group = "org.akilincarslan.ahrarwood"
version = "1.0-SNAPSHOT"

kobweb {
    app {
        index {
            description.set("AhrarWood is a book stand producer company that has shipping service to USA, Canada, EU countries, UK. Gift for readers, book lover gift, book stands, book holder, gift for book lovers, book house, nightstand book holder")
            head.add {
                link(rel = "stylesheet", href = "/fonts/faces.css")
            }
        }
    }
}

kotlin {
    configAsKobwebApplication("ahrarwood", includeServer = true)
    js(IR) {
        browser()
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
