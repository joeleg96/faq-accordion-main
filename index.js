$(".icon").on("click", function(event){
    var questionID = event.target.id;
    console.log(questionID);
    switch (questionID) {
        case "one-plus":
            $("#" +"one-plus").toggle(".hide");
            $("#" +"one-minus").toggle(".hide");
            $("#" +"one-p").toggle(".hide");
        break;

        case "one-minus":
            $("#" +"one-plus").toggle(".hide");
            $("#" +"one-minus").toggle(".hide");
            $("#" +"one-p").toggle(".hide");
        break;

        case "two-plus":
            $("#" +"two-plus").toggle(".hide");
            $("#" +"two-minus").toggle(".hide");
            $("#" +"two-p").toggle(".hide");
        break;

        case "two-minus":
            $("#" +"two-plus").toggle(".hide");
            $("#" +"two-minus").toggle(".hide");
            $("#" +"two-p").toggle(".hide");
        break;

        case "three-plus":
            $("#" +"three-plus").toggle(".hide");
            $("#" +"three-minus").toggle(".hide");
            $("#" +"three-p").toggle(".hide");
        break;

        case "three-minus":
            $("#" +"three-plus").toggle(".hide");
            $("#" +"three-minus").toggle(".hide");
            $("#" +"three-p").toggle(".hide");
        break;

        case "four-plus":
            $("#" +"four-plus").toggle(".hide");
            $("#" +"four-minus").toggle(".hide");
            $("#" +"four-p").toggle(".hide");
        break;

        case "four-minus":
            $("#" +"four-plus").toggle(".hide");
            $("#" +"four-minus").toggle(".hide");
            $("#" +"four-p").toggle(".hide");
        break;
    
        default:
            console.log(questionID);
            break;
    }
})

$("h2").on("click", function(event) {
    var questionID = event.target.id;

    switch (questionID) {
        case "question-one":
            $("#" +"one-plus").toggle(".hide");
            $("#" +"one-minus").toggle(".hide");
            $("#" +"one-p").toggle(".hide");
        break;

        case "question-two":
            $("#" +"two-plus").toggle(".hide");
            $("#" +"two-minus").toggle(".hide");
            $("#" +"two-p").toggle(".hide");
        break;

        case "question-three":
            $("#" +"three-plus").toggle(".hide");
            $("#" +"three-minus").toggle(".hide");
            $("#" +"three-p").toggle(".hide");
        break;

        case "question-four":
            $("#" +"four-plus").toggle(".hide");
            $("#" +"four-minus").toggle(".hide");
            $("#" +"four-p").toggle(".hide");
        break;
    
        default:
            console.log(questionID);
            break;
    }
})
