const width = window.innerWidth;
const nav = document.querySelector('.nav');
const img = document.createElement('img');

let mobileNav;

addResponsiveNav = (width) => {
  img.src = 'images/mobile-menu.png';
  img.className = 'mobile-button open';
  let mobileNav;
  if(width < 568) {
    mobileNav = nav.innerHTML;
    nav.innerHTML = '';
    nav.appendChild(img);
  }
  return mobileNav
};

mobileNav = addResponsiveNav(width);
console.log(mobileNav);
const navDiv = document.createElement('div');
navDiv.className = 'mobile-menu';
navDiv.innerHTML = mobileNav;
const li = navDiv.querySelector('.active');

img.addEventListener('click', (e) => {
  for (let i = 0; i < img.classList.length; i++) {
    if(img.classList[i] === 'open') {
      img.classList.remove = 'open';
      img.src = 'images/mobile-close.png';
      img.className = 'mobile-button close';
      nav.appendChild(navDiv);
      li.style.backgroundColor = 'black';
      console.log(li);
    } else if (img.classList[i] === 'close') {
      img.classList.remove = 'close';
      img.src = 'images/mobile-menu.png';
      img.className = 'mobile-button open';
      nav.removeChild(navDiv);
    }
    console.log(img.classList);
  }

});
