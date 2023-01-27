import React from 'react'
import { useState } from 'react'
import './Login.css'
import SignUp from './SignUp'

function Login() {
    const [signIn, setSignIn] = useState(false)
  return (
    <div className='login'>
        <div className="login_background">
        <img
             className='login__logo'
             alt=''
             src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png'
             />
            <button className='login__button' onClick={()=>setSignIn(true)}>
                Sign In
            </button>
            <div className="login__gradient">

            </div>
            <div className="login__body">
                {signIn ? (
                    <SignUp/>
                ):(
                    <>
                    <h1>
                    Unlimited movies, TV shows, and more.
                    </h1>
                    <h2>
                    Watch anywhere. Cancel anytime.
                    </h2>
                    <h3>
                    Ready to watch? Enter your email to create or restart your membership.
                    </h3>

                    <div className="login__input">
                        <form>
                            <input type="email" placeholder='Email Address'/>
                            <button className="login__getStarted" onClick={()=>setSignIn(true)}>
                                GET STARTED
                            </button>
                        </form>
                    </div>
                </>
                )}
                
            </div>
        </div>
    </div>
  )
}

export default Login