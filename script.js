$(function () {
  // j
  $("#p1").click(function () {
    $("#p5").hide();
  });

  $("#start").click(function () {
    $(".animate").animate(
      {
        left: "600px",
        opacity: "0.2",
        with: "+=150px",
        height: "+=150px",
      },
      5000
    );
  });
  $("#stop").click(function () {
    $(".animate").stop();
  });
});
