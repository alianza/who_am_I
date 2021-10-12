import './Menu.scss'
import { NavLink} from "react-router-dom";

function Menu() {
    return (
    <nav id={"menu"} className={'bg-primary absolute right-0 flex justify-end h-12'}>
        <ul className={'flex gap-x-4 mr-4 items-center'}>
            <NavLink exact to={"/"} className={"p-2"}>Home</NavLink>
            <NavLink to={"/about"} className={"p-2"}>About</NavLink>
        </ul>
    </nav>);
}

export default Menu;
