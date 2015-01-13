/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
		document.getElementById('startCameraButton').addEventListener('mousedown', this.onStartCamera, false);
		document.getElementById('stopCameraButton').addEventListener('mousedown', this.onStopCamera, false);
		document.getElementById('takePictureButton').addEventListener('mousedown', this.onTakePicture, false);
		document.getElementById('switchCameraButton').addEventListener('mousedown', this.onSwitchCamera, false);
		document.getElementById('showButton').addEventListener('mousedown', this.onShow, false);
		document.getElementById('hideButton').addEventListener('mousedown', this.onHide, false);
    },
	onStartCamera: function() {
        cordova.plugins.camerapreview.startCamera({x: 100, y: 100, width: 300, height:300}, "front");
    },
	onStopCamera: function() {
        cordova.plugins.camerapreview.stopCamera();
    },
	onTakePicture: function() {
        cordova.plugins.camerapreview.takePicture(function onPictureTaken(result, previewPicturePath){
			document.getElementById('originalPicture').src = result[0];//originalPicturePath;
			document.getElementById('previewPicture').src = result[1];//previewPicturePath;
		});
    },
	onSwitchCamera: function() {
        cordova.plugins.camerapreview.switchCamera();
    },
	onShow: function() {
        cordova.plugins.camerapreview.show();
    },
	onHide: function() {
        cordova.plugins.camerapreview.hide();
    },
	
    // deviceready Event Handler   
    onDeviceReady: function() {	
       
    }
};

app.initialize();