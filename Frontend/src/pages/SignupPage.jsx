import PageTitle from "../components/PageTitle"
import Googlein from "../components/Googlein"
import InputBox from "../components/InputBox"
import Button from "../components/Button"
import axios from "axios"
import { useState } from "react"

export default function SignupPage(){
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    async function save(event) {
        event.preventDefault();
        try {
          await axios.post("http://localhost:8080/api/v1/user/save", {
          email: email,
          password: password,
          });
          alert("Employee Registation Successfully");

        } catch (err) {
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
                    <PageTitle title="Create your Account"/>
                    <Googlein />
                    <div>
                        <hr className="h-px my-8 bg-gray-200 border-0"/>
                    </div>
                    <InputBox placeholder="Email"  onChange={setEmailInput} />
                    <InputBox placeholder="Password" onChange={setPasswordInput}  />
                    <Button label="Create Account" onchange={save} />
                </div>
        </div>
    </div>
}