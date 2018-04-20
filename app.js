$(function() {
    var renderDoggo = function() {
        var finalHTML = "";
        finalHTML += "<div class='card'>";
        finalHTML += "<img class='card-img-top' src='" + data.message + "'</div>";
        return finalHTML;
    };

    $(".mainButton").on("click", function() {
        $(this).html("Generating Doggo...");
        $.get("https://dog.ceo/api/breeds/image/random", function(data) {
            var image = data.message;
            var dogImage = renderDoggo(image);
            $(".mainBody").append(dogImage);
            $(this).html("Doggo Activate");
        }); 
    });
    
});