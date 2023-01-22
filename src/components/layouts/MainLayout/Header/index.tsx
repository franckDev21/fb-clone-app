import Logo from '@/components/ui-kit/Logo';
import React, { FC } from 'react'
import HeaderIcons from './HeaderIcons';
import InputSearch from './InputSearch';

interface HeaderProps {
  className?: string;
}

const Header: FC<HeaderProps> = ({ className = '' }) => { 
  return (
    <header className={`${className} bg-white py-2 px-4 shadow flex items-center justify-between`}>
      <Logo />
      <InputSearch />
      <HeaderIcons />
    </header>
  )
}

export default Header
