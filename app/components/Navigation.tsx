//Dependencies
import Link from "next/link"
import Image from "next/image"

//Images
import LOGO from '../assets/img/logo.svg'

//Icons
import {HOME_ICON, LOGS_ICON, STATISTICS_ICON, SCHEDULE_ICON, DEBTS_ICON, BANKS_ICON, GOALS_ICON, UPCOMING_ICON, ABOUT_ICON} from '../icons/index'

//Styles
import '../css/menu.css'

//Navigation
const links =[{
  icon: HOME_ICON,
  label: 'Home',
  route: '/'
},
{
  icon: LOGS_ICON,
  label: 'Logs',
  route: '/'
},
{
    icon: STATISTICS_ICON,
    label: 'Statistics',
    route: '/'
},
{
    icon: SCHEDULE_ICON,
    label: 'Scheduled',
    route: '/'
},
{
    icon: BANKS_ICON,
    label: 'Banks',
    route: '/'
},
{
    icon: DEBTS_ICON,
    label: 'Debts',
    route: '/'
},
{
    icon: GOALS_ICON,
    label: 'Goals',
    route: '/'
},
{
    icon: UPCOMING_ICON,
    label: 'Upcoming plans',
    route: '/'
},
{
    icon: ABOUT_ICON,
    label: 'About',
    route: '/about'
}
]

const Navigation = () => {
  return (
    <>
        <div>
            <Image src={LOGO} alt="Logo app"/>
        </div>
        <div className="flex flex-col">
            <h1 className="text-2xl font-extrabold">Ma'money</h1>
            <ul className="menu-list">
                {links.map(({icon, label, route})=>(
                    <div className="menu-item">
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