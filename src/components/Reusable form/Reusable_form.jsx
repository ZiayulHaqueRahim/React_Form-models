

const Reusable_form = ({formTitle, handleSubmit, submitBtntext ='Submit', children}) => {

   const handleLocalSubmit = e =>{
    e.preventDefault();
    const data ={
         name: e.target.name.value,
         email: e.target.email.value,
         password: e.target.password.value,

    }
    handleSubmit(data)
   }

    return (
        <div>
             {children}  
             <form onSubmit={handleLocalSubmit}>
                <input  placeholder="enter your name" type='text'name='name' ></input>
                <br/>
                <input placeholder="enter your email" type='email'name='email' ></input>
                <br/>
                <input placeholder="enter your phone no:" type="password" name='password'></input>
                <br/>
                <input  type='submit' value={submitBtntext}></input>
            </form>
            
        </div>
    );
};

export default Reusable_form;