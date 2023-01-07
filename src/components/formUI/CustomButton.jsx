import { Button } from '@mui/material'
import React from 'react'

const CustomButton = ({children,...otherProps}) => {
  return (
    <Button
    onClick = {e => {
        e.stopPropagation()
    }}
    variant='contained'
    {...otherProps}
    sx = {{
        textTransform : 'revert',
        borderRadius: "20px",
        minWidth : '160px'
    }}
    >{children}</Button>
  )
}

export default CustomButton