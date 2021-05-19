import React from 'react'
import { ProSidebar, Menu, MenuItem, SubMenu,SidebarHeader } from 'react-pro-sidebar';
import { useHistory, useLocation } from "react-router-dom";
import { Link } from 'react-router-dom'
import { BsCreditCard} from 'react-icons/bs'
import { BiUser , BiSupport ,BiMenuAltLeft} from 'react-icons/bi';
import { AiOutlineSetting, AiFillBank , AiOutlineDashboard} from 'react-icons/ai'
import 'react-pro-sidebar/dist/css/styles.css';

export const Sidebar = () => {
    const [collapse, setCollapse] = React.useState(false)
    const history = useHistory();
    const location = useLocation();
    return (
        <ProSidebar >
            <SidebarHeader className="p-4 text-center text-truncate d-flex justify-content-between">
                <BiMenuAltLeft onClick={() => setCollapse(!collapse)} style={{ fontWeight: "bold", cursor: "pointer"}}/>
            </SidebarHeader>
            <Menu iconShape="circle">
                <MenuItem icon={<AiOutlineDashboard />}>Dashboard
                    <Link to="/admin/users"/>
                </MenuItem>
                <MenuItem icon={<BiUser />}>Utilisateur
                    <Link to="/admin/users"/>
                </MenuItem>
                <MenuItem icon={<BsCreditCard />}>Cartes
                    <Link to="/admin/card"/>
                </MenuItem>
                <MenuItem icon={<AiFillBank />}>Comptes
                    <Link to="/admin/account"/>
                </MenuItem>
                <MenuItem icon={<BiSupport />}>Problemes technique
                    <Link to="/admin/technical"/>
                </MenuItem>
                
                <SidebarHeader className="p-4">
                    <MenuItem icon={<AiOutlineSetting />}>Parametres
                        <Link to="/admin/account"/>
                    </MenuItem>
                </SidebarHeader>
            </Menu>
        </ProSidebar>
    )
}
