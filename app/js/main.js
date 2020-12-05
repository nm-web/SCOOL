// $('.btn-feedback').on('click', function () {
//
//   $('.modal').toggleClass('active');
// });
//
// $('.modal').on('click', function () {
//
//   $(this).removeClass('active');
// });
//
// $('.modal__form').on('click', function () {
//
//   event.stopPropagation();
// });
const sandwichToggle = function () {

  let sandwichElements = document.querySelector('.mobile-menu');
  sandwichElements.addEventListener('click', showSandwichTarget);

  function showSandwichTarget() {
    // let targetId = this.getAttribute('data-target-id'),
    //   targetClassToggle = this.getAttribute('data-target-class-toggle');
    this.classList.toggle('is-active');
    // if (targetId && targetClassToggle) {
    //   document.getElementById(targetId).classList.toggle(targetClassToggle);
    // }
  }
};
sandwichToggle();
