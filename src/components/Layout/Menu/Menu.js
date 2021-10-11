import './Menu.scss'
import { NavLink} from "react-router-dom";

function Menu() {
    return <nav id={"menu"}>
        <ul className={'float-right p-4'}>
            <NavLink exact to={"/"} className={"p-2"}>Home</NavLink>
            <NavLink to={"/about"} className={"p-2"}>About</NavLink>
        </ul>
    </nav>;
}

export default Menu;
