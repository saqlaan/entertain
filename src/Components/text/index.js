import React, { Children } from 'react'
import PropTypes, { node } from 'prop-types'
import { StyledText } from './styled'

const Text = ({ fontSize, textAlign, textTransform, fontWeight, children }) => {
  return (
    <StyledText
      fontSize={fontSize}
      textAlign={textAlign}
      textTransform={textTransform}
      fontWeight={fontWeight}
    >
      {children}
    </StyledText>
  )
}

Text.propTypes = {
  children: PropTypes.node.isRequired,
  fontSize: PropTypes.number,
  fontWeight: PropTypes.number || PropTypes.string,
  textAlign: PropTypes.string,
  textTransform: PropTypes.string,
}

Text.defaultProps = {
  fontSize: '16',
  fontWeight: 400,
  textAlign: 'left',
  textTransform: 'none',
}

export default Text
