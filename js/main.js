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
  $("#d-start").hover(function () {
    $(".tooltip-top").css({
      borderColor: "transparent transparent #204267 transparent"
    });
  }, function(){
      $(".tooltip-top").css({
        borderColor: "transparent transparent #fff transparent"
      });
    }
  );
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
  $("#nl2").hover(function () {
      $("#drop1").show();
    }, function(){
      $("#drop1").hide();
    }
  );
  $("#nl3").hover(function () {
    $("#drop2").show();
  }, function(){
    $("#drop2").hide();
  }
  );
  $("#hl2").hover(function () {
    $("#h-drop1").show();
  }, function(){
    $("#h-drop1").hide();
  }
);
$("#hl3").hover(function () {
  $("#h-drop2").show();
}, function(){
  $("#h-drop2").hide();
}
);
  
});
