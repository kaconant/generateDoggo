$(function() {
    $(".mainButton").on("click", function() {
        $(this).html("Generating Doggo...");
        $.get("https://dog.ceo/api/breeds/image/random", function(data) {
            var renderDoggo = function() {
                var finalHTML = "";
                finalHTML += "<div class='card' style='width: 18rem;'>";
                finalHTML += "<img class='card-img-top dogCard' src='" + data.message + "'</div>";
                return finalHTML;
            };
            var dogImage = renderDoggo(data.message);
            $(".card-deck").append(dogImage);
            $(".mainButton").html("Doggo Activate!");
        }); 
    });
});


/*
adam's way:

$(function() {

    // page has loaded
    $.get("https://dog.ceo/api/breeds/list", function(response) {
        response.message.forEach(function(currentBreed) {
            $("select").append("<option val='" + currentBreed + "'>" + currentBreed + </option>");
            });
        });

    $("select").change(function() {
        var dogBreed = $(this).val();
        var url = "https://dog.ceo/api/breed/" + dogBreed + "/image/random";
        $.get(url, function(response) {
            $("body").append("<img src='" + response.message + ' />");
            )
        });
    });

    var dogImage = "";

    // notify 
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