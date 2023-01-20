import React from 'react'

const Navbar = () => {
  return (
    <nav className="bg-gray-100  inset-x-0">
    <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
            <div className="flex space-x-4">
                
                <div> <a href="#" className="flex items-center py-5 px-2 text-gray-700 hover:text-gray-900"> <i className='bx bxl-medium-old mr-1 text-xl mb-1 text-blue-400'></i> <span className="font-bold">Moto Dev</span> </a> </div> 
                <div className="hidden md:flex items-center space-x-1"> <a href="#" className="py-5 px-3 text-gray-700 hover:text-gray-900">Home</a> <a href="#" className="py-5 px-3 text-gray-700 hover:text-gray-900">Contact</a> <a href="#" className="py-5 px-3 text-gray-700 hover:text-gray-900">Pricing</a> <a href="#" className="py-5 px-3 text-gray-700 hover:text-gray-900">Features</a> </div>
            </div> 
            <div className="hidden md:flex items-center space-x-1"> <a href="" className="py-5 px-3">Login</a> <a href="" className="py-2 px-3 bg-yellow-400 text-white hover:bg-yellow-300 text-sm hover:text-yellow-800 rounded transition duration-300">Signup</a> </div> 
            <div className="md:hidden flex items-center"> <button className="mobile-menu-button focus:outline-none">
                     <i className='bx bx-menu text-3xl mt-1'></i> </button> </div>
        </div>
    </div> 
    <div className="mobile-menu hidden md:hidden"> <a href="#" className="block py-2 px-4 text-sm hover:bg-gray-200">Home</a> <a href="#" className="block py-2 px-4 text-sm hover:bg-gray-200">Contact</a> <a href="#" className="block py-2 px-4 text-sm hover:bg-gray-200">Pricing</a> <a href="#" className="block py-2 px-4 text-sm hover:bg-gray-200">Features</a> </div>
</nav>
  )
}

export default Navbar