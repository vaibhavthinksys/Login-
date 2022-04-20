import React from 'react'
import './index.css'
import flip from './flip.png'
import { findAllByPlaceholderText } from '@testing-library/react'
const index = () => {
    return (
        <div className='login'>
            
                <div className='wrapping'>
                    <div className='heading'><h1>Flipkart</h1></div>
                    <div className='flip'><img src={flip} alt='flipkart' /></div>


                </div>

                <div className='page'>
                    <div className='line1'>
                        <h3><b>Log in for the best experience</b> </h3>

                    </div>
                    <div className='line2'>
                        <h4> Enter your phone number to continue</h4>

                    </div>
                    <div className='inputdata'>
                        <input type='text' placeholder='Phone Number'></input>
                    </div>
                    <div className='Email'><h5>Use Email</h5></div>


                    <div className='subject'>
                        <p> By continuing ,you agree to Flipkart's <span className='foot'>Terms of Use </span>and <span className='foot'>Privacy Policy</span> </p>
                    </div>

                    <div className='wrapper'>

                        <button type='submit'>Complete</button>
                    </div>

                </div>
            
        </div>
    )
}

export default index