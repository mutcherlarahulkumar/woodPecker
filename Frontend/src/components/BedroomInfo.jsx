import React, {useState} from 'react';
import axios from 'axios';

export default function BedroomInfo(){

    const [choiceofwall,setChoiceofwall] = useState("");
    const [dimensions,setDimensions] = useState({length:0,height:0});
    const [loft,setLoft] = useState(false);
    const [partition,setPartition] = useState(0);
    const [materialCategory,setMaterialCategory] = useState("");
    const [draws,setDraws] = useState("");
    const [unit,setUnit] = useState("ft");


    const generateImage = async () => {
        try {
            const response = await axios.post('http://localhost:8080/api/v1/generate/bedroom', {
                length: Number(dimensions.length),
                height: Number(dimensions.height),
                unit,
                loft,
                horizontalPartitions: Number(partition),
            }, { responseType: 'arraybuffer' }); // Change responseType to 'arraybuffer'
    
            const imageBlob = new Blob([response.data], { type: 'image/png' });
            const imageUrl = URL.createObjectURL(imageBlob);
    
            // Trigger image download
            const link = document.createElement('a');
            link.href = imageUrl;
            link.download = 'wardrobe.png';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        } catch (error) {
            console.error('Error generating image:', error);
        }
    };
    
    

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
                <input type="number" className="border border-gray-400 rounded-sm mr-2" placeholder="Length" onChange={e =>{
                    setDimensions({
            ...dimensions,
            length: e.target.value
        });
                }}/>
                <input type="number" className="border border-gray-400 rounded-sm " placeholder="Height" 
                    onChange={e =>{
                    setDimensions({
            ...dimensions,
            height: e.target.value
        });
                }}
                />
            </div>
            <div>
                <input type="checkbox" name="loft" id="loft" onChange={e => {setLoft(!loft);}} />
                <label className="pr-2" htmlFor="loft">Loft</label>
            </div>
        </div>
        <div className="flex justify-between mx-5 my-6">
            <div>
                <label className="pr-2" htmlFor="partition">Partition</label>
                <input  type="number" className="border border-gray-400 rounded-sm " placeholder="No of Partition" onChange={e => {setPartition(e.target.value);}}/>
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
                    // () => {
                    //     console.log("Calculating...");
                    //     console.log(dimensions.length);
                    // }
                    generateImage
                }>Calculate</button>
            </div>
        </div>
    </div>
}