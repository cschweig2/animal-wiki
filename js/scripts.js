$(document).ready(function(){
  $(".card").click(function(){
    if(this.id === "card1"){
      $(".info").hide();
      $("#hippo").show();
    } else if (this.id === "card2"){
      $(".info").hide();
      $("#turtle").show();
    } else {
      $(".info").hide();
      $("#hedgehog").show();
    }
  });
});
