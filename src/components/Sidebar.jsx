import React from 'react'
import "./Sidebar.css";
import FiberManualRecordRoundedIcon from '@material-ui/icons/FiberManualRecordRounded';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

export const Sidebar = () => {
    return (
        <div className="sidebar__pannel">
            <h1 className="myuser">your Name <span ><FiberManualRecordRoundedIcon className="online"/></span> </h1>
            <div className="Sidebar__users">
                <div className="user">
                    <h3>Available Users <ArrowDropDownIcon/> </h3>
                    <h4>username <span>+ online</span></h4>
                </div>
            </div>            
        </div>
    )
}
