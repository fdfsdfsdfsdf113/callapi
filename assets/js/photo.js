const getPhotos = () => {
  return new Promise((resolve, reject) => {
    fetch(`https://jsonplaceholder.typicode.com/photos`)
      .then((response) => response.json())
      .then((photos) => {
        const queryString = window.location.search;

        const urlParams = new URLSearchParams(queryString);

        const albumId = urlParams.get("albumId");

        const photoOfAlbumId = photos.filter(
          (photoItem) => photoItem.albumId === Number(albumId)
        );
        return resolve(photoOfAlbumId);
      })
      .catch((error) => reject(error));
  });
};

getPhotos().then((photos) => {
  const photoContainer = document.querySelector(".photo-container");

  const html = photos.map((photoItem) => {
    return /* html */ `
        <div>
          <a href="">
          <img src="${photoItem.url}">
          </a>
        </div>
      `;
  });

  photoContainer.innerHTML = html.join("");
});
