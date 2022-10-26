var slider = tns({
  container: ".my-slider",
  items: 1,
  responsive: {
    768: {
      autoplay: false,
      items: 4,
    },
  },
  slideBy: 1,
  autoplay: true,
  speed: 300,
  mode: "gallery",
  nav: false,
  controls: false,
  autoplayButtonOutput: false,
});
