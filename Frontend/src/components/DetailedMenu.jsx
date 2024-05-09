import BedroomInfo from "./BedroomInfo";
import { useRecoilValue,useRecoilState } from "recoil";
import {BedroomsAtom} from '../store/atoms/BedroomsAtom';

export default function DetailedMenu(){
    const [bedrooms,setBedrooms] = useRecoilState(BedroomsAtom);
    const bedroomComponents = Array.from({ length: bedrooms }, (_, index) => (
        <BedroomInfo key={index}/>
    ));
    return (
        <div>
            {bedroomComponents}
        </div>
    )
}