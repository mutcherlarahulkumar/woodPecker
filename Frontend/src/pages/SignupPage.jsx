import PageTitle from "../components/PageTitle"
import Googlein from "../components/Googlein"
import InputBox from "../components/InputBox"
import Button from "../components/Button"

export default function SigninPage(){
    return <div className="bg-white w-300 h-screen flex justify-center">
            <div className="flex flex-col justify-center">
                <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4 shadow-lg">
                    <PageTitle title="Create your Account"/>
                    <Googlein />
                    <div>
                        <hr className="h-px my-8 bg-gray-200 border-0"/>
                    </div>
                    <InputBox placeholder="Email"/>
                    <InputBox placeholder="Password"/>
                    <Button label="Create Account"/>
                </div>
        </div>
    </div>
}