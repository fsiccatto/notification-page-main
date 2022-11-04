const $active = document.querySelectorAll(".active");
const $cardNotif = document.querySelectorAll(".card");
const $numNotif = document.querySelector(".num-notifications");
const $allRead = document.querySelector(".read-all");
const $h4 = document.querySelectorAll(".notification");
let contadorNotif = 0;

$active.forEach(() => contadorNotif++);
$numNotif.textContent = contadorNotif;

$cardNotif.forEach((card) => {
  const redPoint = document.createElement("span");
  let h4 = card.children[1].children[0];
  redPoint.className = "no-read active";
  h4.appendChild(redPoint);

  card.addEventListener("click", (e) => {
    contadorNotif = parseInt($numNotif.textContent);
    if (e.target.matches(".active")) {
      card.classList.toggle("active");
      redPoint.classList.toggle("active");
      contadorNotif--;
      $numNotif.textContent = contadorNotif;
    } else {
      card.classList.toggle("active");
      redPoint.classList.toggle("active");
      contadorNotif++;
      $numNotif.textContent = contadorNotif;
    }

  });
  
  $allRead.addEventListener("click", (e) => {
    card.classList.remove("active");
    redPoint.classList.remove("active");
    contadorNotif = 0;
    $numNotif.textContent = contadorNotif;
  });
});
