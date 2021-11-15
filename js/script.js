
 $( ".open-close-btn" ).on('click touchstart', function(e){
    e.preventDefault();
    $(".overlay").toggleClass("overlay-open");
    $("#hamburger-icon").toggleClass("hamburger-open");
  });
  $(function() {
      $('body').addClass('js');
    
      var $hamburger = $('.hamburger'),
          $nav = $('#site-nav'),
          $masthead = $('#masthead');
    
      $hamburger.click(function() {
        $(this).toggleClass('is-active');
        $nav.toggleClass('is-active');
        $masthead.toggleClass('is-active');
        return false; 
      })
      window.onscroll = function() {scrollFunction()}; 
      /* fade effects */
      $("button").click(function(){
        $("#div1").fadeIn();
        $("#div2").fadeIn("slow");
        $("#div3").fadeIn(3000);
      });
  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.getElementById("hamburger-icon").style.display = "block";
    } else {
      document.getElementById("hamburger-icon").style.display = "none";
    }
  }
  });
  function scrollFunction() {
    if (document.body.scrollTop > -100 || document.documentElement.scrollTop > -100 || window.innerWidth < 768) {
      document.getElementById("hamburger-icon").style.display = "block";
    } else {
      document.getElementById("hamburger-icon").style.display = "block";
    }
  }
 /*konform svg */
  $(window).scroll(function() {
  
    if ($(this).scrollTop()>0)
     {
        $('#konform_svg').fadeOut();
     }
    else
     {
      $('#konform_svg').fadeIn();
     }
  });
  $(".hover").mouseleave(
    function () {
      $(this).removeClass("hover");
    }
  );
  /*scroll reveal */
  window.sr = new ScrollReveal()
  sr.reveal('.section-2-item-text-3 p',{
    delay:500,
    interval:1200,
    distance:"200px",
    duration: 1000,
    origin:"bottom"
  }
  );
  sr.reveal('.arrow-2',{
    delay:1000,
    interval:1200,
    duration: 1000,
    distance:"100px",
    origin:"bottom"
  }
  );
   sr.reveal('.arrow-2-link-text',{
    delay:1500,
    interval:1200,
    distance:"50px",
    duration: 1000,
    origin:"bottom"
  }
  );
  sr.reveal('.arrow-3',{
    delay:1500,
    interval:1200,
    distance:"40px",
    origin:"right"
  }
  );
  sr.reveal('.card-body',{
    delay:1500,
    interval:1100,
    distance:"15px",
    duration: 800,
    origin:"bottom"
  }
  );
  sr.reveal('#section-3-tittle',{
    delay:800,
    interval:800,
    duration: 1000,
    distance:"100px",
    origin:"bottom"
  }
  );
  sr.reveal('#section-3-text',{
    delay:800,
    interval:800,
    duration: 1000,
    distance:"130px",
    origin:"bottom"
  }
  );
  sr.reveal('.arrow-4',{
    delay:800,
    interval:800,
    duration: 1000,
    distance:"130px",
    origin:"left"
  }
  );
  sr.reveal('.section-5-tittle',{
    delay:800,
    interval:800,
    duration: 1000,
    distance:"30px",
    origin:"bottom"
  }
  );
  sr.reveal('.arrow-5',{
    delay:800,
    interval:800,
    duration: 1000,
    distance:"30px",
    origin:"right"
  }
  );
  /*contact form*/
  $( '.js-input' ).keyup(function() {
    if( $(this).val() ) {
       $(this).addClass('not-empty');
    } else {
       $(this).removeClass('not-empty');
    }
  });

  /*about*/
  sr.reveal('#about-item-text-2',{
    delay:500,
    interval:1200,
    distance:"200px",
    duration: 1000,
    origin:"bottom"
  }
  );