// + function($) {
//     'use strict';

//     // UPLOAD CLASS DEFINITION
//     // ======================

//     $('progress').hide();
//     var dropZone = document.getElementById('drop-zone');
//     var uploadForm = document.getElementById('js-upload-form');
//     var uploadText = document.getElementById('js-upload-files');

//     uploadForm.onchange = function () {
//         var textVal = '';
//         for (var i=0; i<this[0]["files"].length; i++) {
//             textVal += this[0]["files"][i].name + ";";
//         }
//         uploadText.value = textVal;
//         alert(textVal);
//     };

//     var startUpload = function(files) {
//         console.log("start");
//         $.ajax({
//             // Your server script to process the upload
//             url: '/data',
//             type: 'POST',
    
//             // Form data
//             data: files,
    
//             // Tell jQuery not to process data or worry about content-type
//             // You *must* include these options!
//             cache: false,
//             contentType: false,
//             processData: false,
    
//             // Custom XMLHttpRequest
//             xhr: function() {
//                 var myXhr = $.ajaxSettings.xhr();
//                 if (myXhr.upload) {
//                     // For handling the progress of the upload
//                     myXhr.upload.addEventListener('progress', function(e) {
//                         if (e.lengthComputable) {
//                             $('progress').show();
//                             $('progress').attr({
//                                 value: e.loaded,
//                                 max: e.total,
//                             });
//                         }
//                     } , false);
//                 }
//                 return myXhr;
//             }
//         });
//     }

//     uploadForm.addEventListener('submit', function(e) {
//         var uploadFiles = document.getElementById('js-upload-files').files;
//         e.preventDefault()
//         startUpload(uploadFiles)
//     })

//     dropZone.ondrop = function(e) {
//         e.preventDefault();
//         console.log("hello");
//         this.className = 'upload-drop-zone';

//         startUpload(e.dataTransfer.files)
//     }

//     dropZone.ondragover = function() {
//         this.className = 'upload-drop-zone drop';
//         return false;
//     }

//     dropZone.ondragleave = function() {
//         this.className = 'upload-drop-zone';
//         return false;
//     }

// }(jQuery);