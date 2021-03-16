import React, { useContext } from 'react';
import Header from '../HomePage/Header/Header';
import firebaseConfig from './FireBaseConfig';
import './Login.css'; 

import firebase from "firebase/app";
import "firebase/auth"; 
import { Link, useHistory, useLocation } from 'react-router-dom';
import { userContext } from '../../App';

const Login = () => {
    const [logInUser, setLoginUser] = useContext(userContext)
    // const [login, setLogin] = useState(false)
    if(firebase.apps.length === 0){
        firebase.initializeApp(firebaseConfig);
    }

    

    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };
    

    const handleGoogleSignIn = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider)
        .then(function(result) { 
            var Googleuser = result.user; 
            setLoginUser(Googleuser) 
            history.replace(from);  
          })
          .catch(function(error) {
            const errorMessage = error.message;
            console.log(errorMessage);
          });
    }
    return (
        <div>
            <Header></Header>
            <div className='container '>
                <div className='row'>
                    <div className='col-sm-6 login offset-sm-3 form-control'>
                        <h4>Login</h4> <br></br><br></br>
                        <button onClick={handleGoogleSignIn} className='btn-block loginBtn'>Google Sign in</button><br></br>
                        <h6>Don’t have an account? <b><Link onClick={handleGoogleSignIn} >Sign up</Link></b></h6>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;