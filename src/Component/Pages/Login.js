import { useRef, useContext } from 'react';
import { useHistory } from 'react-router-dom'
import classes from './Login.module.css';
import AuthContext from '../Store/AuthContext';

const Login = () => {
  const history=useHistory();
  const emailInputRef=useRef();
  const passwordInputRef=useRef();
  
  const loginCtx=useContext(AuthContext);

  
  const submitHandler=(event)=>{
    event.preventDefault();
const enteredEmail = emailInputRef.current.value;
const enteredPassword = passwordInputRef.current.value;

let url='https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCL88vedXWOxULmjMSR9-1BKz0CXh_xbIg';

  fetch(url,
{
  method:'POST',
  body:JSON.stringify({
    email:enteredEmail,
    password:enteredPassword,
    returnSecureToken: true,
  }),
  headers: {
    'Content-Type':'application/json',
  },
}).then((res) => {
  if (res.ok) {
return res.json()
  } else {
    return res.json().then((data) => {
     // let errorMessage='Authentication failed';
     //if(data && data.error && data.error.message) {errorMessage=data.error.message;
    // }
   alert(data.error.message);
    
    });
  }
}).then(data=>{
  loginCtx.login(data.idToken);
history.replace('/store');

}).catch(err=>{
  alert(err.message);
})
}

  return (
    <section className={classes.auth}>
      <h1>Login</h1>
      <form>
        <div className={classes.control}>
          <label htmlFor='email'>Your Email</label>
          <input type='email' id='email' required ref={emailInputRef}/>
        </div>
        <div className={classes.control}>
          <label htmlFor='password'>Your Password</label>
          <input
            type='password'
            id='password'
            required 
            ref={passwordInputRef}
          />
        </div>
        <div className={classes.actions}>
          <button
            type='button'
            className={classes.toggle}
            onClick={submitHandler}
          >Login
          </button>
        </div>
      </form>
    </section>
  );
};

export default Login;