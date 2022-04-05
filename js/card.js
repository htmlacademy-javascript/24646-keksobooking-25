import {createAd, TYPE_FLAT} from './data.js';

const AD_AMOUNT = 10;

const tenFakeAds = Array.from({length:AD_AMOUNT}, createAd);

// tenFakeAds();

const cardTemplate = document.querySelector('#card').querySelector('.popup');

const imgTemplate = document.querySelector('#card').querySelector('.popup_photo');

const insertPhotos = (element, array) => {
  element.innerHTML = '';

  array.forEach((item) => {
    const adPhoto = imgTemplate.cloneNode(true);
    adPhoto.src = item;
    element.appendChild(adPhoto);
  });
};

const insertFeatures = (element, array) => {
  element.innerHTML = '';

  array.forEach((item) => {
    const featureItem = document.createElement('li');
    featureItem.classList.add('popup__feature');
    featureItem.classList.add(`popup__feature--${item}`);
    element.appendChild(featureItem);
  });
};

const renderCard = (card) => {
  const cardElement = cardTemplate.cloneNode(true);
  cardElement.querySelector('.popup__title').textContent = card.offer.title;
  cardElement.querySelector('.popup__text--address').textContent = card.offer.address;
  cardElement.querySelector('.popup__text--price').textContent = `${card.offer.price  } ₽/ночь`;
  cardElement.querySelector('.popup__type').textContent = TYPE_FLAT[card.offer.type];
  cardElement.querySelector('.popup__text--capacity').textContent = `${card.offer.rooms  } комнаты для ${  card.offer.guests  } гостей`;
  cardElement.querySelector('.popup__text--time').textContent = `Заезд после ${  card.offer.checkin  }, выезд до ${  card.offer.checkout}`;
  insertFeatures(cardElement.querySelector('.popup__features'), card.offer.features);
  cardElement.querySelector('.popup__description').textContent = card.offer.description;
  insertPhotos(cardElement.querySelector('.popup__photos'), card.offer.photos);
  cardElement.querySelector('.popup__avatar').src = card.author.avatar;
  return cardElement;
};

const showCard = (ad) => {
  const adCard = document.querySelector('#map-canvas');
  adCard.insertAdjacentElement('beforebegin', renderCard(ad));
};

export {showCard};
