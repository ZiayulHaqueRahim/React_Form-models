
const SimpleForm = () => {

        const handleSubmit = (event)=>{
            event.preventDefault();
            console.log(event.target.name.value)
            console.log(event.target.email.value)
            console.log(event.target.phone.value)
        }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input  placeholder="enter your name" type='text'name='name' ></input>
                <br/>
                <input placeholder="enter your email" type='email'name='email' ></input>
                <br/>
                <input placeholder="enter your phone no:" type="text" name='phone'></input>
                <br/>
                <input  type='submit' value='submit'></input>
            </form>
        </div>
    );
};

export default SimpleForm;