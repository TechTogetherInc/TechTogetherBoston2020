$(function () {
    $(".question").click(function () {
        $(".question").css("background-color", "white", "color", "black");
        $(this).css("background-color", "#808CFB", "color", "white");
    });
});
$(function () {
    $("#when").click(function () {
        $("#answerBubble").empty();
        $("#answerBubble").append("<p>The application will be open in early November!</p>");
    });
});
$(function () {
    $("#who").click(function () {
        $("#answerBubble").empty();
        $("#answerBubble").append("<p>We welcome female, trans, and non-binary individuals of all skill levels who have a passion for learning more about technology and are 16 years or older.</p>");
    });
});
$(function () {
    $("#travel").click(function () {
        $("#answerBubble").empty();
        $("#answerBubble").append("<p>A limited number of travel scholarships will be provided. More info will be included in our application!</p>");
    });
});
$(function () {
    $("#beginner").click(function () {
        $("#answerBubble").empty();
        $("#answerBubble").append("<p>We welcome beginners and experts alike! There will be plenty of workshops and mentors available to guide you throughout your 36-hour hacking journey, and you can also learn from other students! </p>  ");
    });
});