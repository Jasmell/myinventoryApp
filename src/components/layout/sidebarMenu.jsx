// CSS imports


// React imports
import { useState, useRef} from 'react';


//Dependencies imports
import { Icon } from '@iconify-icon/react';


// My components imports
import BtnAdd from '../BTNadd/btnAdd'
import AddUpdateForm from '../../forms/addUpdateForm.jsx';

console.clear();//Keeps the console clear;

const SidebarMenu = () => {
    const [frmStatus, setFrmStatus] = useState(false);
  const switchValue = () => {
    setFrmStatus(!frmStatus);
  }


  // Sidebar menu toggle
  // Holds the status of the sideBar
  const objSidebar  = {
    sideStatus: "maiximized",
    sideStatus1: "minimized",
    sizing: {
      minimizedSide: 60, 
      expandedSide: 200
    } ,
    menuStatus:{
      open: "menu-open-rounded",
      close: "close-rounded"
    }
  }
  
  const [sideIcon, setSideIcon] = useState(objSidebar.menuStatus.open);
  
  // Minimize sidebar class for animation
  const maxSCl = 'maximizeSidebar';
  const minSCl = 'minimizeSidebar';
  const sideBarRef = useRef(0);
  
  // Minimize/expand side bar and toggle the menu icons;
  const toggleSideBarFunc = () =>{
    if(sideIcon == objSidebar.menuStatus.open){
      setSideIcon(objSidebar.menuStatus.close)
    }else(setSideIcon(objSidebar.menuStatus.open))

    // Holds the sideBar element's classList;
    let sdbClasses = sideBarRef.current.classList;
    if(sdbClasses.value.indexOf(maxSCl) === -1 && sdbClasses.value.indexOf(minSCl) === -1){
      sdbClasses.add(maxSCl)

    }else if(sdbClasses.value.indexOf(maxSCl) > -1 && sdbClasses.value.indexOf(minSCl) === -1){
      sdbClasses.add(minSCl);
    }
    else{
      sdbClasses.remove(maxSCl);
      sdbClasses.remove(minSCl);
      sdbClasses.add(maxSCl);
    }
  }


  // The component body
  return ( 
    <div className="sidebar-menu" style={{"alignItems":'start', 'paddingLeft': '8px'}} ref={sideBarRef}>
        {/* COMPONENT: [BtnAdd] */}
        {/* DESCRIPTION: [Adds new items] */}
        {/* PROPS: [List props and when I press it it'll create a form to create/add a new item ] */}
        {/* CREATED: [6/17/2025] */}

        {/* Sidebar Toggler */}
        <button className='toggleSideBar minimized' ref = {sideBarRef}
        onClick={()=>toggleSideBarFunc()}
        >
          <Icon 
            icon={`material-symbols-light:${sideIcon}`} 
            className = "toggleSidebarIcon"  
          />
        </button>

        <BtnAdd 
          switchFrmStatus = { switchValue }
          frmStatus = { frmStatus }
        />
        <AddUpdateForm  frmStatus = { frmStatus } switchFrmStatus/>
    </div>
  );
}

export default SidebarMenu;