import React from 'react'

const Navbar = () => {
  return (
    <div className='nabvar'>
        <input type="text" placeholder='Search...' />
      <div className='new'><i class="fa-solid fa-circle-plus"></i> New</div>
      <div className='read_email'><i class="fa-solid fa-envelope-open"></i> Mail as a read</div>
    </div>
  )
}

export default Navbar
