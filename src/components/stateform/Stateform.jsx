import { useState } from "react";


const Stateform = () => {

    const [email,setEmail] = useState(null);
    const [password,setPassword] = useState(null);
    const [name,setName] = useState('Full Name');
    const [error,setError] = useState('');
    const handleSubmit = (event)=>{
            event.preventDefault();
            if(password.length < 6){
                setError('password should contain 6 Characters or longer!')
            }else{
                setError('');
                console.log(name,email,password)
            }
            
    }

    const handleNameChange = e =>{
        setName(e.target.value);
    }
    const handleEmailChange = e =>{
        setEmail(e.target.value);
    }
    const handlePasswordChange = e =>{
        setPassword(e.target.value);
    }


    return (
        <div>
             <div>
             <form onSubmit={handleSubmit}>
                <input onChange={handleNameChange} value={name}
                placeholder="enter your name" type='text'name='name' ></input>
                <br/>
                <input onChange={handleEmailChange}
                 placeholder="enter your email" type='email'name='email' ></input>
                <br/>
                <input onChange={handlePasswordChange}
                 placeholder="enter your passward" type="password" name='password' required></input>
                <br/>
                <input  type='submit' value='submit'></input>
                {
                    error && <p>{error}</p>
                }
            </form>
        </div>
            
        </div>
    );
};

export default Stateform;