import React from 'react'
import { useOverlayTriggerState } from '@react-stately/overlays'
import { OverlayContainer } from '@react-aria/overlays'

import { Dialog } from '../../components/dialog'
import Button from '../../components/button'
import { Flex } from '../../components/layout'

export default {
  title: 'Components/Dialog',
  component: Dialog,
  parameters: {
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/Mc03kFcaFlcMOA7afjaZmF/Grape-DS-Components-Web?node-id=782%3A2438',
    },
  },
}

export const Base: React.FC<ButtonGroupProps> = props => {
  const state = useOverlayTriggerState({
    defaultOpen: true,
  })

  return (
    <>
      <Flex gap="1x">
        <Button onClick={() => state.open()}>Open Dialog</Button>
      </Flex>
      <OverlayContainer>
        <Dialog
          title="Title"
          isOpen={state.isOpen}
          onClose={state.close}
          isDismissable
          {...props}
        >
          <Flex direction="column" gap="2x">
            <span>Dialog body</span>
            <div>
              <Button onClick={() => state.close()}>Close Dialog</Button>
            </div>
          </Flex>
        </Dialog>
      </OverlayContainer>
    </>
  )
}

export const Scrollable: React.FC<ButtonGroupProps> = props => {
  const state = useOverlayTriggerState({
    defaultOpen: true,
  })

  return (
    <>
      <Flex gap="1x">
        <Button onClick={() => state.open()}>Open Dialog</Button>
      </Flex>
      <OverlayContainer>
        <Dialog
          title="Title"
          isOpen={state.isOpen}
          onClose={state.close}
          isDismissable
          {...props}
        >
          <Flex direction="column" gap="2x">
            <div>
              <Button onClick={() => state.close()}>Close Dialog</Button>
            </div>
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
        </Dialog>
      </OverlayContainer>
    </>
  )
}
