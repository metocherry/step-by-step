import "./timeline.scss";
// import { html } from "./templates/slide.template";

interface TimelineConfig {
  element: string;
  pagination: string;
}

class Timeline {
  constructor(config: TimelineConfig) {

  }
}

// create()
// next()
// prev()
// go(index | element)

const timeline = new Timeline({
  element: ".timeline .swiper-container",
  pagination: ".swiper-pagination"
});
