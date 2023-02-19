import './footer.css'

export default function Footer() {
  return (
    <div className='footer'>

      <div className='ShdfHome'>
      <ul>
        <h3> SHDF Home</h3>
        <li className=' footerListItems'>What we do</li>
        <li className=' footerListItems'>Research</li>
        <li className=' footerListItems'>Project</li>
        <li className=' footerListItems'>Stories</li>
        <li className=' footerListItems'>Press release</li>
        <li className=' footerListItems'> Get involved</li>
        </ul>
      </div>
      <div className='AboutUs'>
      <ul>
        <h3> About SHDF</h3>
        <li className=' footerListItems'>Work for us</li>
        <li className=' footerListItems'>Partner with us</li>
        <li className=' footerListItems'>Pionering committee</li>
        <li className=' footerListItems'>SDHF auditing </li>
        <li className=' footerListItems'>Sustainability goals</li>
        <li className=' footerListItems'> Frequently asked questions</li>
        </ul>
      </div>
      <div className='education'>
      <ul>
        <h3> Education</h3>
        <li className='footerListItems'>Gender</li>
        <li className='footerListItems'>Human rights</li>
        <li className='footerListItems'>Climate and environment</li>
        <li className='footerListItems'>Women Initiatives</li>
        <li className='footerListItems'>Sustainability development goals</li>
        <li className='footerListItems'> Volunteering</li>
        </ul>
      </div>
      <div className='contact'>
      <h3> Contacts</h3>
        <div>
        <a href=''><i className="footericon fa-brands fa-facebook-f"></i></a>
        <a href=''><i className="footericon fa-brands fa-linkedin-in"></i></a>
        <a href=''><i className="footericon fa-brands fa-twitter"></i></a>
        <a href=''><i className="footericon fa-brands fa-youtube"></i></a>
        <a href=''><i className="footericon fa-brands fa-instagram"></i></a>
        </div>
        <div>
            <span>Contact Us</span>
            <span> Report an abuse</span>
        </div>
      </div>
    </div>
  )
}
