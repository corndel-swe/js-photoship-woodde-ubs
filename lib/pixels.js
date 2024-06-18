export function stripRed(rgb) {
  // TODO: set the red value in the rgb array to 0
  // e.g. [10, 105, 39] => [0, 105, 39]
  rgb[0] = 0
  return rgb
}

export function stripGreen(rgb) {
  // TODO: set the green value in the rgb array to 0
  // e.g. [10, 105, 39] => [10, 0, 39]
  rgb[1] = 0
  return rgb
}

export function stripBlue(rgb) {
  // TODO: set the blue value in the rgb array to 0
  // e.g. [10, 105, 39] => [10, 105, 0]
  rgb[2] = 0
  return rgb
}

export function invert(rgb) {
  // TODO: set each value in the array to (255 - value)
  rgb[0] = 255 - rgb[0]
  rgb[1] = 255 - rgb[1]
  rgb[2] = 255 - rgb[2]

  return rgb
}

export function grayScale(rgb) {
  // TODO: set each value of the rgb array to the average
  // e.g. [4, 5, 12] => [7, 7, 7]
  let average = (rgb[0] + rgb[1] + rgb[2]) / 3
  rgb[0] = average
  rgb[1] = average
  rgb[2] = average

  return rgb
}

export function blackAndWhite(rgb) {
  // TODO: calculate the average of r, g, b
  // if it's smaller than 255/2, set all values to 0
  // otherwise set all values to 255
  let average = (rgb[0] + rgb[1] + rgb[2]) / 3
  if (average < (255 / 2)) {
    rgb[0] = 0
    rgb[1] = 0
    rgb[2] = 0
  } else {
    rgb[0] = 255
    rgb[1] = 255
    rgb[2] = 255
  }
  return rgb
}

export function colorChannel(rgb, color) {
  // TODO: get the color channel
  // if color is 'r', leave red alone and set green and blue to 0
  // similar for 'g' and 'b'
  // e.g. [107, 43, 198], 'g' => [0, 43, 0]
  // console.log(rgb)
  // console.log(color)

  if (color === "r") {
    //set green and blue to 0
    rgb[1] = 0
    rgb[2] = 0
  }
  if (color === "g") {
    //set red and blue to 0
    rgb[0] = 0
    rgb[2] = 0
  }
  if (color === "b") {
    //set red and green to 0
    rgb[0] = 0
    rgb[1] = 0
  }
  return rgb
}

export function sepia(rgb) {
  // TODO: google "sepia tone rgb formula" and implement it
  let NewRed = (rgb[0] * .393) + (rgb[1] * .769) + (rgb[1] * .189)
  let NewGreen = (rgb[0] * .349) + (rgb[1] * .686) + (rgb[1] * .168)
  let NewBlue = (rgb[0] * .272) + (rgb[1] * .534) + (rgb[1] * .131)

  if (NewRed > 255) {
    rgb[0] = 255
  } else {
    rgb[0] = NewRed
  }

  if (NewGreen > 255) {
    rgb[1] = 255
  } else {
    rgb[1] = NewGreen
  }

  if (NewBlue > 255) {
    rgb[2] = 255
  } else {
    rgb[2] = NewBlue
  }
  return rgb
}




export function adjustBrightness(rgb, brightness) {
  // TODO: add the value of 'brightness' to every element in rgb
  // but make sure the value stays between 0 and 255!
  let brightNum = parseInt(brightness)

  if (rgb[0] + brightNum > 255) {
    rgb[0] = 255
  }
  else if (rgb[0] + brightNum < 0) {
    rgb[0] = 0
  } else {
    rgb[0] += brightNum
  }

  if (rgb[1] + brightNum > 255) {
    rgb[1] = 255
  }
  else if (rgb[1] + brightNum < 0) {
    rgb[1] = 0
  } else {
    rgb[1] += brightNum
  }

  if (rgb[2] + brightNum > 255) {
    rgb[2] = 255
  }
  else if (rgb[0] + brightNum < 0) {
    rgb[2] = 0
  } else {
    rgb[2] += brightNum
  }
  return rgb

}


// rgb[0] += brightNum
// rgb[1] += brightNum
// rgb[2] += brightNum

//  return rgb
