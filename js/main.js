$(document).ready(function () {
  // header  - slider
  $(".header-slider").owlCarousel({
    items: 1,
    smartSpeed: 600,
    loop: true,
    margin: 5,
  });

  $(".slider-next").click(function () {
    $(".header-slider").trigger("next.owl.carousel");
  });
  $(".slider-prev").click(function () {
    $(".header-slider").trigger("prev.owl.carousel");
  });
  // настройки сладйера portfolio
  const owlConfig = {
    items: 1,
    loop: true,
    smartSpeed: 600,
    margin: 15,
    stagePadding: 40,
    responsive: {
      768: {
        margin: 0,
      },
      480: {
        items: 2,
      },
    },
  };
  $(".portfolio-content").owlCarousel(owlConfig);

  if (window.innerWidth >= 768) {
    $(".portfolio-content").trigger("destroy.owl.carousel");
  }

  window.addEventListener("resize", () => {
    if (window.innerWidth >= 768) {
      $(".portfolio-content").trigger("destroy.owl.carousel");
      $(".portfolio-content").classList.remove("owl.carousel");
    } else {
      $(".portfolio-content").owlCarousel(owlConfig);
      $(".portfolio-content").classList.add("owl.carousel");
    }
  });
  // Fancybox
  Fancybox.bind("[data-fancybox]", {});

  // animated
  var show = true;
  var countbox = ".animated-number";
  $(window).on("scroll load resize", function () {
    if (!show) return false; // Отменяем показ анимации, если она уже была выполнена
    var w_top = $(window).scrollTop(); // Количество пикселей на которое была прокручена страница
    var e_top = $(countbox).offset().top; // Расстояние от блока со счетчиками до верха всего документа
    var w_height = $(window).height(); // Высота окна браузера
    var d_height = $(document).height(); // Высота всего документа
    var e_height = $(countbox).outerHeight(); // Полная высота блока со счетчиками
    if (
      w_top + 500 >= e_top ||
      w_height + w_top == d_height ||
      e_height + e_top < w_height
    ) {
      $(".num").css("opacity", "1");
      $(".num").spincrement({
        thousandSeparator: "",
        duration: 2000,
      });

      show = false;
    }
  });
});
