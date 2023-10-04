import React from 'react'
import './navDesign.css';
import { Link } from 'react-router-dom';


export default function CustomNav() {
  return (
    <>
      <h1 style={{ margin: '20px', fontSize: '25px', color: 'grey', marginLeft: '40px' }}>ACCOUNT & SETTINGS <span className='btn-top'><Link to='/personalinfo'><button style={{ background: '#00acff', color: 'white', borderRadius: '5px', border: '1px solid aqua' }}>Profile</button></Link>  <button>Setting</button></span></h1>
      <hr />
      <div className='row'>
        <div className='col-sm-4'>
          <ul className='design'>
            <li ><Link to='/personalinfo' style={{color:'grey'}}> Personal Information </Link></li>
            <li><Link to='/changepassword' style={{color:'grey'}}>Change Password</Link></li>
            <li><Link to='/document' style={{color:'grey'}}>Documnets</Link></li>
            <li><Link to='/business' style={{color:'grey'}}> Business Information</Link></li>
            <li><Link to='/upgradeplan' style={{color:'grey'}}>Upgrade Plan</Link></li>
          </ul>

        </div>
      </div>
    </>
  )
}
