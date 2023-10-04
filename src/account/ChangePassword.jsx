import Button from '@mui/material/Button';
import React from 'react'
import CustomNav from './CustomNav';

const ChangePassword = () => {
    return (
        <>
        <CustomNav/>
            <div style={{ marginLeft:'350px',marginTop:'-300px' }}>
                <h4 className='mt-5 text-muted'>Change Password </h4>

                <input type="password" placeholder='Enter Current Password' className='input-height rounded border-1 w-50 mt-1' /><br />
                <input type="password" placeholder='Enter New Password' className='input-height rounded border-1 w-50 mt-3' /><br />
                <Button variant='contained' style={{ marginTop: '20px', background: '#00ACFF' }}>Change Password</Button>
            </div>
        </>
    )
}

export default ChangePassword