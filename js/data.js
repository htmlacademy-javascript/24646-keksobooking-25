import {getRandomPositiveFloat, getRandomPositiveInteger, getRandomArrayElement, getRandomArray} from './util.js';

const LAT_MIN = 35.65;
const LAT_MAX = 35.7;
const LNG_MIN = 139.7;
const LNG_MAX = 139.8;
const TITLES = [
  'Отель у Маши',
  'Апартаменты у Алекса',
  'Квартира у Зои',
  'Курортный отель у Вани',
  'Вилла у Вадима',
  'Шале у Ани',
  'Коттедж у Лидии',
  'Хостел у Петра',
  'Мотель у Алисы',
  'Апарт-отель у Игоря'
];
const TYPES = [
  'palace',
  'flat',
  'house',
  'bungalow',
  'hotel'
];
const TYPE_FLAT = {
  flat: 'Квартира',
  bungalow: 'Бунгало',
  house: 'Дом',
  palace: 'Дворец',
  hotel: 'Отель'
};
const TIMES = [
  '12:00',
  '13:00',
  '14:00'
];
const FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner'
];
const DESCRIPTIONS = [
  'Уютный',
  'Недорогой',
  'Милый',
  'Комфортный',
  'Очаровательный',
  'Доступный',
  'Тихий',
  'Уединённый',
  'Семейный',
  'Лучший'
];
const PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'
];

const createAd = () => {
  const latCoordinate = getRandomPositiveFloat(LAT_MIN, LAT_MAX, 5);
  const lngCoordinate = getRandomPositiveFloat(LNG_MIN, LNG_MAX, 5);
  return {

    author:{
      avatar: `img/avatars/user${getRandomPositiveInteger(1, 10).toString().padStart(2, '0')}.png`,
    },

    offer:{
      title: getRandomArrayElement(TITLES),
      address:  `${latCoordinate}, ${lngCoordinate}`,
      price: getRandomPositiveInteger(1,1000),
      type: getRandomArrayElement(TYPES),
      rooms: getRandomPositiveInteger(1,10),
      guests: getRandomPositiveInteger(1,1000),
      checkin: getRandomArrayElement(TIMES),
      checkout: getRandomArrayElement(TIMES),
      features: getRandomArray(FEATURES),
      description:getRandomArrayElement(DESCRIPTIONS),
      photos: getRandomArrayElement(PHOTOS),
    },

    location: {
      lat: getRandomPositiveFloat(LAT_MIN, LAT_MAX, 5),
      lng: getRandomPositiveFloat(LNG_MIN, LNG_MAX, 5),
    },
  };
};

export {createAd, TYPE_FLAT};
