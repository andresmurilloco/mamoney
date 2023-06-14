"use client"
//Dependencies
import Link from "next/link"
import Image from "next/image"
import { useEffect, useState } from "react"

//Hooks
import { toggleMenu } from "../hooks"

//Images
import LOGO from '../assets/img/logo.svg'

//Icons
import {HOME_ICON, LOGS_ICON, STATISTICS_ICON, SCHEDULE_ICON, DEBTS_ICON, BANKS_ICON, GOALS_ICON, UPCOMING_ICON, ABOUT_ICON, MENU_ICON, CLOSE_ICON} from '../icons/index'

//Styles
import '../css/menu.css'

//Navigation
const links =[{
  id: 1,
    icon: HOME_ICON,
  label: 'Home',
  route: '/'
},
{
  id: 2,
    icon: LOGS_ICON,
  label: 'Logs',
  route: '/'
},
{
    id: 3,
    icon: STATISTICS_ICON,
    label: 'Statistics',
    route: '/'
},
{
    id: 4,
    icon: SCHEDULE_ICON,
    label: 'Scheduled',
    route: '/'
},
{
    id: 5,
    icon: BANKS_ICON,
    label: 'Banks',
    route: '/'
},
{
    id: 6,
    icon: DEBTS_ICON,
    label: 'Debts',
    route: '/'
},
{
    id: 7,
    icon: GOALS_ICON,
    label: 'Goals',
    route: '/'
},
{
    id: 8,
    icon: UPCOMING_ICON,
    label: 'Upcoming plans',
    route: '/'
},
{
    id: 9,
    icon: ABOUT_ICON,
    label: 'About',
    route: '/about'
}
]

const Navigation = () => {
    const [menuVisible, setMenuVisible] = useState(false);
  return (
    <>
        <button className="menu-toggler" onClick={()=>setMenuVisible(toggleMenu(menuVisible))}>{menuVisible? MENU_ICON : CLOSE_ICON}</button>
        <div>
            <Image src={LOGO} alt="Logo app"/>
        </div>
        <div className="flex flex-col">
            <h1 className="text-2xl font-extrabold">Ma'money</h1>
            <ul className="menu-list">
                {links.map(({icon, label, route, id})=>(
                    <div className="menu-item" key={id}>
                        <li>
                            <Link href={route}><span className="icon">{icon}</span>{label}</Link>
                        </li>
                    </div>
                ))}
            </ul>
        </div>
    </>
  )
}

export default Navigation