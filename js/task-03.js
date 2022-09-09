const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const GalleryRef = document.querySelector('.gallery');

// const markup = images.map(({ url, alt }) => {
//   const listItem = document.createElement('li');

//   const ListImg = document.createElement('img');
//   ListImg.src = url;
//   ListImg.alt = alt;

//   listItem.append(ListImg);
//   console.log(listItem);
//   return listItem;
// });

// GalleryRef.append(...markup);

const listItem = images.map(({ url, alt }) => {
  return `<li><img class="gallery-img" src="${url}" alt="${alt}"></li>`;
});

const markup = listItem.join(' ');
GalleryRef.insertAdjacentHTML('beforeend', markup);
