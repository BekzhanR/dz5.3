import { Outlet } from 'react-router-dom'
import "../App.css"


const Layout = () => {
  return (
    <div>
        <Outlet/>
        <footer className="footer">
            <p>05.02.2024</p>
        </footer>
    </div>
  )
}

export default Layout