import React from 'react'
import {NavLink} from 'react-router-dom'


export const Navbar: React.FunctionComponent = () => {
    return (
        <nav>
            <div className='nav-wrapper pink darken-4 px1'>
                <NavLink to='/' className='brand-logo'>ToDo App</NavLink>
                <ul className='right hide-on-med-and-down'>
                    <li><NavLink to='/'>Список дел</NavLink></li>
                    <li><NavLink to='/about'>Информация</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}