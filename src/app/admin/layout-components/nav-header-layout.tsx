"use client";

import { useRouter } from "next/navigation";
import { useUserService } from "../../../services/user";

export function NavHeaderLayout() {

    const router = useRouter()
    const userService = useUserService()

    const handleLogout = async() => {
        userService.logout()
        router.replace('/login')
    }
    
    return (
        <div className="navbar-container container-fluid">
          
            <ul className="nav-right">
                <li className="user-profile header-notification">
                    <a href="#!" className="waves-effect waves-light">
                        <span>Admin</span>
                        <i className="ti-angle-down"></i>
                    </a>
                    <ul className="show-notification profile-notification">
                        <li className="waves-effect waves-light">
                            <span onClick={handleLogout}>
                                <i className="ti-layout-sidebar-left"></i> Deslogar
                            </span>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    )
}
