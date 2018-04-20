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
            $(".mainBody").push(dogImage);
            $(this).html("Doggo Activate");
        }); 
    });
});