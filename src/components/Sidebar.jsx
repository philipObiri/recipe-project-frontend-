import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Sidebar({links, close }) {
    return (
        <aside className="sidebar" onClick={close}>
           {
            links.map((link)=>(
                <a href="" 
                className="sidebar-link "
                key={link.name}>

                <FontAwesomeIcon icon={link.icon}/>
                {link.name}
                </a>
            ))
           }
        </aside>
    )
}

export default Sidebar;
