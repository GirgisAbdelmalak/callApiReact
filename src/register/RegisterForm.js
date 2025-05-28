import {useState} from 'react'

function RegisterForm(){
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    const usernameRegex = /^\S+$/
    const passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/

    const[name,setName] = useState('')
    const[email,setEmail] = useState('')
    const[username,setUsername] = useState('')
    const[password,setPassword] = useState('')
    const[confPass,setConfPass] = useState('')
    const[nameError,setNameError] = useState('')
    const[emailError,setEmailError] = useState('')
    const[usernameError,setUsernameError] = useState('')
    const[passwordError,setPasswordError] = useState('')
    const[confPassError,setConfPassError] = useState('')
    const submitHandler = (e) => {
        e.preventDefault()
    }
    const inputHandler = (e) => {
        if (e.target.name == 'name'){
            setName(e.target.value)
            setNameError(e.target.value.length == 0 ? 'This field is required' : e.target.value.length < 3 && 'Name must be more than 3 characters')
        } 
        else if(e.target.name =='email'){
            setEmail(e.target.value)
            setEmailError(e.target.value.length == 0 ? 'This field is required' : !emailRegex.test(e.target.value) && 'Please, Enter a valid email')
        }
        else if(e.target.name =='username'){
            setUsername(e.target.value)
            setUsernameError(e.target.value.length == 0 ? 'This field is required' : !usernameRegex.test(e.target.value) && 'Username must not contain spaces')
        }
        else if(e.target.name =='password'){
            setPassword(e.target.value)
            setPasswordError(e.target.value.length == 0 ? 'This field is required' : !passRegex.test(e.target.value) && 'Please Enter complex password')
        }
        else{
            setConfPass(e.target.value)
            setConfPassError(e.target.value.length == 0 ? 'This field is required': (e.target.value) != password && 'Passwords does not match')
        }
    }
    return (
        <form onSubmit={(e)=>submitHandler(e)}>
            <div className='container mt-5'>
                <div className='mb-3'>
                        <label className="form-label">Name</label>
                        <input type='text' name='name' value={name} className={`form-control ${nameError ? 'is-invalid' : 'is-valid'} `} onChange={(e) => inputHandler(e)}/>
                </div>
                <p className='text-danger'>{nameError}</p>
                <div className='mb-3'>
                        <label className="form-label">Email Address</label>
                        <input type='text' name='email' value={email} className={`form-control ${emailError ? 'is-invalid' : 'is-valid'} `} onChange={(e) => inputHandler(e)}/>
                </div>
                <p className='text-danger'>{emailError}</p>
                <div className='mb-3'>
                        <label className="form-label">Username</label>
                        <input type='text' name='username' value={username} className={`form-control ${usernameError ? 'is-invalid' : 'is-valid'} `} onChange={(e) => inputHandler(e)}/>
                </div>
                <p className='text-danger'>{usernameError}</p>
                <div className='mb-3'>
                        <label className="form-label">Password</label>
                        <input type='password' name='password' value={password} className={`form-control ${passwordError ? 'is-invalid' : 'is-valid'} `} onChange={(e) => inputHandler(e)}/>
                </div>
                <p className='text-danger'>{passwordError}</p>
                <div className='mb-3'>
                        <label className="form-label">Confirm Password</label>
                        <input type='password' name='confPass' value={confPass} className={`form-control ${confPassError ? 'is-invalid' : 'is-valid'} `} onChange={(e) => inputHandler(e)}/>
                </div>
                <p className='text-danger'>{confPassError}</p>
                <div className='d-flex justify-content-center'>
                    <button disabled = {passwordError || emailError} type='submit' className='btn btn-primary px-5 me-3'>Log in</button>
                </div>
            </div>
        </form>
    )
}

export default RegisterForm;