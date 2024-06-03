import CustomerForm from "../components/CustomerForm"
import Products from "../components/Products"
import Projects from "../components/Projects"
import CustomerInput from "../components/CustomerInput"
import SideBar from "../components/SideBar"
import DashBoard from "../components/DashBoard"


export default function HomePage(){
    return <div>
        <SideBar />
        <DashBoard />
        <CustomerInput />
        <CustomerForm />
    </div>
}