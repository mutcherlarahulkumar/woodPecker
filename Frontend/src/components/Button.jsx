export default function Button({label,onchange}){
    return <div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded mt-2" onClick={onchange}>
  {label}
</button>
    </div>
}