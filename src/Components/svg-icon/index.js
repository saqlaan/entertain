import React from 'react'
import PropTypes from 'prop-types'
import { SvgXml } from 'react-native-svg'

const SvgIcon = ({ stroke, fill, svg }) => {
  return <SvgXml stroke={stroke} height={'100%'} width={'100%'} xml={svg} />
}

SvgIcon.propTypes = {
  fill: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
}

export default SvgIcon
