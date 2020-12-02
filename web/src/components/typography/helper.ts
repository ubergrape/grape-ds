import tokens from '../../tokens'

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

export type TextColorType =
  | 'primary'
  | 'secondary'
  | 'personal'
  | 'link'
  | 'danger'
  | 'success'
  | 'inverse'
  | 'placeholder'
  | 'active'
  | string

export const getColorFromType = (type: TextColorType): string =>
  type ? tokens[`colorText${capitalizeFirstLetter(type)}`] : undefined
