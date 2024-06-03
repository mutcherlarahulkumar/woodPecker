import { useRecoilState, useRecoilValue } from 'recoil';

import { SideBarAtom } from "../store/atoms/SideBarAtom";


export default function SideBar(){
    const sidebarToggle = useRecoilValue(SideBarAtom);
    return <div className={`${sidebarToggle ? "hidden":"block"} w-60 bg-blue-600 fixed h-full px-4 py-2 transition-all `}>
        <div className="my-2 mb-4">
            <h1 className="text-2x text-white font-bold">DashBoard</h1>
        </div>
        <hr />
        <ul className="mt-7 text-white font-bold h-5/6 flex flex-col justify-between">
            <div>
                <li className="mb-2 rounded hover:shadow hover:bg-blue-500 py-2"><a href="/home"  className="px-3">Customers</a></li>
                <li className="mb-2 rounded hover:shadow hover:bg-blue-500 py-2"><a href="/projects"  className="px-3">Projects</a></li>
                <li className="mb-2 rounded hover:shadow hover:bg-blue-500 py-2"><a href="/products"  className="px-3">Products</a></li>
            </div>
            <div>
                <li className="mb-2 rounded hover:shadow hover:bg-blue-500 py-2"><a href="" className="px-3">Profile</a></li>
            </div>
        </ul>
    </div>
}