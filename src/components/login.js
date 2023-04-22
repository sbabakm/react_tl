import React from "react";
const Login = ({history}) => {
    const ClickHandler = () => {
        history.replace('/');
       //history.push('/');
    }
    return (
    <div>
      <h3>Login</h3>
      <button onClick={ClickHandler}>ورود</button>
    </div>
  );
};
export default Login;
