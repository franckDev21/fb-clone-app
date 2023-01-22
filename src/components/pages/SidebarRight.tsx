import React, { FC } from 'react'

interface SideBarRightProps {
  className?: string;
}

const SideBarRight: FC<SideBarRightProps> = ({ className = '' }) => {
  return (
    <div className={`${className} max-w-[300px] bg-white`}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil aut recusandae possimus illo perspiciatis officia, blanditiis, cum similique illum voluptatibus, labore ut odit voluptatum iste dolor nesciunt fugiat! Labore, eius.
    </div>
  )
}

export default SideBarRight