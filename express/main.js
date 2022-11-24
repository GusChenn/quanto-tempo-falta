const hoje = Date.now();
const formatura = new Date('2022-12-22').getTime();

const timeCalculator = (now, targetDate) => {
  let delta = Math.abs(targetDate - now) / 1000;
  const days = Math.floor(delta / 86400);
  delta -= days * 86400;
  const hours = Math.floor(delta / 3600) % 24;
  delta -= hours * 3600;
  const minutes = Math.floor(delta / 60) % 60;
  delta -= minutes * 60;
  const seconds = delta % 60;

  return [
    toString(days), toString(hours), toString(minutes), toString(seconds.toFixed(0)),
  ];
};

let delta = Math.abs(formatura - hoje) / 1000;
const dias = Math.floor(delta / 86400);
delta -= dias * 86400;
const horas = Math.floor(delta / 3600) % 24;
delta -= horas * 3600;
const minutos = Math.floor(delta / 60) % 60;
delta -= minutos * 60;
const segundos = delta % 60;

const textoDias = `${dias}`;
const textoHoras = `${horas}`;
const textoMinutos = `${minutos}`;
const textoSegundos = `${segundos.toFixed(0)}`;
const conteudos = [textoDias, textoHoras, textoMinutos, textoSegundos];

const quantityContainer = document.getElementsByClassName('quantityContainer');

conteudos.forEach((conteudo, index) => {
  quantityContainer.item(index).append(conteudo);
});
