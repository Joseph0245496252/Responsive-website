 
 jQuery(document).ready(function(){

    "user strick"
    $('.slider').ripples({
        dropRadius: 10,
        perturbance: 0.01,
        
      });

      $(".text").typed({
          strings:["<strong>i love </strong> <strong class='primary'>coding.</strong>", 
          "<strong>and to </strong><strong class='primary'>share !!.</strong>"],
          typespeed: 0,
          loop: true
      });
      
      $('.work').magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image',
        gallery: {
        enabled: true
          }
      });
              
 });