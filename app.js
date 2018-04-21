$(function() {
    var renderDoggo = function() {
        var finalHTML = "";
        finalHTML += "<div class='card' style='width: 18rem;'>";
        finalHTML += "<img class='card-img-top' src='" + data.message + "'</div>";
        return finalHTML;
    };

    $(".mainButton").on("click", function() {
        $(this).html("Generating Doggo...");
        $.get("https://dog.ceo/api/breeds/image/random", function(data) {
            var dogImage = renderDoggo(data.message);
            $(".card-deck").append(dogImage);
            $(".mainButton").html("Doggo Activate!");
        }); 
    });
});


/*
adam's way:

$(function() {

    var dogImage = "";

    $(".mainButton").click(function() {
        $.get("https://dog.ceo/api/breeds/image/random", function(response) {
            dogImage = response.message;
            $(".mainButton").text("generate doggo")
            $("body").append("<img src='" + response.message + ' />");
        // bind allows you to hijack the this referenced and replace where the ** is
        }.bind(**)); 
    });
});

*/