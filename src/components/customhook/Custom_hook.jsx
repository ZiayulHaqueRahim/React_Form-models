import useInputState from "./useInputState";


const Custom_hook = () => {
    const[name,handleNameChane] = useInputState('rongon')


    const handleSubmit = e =>{
        console.log('form data', name)
        e.preventDefault();
    }
    return (
        <div>
            <form  onSubmit={handleSubmit}>
                <input placeholder="enter your name" value={name} onChange={handleNameChane} type='text' name='name' ></input>
                <br />
                <input placeholder="enter your email" type='email' name='email' ></input>
                <br />
                <input  placeholder="enter your passcode" type="password" name='password'></input>
                <br />
                <input type='submit' value='submit'></input>
            </form>
        </div>
    );
};

export default Custom_hook;