const navlink = document.querySelector('.navlinks');
const body = document.querySelector('body');
const section2cardContainer = document.querySelector('.section2cardContainer');
const handleShowSidebar = () => {
	navlink.classList.add('navlinksShown');
	body.classList.add('bodyUnscroll');
};
const handleRemoveSidebar = () => {
	navlink.classList.remove('navlinksShown');
	body.classList.remove('bodyUnscroll');
};

const handleScrollRight = () => {
	section2cardContainer.scrollBy(800, 0);
};
const handleScrollLeft = () => {
	section2cardContainer.scrollBy(-800, 0);
};
