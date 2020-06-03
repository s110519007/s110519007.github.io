$(document).ready(function () {
  $(".ham").click(function () { 
    $(".side").fadeIn();
    $(".ham").hide();
  });
  $(".side .x").click(function () { 
    $(".side").fadeOut();
    $(".ham").toggle();
  });
  $(".btn-x").click(function () { 
    $(".rank-wrap").hide();
  });
  $(".d-start").hover(function () {
    $(".tooltip-top").css({
      borderColor: "transparent transparent #204267 transparent"
    });
  }, function(){
      $(".tooltip-top").css({
        borderColor: "transparent transparent #fff transparent"
      });
    }
  );
  $(".nav2").hover(function () {
      $(".drop1").fadeIn();
    }, function(){
      $(".drop1").fadeOut();
    }
  );
  $(".nav3").hover(function () {
      $(".drop2").fadeIn();
    }, function(){
      $(".drop2").fadeOut();
    }
  );
});
