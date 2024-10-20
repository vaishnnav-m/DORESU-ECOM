import {Link} from 'react-router-dom'
import logo from '../../assets/Doresu.svg'

function Aside() {
  return (
   <aside className='w-[260px] min-h-full py-9 px-9 flex flex-col items-center gap-9 bg-white'>
   <div className='w-[160px]'>
      <img className='w-full' src={logo} alt="" />
   </div>
   <nav className='w-full'>
      <ul className='uppercase text-[14px] tracking-wide text-[#232321] font-semibold *:py-[12px] *:px-[17px] *:rounded-lg'>
         <li style={{background:"black",color:'white'}} >
            <Link to="/admin">Dashboard</Link>
         </li>
         <li>
            <Link to="/admin/users">Customers</Link>
         </li>
         <li>
            <Link to="/admin/products">All Products</Link>
         </li>
            <li>
            <Link to="/adim/orders">Order List</Link>
         </li>
         <li>
            <Link to="/admin/cupons">Cupons</Link>
         </li>
         <li>
            <Link to="/admin/offers">Offers</Link>
         </li>
         <li>
            <Link to="/admin/catagories">Catagories</Link>
         </li>
         <li>
            <Link to="/admin/addCatagories">Add Catagories</Link>
         </li>
      </ul>
   </nav>
  </aside>
  )
}

export default Aside