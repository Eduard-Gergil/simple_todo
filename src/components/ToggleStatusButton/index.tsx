import { Button } from '@chakra-ui/react'
import React from 'react'

const ToggleStatusButton: React.FC<IToggleStatusButton> = ({ text, isActive, onClick }) => {
  return (
    <Button
      w='100%'
      pos='relative'
      bg='white'
      border='3px solid transparent'
      borderRadius='unset'
      fontSize={'18px'}
      letterSpacing={'3px'}
      _hover={{
        color: '#8d8d8d',
        bg: 'unset'
      }}
      onClick={onClick}
      {...isActive && {
        borderBottomColor: '#c40404'
      }}
    >
      {text}
    </Button>
  )
}

export default ToggleStatusButton

interface IToggleStatusButton {
  text: string
  isActive: boolean
  onClick: () => void
}