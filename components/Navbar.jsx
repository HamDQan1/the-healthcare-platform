import React from 'react'

const Navbar = () => {
  return (
    <div className="w-1/5 bg-black h-screen p-4">
    <div className="text-red-600 text-3xl font-bold mb-4">Quora</div>
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
        <li className="flex items-center text-white">
            <i className="fas fa-laptop-code mr-2"></i> Computer Science
        </li>
        <li className="flex items-center text-white">
            <i className="fas fa-code mr-2"></i> Web Development
        </li>
        <li className="flex items-center text-white">
            <i className="fas fa-desktop mr-2"></i> Computer Programming
        </li>
        <li className="flex items-center text-white">
            <i className="fas fa-tree mr-2"></i> Christmas Tradition
        </li>
        <li className="flex items-center text-white">
            <i className="fas fa-anchor mr-2"></i> Naval Strategy
        </li>
        <li className="flex items-center text-white">
            <i className="fas fa-heart mr-2"></i> Emotional Empathy
        </li>
        <li className="flex items-center text-white">
            <i className="fas fa-crown mr-2"></i> Royal Family
        </li>
    </ul>
</div>
  );
}

export default Navbar