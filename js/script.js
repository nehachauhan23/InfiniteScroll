// Infinite scroll
function yAxis() {
  var wrapper = document.getElementById('gallery-content');
  var gallery = document.getElementById('gallery-row');
  var content_h = wrapper.offsetHeight;
  var y_offset = window.pageYOffset;
  var y = y_offset + window.innerHeight;
  var html = `<div class="card-columns" id="gallery-content"><div class="card"> <img class="card-img-top" src="images/1.jpg" alt="Image Gallery "> <div class="card-body"> <h5 class="card-title">Lorem ipsum dolor sit amet</h5> <p class="card-text">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p></div></div><div class="card"> <img class="card-img-top" src="images/2.jpg" alt=""> <div class="card-body"> <h5 class="card-title">Lorem ipsum dolor sit amet</h5> <p class="card-text">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p></div></div><div class="card"> <img class="card-img-top" src="images/3.jpg" alt=""> <div class="card-body"> <h5 class="card-title">Lorem ipsum dolor sit amet</h5> <p class="card-text">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p></div></div><div class="card"> <img class="card-img-top" src="images/4.jpg" alt=""> <div class="card-body"> <h5 class="card-title">Lorem ipsum dolor sit amet</h5> <p class="card-text">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p></div></div><div class="card"> <img class="card-img-top" src="images/5.jpg" alt=""> <div class="card-body"> <h5 class="card-title">Lorem ipsum dolor sit amet</h5> <p class="card-text">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p></div></div><div class="card"> <img class="card-img-top" src="images/6.jpg" alt=""> <div class="card-body"> <h5 class="card-title">Lorem ipsum dolor sit amet</h5> <p class="card-text">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p></div></div><div class="card"> <img class="card-img-top" src="images/7.jpg" alt=""> <div class="card-body"> <h5 class="card-title">Lorem ipsum dolor sit amet</h5> <p class="card-text">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p></div></div><div class="card"> <img class="card-img-top" src="images/8.jpg" alt=""> <div class="card-body"> <h5 class="card-title">Lorem ipsum dolor sit amet</h5> <p class="card-text">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p></div></div><div class="card"> <img class="card-img-top" src="images/9.jpg" alt=""> <div class="card-body"> <h5 class="card-title">Lorem ipsum dolor sit amet</h5> <p class="card-text">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p></div></div></div>`;
  if( y >= content_h ){
    gallery.innerHTML += html;
  }
}
window.onscroll = yAxis;
// Infinite scroll ends here

// Preview
$('#myModal').on('shown.bs.modal', function () {
  $('body').css('overflow', 'hidden');
});

function showImage() {

}
function nextImage(){

}
$('a.next').click(function(){
  console.log("HELLO"+this);
  nextImage(1);
});
$('.prev').click(function(){
  nextImage(-1);
});

$(document).ready(function(){
  var clicked_img;
  $('.card-img-top').click(function(){
    var $this = $(this);
    clicked_img  = $this;
    var img = $this.attr('src');
    var title = $this.siblings('.card-body').find('.card-title').text();
    var desc = $this.siblings('.card-body').find('.card-text').text();
    $('#img-title').text(title);
    $('#img-desc').text(desc);
    $('#modal-img').attr('src',img);
    $('#myModal').modal('show');
  });
  $('a.next').click(function(){
      next(clicked_img,1);
  });
  $('a.prev').click(function(){
      next(clicked_img,0);
  });
  function next(current,forward){
    if(forward)
      var next = current.parent().next();
    else
      var next = current.parent().prev();

    var img = next.find('.card-img-top').attr('src');
    var title = next.find('.card-body > .card-title').text();
    var desc = next.find('.card-body > .card-text').text();
    $('#img-title').text(title);
    $('#img-desc').text(desc);
    $('#modal-img').attr('src',img);

    clicked_img = next.find('.card-img-top');
    console.log(clicked_img.attr('src'));
  }
});

// Preview ends here
