// This adds some nice ellipsis to the description:
document.querySelectorAll(".projcard-description").forEach(function (box) {
	$clamp(box, { clamp: 6 });
});


const btnMobile = document.querySelector("#btn-mobile")
const btnMenu = document.querySelectorAll("a.nav-btn")

function toggleMenu(e) {
    if (e.type === 'touchstart') e.preventDefault()
    const nav = document.querySelector("#nav")
    nav.classList.toggle('active')
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);

for (let i = 0; i < btnMenu.length; i++) {
    btnMenu[i].addEventListener("click", toggleMenu)
    
}


// Slide Projetos
var largura = window.screen.width;
if (largura <= 768) {
	var swiper = new Swiper(".mySwiper", {
		slidesPerView: 1,
		spaceBetween: 30,
		slidesPerGroup: 1,
		loop: true,
		loopFillGroupWithBlank: true,
		pagination: {
			el: ".swiper-pagination",
			clickable: true,
		},
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
	});
};
if (largura >= 768) {
	var swiper = new Swiper(".mySwiper", {
		slidesPerView: 3,
		spaceBetween: 30,
		slidesPerGroup: 3,
		loop: true,
		loopFillGroupWithBlank: true,
		pagination: {
			el: ".swiper-pagination",
			clickable: true,
		},
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
	});
}