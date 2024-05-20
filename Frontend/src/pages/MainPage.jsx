import { SideBarAtom } from "../store/atoms/SideBarAtom";
import { useRecoilState, useRecoilValue } from 'recoil';
import DropDownButton from "../components/DropDownButton";
import DetailedMenu from "../components/DetailedMenu";
import SideBar from "../components/SideBar"
import DashBoard from "../components/DashBoard"

export default function MainPage(){
    const sidebarToggle = useRecoilValue(SideBarAtom);
    return <div>
        <SideBar />
        <DashBoard />
        <div className={`${sidebarToggle ? "":"ml-60"}  my-6 px-3`}>
        <div className="flex justify-between w-full">
            <DropDownButton option={"Property Type"} options={["Appartment","Villa","independent House"]} />
            <DropDownButton option={"Property Size"} options={["1 BHK","2 BHK","3 BHK","4 BHK","5 BHK"]} />
            <DropDownButton option={"Property Area"} options={["1000 sq.feet","2000 sq.feet","3000 sq.feet","4000 sq.feet"]} />
            <input type="button" value="Generate Image" className="inline-flex justify-center gap-x-1.5 rounded-md bg-pink-600 px-3 py-2 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-pink-500"  />
            <input type="button" value="Upload Floor Plan" className="inline-flex justify-center gap-x-1.5 rounded-md bg-orange-600 px-3 py-2 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-orange-500"  />
            
        </div> 
        <div>
            <hr className="h-px my-8 bg-gray-300 border-0"/>
        </div>
        <div className="flex justify-around">
            <DropDownButton option={"Bedrooms"} options={[1,2,3,4,5]} />
            <DropDownButton option={"Kitchen Layout"} options={["Single Wall Kitchen","Glley Kitchen","L-Shaped Kitchen","U-Shaped Kitchen","Peninsula Kitchen","Island Kitchen"]} />
            <DropDownButton option={"Hall Layout"} options={["Simple","L-Shape","U-Shape"]} />
            <DropDownButton option={"Dining Layout"} options={["Square Dining Room","Circle Dining Room","Oval Dining Room"]} />
        </div>
        <div>
            <hr className="h-px my-8 bg-gray-300 border-0"/>
        </div>
        <div>
            <DetailedMenu />
        </div>
    </div>
    </div>
}