  $.each(hotels, function (i, item) {
    $('#hotel-choices').append($('<option>', {
        value: item.place.location,
        text : item.name
    }
  ).data("hotel", item));
});


$.each(restaurants, function (i, item) {
    $('#restaurant-choices').append($('<option>', {
      value: item.place.location,
      text: item.name
    }
  ).data("restaurant", item));
});

$.each(activities, function (i, item) {
    $('#activity-choices').append($('<option>', {
      value: item.place.location,
      text: item.name
    }
  ).data("activities", item));
});

$("#hotel-choices").siblings("button").on('click', function(event){
    let $hotel = $("#hotel-choices").children(":selected");
    let hot = $hotel.data().hotel;
    $(".hotel-group > li").replaceWith('<li>'+hot.name+'</li>');
    drawMarker('hotel', hot.place.location, hot.name);
  })


$("#restaurant-choices").siblings("button").on('click', function(event){
  console.log($(".restaurant-group").children().length);
  let $rest = $("#restaurant-choices").children(":selected");
  let rest = $rest.data().restaurant;
  $(".restaurant-group > li").replaceWith('<li>'+rest.name+'</li>');
  if ($(".restaurant-group").children().length >= 3){
    alert("do you REALLY need another restaurant?");
    return
  }
  $(".restaurant-group").append(
    '<div class="itinerary-item"><li>'+rest.name+' <button class="btn btn-xs btn-danger remove btn-circle">x</button></li>'
  );
    drawMarker('restaurant', rest.place.location, rest.name);
})



$("#activity-choices").siblings("button").on('click', function(event){
  let $act = $("#activity-choices").children(":selected");
  let act = $act.data().activities;
  $(".activity-group > li").replaceWith('<li>'+act.name+'</li>');
    drawMarker('activity', act.place.location, act.name);
  $(".activity-group").append(
    '<div class="itinerary-item"><li>'+act.name+' <button class="btn btn-xs btn-danger remove btn-circle">x</button></li>'
  );
  console.log($("#activity-choices").children(":selected").html());
})

console.log($('.activity-group li button'));
$('.activity-group li button').on('click', function(event){
  console.log($('.activity-group li button'));

  eraseMarker();
})
