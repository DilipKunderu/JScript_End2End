// @flow

import React from 'react'

type Props = {
  label: string,
  handleClick: Function,
}

const button = ({ label, handleClick }: Props) => (
  <button onClick={handleClick}>{label}</button>
)

export default button
