$.ajax({
  url: 'https://api.chucknorris.io/jokes/random',
  method: 'GET',
}).then(function (response) {
  showChuckNorrisJoke(response);
});

function showChuckNorrisJoke(data) {
  var joke = data.value;
  var icon = data.icon_url;
  var photoImage = $(`<img src='${icon}' class="rounded mx-auto d-block mt-5">`);
  $('#imgHere').html(photoImage);
  $('#jokeHere').html('<h1 class="text-danger">' + joke + '</h1>');
}
