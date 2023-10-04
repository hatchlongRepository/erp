import React from 'react'
import Button from '@mui/material/Button';
import CustomNav from './CustomNav';
const BusinessInfo = () => {
    return (
        <>
            <CustomNav />
            <div style={{ marginLeft: '350px', marginTop: '-300px' }}>
                <h4 className='mt-5 text-muted'>Business Information </h4>
                <div class='row'>
                    <div class='col-sm-6'>
                        <label className='mt-1 text-muted'> Add-On User</label><br />
                        <input type="number" className='input-height rounded border-1 w-75 mt-1' /><br />
                        <label className='mt-1 text-muted'>Company Name</label><br />
                        <input type="text" placeholder='Enter Your Company Name' className='input-height rounded border-1 w-75 mt-1' /><br />
                        <label className='mt-1 text-muted'>Business Type</label><br />
                        <select className='input-height rounded border-1 w-75 mt-1'>
                            <option value="Other Business Activity">Select Business</option>
                        </select><br />
                        <label className='mt-1 text-muted'>Annual Revenue</label><br />
                        <select className='input-height rounded border-1 w-75 mt-1'>
                            <option value="0-100,000">0-100,000</option>
                        </select><br />
                    </div>
                    <div class="col-sm-6">
                        <label style={{ fontSize: '16px', color: 'grey', marginTop: '-5px' }}> Transaction Status</label><br />
                        <select className='input-height rounded border-1 w-75 mt-1'>
                            <option value="Transaction Status">Select Status</option>
                        </select><br />
                        <label className='mt-1 text-muted'> TPIN *</label><br />
                        <input type="text" placeholder='Enter TPIN' className='input-height rounded border-1 w-75 mt-1' /><br />
                        <label className='mt-1 text-muted'> Industry</label><br />
                        <select className='input-height rounded border-1 w-75 mt-1'>
                            <option value="Clothing/Shoe Repair /Alteration">Select Industry</option>
                        </select><br />

                    </div>
                </div>
                <Button variant='outlined' style={{ background: '#00ACFF', color: 'white', marginTop: '15px' }}>Save</Button>


            </div>
        </>
    )
}

export default BusinessInfo