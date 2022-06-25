import React from 'react'
import { Link } from 'react-router-dom'

export default function Login() {
    return (
        <>
            <br /><br /><br />
            <h2 className='heading'>Sign In/Sign Up</h2>
            <br />
            <form className='w-75 m-auto'>
                <div class="row mb-3">
                    <label for="inputEmail3" class="col-xxl-2 col-form-label">Email</label>
                    <div class="col-xxl-10">
                        <input type="email" class="form-control" id="inputEmail3"/>
                    </div>
                </div>
                <div class="row mb-3">
                    <label for="inputPassword3" class="col-xxl-2 col-form-label">Password</label>
                    <div class="col-xxl-10">
                        <input type="password" class="form-control" id="inputPassword3"/>
                    </div>
                </div>
                
                <button type="submit" class="btn button-33 me-3">Sign in</button>
                <Link to="/Signup" class="btn button-33 me-3">Sign up</Link>
            </form>

        </>

    )
}
