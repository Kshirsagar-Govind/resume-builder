export const Diamond = () => {
  return `&#9830 `
}

export const Diamond_2 = () => {
  return `&#10022 `
}

export const Tick = (color = 'black') => {
  return `
  <span
  style="color:${color};"
  >
  &#10003 
  </span>`
}

export const Cross = () => {
  return `&#10006 `
}

export const Point = (color = 'black') => {
  return `
  <span
  style="color:${color};"
  >
  &#x2022 
  </span>`
}

export const BlackCircle = () => {
  return `&#9899 `
}

export const Star = () => {
  return `&#9830 `
}

export const ThreeDots = () => {
  return `&#9964 `
}

export const ParaSpace = () => {
  return `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`
}

export const Symbol = (type) => {
  if (type == 'tick') return Tick()
  else if (type == 'black_dot') return BlackCircle()
  else if (type == 'point') return Point()
  else if (type == 'cross') return Cross()
  else if (type == 'three_dots') return ThreeDots()
  else if (type == 'diamond') return Diamond()
  else if (type == 'square_diamond') return Diamond_2()
  else if (type == 'star') return Star()
  else if (type == 'para_space') return ParaSpace()
  else return ''
}

// module.exports = {
//   Diamond,
//   Diamond_2,
//   Tick,
//   Cross,
//   BlackCircle,
//   Start,
//   ThreeDots,
// };
