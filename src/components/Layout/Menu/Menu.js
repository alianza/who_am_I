import './Menu.scss'
import { NavLink} from "react-router-dom";

function Menu() {
    return (
    <nav id={"menu"} className={'h-16 bg-primary absolute w-full flex justify-center sm:justify-end'}>
        <ul className={'flex items-center'}>
            <NavLink exact to={"/"} className={"p-4"}>Home</NavLink>
            <NavLink to={"/about"} className={"p-4"}>About</NavLink>
        </ul>
    </nav>);
}

export default Menu;
