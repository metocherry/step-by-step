import "./joyful-swiper.scss"

const prev_button: HTMLElement = document.querySelector(".joy-swiper-prev-button");
const next_button: HTMLElement = document.querySelector(".joy-swiper-next-button");
const presentation: HTMLElement = document.querySelector(".joy-swiper-presentation");
const slides: NodeListOf<HTMLElement> = presentation.querySelectorAll(".joy-swiper-slide");
let index = 0;

prev_button.addEventListener("click", () => {
  if (index <= 0) return;
  move(index -= 1);
});

next_button.addEventListener("click", () => {
  if (index >= (slides.length - 1)) return;
  move(index += 1);
});

function move(index: number) {
  presentation.style.transform = `translate3d(0, ${index * -100}%, 0)`;
}

