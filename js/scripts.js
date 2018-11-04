$(function() {
    $(".click").click(function(){
        var submission = $(".input-field").val();
        $(".response-body").text(submission);
    })
});
