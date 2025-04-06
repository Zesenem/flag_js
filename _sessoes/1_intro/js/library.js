function randomInt(vi = 0, vf = 1) {
  let random = Math.round(Math.random() * (vf - vi) + vi);
  return random;
}

function calcArea(height = 0, width = 0) {
  let area = height * width;
  return area;
}
