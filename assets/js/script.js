$(document).ready(function(){
  $("a").click(function(event){
    if (this.hash !== ""){
      event.preventdefault();

      var gato = this.hash;

      $("html, body").animate({
        scrolltop: $(gato).offset().top
      },800,function(){
        window.location.hash = gato;
      });
    }
  });

      $('[data-toggle="popover"]').popover()
});
