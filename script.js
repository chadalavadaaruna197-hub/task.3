/* ===============================
   🌿 NATURE IMAGE CAROUSEL
================================ */

let images = [
  "https://picsum.photos/id/1018/800/500",
  "https://picsum.photos/id/1015/800/500",
  "https://picsum.photos/id/1016/800/500",
  "https://picsum.photos/id/1020/800/500"
];

let index = 0;
const img = document.getElementById("carouselImage");

// Load first image
img.src = images[index];

function nextImage() {
  index = (index + 1) % images.length;
  img.src = images[index];
}

function prevImage() {
  index = (index - 1 + images.length) % images.length;
  img.src = images[index];
}

/* ===============================
   🌤 WEATHER APP (FREE API)
================================ */

function getWeather() {
  const city = document.getElementById("city").value;

  if (city === "") {
    document.getElementById("weatherResult").innerText =
      "Please enter a city name 🌍";
    return;
  }

  fetch(`https://wttr.in/${city}?format=3`)
    .then(res => res.text())
    .then(data => {
      document.getElementById("weatherResult").innerText = data;
    })
    .catch(() => {
      document.getElementById("weatherResult").innerText =
        "Unable to fetch weather ❌";
    });
}