import { SideBarAtom } from "../store/atoms/SideBarAtom";
import { useRecoilState, useRecoilValue } from 'recoil';

export default function Pricing(){
    const sidebarToggle = useRecoilValue(SideBarAtom);
    return (
        <div className={`${sidebarToggle ? "":"ml-60"}`}>
            Pricing Page
        </div>
    )
}