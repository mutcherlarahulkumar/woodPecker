import { useRecoilValue } from "recoil"

import { SideBarAtom } from "../store/atoms/SideBarAtom";

export default function CustomerForm(){
    const sidebarToggle = useRecoilValue(SideBarAtom);
    return (
        <div className={`${sidebarToggle ? "":"ml-60"}`}>
            <div className="font-semibold text-xl ml-6 my-3">Customer Form</div>
            <div className="text-lg mt-8 ml-9 pl-4">
                <div className="my-3">Name</div>
                <div  className="my-3">Address</div>
                <div  className="my-3">Phone Number 1</div>
                <div  className="my-3">Phone Number 2</div>
                <div  className="my-3">Email ID</div>
            </div>
        </div>
    )
}