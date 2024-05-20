import { SideBarAtom } from "../store/atoms/SideBarAtom";
import { useRecoilState, useRecoilValue } from 'recoil';
import SideBar from "../components/SideBar"
import DashBoard from "../components/DashBoard"

export default function Products(){
    const sidebarToggle = useRecoilValue(SideBarAtom);
    return <div>
        <SideBar />
        <DashBoard />
        <div className={`${sidebarToggle ? "":"ml-60"}`}>
        Products
    </div>
    </div>
}