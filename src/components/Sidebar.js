import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { socialIcon } from "../social-icon";
import { FaTimes } from "react-icons/fa";
import { useAppProvider } from "../context";
function Sidebar() {
  const { isSidebarOpen, closeSidebar } = useAppProvider();

  return (
    <aside className={`${isSidebarOpen ? "sidebar show" : "sidebar"}`}>
      <div className='sidebar-container'>
        <FaTimes className='sidebar-close-btn' onClick={closeSidebar} />

        <ul className='sidebar-links'>
          <li>
            <NavLink
              to='/'
              onClick={closeSidebar}
              className='sidebar-link'
              activeclassname='sidebar-active'
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/bio'
              onClick={closeSidebar}
              className='sidebar-link'
              activeclassname='sidebar-active'
            >
              Bio
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/projects'
              onClick={closeSidebar}
              className='sidebar-link'
              activeclassname='sidebar-active'
            >
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/contact'
              onClick={closeSidebar}
              className='sidebar-link'
              activeclassname='sidebar-active'
            >
              Contact
            </NavLink>
          </li>
        </ul>
        <ul className='social-icons'>
          {socialIcon.map(({ id, social_url, icon, name }) => {
            return (
              <li key={id} className='sidebar-icon'>
                <a href={social_url} alt={name} target='blank'>
                  {icon}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </aside>
  );
}

export default Sidebar;
