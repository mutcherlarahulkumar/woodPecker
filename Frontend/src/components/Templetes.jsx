import { SideBarAtom } from "../store/atoms/SideBarAtom";
import { useRecoilState, useRecoilValue } from 'recoil';
import SideBar from "./SideBar";
import DashBoard from "./DashBoard";

export default function Templetes(){
    const sidebarToggle = useRecoilValue(SideBarAtom);
    return (
        <div>
            <SideBar />
            <DashBoard />
            <div className={`${sidebarToggle ? "":"ml-60"}`}>
            Templetes Page
        </div>
        </div>
    )
}