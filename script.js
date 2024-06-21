let btnToggle = document.getElementById("btn-toggle-parallax");

btnToggle.addEventListener("click", function () {
  const parallaxElements = document.querySelectorAll(".parallax");

  // Check the computed style of the first parallax element
  const firstElementComputedStyle = window.getComputedStyle(
    parallaxElements[0]
  );
  const isParallaxEnabled =
    firstElementComputedStyle.backgroundAttachment === "fixed";

  parallaxElements.forEach((element) => {
    element.style.backgroundAttachment = isParallaxEnabled ? "scroll" : "fixed";
  });

  btnToggle.innerText = isParallaxEnabled ? " ON Parallax" : "OFF Parallax";
});
