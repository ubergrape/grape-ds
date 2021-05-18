import { useEffect, useRef, ReactElement } from 'react'
import slugify from 'slugify'
import { sizes, textSizes } from '../types'

export const genUid = (): string => Math.random().toString(36).substring(7)

export const getTextSize = (size: sizes): textSizes => {
  switch (size) {
    case 'large':
      return 'large'
    case 'regular':
      return 'base'
    case 'small':
      return 'small'
    default:
      return 'base'
  }
}

export const getNodeText = (node: string | number | ReactElement): string => {
  if (typeof node === 'string') return node
  if (typeof node === 'number') return node.toString()
  if (node instanceof Array) return node.map(getNodeText).join('')
  if (typeof node === 'object' && node) return getNodeText(node.props.children)
  return ''
}

// testMode setting
// note: docusaurus does not have localStorage, so check if it exists
export const testMode =
  typeof localStorage !== 'undefined' && localStorage.testMode

export const classify = (name: string, node: string | ReactElement): string => {
  return `${name}-${slugify(getNodeText(node), { lower: true, strict: true })}`
}

// creates slugified data-test attributes that can be added to elements
// to make e2e testing easier
export const testify = (
  name: string,
  node: string | ReactElement,
): Record<string, string> => {
  if (testMode) {
    return { 'data-test': classify(name, node) }
  }
  return {}
}

export const usePrevious = <T extends unknown>(v: T): T | undefined => {
  const prevRef = useRef<T>()
  useEffect(() => {
    prevRef.current = v
  })
  return prevRef.current
}

export const parseToken = (token: string): number =>
  parseFloat(token.split('px')[0])
