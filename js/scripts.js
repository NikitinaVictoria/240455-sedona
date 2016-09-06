var link_click = document.querySelector('.find-hotel-btn');
var link_form = document.querySelector('.find-hotel-form');
var form = link_form.querySelector('form');
var arrival = link_form.querySelector('[id=arrival-date]');
var departure = link_form.querySelector('[id=departure-date]');
var adults = link_form.querySelector('[id=adults]');
var children = link_form.querySelector('[id=children]');
var storage = localStorage.getItem('adults');
var storage = localStorage.getItem('children');

link_form.classList.add('hidden');

link_click.addEventListener('click', function(event) {
  event.preventDefault();
  link_form.classList.toggle('move-form');
  if (storage) {
    adults.value = storage;
  }
  if (storage) {
    children.value = storage;
  }
  arrival.focus();

});

form.addEventListener('submit', function(event) {
  if (!arrival.value || !departure.value || !adults.value || !children.value) {
    event.preventDefault();
    console.log('Нужно ввести даты заезда и выезда и количество человек');
  } else {
    localStorage.setItem('adults', adults.value);
    localStorage.setItem('children', children.value);
  }
});
<<<<<<< HEAD

window.addEventListener('keydown', function(event) {
  if (event.keyCode === 27) {
    if (link_click.classList.contains('move-form')) {
      link_click.classList.remove('move-form');
    }
  }
});
=======

window.addEventListener('keydown', function(event) {
  if (event.keyCode === 27) {
    if (link_click.classList.contains('move-form')) {
      link_click.classList.remove('move-form');
    }
  }
});


/* Добавлена карта */
window.onload = (function() {
  if (typeof ymaps == 'undefined') {
    return;
  } else {
    ymaps.ready(init);
    var myMap,
      myPlacemark;

    function init() {
      myMap = new ymaps.Map('sedona-map', {
        center: [34.86607220, -111.76359320],
        zoom: 17,
        type: 'yandex#hybrid',
        controls: []
      });

      myMap.behaviors.disable('scrollZoom');

      myPlacemark = new ymaps.Placemark([34.86607220, -111.76359320], {
        hintContent: 'Sedona', balloonContent: 'Welcome to the gorgeous Sedona'
      }, {
        iconColor: '#f95d51'
      });

      myMap.geoObjects.add(myPlacemark);
    }
  }
})();
>>>>>>> origin/master
