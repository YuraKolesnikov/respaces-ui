import React from 'react'
import classNames from 'classnames';
import {func, oneOf } from 'prop-types'

import './Button.scss'

interface ButtonProps {
  onClick: any,
  size: string,
  children: any,
}

export const BUTTON_SIZES = {
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large',
  LIST: []
}

BUTTON_SIZES.LIST = [
  BUTTON_SIZES.SMALL,
  BUTTON_SIZES.MEDIUM,
  BUTTON_SIZES.LARGE
]

const Button = (props: ButtonProps) => {
  const { onClick, size, children } = props

  const classList = classNames(
    'button',
    size,
  )

  return (
    <button onClick={onClick} className={classList}>{children}</button>
  )
}

Button.defaultProps = {
  size: BUTTON_SIZES.SMALL
}

Button.propTypes = {
  onClick: func,
  size: oneOf(BUTTON_SIZES.LIST),
}

export default Button
