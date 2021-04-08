import tokens from '../tokens'

const {
  sizeHalfX,
  size1X,
  size1HalfX,
  size2X,
  size2HalfX,
  size3X,
  size4X,
  size5X,
  size6X,
} = tokens

export const scale = {
  '0x': '0px',
  '0.5x': sizeHalfX,
  '1x': size1X,
  '1.5x': size1HalfX,
  '2x': size2X,
  '2.5x': size2HalfX,
  '3x': size3X,
  '4x': size4X,
  '5x': size5X,
  '6x': size6X,
}

export type GapTypes = keyof typeof scale
