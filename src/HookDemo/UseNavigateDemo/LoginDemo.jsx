import React from 'react'
import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
const LoginDemo = () => {

    const userLoginRef = useRef({ username: '', password: '' });
    const navigate = useNavigate()

    const handleChange = (e) => {
        const { value, name } = e.target;
        userLoginRef.current[name] = value;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const { username, password } = userLoginRef.current;
        if (username == 'cybersoft' && password == 'cybersoft') {
            //Đúng thì chuyển hướng qua trang profile
            navigate('/profile');
        } else {
            alert('Tài khoản mật khẩu không đúng');
        }
    }

    return (
        <form className='container' onSubmit={handleSubmit}>
            <h3>LoginDemo</h3>
            <div className='form-group'>
                <p>Username</p>
                <input className='form-control' name="username" onChange={handleChange} />
            </div>
            <div className='form-group'>
                <p>Password</p>
                <input className='form-control' name="password" type={'password'} onChange={handleChange} />
            </div>
            <div className='form-group'>
                <button className='btn btn-success mt-2' type='submit'>Login</button>
            </div>
        </form>
    )
}

export default LoginDemo