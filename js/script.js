$('#toggle').click(function() {
    $(this).toggleClass('active');
    $('#overlay').toggleClass('open');
  });
  $('.overlay-menu a').click(function() {
    $('.button_container').toggleClass('active');
    $('#overlay').toggleClass('open');
  });



//   ------------nav shadow--------------------

$(document).scroll(function () {
    var scroll = $(this).scrollTop();
    if (scroll > 50)
        $(".nav-bar").addClass("nav-shadow")
    else
        $(".nav-bar").removeClass("nav-shadow")
})

//   ------------nav shadow--------------------



// ------------------------services---------------------------

$(".ser-btn").click(function () {
  var accid = $(this).attr("aria-heading");
  if ($("#" + accid + " .accordion-button").hasClass("ser-btn-active")) {
    $("#" + accid + " .accordion-button").removeClass("ser-btn-active");
  } else {
    $(".accordion-button").removeClass("ser-btn-active");
    $("#" + accid)
      .find(".accordion-button")
      .addClass("ser-btn-active");
    $("html, body").animate(
      {
        scrollTop: $("#" + accid).offset().top,
      },
      500
    );
  }
});

$(".accordion-button").click(function () {
  var accid = $(this).attr("aria-id");
  $("#" + accid).click();
});


// ------------------------services---------------------------