import { createUseStyles } from 'react-jss'
import { isAvatarTag, Props } from '.'
import tokens from '../../tokens'

export const useStyles = createUseStyles((theme: typeof tokens) => ({
  tag: {
    backgroundColor: theme.colorBackgroundTagBasic,
    paddingLeft: (props: Props) =>
      isAvatarTag(props)
        ? theme.paddingTagAvatarSide
        : theme.paddingTagTextSide,
    paddingRight: ({ onRemove }) =>
      onRemove ? theme.paddingTagRemoveSide : theme.paddingTagTextSide,
    borderRadius: theme.borderRadiusTag,
    lineHeight: theme.sizeTag,
    height: theme.sizeTag,
    display: 'inline-flex',
    alignSelf: 'flex-start',
  },
  text: {
    color: theme.colorTextTagBasic,
  },
  button: {
    '&:hover': {
      backgroundColor: theme.colorBackgroundTagBasicRemoveHover,
    },
    width: theme.size2X,
    height: theme.size2X,
    '& > svg': {
      transform: 'none !important',
    },
  },
  avatar: {
    width: theme.size2X,
    height: theme.size2X,
    borderRadius: theme.borderRadiusTag,
  },
}))
