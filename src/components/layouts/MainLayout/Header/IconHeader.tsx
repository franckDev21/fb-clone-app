import React, { FC, ReactNode } from 'react'

interface IconHeaderProps {
  className?: string;
  children?: ReactNode;
}

const IconHeader: FC<IconHeaderProps> = ({ className = '', children }) => {
  return (
    <div className={`${className} p-2.5 flex justify-center items-center bg-gray-200 hover:bg-gray-300 transition cursor-pointer rounded-full`}>
      {children}
    </div>
  )
}

export default IconHeader