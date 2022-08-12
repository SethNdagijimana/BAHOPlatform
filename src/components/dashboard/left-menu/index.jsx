import React from "react";
import './styles.scss';
import home from '../../../resources/hq.png';
import clubs from '../../../resources/clubs.png';



class LeftMenu extends React.Component {
    render() {
        return(
            <div className="left-menu-container">
                <ul className="left-menu-list">
                    <li className="left-menu-item">
                        <a href="null">
                            <img src={home} alt="" className="menu-img" />
                            <p>Home</p>
                        </a>
                    </li>
                    <li className="left-menu-item">
                        <a href="null">
                            <img src={clubs} alt="" className="menu-img" />
                            <p>Create Clubs</p>
                        </a>
                    </li>
                    <li className="left-menu-item">
                        <a href="null">
                            <img src={home} alt="" className="menu-img" />
                            <p>Home</p>
                        </a>
                    </li>
                    <li className="left-menu-item">
                        <a href="null">
                            <img src={home} alt="" className="menu-img" />
                            <p>Home</p>
                        </a>
                    </li>
                    <li className="left-menu-item">
                        <a href="null">
                            <img src={home} alt="" className="menu-img" />
                            <p>Home</p>
                        </a>
                    </li>
                    <li className="left-menu-item">
                        <a href="null">
                            <img src={home} alt="" className="menu-img" />
                            <p>Home</p>
                        </a>
                    </li>
                    <li className="left-menu-item">
                        <a href="null">
                            <img src={home} alt="" className="menu-img" />
                            <p>Home</p>
                        </a>
                    </li>
                    <li className="left-menu-item">
                        <a href="null">
                            <img src={home} alt="" className="menu-img" />
                            <p>Home</p>
                        </a>
                    </li>
                </ul>
            </div>
        )
    }
}

export default LeftMenu;