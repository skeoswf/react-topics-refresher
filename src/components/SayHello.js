import React from 'react'
import PropTypes from 'prop-types'

export default function SayHello({ abomination }) {
  return (
    <div>
      hey there, {abomination}!
    </div>
  )
}

SayHello.propTypes = {
  abomination: PropTypes.string.isRequired,
}
