package org.akilincarslan.ahrarwood.extensions

import com.varabyte.kobweb.silk.style.breakpoint.Breakpoint
import io.ktor.util.encodeBase64

fun Breakpoint.isMobileCompatible() : Boolean {
    return this < Breakpoint.MD
}

fun String.encodeToBase64(): String {
    // Use standard Base64 encoding with no padding
    return this.encodeToByteArray().encodeBase64()
        .replace("-", "+")  // Convert URL-safe chars back to standard Base64
        .replace("_", "/")  // Convert URL-safe chars back to standard Base64
}

fun executeDynamicJs(code: String) : String {
    val dynamicJs = js("eval")
    return dynamicJs(code)
}

fun execute3dViewJs(accessToken: String,modelUrn: String) {
    println("token is $accessToken urn is $modelUrn")
    val dynamicJs = js("eval")
    dynamicJs("""
    var options = {
        env: 'AutodeskProduction2',
        api: 'streamingV2',
        accessToken: '$accessToken'
    };
    
    var viewer;
    Autodesk.Viewing.Initializer(options, function() {
        viewer = new Autodesk.Viewing.GuiViewer3D(document.getElementById('cad-viewer'));
        var startedCode = viewer.start();
        if (startedCode > 0) { 
          console.error('Failed to create a Viewer: WebGL not supported.');
          return;
        }
        var documentId = 'urn:$modelUrn';
        
        // Check translation status before loading
        function checkTranslationStatus() {
            var xhr = new XMLHttpRequest();
            xhr.open('GET', 'https://developer.api.autodesk.com/modelderivative/v2/designdata/' + documentId.substring(4) + '/manifest', true);
            xhr.setRequestHeader('Authorization', 'Bearer ' + '$accessToken');
            
            xhr.onload = function() {
                var response = JSON.parse(xhr.responseText);
                if (response.status === 'complete') {  // Changed from 'success' to 'complete'
                    loadDocument();
                } else if (response.status === 'failed') {
                    console.error('Translation failed:', response.progress);
                } else if (response.status === 'pending' || response.status === 'inprogress') {
                    // Still processing, check again in 3 seconds
                    console.log('Translation in progress...');
                    setTimeout(checkTranslationStatus, 3000);
                } else {
                    console.error('Unknown translation status:', response.status);
                }
            };
            xhr.onerror = function() {
                console.error('Error checking translation status');
            };
            xhr.send();
        }

        function loadDocument() {
            console.log('Loading document...');
            Autodesk.Viewing.Document.load(documentId, 
                function(doc) {
                    console.log('Document loaded successfully');
                    var viewables = doc.getRoot().getDefaultGeometry();
                    if (!viewables) {
                        console.error('Document contains no viewables');
                        return;
                    }
                    viewer.loadDocumentNode(doc, viewables).then(
                        function() {
                            console.log('Model loaded successfully');
                        },
                        function(error) {
                            console.error('Error loading model:', error);
                        }
                    );
                },
                function(error) {
                    console.error('Error loading document:', error);
                }
            );
        }

        // Start checking translation status
        checkTranslationStatus();
    });
""")
}