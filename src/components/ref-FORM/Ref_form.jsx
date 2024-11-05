import { useEffect } from "react";
import { useRef } from "react";

const RefForm = () => {
    
    const nameRef =  useRef(null);
    const emailRef = useRef(null);
    const phoneRef = useRef(null);
        useEffect(() => {
            nameRef.current.focus();
        }, [])


    const handleSubmit = (event)=>{
        event.preventDefault();
        console.log(nameRef.current.value)
        console.log(emailRef.current.value)
        console.log(phoneRef.current.value)

    }


    return (
        <div>
             <form onSubmit={handleSubmit}>
                <input ref={nameRef}  placeholder="enter your name" type='text'name='name' ></input>
                <br/>
                <input ref={emailRef} defaultValue={'abc@gmail.com'} placeholder="enter your email" type='email'name='email' ></input>
                <br/>
                <input ref={phoneRef} placeholder="enter your phone no:" type="text" name='phone'></input>
                <br/>
                <input  type='submit' value='submit'></input>
            </form>
        </div>
    );
};

export default RefForm;