/**
 *
 * @param {String} element The name of the element you want to apply the animation to
 * @param {String} className The class you want to apply to the container
 */

function addAnimatedClass(element, className) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add(className);
      }
    });
  });

  observer.observe(document.querySelector(element));
}

addAnimatedClass(".op-src-heading", "animate__fadeIn");
addAnimatedClass(".op-src-features", "animate__fadeIn");
