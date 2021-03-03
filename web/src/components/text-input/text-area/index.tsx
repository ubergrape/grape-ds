import React, {
  useEffect,
  MutableRefObject,
  Dispatch,
  SetStateAction,
  SyntheticEvent,
} from 'react'
import OverlayScrollbars from 'overlayscrollbars'

import { onOverflowChanged } from '../../scrollbar'

import {
  GenericField,
  GenericFieldProps,
  InputComponentProps,
} from '../generic'

export interface TextAreaComponentProps extends InputComponentProps {
  component: 'textarea'
  rows?: number
  minHeight?: number
  maxHeight?: number
  maxLength?: number
  allowResize?: boolean
  autoExpand?: boolean
}

export interface TextAreaWithLabelProps extends TextAreaComponentProps {
  label: string
}

export interface TextAreaWithoutLabelProps extends TextAreaComponentProps {
  'aria-label': string
}

export const onTextAreaFocus = (
  e: SyntheticEvent,
  props: GenericFieldProps,
): void => {
  if (props.isReadOnly) {
    const textarea = e.target as HTMLTextAreaElement
    textarea.setSelectionRange(0, textarea.value.length)
  }
}

const onChangeProps = [
  'allowResize',
  'autoExpand',
  'width',
  'height',
  'minHeight',
  'maxHeight',
  'maxLength',
  'isReadOnly',
  'isDisabled',
  'defaultValue',
  'rows',
]

const shouldScrollbarUpdate = (props, prevProps) =>
  !!onChangeProps.filter(prop => {
    if (prevProps[prop] !== props[prop]) return true
    return false
  }).length

const textAreaRender = (props, ref, callback) =>
  OverlayScrollbars(ref.current, {
    resize: props.allowResize ? 'vertical' : 'none',
    textarea: {
      dynHeight: props.autoExpand,
    },
    callbacks: {
      onOverflowChanged: args => {
        onOverflowChanged(args, callback)
      },
    },
  })

export const useTextAreaEffects = (
  props: TextAreaWithLabelProps | TextAreaWithoutLabelProps,
  {
    osInstance,
    setOsInstance,
    setOverflowPadding,
  }: {
    osInstance: OverlayScrollbars
    setOsInstance: Dispatch<SetStateAction<OverlayScrollbars>>
    setOverflowPadding: Dispatch<SetStateAction<string>>
  },
  ref: MutableRefObject<HTMLInputElement & HTMLTextAreaElement>,
): void => {
  useEffect(() => {
    setOsInstance(textAreaRender(props, ref, setOverflowPadding))

    return () => {
      if (OverlayScrollbars.valid(osInstance)) {
        osInstance.destroy()
      }
    }
  }, [])

  const usePrevious = <T extends unknown>(v: T): T | undefined => {
    const prevRef = React.useRef<T>()
    useEffect(() => {
      prevRef.current = v
    })
    return prevRef.current
  }

  const {
    width,
    height,
    maxLength,
    allowResize,
    autoExpand,
    minHeight,
    maxHeight,
    isReadOnly,
    isDisabled,
    defaultValue,
    rows,
  } = props

  const prevProps = usePrevious({
    width,
    height,
    maxLength,
    allowResize,
    autoExpand,
    minHeight,
    maxHeight,
    isReadOnly,
    isDisabled,
    defaultValue,
    rows,
  })

  useEffect(() => {
    if (OverlayScrollbars.valid(osInstance)) {
      // Re-render textarea, if these two property changed, otherwise old state will be shown
      if (shouldScrollbarUpdate(props, prevProps)) {
        osInstance.destroy()

        setOsInstance(textAreaRender(props, ref, setOverflowPadding))
      }
    }
  })
}

export type TextAreaProps = TextAreaWithLabelProps | TextAreaWithoutLabelProps

export const TextArea: React.FC<TextAreaProps> = props => {
  return <GenericField {...props} component="textarea" />
}

export default TextArea
