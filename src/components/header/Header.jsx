import "./header.css"
import { Link } from "react-router-dom"

export default function Header() {
  return (
    <div className="header">
    <div className="left_header">
    <Link to='homepage' className="HeaderLink"><h1 className="shdf"> SDHF</h1>
    
    </Link>
    <Link to='homepage' className="HeaderLink">
    <h2 className="for_sustainability"> for sustainability</h2>
    </Link>
      
    </div>
    <div className="right header">
<button className="press"> PRESS RELEASE</button>
<button className="donate"> DONATE</button>
    </div>
     
    </div>
  )
}
