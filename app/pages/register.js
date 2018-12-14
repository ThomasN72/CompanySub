import SignUp from '../components/SignUp';

import App from 'next/app';

class Register extends App {
  render() {
    this.componentDidMount(() => {
      console.log("THis mounted...");
    })
    
    return (
      <div>
        <h1>Register</h1>
        <SignUp />
      </div>
    )
  }
}

export default Register;
