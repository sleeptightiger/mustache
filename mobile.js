
const nav = document.querySelector('.nav');
const img = document.createElement('img');
const navDiv = document.createElement('div');
img.src = 'images/mobile-menu.png';
img.className = 'mobile-button open';
let mobileNav = nav.innerHTML;
const li = nav.querySelector('.active');

responsive = width => {
  if(width <= 568) {
    nav.innerHTML = '';
    nav.appendChild(img);
    navDiv.className = 'mobile-menu';
    navDiv.innerHTML = mobileNav;



  } else if(width > 568) {
    console.log("Not Here!");
    nav.innerHTML = mobileNav;
  }
}

const width = window.innerWidth;
responsive(width);

window.addEventListener('resize', (e) => {
  const width = window.innerWidth;
  responsive(width);
});

img.addEventListener('click', (e) => {
  for (let i = 0; i < img.classList.length; i++) {
    if(img.classList[i] === 'open') {
      img.classList.remove = 'open';
      img.src = 'images/mobile-close.png';
      img.className = 'mobile-button close';
      nav.appendChild(navDiv);
      li.style.backgroundColor = 'black';
    } else if (img.classList[i] === 'close') {
      img.classList.remove = 'close';
      img.src = 'images/mobile-menu.png';
      img.className = 'mobile-button open';
      nav.removeChild(navDiv);
    }
    console.log(img.classList);
  }

});
