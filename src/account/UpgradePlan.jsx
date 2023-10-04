import React from 'react'
import Button from '@mui/material/Button';
import CustomNav from './CustomNav';


const UpgradePlan = () => {
    return (
        <>
        <CustomNav/>
        <div class='row' style={{marginLeft:'350px',marginTop:'-300px'}}>
            <h4 style={{ textAlign: 'left', marginTop: '5px',marginLeft:'20px',color:'grey' }}>Upgrade Plans </h4>
            <div class='col-md-2'>
                <label style={{ fontSize: '16px' ,marginLeft:'20px', marginTop: '20px', color: 'grey'}}> Plan :</label><br/>
                <label style={{ fontSize: '16px', marginTop: '25px',marginLeft:'20px', color: 'grey' }}> Plan Start:</label><br/>
                <label style={{ fontSize: '16px', marginTop: '25px',marginLeft:'20px', color: 'grey' }}> Plan Expiry:</label><br/>
                <label style={{ fontSize: '16px', marginTop: '25px' ,marginLeft:'20px', color: 'grey'}}> Amount :</label><br/>
                <label style={{ fontSize: '16px', marginTop: '25px' ,marginLeft:'20px', color: 'grey'}}> Payment Via :</label><br/>
                <label style={{ fontSize: '16px', marginTop: '25px',marginLeft:'20px', color: 'grey' }}> Reference id :</label><br/>

                <Button variant='outlined' style={{ background: '#00ACFF',marginLeft:'20px',color:'white',marginTop:'25px' }}>Save</Button>

            </div>
            <div class='col-md-10'>
            <select style={{ height: '40px', color: 'grey', width: '400px', borderRadius: '5px', border: '1px solid grey', marginTop: '10px' }}>
                <option value="Other Business Activity">Select Plan</option>
            </select><br />
            <input type="date" style={{ height: '40px', color: 'grey', width: '400px', borderRadius: '5px', border: '1px solid grey', marginTop: '10px' }} /><br />
            <input type="date" style={{ height: '40px', color: 'grey', width: '400px', borderRadius: '5px', border: '1px solid grey', marginTop: '10px' }} /><br />
            <select style={{ height: '40px', color: 'grey', width: '400px', borderRadius: '5px', border: '1px solid grey', marginTop: '10px' }}>
                <option value="Other Business Activity">Select Amount</option>
            </select><br />
            <select style={{ height: '40px', color: 'grey', width: '400px', borderRadius: '5px', border: '1px solid grey', marginTop: '10px' }}>
                <option value="Other Business Activity">Select Payment</option>
            </select><br />
            <select style={{ height: '40px', color: 'grey', width: '400px', borderRadius: '5px', border: '1px solid grey', marginTop: '10px' }}>
                <option value="Other Business Activity">Transaction Id </option>
            </select><br />
            </div>
        </div>
        </>
    )
}

export default UpgradePlan;