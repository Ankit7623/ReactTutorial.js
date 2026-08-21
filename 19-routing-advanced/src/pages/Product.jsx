import { Link, Outlet } from "react-router-dom"

const Product = () => {
  return (
    <div>
        <div className="flex justify-center gap-10 py-4">
            <Link className="flex justify-center gap-10 py-4" to='/product/men'>Men</Link>
            <Link className="flex justify-center gap-10 py-4" to='/product/women'>Women</Link>
        </div>
      
      <Outlet />
    </div>
  )
}

export default Product
