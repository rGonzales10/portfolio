import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Menu() {
  const menuItems = [
    { label: 'Home', id: 'home', path: '/' },
    { label: 'Experience', id: 'experience', path: '/experiences' },
    { label: 'Project', id: 'project', path: '/project' },
    { label: 'Skills', id: 'skills', path: '/skills' },
  ];
  const location = useLocation();
  const navigate = useNavigate();
  const pathId = menuItems.find(v => v.path == location.pathname).id;
  const [activeId, setActiveId] = useState(pathId);

  const onChangeMenu = (item) => {
    setActiveId(item.id)
    navigate(item.path)
  };

  return (
    <>
      <ul className="menu-list">
        {menuItems.map((item) => (
          <li 
            className={`menu-item ${activeId === item.id ? 'active' : ''}`} 
            key={item.id}
          >
            <a href={`#${item.id}`} onClick={(e) => { e.preventDefault(); onChangeMenu(item); }}>
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Menu;