$(document).ready(function () {


  const sandwichToggle = function () {
    let sandwichElements = document.querySelector('.mobile-menu');
    let header = document.querySelector('.header');
    sandwichElements.addEventListener('click', showSandwichTarget);

    function showSandwichTarget() {
      this.classList.toggle('is-active');
      header.classList.toggle('active');
    }
  };

  function hiddenTogle() {
    var form = document.querySelector('.form-header');
    form.classList.toggle('active');
    document.querySelector('.header__check').classList.toggle('hidden');
    document.querySelector('.btn-icon-search').classList.toggle('hidden');
    document.querySelector('.btn-review').classList.toggle('hidden');
    if (window.innerWidth <= 440) {
      document.querySelector('.header__logo').classList.toggle('hidden');
      document.querySelector('.mobile-menu').classList.toggle('hidden');
    }
  }

  var btnSearch = document.querySelector('.btn-icon-search');
  btnSearch.addEventListener('click', function () {
    var input = document.querySelector('.form-header input');
    hiddenTogle();
    input.focus();

  });

  var inputHeader = document.querySelector('.input-header');
  inputHeader.addEventListener('blur', function () {
    hiddenTogle();
  });

  var selectEls = document.querySelectorAll('.selections-box > .select');
  var selectItemInstit = document.querySelectorAll('.select__item');
  selectEls.forEach(function (el) {
    console.log(el);
    el.addEventListener('click', function (event) {
      if (event.target) {

      }
      el.classList.toggle('is-open');
      selectEls.forEach(function (sel) {
        if (sel !== el) {
          sel.classList.remove('is-open');
        }
      });
    });
  });

  selectItemInstit.forEach((item) => {
    item.addEventListener('click', (e) => {
      e.currentTarget.closest('.select').querySelector('.select__current').innerHTML = e.currentTarget.innerHTML;
      e.currentTarget.closest('.select__body').classList.remove('is-open');
    });
  });

  var logIn = document.querySelector('.header__check');
  logIn.addEventListener('click', function (e) {
    let modalEnter = document.querySelector('.modal-enter');
    modalEnter.classList.toggle('active');
  });

  var close = document.querySelector('#close');
  if (close) {
    close.addEventListener('click', function (e) {
      let modalEnter = document.querySelector('.modal-enter');
      modalEnter.classList.toggle('active');
    });
  }

  var region = document.querySelector('.header__region');
  region.addEventListener('click', function (e) {
    this.classList.toggle('active');
  });

  var tab = document.querySelectorAll('.tabs-title');
  var tabContent = document.querySelectorAll('.tab-content');
  tab.forEach((item) => {
    item.addEventListener('click', selectTabNav);
  });

  function selectTabNav() {
    tab.forEach((item) => {
      item.classList.remove('tabs--active');
    });
    this.classList.add('tabs--active');
    tabName = this.getAttribute('data-tab-name');
    selectTabContent(tabName);
  }

  function selectTabContent(tab) {
    tabContent.forEach((item) => {
      let classList = item.classList;
      classList.contains(tab) ? classList.add('active') : classList.remove('active');
    });
  }


  function moveTitle() {
    let title = document.querySelector('.project__title');
    if (!title) {
      return;
    }
    let titleText = title.innerHTML;
    let titleNew = document.querySelector('.project__title--mobile');
    titleNew.innerHTML = titleText;
    if (window.innerWidth <= 848) {
      title.style.display = 'none';
      titleNew.style.display = 'block';

    } else {
      titleNew.style.display = 'none';
      title.style.display = 'block';
    }

  }

  function blogSlider() {
    if (window.innerWidth <= 440) {


      $('#carousel-blog').owlCarousel({
        items: 5,
        margin: 24,
        responsive: {
          0: {
            items: 1,
            margin: 24,
            stagePadding: 38,

          },

          355: {
            items: 1,
            margin: 24,
            stagePadding: 38,

          },

          440: {
            items: 2,
            center: true,
            margin: 24,
          },

        }
      });
    } else {
      $("#carousel-blog").trigger('destroy.owl.carousel');
    }
  }


  $("#gallery").owlCarousel({
    items: 3,
    margin: 24,

    responsive: {
      0: {
        items: 1,
        stagePadding: 32,
        margin: 24,
      },

      360: {
        items: 1,
        stagePadding: 50,
        margin: 24,
      },

      440: {
        items: 1,
        stagePadding: 93600,
        margin: 24,
      },

      480: {
        items: 2,
        // stagePadding: -40,
        margin: 24,
      },
      650: {
        items: 3,

        margin: 24,
      },
    }
  });


  $('#gallery-areal').owlCarousel({
    items: 4,
    margin: 24,
    responsive: {
      0: {
        items: 1,
        margin: 24,
        stagePadding: 50
      },
      440: {
        items: 2,
        // center:true,
      },

      560: {
        items: 2,
        stagePadding: 10
      },
      648: {
        items: 3,
      },

      991: {
        items: 4,
      },

    }
  });

  $('#gallery-carousel').owlCarousel({
    items: 1,
    margin: 20,
    nav: true,
    onInitialized: counter,
    onChanged: counter,
  });

  function counter(event) {
    if (!event.namespace) {
      return;
    }
    var slides = event.relatedTarget;
    $('.slider-counter').text(slides.relative(slides.current()) + 1 + ' / ' + slides.items().length);
  }


  $('#carousel1').owlCarousel({
    items: 5,
    margin: 24,
    responsive: {
      0: {
        items: 1,
        margin: 24,
        stagePadding: 45
      },

      330: {
        items: 1,
        margin: 24,
        stagePadding: 65
      },
      440: {
        items: 2,
        // center:true,
      },
      648: {
        items: 3,
      },

      991: {
        items: 4,
      },

      1110: {
        items: 5,
      }
    }
  });

  $('#carousel-review').owlCarousel({
    items: 4,
    margin: 24,
    responsive: {
      0: {
        items: 1,
        margin: 24,
        stagePadding: 50
      },
      440: {
        items: 2,
        // center:true,
      },
      648: {
        items: 3,
      },

      991: {
        items: 4,
      },

    }
  });

  blogSlider();
  moveTitle();
  sandwichToggle();


  window.addEventListener(`resize`, (e) => {
    moveTitle();
    blogSlider();

  });
});


