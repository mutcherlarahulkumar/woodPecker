
export default function InputBox({placeholder}){
    return <div className="pb-2">
        <input type="text" id="small-input" className="block w-full p-2 text-gray-900 border border-blue-700 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 " placeholder={placeholder}></input>
    </div>
}