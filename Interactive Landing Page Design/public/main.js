(() => {
  const hours = selector(".hours");
  const minutes = selector(".minutes");
  const seconds = selector(".seconds");

  const checkbox = document.getElementById("switch");
  const img = document.getElementById("shops");

  /* Setando o intervalo de tempo para mudar as horas na tela */
  setInterval(() => {
    const time = new Date();
    hours.textContent =
      time.getHours() < 10 ? `0${time.getHours()}` : time.getHours();
    minutes.textContent =
      time.getMinutes() < 10 ? `0${time.getMinutes()}` : time.getMinutes();
    seconds.textContent =
      time.getSeconds() < 10 ? `0${time.getSeconds()}` : time.getSeconds();
  }, 1000);

  /* Acendendo e apagando as luzes da imagem principal */
  checkbox.onchange = event => {
    if (event.target.checked) {
      img.src = "./assets/Night_5.png";
    } else {
      img.src = "./assets/Night_4.png";
    }
  };
})();

function selector(element) {
  return document.querySelector(element);
}
