$('#toggle').click(function() {
    $(this).toggleClass('active');
    $('#overlay').toggleClass('open');
  });
  $('.overlay-menu a').click(function() {
    $('.button_container').toggleClass('active');
    $('#overlay').toggleClass('open');
    return false;
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