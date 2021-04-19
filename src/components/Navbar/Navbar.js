import React, { Components } from 'react';
import { MenuItems} from './MenuItems';

class Navbar extends Component {
    render () {
        return(
            <nav className="NavbarIt">
                <h1 className="navbar-logo">Thiago</h1>
                <div className="menu-icons">

                </div>
                <ul>
                    {MenuItems.map((item, index) => {
                        return (
                            <li><a className={item.cName} href={item.url}></a></li>
                        )

                    })}
                    
                </ul>
            </nav>
        )
    }
}