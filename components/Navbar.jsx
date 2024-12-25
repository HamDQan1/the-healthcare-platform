import React from 'react'

const Navbar = () => {
  return (
    <div className="w-1/5 bg-black h-screen p-4">
    <div className="text-red-600 text-3xl font-bold mb-4">TheHealth</div>
    <ul className="space-y-4">
        <li className="flex items-center text-white">
            <i className="fas fa-home mr-2"></i> Home
        </li>
        <li className="flex items-center text-white">
            <i className="fas fa-pen mr-2"></i> Create Space
        </li>
        <li className="flex items-center text-white">
            <i className="fas fa-book mr-2"></i> Writing
       </li>
    </ul>
</div>
  );
}

export default Navbar