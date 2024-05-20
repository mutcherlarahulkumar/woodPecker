import React, {useState} from 'react';

export default function BedroomInfo(){

    const [choiceofwall,setChoiceofwall] = useState("");
    const [dimensions,setDimensions] = useState({length:"",height:""});
    const [loft,setLoft] = useState(false);
    const [partition,setPartition] = useState("");
    const [materialCategory,setMaterialCategory] = useState("");
    const [draws,setDraws] = useState("");
    

    return <div className="border border-gray-400 rounded-sm mx-5 my-6 px-5 py-5">
        <div className="font-semibold text-lg mx-5">
            Bed Room 
        </div>
        <div className="flex justify-between mx-5 my-6">
            <div>
                <label htmlFor="choiceofwall" className="pr-2" >Choice of Wall</label>
                <input type="text" className="border border-gray-400 rounded-md " placeholder="North/South/East/West" onChange={e => {setChoiceofwall(e.target.value);}} />
            </div>
            <div>
                <label className="pr-2" htmlFor="dimensions">Dimensions </label>
                <input type="text" className="border border-gray-400 rounded-sm mr-2" placeholder="Length" onChange={e =>{
                    setDimensions({
            ...dimensions,
            length: e.target.value
        });
                }}/>
                <input type="text" className="border border-gray-400 rounded-sm " placeholder="Height" 
                    onChange={e =>{
                    setDimensions({
            ...dimensions,
            height: e.target.value
        });
                }}
                />
            </div>
            <div>
                <input type="checkbox" name="loft" id="loft" onChange={e => {setLoft(e.target.value);}} />
                <label className="pr-2" htmlFor="loft">Loft</label>
            </div>
        </div>
        <div className="flex justify-between mx-5 my-6">
            <div>
                <label className="pr-2" htmlFor="partition">Partition</label>
                <input  type="text" className="border border-gray-400 rounded-sm " placeholder="No of Partition" onChange={e => {setPartition(e.target.value);}}/>
            </div>
            <div>
                <label className="pr-2" htmlFor="dimensions">Material Category </label>
                <input  type="text" className="border border-gray-400 rounded-sm " placeholder="S/G/P" onChange={e => {setMaterialCategory(e.target.value);}}/>
            </div>
        </div>
        <div className="mx-5">
            <div>
                <label className="pr-2" htmlFor="draws"> Draws </label>
                <input  type="text" className="border border-gray-400 rounded-sm " placeholder="No of Draws" onChange={e => {setDraws(e.target.value);}}/>
                <button className="bg-blue-400 rounded-md text-white ml-6 mx-5 p-2" onClick={
                    () => {
                        console.log("Calculating...");
                        console.log(dimensions.length);
                    }
                }>Calculate</button>
            </div>
        </div>
    </div>
}