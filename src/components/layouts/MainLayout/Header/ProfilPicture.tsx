import Image from 'next/image'
import React, { FC } from 'react'
import { BiChevronDown } from 'react-icons/bi'

interface ProfilPictureProps {
  className?: string
}

const ProfilPicture: FC<ProfilPictureProps> = ({ className = '' }) => {
  return (
    <div className={`h-10 w-10 relative cursor-pointer ${className}`}>
      <Image src='/assets/imgs/photo.jpg' alt='profil image' width={100} height={100} className='absolute border-2 border-gray-300 shadow rounded-full w-full h-full to' />
      <span className='bg-gray-200 border-2 border-white rounded-full absolute text-xs bottom-0 right-0'>
        <BiChevronDown />
      </span>
    </div>
  )
}

export default ProfilPicture