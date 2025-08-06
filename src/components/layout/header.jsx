import './superLargeScreen.css'
import {Icon} from '@iconify-icon/react'
import SearchBar from '../searchBar/searchBar.jsx';

const Header = () =>{
// Show its value in the console.

  return(
    <header>


      {/* Create a component 📝 */}
      {/* COMPONENT: [Logo] */}
      {/* DESCRIPTION: [] */}   
      {/* PROPS: [  ] */}
      {/* CREATED: [//] */}
      <div className='logo-svg_container'>
        <svg xmlns="http://www.w3.org/2000/svg" className='logo'>
          <image href='https://raw.githubusercontent.com/Jasmell/imgs/b79efc7f95d097a1a98ca4ab980b83d54be3e920/My%20Logo.svg.svg' className='svg-image' />
          Sorry your browser does not support inline SVG.
        </svg>
      </div>

      <SearchBar/>
      {/* Create a component 📝 */}
      {/* COMPONENT: [User] */}
      {/* DESCRIPTION: [Adds new items] */}   
      {/* PROPS: [List props and when I press it it'll show a form to create/add a new item ] */}
      {/* CREATED: [6/17/2025] */}
      <div className='user'>
        <span className='user-img_container'>
          <Icon icon="mdi:user" className = 'user-icon' />
        </span>
        <div className ='user-info_container'>
          <span className='user-name user-info'>Jasmell</span>
          <span className='user-lastname user-info'>Jimenez</span>
        </div>
      </div>
    </header>
  )
}

export default Header; 