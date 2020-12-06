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

  // document.querySelectorAll('.selections-box .select-body').forEach(function (el) {
  //   el.addEventListener('click', function (e) {
  //     e.preventDefault();
  //   });
  // });

  var selectEls = document.querySelectorAll('.selections-box > .select');
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




  // let select = () => {
  //   let selectCurrent = document.querySelectorAll('.select__header'),
  //     selectItem = document.querySelectorAll('.select__item');
  //   selectCurrent.forEach((item) => {
  //     item.addEventListener('click', (e) => {
  //       e.currentTarget.parentElement.classList.toggle('is-open');
  //     })
  //   });
  //   selectItem.forEach((item) => {
  //     item.addEventListener('click', (e) => {
  //       e.currentTarget.closest('.select').querySelector('.select__current').innerHTML = e.currentTarget.innerHTML;
  //       e.currentTarget.closest('.select').classList.remove('is-open');
  //     })
  //   });
  // };

  // select();

function moveTitle () {
  let title = document.querySelector('.project__title');
  let titleText = title.innerHTML;
  let titleNew = document.querySelector('.project__title--mobile');
  titleNew.innerHTML = titleText;
  if ( window.innerWidth <= 848 ) {
    title.style.display = 'none';
    titleNew.style.display = 'block';

  } else {
    titleNew.style.display = 'none';
    title.style.display = 'block';
  }

}

window.addEventListener(`resize`, (e)=> {
  moveTitle ();
  if ( window.innerWidth <= 440 ) {
    $('#carousel-blog').owlCarousel({
      items:5,
      margin:24,
      responsive : {
        0: {
          items:1,
        },
        440 : {
          items:2,
          center:true,
        },

      }
    });
  } else {
    $("#carousel-blog").trigger('destroy.owl.carousel');
  }
});

$('#carousel1').owlCarousel({
  items:5,
  margin:24,
  responsive : {
    0: {
      items:1,
    },
    440 : {
      items:2,
      center:true,
    },
    768 : {
      items:3,
    },

    991 : {
      items:4,
    },

    1110 : {
      items:5,
    }
  }
});

  $('#carousel-review').owlCarousel({
    items:4,
    margin:30,
    responsive : {
      0: {
        items:1,
      },
      440 : {
        items:2,
        margin:10,
      },
      768 : {
        items:3,
      },

      991 : {
        items:4,
      },

        }
  });

  sandwichToggle();
});


