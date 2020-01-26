$(document).ready(function () {
    $('#toggler1').popover({
        html: true,
        content: function () {
            return $('#customPopup1').html();
        }
    });
});

$(document).ready(function () {
    $('#toggler2').popover({
        html: true,
        content: function () {
            return $('#customPopup2').html();
        }
    });
});

$(document).ready(function () {
    $('#toggler3').popover({
        html: true,
        content: function () {
            return $('#customPopup3').html();
        }
    });
});