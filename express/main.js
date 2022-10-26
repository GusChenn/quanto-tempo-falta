const hoje = Date.now();
const formatura = new Date("2022-12-22").getTime();

let delta = Math.abs(formatura - hoje) / 1000;
const dias = Math.floor(delta / 86400);
delta -= dias * 86400;
const horas = Math.floor(delta / 3600) % 24;
delta -= horas * 3600;
const minutos = Math.floor(delta / 60) % 60;
delta -= minutos * 60;
const segundos = delta % 60;

const texto = `Faltam ${dias} dias, ${horas} horas, ${minutos} minutos e ${segundos.toFixed(
  0
)} segundos`;

const quantityContainer = document.getElementById("quantityContainer");

quantityContainer.append(texto);
quantityContainer.append(texto);
