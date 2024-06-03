import PageTitle from "../components/PageTitle"
import Googlein from "../components/Googlein"
import InputBox from "../components/InputBox"
import Button from "../components/Button"
import { Bottomwarning } from "../components/Bottomwarning"
import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

export default function SigninPage(){

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    async function login(event) {
        event.preventDefault();
        try {
          await axios.post("http://localhost:8080/api/v1/user/login", {
            email: email,
            password: password,
            }).then((res) => 
            {
             console.log(res.data);
             
             if (res.data.loginResponse.message == "Email not exits") 
             {
               alert("Email not exits");
             } 
             else if(res.data.loginResponse.message == "Login Success")
             { 
                
                navigate('/home');
             } 
              else 
             { 
                alert("Incorrect Email and Password not match");
             }
          }, fail => {
           console.error(fail); // Error!
  });
        }

 
         catch (err) {
          alert(err);
        }
      
      }

      function setEmailInput(event) {
        setEmail(event.target.value);
      }
        function setPasswordInput(event) {
            setPassword(event.target.value);
        }



    return <div className="bg-white w-300 h-screen flex justify-center">
            <div className="flex flex-col justify-center">
                <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4 shadow-lg">
                    <PageTitle title="Sign in to your Account"/>
                    <Googlein />
                    <div>
                        <hr className="h-px my-8 bg-gray-200 border-0"/>
                    </div>
                    <InputBox placeholder="Email" onChange={setEmailInput}/>
                    <InputBox placeholder="Password" onChange={setPasswordInput}/>
                    <Button label="SIGN IN" onchange={login}/>
                    <div className="flex justify-between mt-3">
                        <Bottomwarning label={"Forget Password?"} to={"/forgetpassword"} />
                        <Bottomwarning label="Create your Account" to="/signup" />
                    </div>
                </div>
        </div>
    </div>
}