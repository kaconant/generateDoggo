$(function() {
    
    var renderDoggo = function(data) {
        var finalHTML = "";
        finalHTML += "<div class='card' style='min-width:200px; max-width:200px'>";
        finalHTML += "<img class='card-img-top dogCard' src='" + data.message + "'</div>";
        return finalHTML;
    };
    
    $.get("https://dog.ceo/api/breeds/list", function(response) {
        response.message.forEach(function(currentBreed) {
            $("select").append("<option val='" + currentBreed + "'>" + currentBreed + "</option>");
            });
        });

    /* var dogMessage = $("select").change(function() {
        var dogBreed = $(this).val();
        var url = "https://dog.ceo/api/breed/" + dogBreed + "/images/random";
            $.get(url, function(data) {
            var dogImage = renderDoggo(data);
            $(".card-deck").append(dogImage);
        });
    });
    */
    
    $(".mainButton").on("click", function() {
        $(this).html("Generating Doggo...");
        var dogBreed = $("select").val();
        $.get("https://dog.ceo/api/breed/" + dogBreed + "/images/random", function(data) {
            $(".mainButton").html("Doggo Activate!");
            var dogImage = renderDoggo(data);
            $(".card-deck").append(dogImage);
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