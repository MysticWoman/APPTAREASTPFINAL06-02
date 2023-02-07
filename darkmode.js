// Fecha
const fecha = document.querySelector('#fecha')
const FECHA = new Date ()
fecha.innerHTML = FECHA.toLocaleDateString('es-MX',{weekday: 'long', month: 'short', day:'numeric'})


// Dark mode button

const $buttonDark = document.querySelector(".dark");
const $body = document.querySelector("body");

$buttonDark.addEventListener("clickonce", (e) => {
  $body.classList.toggle("dark");
});

const bdark = document.querySelector(".dark");
const body = document.querySelector("body");

load();

bdark.addEventListener("click", (e) => {
  body.classList.toggle("darkmode");
  store(body.classList.contains("darkmode"));
});
function load() {
  const darkmode = localStorage.getItem("darkmode");
  if (!darkmode) {
    store("false");
  } else if (darkmode == "true") {
    body.classList.add("darkmode");
  }
}
function store(value) {
  localStorage.setItem("darkmode", value);
}

//------------------------------------------------




