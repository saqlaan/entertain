import React, { Children } from 'react'
import PropTypes, { node } from 'prop-types'
import { StyledSpacer } from './styled'

const Text = ({ marginVertical, marginHorizontal, children }) => {
  return (
    <StyledSpacer
      marginVertical={marginVertical}
      marginHorizontal={marginHorizontal}
    >
      {children}
    </StyledSpacer>
  )
}

Text.propTypes = {
  children: PropTypes.node,
  marginHorizontal: PropTypes.number,
  marginVertical: PropTypes.number,
}

Text.defaultProps = {
  marginHorizontal: 0,
  marginVertical: 0,
  children: null,
}

export default Text
