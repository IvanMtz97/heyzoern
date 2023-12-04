var React = require('react-native')
var {
  PixelRatio
} = React

var pixelRatio = PixelRatio.get()

export function toDp(size: number) {
  if(pixelRatio == 2) {
      return size
  } 
  return size * 1.15
}