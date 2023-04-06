// Nav-Link 

let navlink = document.querySelector('.navlinks');

let body = document.querySelector("body");

let sectionTwoCardContainer = document.querySelector('.section2ImageBackgroundContainer')

const handleShowSidebar = () => {
  navlink.classList.add('navlinksShown');

  body.classList.add('bodyUnscroll')
};


const handleRemoveSideBar = () => {
  navlink.classList.remove('navlinksShown');

  body.classList.remove('bodyUnscroll')
}

const handleScrollRight = () => {
  sectionTwoCardContainer.scrollBy(500, 0);
}
const handleScrollLeft = () => {
  sectionTwoCardContainer.scrollBy(-500, 0);
}