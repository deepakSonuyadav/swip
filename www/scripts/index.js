// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkID=397704
// To debug code on page load in cordova-simulate or on Android devices/emulators: launch your app, set breakpoints, 
// and then run "window.location.reload()" in the JavaScript Console.
(function () {
    "use strict";

    if ($.isWin)
    {
        document.getElementById("them").setAttribute('href','./css/chui-win-3.9.2.css');
    }
    else if ($.isAndroid)
    {
        document.getElementById("them").setAttribute('href', './css/chui-android-3.9.2.css');
    }
    else if($.isiOsS)
    { 
            document.getElementById("them").setAttribute('href', './css/chui-ios-3.9.2.css');
        }
   else
    {
        document.getElementById("them").setAttribute('href', './css/chui-win-3.9.2.css');

    }




    document.addEventListener( 'deviceready', onDeviceReady.bind( this ), false );

    function onDeviceReady() {
        // Handle the Cordova pause and resume events
        document.addEventListener( 'pause', onPause.bind( this ), false );
        document.addEventListener( 'resume', onResume.bind( this ), false );
        
        // TODO: Cordova has been loaded. Perform any initialization that requires Cordova here.
        var parentElement = document.getElementById('deviceready');
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');
        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');


        $('#photo1').on('swipleft', function (e)
        {

            alert("a");

            $.UIGoToArticle("#photo2");


        });


        $('#photo2').on('swipleft', function (e) {

            $.UIGoToArticle("#photo3");


        });

        $('#photo2').on('swipright', function (e) {

            $.UIGoToArticle("#photo1");


        });
        $('#photo3').on('swipleft', function (e) {

            $.UIGoToArticle("#photo4");


        });

        $('#photo3').on('swipright', function (e) {
            alert("a");

            $.UIGoToArticle("#photo2");


        });


       

        $('#photo4').on('swipright', function (e) {

            $.UIGoToArticle("#photo3");


        });







    };

    function onPause() {
        // TODO: This application has been suspended. Save application state here.
    };

    function onResume() {
        // TODO: This application has been reactivated. Restore application state here.
    };
} )();