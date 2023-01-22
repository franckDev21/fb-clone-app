import React, { FC } from 'react'

interface HeaderProps {
  className?: string;
}

const Header: FC<HeaderProps> = ({ className = '' }) => {
  return (
    <header className={`${className}`}>
      
    </header>
  )
}

export default Header
