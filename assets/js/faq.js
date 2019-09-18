$(function () {
    $(".question").click(function () {
        $(".question").css("background-color", "white", "color", "black");
        $(this).css("background-color", "#808CFB", "color", "white");
    });
});
$(function () {
    $("#when").click(function () {
        $("#answerBubble").empty();
        $("#answerBubble").append("The application will be open in early November!");
    });
});
$(function () {
    $("#who").click(function () {
        $("#answerBubble").empty();
        $("#answerBubble").append("");
    });
});
$(function () {
    $("#packing").click(function () {
        $("#answerBubble").empty();
        $("#answerBubble").append("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat");
    });
});
$(function () {
    $("#codeOfConduct").click(function () {
        $("#answerBubble").empty();
        $("#answerBubble").append("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat");
    });
});