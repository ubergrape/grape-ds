import { createUseStyles } from 'react-jss'
import { isAvatarTag, TagProps } from '.'
import tokens from '../../tokens'

export const useStyles = createUseStyles((theme: typeof tokens) => ({
  tag: {
    backgroundColor: theme.colorBackgroundTagBasic,
    paddingLeft: (props: TagProps) =>
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
    paddingLeft: (props: TagProps) =>
      isAvatarTag(props) ? theme.paddingTagAvatarSide : null,
    paddingRight: ({ onRemove }) =>
      onRemove ? theme.paddingTagRemoveSide : null,
  },
  button: {
    padding: 0,
    '& > button': {
      width: 16,
      height: 16,
    },
    '& > button:hover': {
      backgroundColor: theme.colorBackgroundTagBasicRemoveHover,
    },
    '& > button > svg': {
      transform: 'none !important',
    },
  },
  avatar: {
    width: theme.size2X,
    height: theme.size2X,
    borderRadius: theme.borderRadiusTag,
  },
}))
