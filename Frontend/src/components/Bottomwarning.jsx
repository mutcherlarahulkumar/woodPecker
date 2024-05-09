import { Link } from "react-router-dom"

export function Bottomwarning({label, to}) {
    return <div className="py-2 text-sm flex justify-center">
      <Link className="pointer underline pl-1 cursor-pointer text-xs text-blue-300" to={to}>
        {label}
      </Link>
    </div>
}
  