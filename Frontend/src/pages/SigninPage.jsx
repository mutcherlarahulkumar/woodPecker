import PageTitle from "../components/PageTitle"
import Googlein from "../components/Googlein"
import InputBox from "../components/InputBox"
import Button from "../components/Button"
import { Bottomwarning } from "../components/Bottomwarning"

export default function SigninPage(){
    return <div className="bg-white w-300 h-screen flex justify-center">
            <div className="flex flex-col justify-center">
                <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4 shadow-lg">
                    <PageTitle title="Sign in to your Account"/>
                    <Googlein />
                    <div>
                        <hr className="h-px my-8 bg-gray-200 border-0"/>
                    </div>
                    <InputBox placeholder="Email"/>
                    <InputBox placeholder="Password"/>
                    <Button label="SIGN IN"/>
                    <div className="flex justify-between mt-3">
                        {/* <div className="text-xs text-blue-300 hover:cursor-pointer">Forget Password?</div>
                        <div className="text-xs text-blue-300 hover:cursor-pointer">Create your Account</div> */}
                        <Bottomwarning label={"Forget Password?"} to={"/forgetpassword"} />
                        <Bottomwarning label="Create your Account" to="/signup" />
                    </div>
                </div>
        </div>
    </div>
}