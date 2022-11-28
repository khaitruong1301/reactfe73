import React, { Component } from 'react'
import { Outlet, NavLink } from 'react-router-dom'

export default class HomeTemplate extends Component {
    render() {
        return (
            <div>
                <header className='bg-dark text-white p-2 nav'>
                    <NavLink className={({ isActive }) => isActive ? 'nav-link bg-white text-dark' : 'nav-link'} to='/home'>Home</NavLink>
                    <NavLink className={({ isActive }) => isActive ? 'nav-link bg-white text-dark' : 'nav-link'} to='/register'>Register</NavLink>
                    <NavLink className={({ isActive }) => isActive ? 'nav-link bg-white text-dark' : 'nav-link'} to='/login'>Login</NavLink>
                    <NavLink className={({ isActive }) => isActive ? 'nav-link bg-white text-dark' : 'nav-link'} to='/btgiohang'>
                        <i className='fa fa-cart-plus'></i> BT giỏ hàng

                    </NavLink>
                    <NavLink className={({ isActive }) => isActive ? 'nav-link bg-white text-dark' : 'nav-link'} to='/form'>Form</NavLink>
                    <NavLink className={({ isActive }) => isActive ? 'nav-link bg-white text-dark' : 'nav-link'} to='/reactlifecycle'>React lifecycle</NavLink>
                    <NavLink className={({ isActive }) => isActive ? 'nav-link bg-white text-dark' : 'nav-link'} to='/redux'>Redux</NavLink>
                    <NavLink className={({ isActive }) => isActive ? 'nav-link bg-white text-dark' : 'nav-link'} to='/demogame'>Game</NavLink>
                    <div className="dropdown">
                        <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Hooks
                        </button>
                        <ul className="dropdown-menu">
                            <li>
                                <NavLink className="dropdown-item" to="/demo-usestate">Use State</NavLink></li>
                            <li>
                                <NavLink className="dropdown-item" to="/demo-useeffect">Use effect</NavLink></li>
                            <li>
                                <NavLink className="dropdown-item" to="/demo-usecallback">Use callback</NavLink></li>
                            <li>
                                <NavLink className="dropdown-item" to="/demo-usememo">Use memo</NavLink></li>
                            <li>
                                <NavLink className="dropdown-item" to="/demo-useredux">Use redux</NavLink></li>
                            <li>
                                <NavLink className="dropdown-item" to="/demo-useref">Use ref</NavLink></li>
                        </ul>
                    </div>
                    <div className="dropdown">
                        <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Route
                        </button>
                        <ul className="dropdown-menu">
                            <li>
                                <NavLink className="dropdown-item" to="/demo-usenavigate">Use navigate</NavLink>
                            </li>
                            <li>
                                <NavLink className="dropdown-item" to="/search">Use search param</NavLink>
                            </li>
                        </ul>
                    </div>



                </header>
                <div className='content' style={{ minHeight: '75vh' }}>
                    <Outlet />
                </div>
                <header className='bg-dark text-white p-5'>Footer</header>
            </div>
        )
    }
}

// function main ({id,isActive}) {
//     let {id,isActive} = props
// }