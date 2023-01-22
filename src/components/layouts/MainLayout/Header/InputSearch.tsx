import React, { FC } from 'react'
import { GoSearch } from 'react-icons/go'

interface InputSearchProps {
  className?: string;
}

const InputSearch: FC<InputSearchProps> = ({ className = '' }) => {
  return ( 
    <div className={`${className} container relative rounded-full overflow-hidden mx-auto`}>
      <GoSearch className='absolute top-1/2 left-4 text-base text-secondary -translate-y-1/2' />
      <input type="text" placeholder='Rechercher sur Facebook' className='w-full pb-2 placeholder:text-secondary px-10 py-1.5 bg-light' />
    </div>
  )
}

export default InputSearch