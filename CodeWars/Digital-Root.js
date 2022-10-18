
  function digitalRoot(n) {
    if (n < 10) return n;
    return digitalRoot(n.toString().split('').reduce((a, b) => +a + +b));
  }

  console.log(digitalRoot(493193  )); 