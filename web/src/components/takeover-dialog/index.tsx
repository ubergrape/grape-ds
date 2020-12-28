import React, { ReactElement, useRef } from 'react'
import { useDialog } from '@react-aria/dialog'
import { FocusScope } from '@react-aria/focus'
import { useOverlay, usePreventScroll, useModal } from '@react-aria/overlays'

import Button from '../button'
import { ScrollBar } from '../scrollbar'
import { Headline } from '../typography'

import useStyles from './styles'

export type TakeoverDialogProps = {
  title?: string
  children: ReactElement
  isOpen: boolean
  isDismissable?: boolean
  ariaLabel?: string
  closeAriaLabel?: string
  onClose: () => void
}

export const TakeoverDialog: React.FC<TakeoverDialogProps> = props => {
  const { title, onClose, ariaLabel, closeAriaLabel, children, isOpen } = props

  if (!isOpen) return null

  const ref = useRef()
  const classes = useStyles(props)
  usePreventScroll()

  const { modalProps } = useModal()
  const { overlayProps } = useOverlay(props, ref)
  const { titleProps, dialogProps } = useDialog(
    {
      ...props,
      role: 'dialog',
    },
    ref,
  )

  return (
    <div className={classes.wrapper}>
      <FocusScope contain restoreFocus autoFocus>
        <div
          {...overlayProps}
          {...dialogProps}
          {...modalProps}
          {...(title
            ? { 'aria-labelledby': title }
            : { 'aria-label': ariaLabel })}
          aria-modal
          className={classes.dialog}
          ref={ref}
        >
          <div className={classes.content}>
            {title && (
              <Headline
                {...titleProps}
                as="span"
                size="page"
                maxWidth={680}
                className={classes.title}
              >
                {title}
              </Headline>
            )}
            <div className={classes.body}>
              <ScrollBar>{children}</ScrollBar>
            </div>
          </div>
          <div className={classes.button}>
            <Button
              ariaLabel={closeAriaLabel}
              onClick={onClose}
              appearance="minimal"
              icon="close"
              size="large"
            />
          </div>
        </div>
      </FocusScope>
    </div>
  )
}

TakeoverDialog.defaultProps = {
  isOpen: false,
  isDismissable: true,
}
