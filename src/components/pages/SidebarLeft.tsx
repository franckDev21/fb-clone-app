import React, { FC } from 'react'
import { HiHome } from 'react-icons/hi'

interface SidebarLeftProps {
  className?: string;
}

const SidebarLeft: FC<SidebarLeftProps> = ({ className = '' }) => {
  return (
    <div className={`${className} max-w-[300px] bg-white`}>
      <div className='flex items-center space-x-4'>
        <span><HiHome /> </span>
      </div>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam, nisi vel consequatur exercitationem voluptatem perferendis magni ad fugiat minima necessitatibus, delectus assumenda ea maxime, reprehenderit aliquid laboriosam debitis alias pariatur!
    </div>
  )
}

export default SidebarLeft