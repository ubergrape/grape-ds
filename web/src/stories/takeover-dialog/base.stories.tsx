import React from 'react'
import { useOverlayTriggerState } from '@react-stately/overlays'
import { OverlayContainer } from '@react-aria/overlays'

import {
  TakeoverDialog,
  TakeoverDialogProps,
} from '../../components/takeover-dialog'
import Button from '../../components/button'
import { Flex } from '../../components/layout'

export default {
  title: 'Components/TakeoverDialog',
  component: TakeoverDialog,
  parameters: {
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/Mc03kFcaFlcMOA7afjaZmF/Grape-DS-Components-Web?node-id=782%3A2438',
    },
  },
}

export const Base: React.FC<TakeoverDialogProps> = props => {
  const state = useOverlayTriggerState({
    defaultOpen: true,
  })

  return (
    <>
      <Flex gap="1x">
        <Button onClick={() => state.open()}>Open Dialog</Button>
      </Flex>
      <OverlayContainer>
        <TakeoverDialog
          title="Title"
          isOpen={state.isOpen}
          onClose={state.close}
          isDismissable
          {...props}
        >
          <Flex direction="column" gap="0x">
            <span>Dialog body</span>
          </Flex>
        </TakeoverDialog>
      </OverlayContainer>
    </>
  )
}

export const Scrollable: React.FC<TakeoverDialogProps> = props => {
  const state = useOverlayTriggerState({
    defaultOpen: true,
  })

  return (
    <>
      <Flex gap="1x">
        <Button onClick={() => state.open()}>Open Dialog</Button>
      </Flex>
      <OverlayContainer>
        <TakeoverDialog
          title="Title"
          isOpen={state.isOpen}
          onClose={state.close}
          isDismissable
          {...props}
        >
          <Flex direction="column" gap="0x">
            <span>
              Dialog body Dialog body Dialog body Dialog body Dialog body Dialog
              body Dialog body Dialog body Dialog body Dialog body Dialog body
              Dialog body Dialog body Dialog body Dialog body Dialog body Dialog
              body Dialog body Dialog body Dialog body Dialog body Dialog body
              Dialog body Dialog body Dialog body Dialog body Dialog body Dialog
              body Dialog body Dialog body Dialog body Dialog body Dialog body
              Dialog body Dialog body Dialog body Dialog body Dialog body Dialog
              body Dialog body Dialog body Dialog body Dialog body Dialog body
              Dialog body Dialog body Dialog body Dialog body Dialog body Dialog
              body Dialog body Dialog body Dialog body Dialog body Dialog body
              Dialog body Dialog body Dialog body Dialog body Dialog body Dialog
              body Dialog body Dialog body Dialog body Dialog body Dialog body
              Dialog body Dialog body Dialog body Dialog body Dialog body Dialog
              body Dialog body Dialog body Dialog body Dialog body Dialog body
              Dialog body Dialog body Dialog body Dialog body Dialog body Dialog
              body Dialog body Dialog body Dialog body Dialog body Dialog body
              Dialog body Dialog body Dialog body Dialog body Dialog body Dialog
              body Dialog body Dialog body Dialog body Dialog body Dialog body
              Dialog body Dialog body Dialog body Dialog body Dialog body Dialog
              body Dialog body Dialog body Dialog body Dialog body Dialog body
              Dialog body Dialog body Dialog body Dialog body Dialog body Dialog
              body Dialog body Dialog body Dialog body Dialog body Dialog body
              Dialog body Dialog body Dialog body Dialog body Dialog body Dialog
              body Dialog body Dialog body Dialog body Dialog body Dialog body
              Dialog body Dialog body Dialog body Dialog body Dialog body Dialog
              body Dialog body Dialog body Dialog body Dialog body Dialog body
              Dialog body Dialog body Dialog body Dialog body Dialog body Dialog
              body Dialog body Dialog body Dialog body Dialog body Dialog body
              Dialog body Dialog body Dialog body Dialog body Dialog body Dialog
              body Dialog body Dialog body Dialog body Dialog body Dialog body
              Dialog body Dialog body Dialog body Dialog body Dialog body Dialog
              body Dialog body Dialog body Dialog body Dialog body Dialog body
              Dialog body Dialog body Dialog body Dialog body Dialog body Dialog
              body Dialog body Dialog body Dialog body Dialog body Dialog body
              Dialog body Dialog body Dialog body Dialog body Dialog body Dialog
              body Dialog body Dialog body Dialog body Dialog body Dialog body
              Dialog body Dialog body Dialog body Dialog body Dialog body Dialog
              body Dialog body Dialog body Dialog body Dialog body Dialog body
              Dialog body Dialog body Dialog body Dialog body Dialog body Dialog
              body Dialog body Dialog body Dialog body Dialog body Dialog body
              Dialog body Dialog body Dialog body Dialog body Dialog body Dialog
              body Dialog body Dialog body Dialog body Dialog body Dialog body
              Dialog body Dialog body Dialog body Dialog body Dialog body Dialog
              body Dialog body Dialog body Dialog body Dialog body Dialog body
              Dialog body Dialog body Dialog body Dialog body Dialog body Dialog
              body Dialog body Dialog body Dialog body Dialog body Dialog body
              Dialog body Dialog body Dialog body Dialog body Dialog body Dialog
              body Dialog body Dialog body Dialog body Dialog body Dialog body
              Dialog body Dialog body Dialog body Dialog body Dialog body Dialog
              body Dialog body Dialog body Dialog body Dialog body Dialog body
              Dialog body Dialog body Dialog body Dialog body Dialog body Dialog
              body Dialog body Dialog body Dialog body Dialog body Dialog body
              Dialog body Dialog body Dialog body Dialog body Dialog body Dialog
              body Dialog body Dialog body Dialog body Dialog body Dialog body
            </span>
          </Flex>
        </TakeoverDialog>
      </OverlayContainer>
    </>
  )
}

export const WithCloseButtonInBody: React.FC<TakeoverDialogProps> = props => {
  const state = useOverlayTriggerState({
    defaultOpen: true,
  })

  return (
    <>
      <Flex gap="1x">
        <Button onClick={() => state.open()}>Open Dialog</Button>
      </Flex>
      <OverlayContainer>
        <TakeoverDialog
          title="Title"
          isOpen={state.isOpen}
          onClose={state.close}
          isDismissable
          {...props}
        >
          <Flex direction="column" gap="0x">
            <div>
              <Button onClick={() => state.close()}>Close Dialog</Button>
            </div>
            <span>Dialog body</span>
          </Flex>
        </TakeoverDialog>
      </OverlayContainer>
    </>
  )
}
