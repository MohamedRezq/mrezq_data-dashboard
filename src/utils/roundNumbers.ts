export const roundNumbers = (num: number) => {
  const roundedNumber = Math.round(num);
  if (roundedNumber >= 1000000) {
    return (roundedNumber / 1000000).toFixed(1) + " M";
  } else if (roundedNumber >= 1000) {
    return (roundedNumber / 1000).toFixed(1) + " K";
  } else {
    return roundedNumber.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
};
