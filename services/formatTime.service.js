function formatTimer(seconds, minutes) {
  let formattedSecond = seconds;
  let formattedMinutes = minutes;

  if (seconds < 10) {
    formattedSecond = `0${formattedSecond}`;
  }

  if (minutes < 10) {
    formattedMinutes = `0${formattedMinutes}`;
  }

  return `${formattedMinutes}:${formattedSecond}`;
}

export { formatTimer };
