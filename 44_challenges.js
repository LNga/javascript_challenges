const date = new Date('01/01/2022');

function countDays(date) {
  return Math.floor(
    (Date.now().valueOf() - date.valueOf()) / (24 * 3600 * 1000)
  );
}
