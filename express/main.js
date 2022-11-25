const graduation = new Date('2022-12-22').getTime();

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
    days, hours, minutes, seconds.toFixed(0),
  ];
};

const timeFormatter = (value) => (value > 9
  ? value
  : `0${value}`);

const quantityContainer = document.getElementsByClassName('quantityContainer');

setInterval(() => {
  const now = Date.now();
  const contents = timeCalculator(now, graduation);
  contents.forEach((content, index) => {
    quantityContainer.item(index).innerHTML = (timeFormatter(content));
  });
}, 1000);
