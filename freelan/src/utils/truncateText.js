function truncateText(str, length) {
  return str.length < length
    ? str.slice(0, length)
    : str.slice(0, length) + "...";
}

export default truncateText;
