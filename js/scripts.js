$(document).ready(function(){
  $("#card1").click(function(){
    if(this.id === "card1"){
      $(".info").hide();
      $("#hippo").show();
    }
  })
  $("#card2").click(function(){
    if(this.id === "card2"){
      $(".info").hide();
      $("#turtle").show();
    }
  })
  $("#card3").click(function(){
    if(this.id === "card3"){
      $(".info").hide();
      $("#hedgehog").show();
    }
  })
})
