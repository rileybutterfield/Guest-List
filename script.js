var guests = [];
var plus = [];

$(".addButton").click(function() {
    var newGuest = $(".guestName").val();
    guests.push(newGuest);
    
    $(".guestNames").html("");
    
    guests.forEach(function(name) {
    $(".guestNames").append("<li>" + name + "</li>");
    });
    
    var plusOne = $(".plusOne").val();
    plus.push(plusOne);
    console.log(plusOne);
    $(".plusOnes").html("");
    
    plus.forEach(function(answer) {
    $(".plusOnes").append("<li>" + answer + "</li>");
    });
});
