import { useState } from "react";

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

function Form(){
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [emailError, setEmailError] = useState('')
    const [passwordError,setPasswordError] = useState('')

    const inputHandler = (e) => {
        if(e.target.name == 'email'){
            setEmail(e.target.value)
            setEmailError(e.target.value.length == 0 ? 'This field is required': !emailRegex.test(e.target.value) && 'Enter a valid email')
        }
        else{
            setPassword(e.target.value)
            setPasswordError(e.target.value.length == 0 ? 'This field is required': e.target.value.length < 8 && 'Password must be at least 8 characters')
        }
    }
    const submitHandler = (e) => {
        e.preventDefault()
    }
    const showPassword = ()=> {
        var btnPassword = document.getElementById('pass')
        if (btnPassword.getAttribute('type') == 'password')
            btnPassword.setAttribute('type','text')
        else
            btnPassword.setAttribute('type','password')
    }
    return(
        <form onSubmit={(e) => submitHandler(e)}>
            <div className='container mt-5'>
                <div className='mb-3'>
                    <label className="form-label">Email Address</label>
                    <input type='text' name='email' value={email} className={`form-control ${emailError ? 'is-invalid' : 'is-valid'} `} onChange={(e) => inputHandler(e)}/>
                </div>
                <p className="text-danger">{emailError}</p>
                <div className='mb-3'>
                    <label className="form-label">Password</label>
                    <input id="pass" type='password' name='password' value={password} className={`form-control ${passwordError ? 'is-invalid' : 'is-valid'}`} onChange={(e) => inputHandler(e)}/>
                    
                </div>
                <p className="text-danger">{passwordError}</p>

                <div className='d-flex justify-content-center'>
                    <button disabled = {passwordError || emailError} type='submit' className='btn btn-primary px-5 me-3'>Log in</button>
                    <button type="button" className="btn btn-info" onClick={()=>showPassword()}>Show Password</button>
                </div>
            </div>
        </form>
    )
}

export default Form;