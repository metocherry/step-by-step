(function (global) {
  document.addEventListener("DOMContentLoaded", bootstrap);

  function bootstrap() {
    var sliders = document.querySelectorAll(".range-slider");

    [].slice.apply(sliders).forEach(function (slider) {
      var range = slider.querySelector("input[type='range']");
      var value = slider.querySelector(".range-value");
      value.textContent = range.value;

      range.addEventListener("input", function () {
        value.textContent = this.value;
      });
    });
  }
})(window);
