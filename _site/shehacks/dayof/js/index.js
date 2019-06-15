
$.getScript('https://code.jquery.com/jquery-3.2.1.min.js', function() {
    //script is loaded and executed put your dependent JS here
});

$.getScript('js/materialize.min.js', function() {
    //script is loaded and executed put your dependent JS here
});

$( document ).ready(function(){$(".button-collapse").sideNav();})

// <script type="text/javascript">
//
//   enquire.register("screen and (max-width: 599px)", {
//       match : function() {
//           // Load a JS file
//           loadJS('js/index.js');
//       }
//   }).listen();
//
// </script>
