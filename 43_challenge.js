const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

function getRandomMonth(months) {
  return months.at(Math.floor(Math.random() * (months.length + 1)));
}
