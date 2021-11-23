/**
 *
 * @param {String} container The name of the container class you want to apply the animation to
 * @param {*} className The class you want to apply to the container
 */

function addAnimatedClass(container, className) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add(className);
      }
    });
  });

  observer.observe(document.querySelector(container));
}

addAnimatedClass("features", "animate__fadeInLeft");
addAnimatedClass("open-source", "animate__fadeInUp");
