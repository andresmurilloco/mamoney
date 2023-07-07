"use client"
//Dependencies
import Link from "next/link"
import Image from "next/image"
import { useEffect, useState } from "react"

//Hooks

//Components
import { TransactionModal } from "./components/TransactionModal"

//Images
import LOGO from './assets/img/logo.svg'

//Icons
import {HOME_ICON, LOGS_ICON, STATISTICS_ICON, SCHEDULE_ICON, DEBTS_ICON, BANKS_ICON, GOALS_ICON, UPCOMING_ICON, ABOUT_ICON, MENU_ICON, CLOSE_ICON, ADD_ICON} from './icons/index'

//Styles
import './css/menu.css'

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
    route: '/upcoming'
},
{
    id: 9,
    icon: ABOUT_ICON,
    label: 'About',
    route: '/about'
}
]

const Navigation = ({children,}: {
    children: React.ReactNode
  }) => {
    const [menuVisible, setMenuVisible] = useState(true);
    const [modal, setModal] = useState(false)

  return (
    <>
    {modal ? <TransactionModal modal={modal} setModal={setModal}/>: ''}
        <div className="flex">
            <button className="menu-toggler-button" onClick={()=>setMenuVisible(!menuVisible)}>{menuVisible? MENU_ICON : CLOSE_ICON}</button>
            <aside className={menuVisible ? 'navigation-container-hidden':'navigation-container-visible'} >
                <div>
                    <Image src={LOGO} alt="Logo app"/>
                </div>
                <div className="flex flex-col">
                    <h1 className="text-2xl font-extrabold">Ma&apos;money</h1>
                    <h2>--⚠Not a final version. Work in progress⚠--</h2>
                    <ul className="menu-list">
                        {links.map(({icon, label, route, id})=>(
                            <Link href={route} key={id}>
                                <div className="menu-item" onClick={()=>setMenuVisible(!menuVisible)}>
                                    <li>
                                        <span className="icon">{icon}</span>{label}
                                    </li>
                                </div>
                            </Link>
                        ))}
                    </ul>
                </div>
            </aside>
            <div className={menuVisible ? "children-container-visible":"children-container-hidden"}>
                {children}
            </div>
            <button className={modal ? 'hidden':'modal-button-toggler'} onClick={()=>setModal(!modal)}>{ADD_ICON}</button>
        </div>
    </>
  )
}

export default Navigation