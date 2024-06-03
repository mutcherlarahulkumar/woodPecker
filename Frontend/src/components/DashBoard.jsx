import NavBar from "./NavBar"
import { useRecoilState, useRecoilValue } from 'recoil';

import { SideBarAtom } from "../store/atoms/SideBarAtom";

export default function DashBoard(){

    const [sidebarToggle,setSidebarToggle] = useRecoilState(SideBarAtom);

    return <div className={`${sidebarToggle ? "":"ml-60"}`}>
        <NavBar sidebarToggle={sidebarToggle} setSidebarToggle={setSidebarToggle}/>
    </div>
}