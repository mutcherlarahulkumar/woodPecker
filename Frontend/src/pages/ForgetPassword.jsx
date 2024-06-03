import PageTitle from "../components/PageTitle"
import InputBox from "../components/InputBox"
import Button from "../components/Button"


export default function ForgetPassword(){
    return <div className="bg-white w-300 h-screen flex justify-center">
            <div className="flex flex-col justify-center">
                <div className="rounded-lg bg-white w-100 text-center p-2 h-max px-4">
                    <div className="font-bold mb-2">Forget your Password?</div>
                    <PageTitle title="Enter your email address to reset your Password"/>
                    <InputBox placeholder="Email"/>
                    <Button label="Reset your Password"/>
                </div>
        </div>
    </div>
}