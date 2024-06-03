import {FaBars} from 'react-icons/fa'
export default function NavBar({sidebarToggle,setSidebarToggle}){
    return <nav className="bg-blue-400 px-4 py-4 flex justify-between text-white">
        <div><FaBars  className="text-white me-4 cursor-pointer" onClick={
            ()=>setSidebarToggle(!sidebarToggle)
        }/></div>
        <div className='flex text-base'>
            <div className='mr-5 text-black hover:cursor-pointer'>Product</div>
            <div className='mr-5 text-black hover:cursor-pointer'><a href="/templetes">Templetes</a></div>
            <div className='mr-5 text-black hover:cursor-pointer'><a href="/pricing">Pricing</a></div>
            <div className='mr-5 text-black hover:cursor-pointer' ><a href="/blogs">Blogs</a></div>
        </div>
        <div className='text-black hover:cursor-pointer'><a href="/signup">My Account</a></div>
    </nav>
}