function superDigit(n, k) {
  n = n.split("").reduce((a, b) => +a + +b) * k + "";
  return (n.length > 1) ? superDigit(n, 1) : n.charAt(0);
}
