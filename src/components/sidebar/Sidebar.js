import "./sidebar.css"

export default function Sidebar() {
  return (
    <div className="side_bar">
      <div className="sidebar_item">
<span className="sidebarTitle"> ABOUT US </span>
<img className="sidebar-img" src="https://upload.wikimedia.org/wikipedia/commons/6/65/Women_World_Leaders_at_COP26.jpg"/>
<p>Ipsum passages, and more recently with desktop
 publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

      </div>
     
     <div className="sidebar_item">
     <span className="sidebarTitle">CATEGORIES </span>
     <ul className="sidebar-list">
<li className="sidebarlistitem"> Climate </li>
<li className="sidebarlistitem">Women initiatives</li>
<li className="sidebarlistitem">Human development</li>
<li className="sidebarlistitem"> Youth activities</li>
<li className="sidebarlistitem"> environments</li>
<li className="sidebarlistitem"> Others</li>
     </ul>
     </div>
     <div className="sidebar-item">
     <span className="sidebarTitle sidebarsocial">FOLLOW US </span>
     <i className="sidebaricon fa-brands fa-facebook"></i>
<i className="sidebaricon fa-brands fa-linkedin-in"></i>
<i className="sidebaricon fa-brands fa-twitter"></i>
<i className="sidebaricon fa-brands fa-medium_i"></i>
     </div>
    </div>
  )
}
