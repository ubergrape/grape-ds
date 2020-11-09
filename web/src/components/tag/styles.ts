import { createUseStyles } from 'react-jss'
import tokens from '../../tokens'

export const useStyles = createUseStyles((theme: typeof tokens) => ({
  tag: {
    backgroundColor: theme.colorBackgroundTagBasic,
    paddingLeft: ({ avatar }) =>
      avatar ? theme.paddingTagAvatarSide : theme.paddingTagTextSide,
    paddingRight: ({ onRemove }) =>
      onRemove ? theme.paddingTagRemoveSide : theme.paddingTagTextSide,
    borderRadius: theme.borderRadiusTag,
    lineHeight: theme.sizeTag,
    height: theme.sizeTag,
    alignSelf: 'flex-start',
  },
  text: {
    color: theme.colorTextTagBasic,
  },
  button: {
    '&:hover': {
      backgroundColor: theme.colorBackgroundTagBasicRemoveHover,
    },
  },
  avatar: {
    width: theme.size2X,
    height: theme.size2X,
    backgroundColor: 'white',
    borderRadius: theme.borderRadiusTag,
  },
}))
