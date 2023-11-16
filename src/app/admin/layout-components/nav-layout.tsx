"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";



export default function NavLayout() {
    //@ts-ignore
    const [ admin, module ] = usePathname().split('/')

    
    const handleLogout = async() => {
        
    }

    // =====================================================================
    return (
        <nav className="pcoded-navbar">
        <div className="sidebar_toggle"><Link href="#"><i className="icon-close icons"></i></Link></div>
        <div className="pcoded-inner-navbar main-menu">
            <div className="">
                <div className="main-menu-header">
                    <div className="user-details">
                        <br/>
                        <br/>
                        {/* <span id="more-details">{{session('usuario')->nome}}<i className="fa fa-caret-down"></i></span> */}
                    </div>
                </div>
                <div className="main-menu-content">
                    <ul>
                        <li className="more-details">
                            <span onClick={handleLogout}><i className="ti-layout-sidebar-left"></i>Logout</span>
                        </li>
                    </ul>
                </div>
            </div>
            

            {/*-- MACRO ---- GERENCIAMENTO------  -*/}
            <div className="pcoded-navigation-label">Gerenciamento</div>

            {/* Dashboard */}
            <ul className="pcoded-item pcoded-left-item">
                <li className={module == 'images' ? 'active' : ''}>
                    <Link href="/admin/images" className="waves-effect waves-dark">
                        <span className="pcoded-micon"><i className="ti-dashboard"></i><b>D</b></span>
                        <span className="pcoded-mtext">Imagens</span>
                        <span className="pcoded-mcaret"></span>
                    </Link>
                </li>
            </ul>

        </div>
    </nav>
    )
}