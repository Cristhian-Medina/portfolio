// const menu = document.querySelector('.menu'),
//       burgerButton = document.querySelector('#burger-menu'),
//       screen = window.matchMedia('screen and (max-width: 480px)');

// screen.addListener(validation);

// function validation(event) {
//   if(event.matches) {
//     burgerButton.addEventListener('click', hideShow);
//   } else {
//     burgerButton.removeEventListener('click', hideShow);
//   }
// }

// validation(screen);

// function hideShow() {
//   if(menu.classList.contains('active')) {
//     menu.classList.remove('active');
//   } else {
//     menu.classList.add('active');  
//   }
// }

/* INTERCEPTOR OBSERVER
  por defecto el navegador no reproduce automaticamente un video con audio.
  el evento de IntersectionObserver se ejecuta al cargar la pagina asi que hay que validar el evento.
  otra utilidad es hacer un lazyLoading
*/

const $video = document.querySelector('#video');
$video.addEventListener('play', ()=>{
  console.log('se reproduce el video')
})
$video.addEventListener('pause', () => {
  console.log('se pausa el video')
})
const options = {
  // root: document.querySelector('.body'), // selecciona el objeto observador, por defecto es el viewport.
  rootMargin: '0px 0px 0px 0px', // permite iniciar la reproduccion ANTES de que se vea el objeto observado.
  threshold: .5, // [0, 1] % del video en pantalla donde inicia a reproducir
}
const observer = new IntersectionObserver(callback, options);
observer.observe($video);

function callback(entries, observer) {
  console.log('se llamo al callback.')
  if(entries[0].isIntersecting) {
    $video.play()
  } else {
    $video.pause()
  }
}