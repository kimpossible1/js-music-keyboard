$(document).ready( function() {
  // $('.instrument').click( function() {
    // let audio = document.getElementById(`${$(this).html()}Audio`);

  $('.instrument').on('click', 'button', function(event) {
    let audio = document.getElementById(`${$(this).html()}Audio`);
    audio.play();
  });

  $('body').keydown((event) => {
    let keyInput = event.key;

    let audio =  document.getElementById(`${keyInput}Audio`);

    audio.play();
  });


});
