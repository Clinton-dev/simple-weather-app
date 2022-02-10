const form = document.querySelector(".top-banner form");

form.addEventListener("submit", e => {
  e.preventDefault();
  const inputVal = form[0].value;
  const apiKey = "981282f28b48aedaf9b5d1c32c638d52";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then (res  => res.json())
    .then( data => {
      // do something
    })
    .catch(() => {
      MessageChannel.textContent = "Please search for a valid city";
    })

});