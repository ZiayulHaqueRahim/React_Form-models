
import './App.css'
import Custom_hook from './components/customhook/Custom_hook'
import SimpleForm from './components/simple_form/SimpleForm'
import Stateform from './components/stateform/Stateform'
import RefForm from './components/ref-FORM/Ref_form'
import Reusable_form from './components/Reusable form/Reusable_form'

function App() {
  const handleSignUpSubmit = data =>{
    console.log('sign up complete',data)
  }
  const handleUpdateProfile = data =>{
    console.log('profile updated', data)
  }

  return (
    <div>
      <h3>Simple Form:</h3>
      <SimpleForm></SimpleForm>
      <br/>
      <br/>
      <br/>
      <h2>Ref Form:</h2>
      <RefForm></RefForm>
      <br/>
      <br/>
      <br/>
      <h1>State Controlled Form:</h1>
      <Stateform></Stateform>
      <br/>
      <br/>
      <br/>
      <h5>Custom Hook:</h5>
      <Custom_hook />
      <br/>
      <br/>
      <br/>
      <h3>Reusable Form:</h3>
      <Reusable_form formTitle={'Sign Up'} handleSubmit={handleSignUpSubmit}>
            <div>
              <h3> Sign Up </h3>
              <p>Please sign up right Now! </p>
            </div>
      </Reusable_form>
      <br />
      < br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <Reusable_form formTitle={'Profile Updated'} submitBtntext='Update' handleSubmit={handleUpdateProfile}>
          <div>
            <h2>Profile Update...</h2>
            <h5> Always keep your profile updated......</h5>
          </div>
      </Reusable_form>
    </div>
  )
}

export default App
