import { SideBarAtom } from "../store/atoms/SideBarAtom";
import { useRecoilState, useRecoilValue } from 'recoil';


export default function Projects(){
    const sidebarToggle = useRecoilValue(SideBarAtom);
    return <div className={`${sidebarToggle ? "":"ml-60"}`}>
        Projects Page
    </div>
}