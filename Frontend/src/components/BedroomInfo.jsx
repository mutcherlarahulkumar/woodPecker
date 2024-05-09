export default function BedroomInfo(){

    return <div className="border border-gray-400 rounded-sm mx-5 my-6 px-5 py-5">
        <div className="font-semibold text-lg mx-5">
            Bed Room 
        </div>
        <div className="flex justify-between mx-5 my-6">
            <div>
                <label htmlFor="choiceofwall" className="pr-2" >Choice of Wall</label>
                <input type="text" className="border border-gray-400 rounded-md " placeholder="North/South/East/West" />
            </div>
            <div>
                <label className="pr-2" htmlFor="dimensions">Dimensions </label>
                <input type="text" className="border border-gray-400 rounded-sm mr-2" placeholder="Length" />
                <input type="text" className="border border-gray-400 rounded-sm " placeholder="Height" />
            </div>
            <div>
                <input type="checkbox" name="loft" id="loft" />
                <label className="pr-2" htmlFor="loft">Loft</label>
            </div>
        </div>
        <div className="flex justify-between mx-5 my-6">
            <div>
                <label className="pr-2" htmlFor="partition">Partition</label>
                <input type="text" className="border border-gray-400 rounded-sm " placeholder="No of Partition" />
            </div>
            <div>
                <label className="pr-2" htmlFor="dimensions">Material Category </label>
                <input type="text" className="border border-gray-400 rounded-sm " placeholder="S/G/P" />
            </div>
        </div>
        <div className="mx-5">
            <div>
                <label className="pr-2" htmlFor="draws"> Draws </label>
                <input type="text" className="border border-gray-400 rounded-sm " placeholder="No of Draws" />
            </div>
        </div>
    </div>
}