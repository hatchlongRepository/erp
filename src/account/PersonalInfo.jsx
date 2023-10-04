
import React from 'react'
import CustomNav from './CustomNav';
import './height.css';

const PersonalInfo = () => {
    return (
        <>
            <CustomNav />
            <div style={{ marginLeft: '350px', marginTop: '-300px' }} >
                <h4 className='mt-5 text-muted'>Personal Information</h4>
                <div class='row'>
                    <div class='col-sm-6 '>
                        <label className='fs-5 text-muted'>First Name *</label><br />
                        <input type="text" placeholder='Enter First Name' className='input-height rounded border-1 w-75 mt-1' /><br />
                        <label className='fs-5 text-muted mt-2'>Last Name *</label><br />
                        <input type="text" placeholder='Enter Last Name' className='input-height rounded border-1 w-75 mt-1' /><br />
                        <label className='fs-5 text-muted mt-2'>Phone Number *</label><br />
                        <input type="number" placeholder='Enter Phone Number' className='input-height rounded border-1 w-75 mt-1' />
                        <h4 className='mt-5 text-muted'>Address Info</h4><br />
                        <label className='fs-5 text-muted '>P.O. Box *</label><br />
                        <input type="text" placeholder='P.O. Box' className='input-height rounded border-1 w-75 mt-1' /><br />
                        <label className='fs-5 text-muted mt-2'>Province</label><br />
                        <select className='input-height rounded border-1 w-75 mt-1 text-muted'>
                            <option>Select Province</option>
                        </select><br />
                        <label className='fs-5 text-muted mt-2'>District</label><br />
                        <select className='input-height rounded border-1 w-75 mt-1 text-muted'>
                            <option>Select District</option>
                        </select><br />
                        <label className='fs-5 text-muted mt-2'>Address 1 *</label><br />
                        <input type="text" placeholder='Enter Address 1' className='input-height rounded border-1 w-75 mt-1' /><br />
                    </div>
                    <div class='col-sm-6'>
                        <label className='fs-5 text-muted '>Middle Name </label><br />
                        <input type="text" placeholder='Enter Middle Name' className='input-height rounded border-1 w-75 mt-1' /><br />
                        <label className='fs-5 text-muted mt-2'>Birth Date *</label><br />
                        <input type="date" placeholder='dd/mm/yyyy' className='input-height rounded border-1 w-75 mt-1' /><br />
                        <label className='fs-5 text-muted mt-2'>Email *</label><br />
                        <input type="email" placeholder='Enter Your Email' className='input-height rounded border-1 w-75 mt-1' /><br />
                        <label className='rounded border-1 fs-5 text-muted' style={{ marginTop: '190px' }}>City</label><br />
                        <select className='input-height rounded border-1 w-75 mt-1 text-muted'>
                            <option>Select City</option>
                        </select><br />
                        <label className='fs-5 text-muted ' style={{ marginTop: '90px' }}>Address 2</label><br />
                        <input type="text" placeholder='Enter Address 2' className='input-height rounded border-1 w-75 mt-1' /><br />
                    </div>

                </div>
                <label className='fs-5 text-muted mt-2'>Login Attempts</label><br />
                <input type="number" placeholder='' style={{ height: '40px', width: '50px', border: '1px solid grey', marginTop: '20px' }} /><button style={{ background: '#00ACFF', height: '40px', border: 'none', color: 'white' }}>Reset</button><br />
                <button  style={{ marginTop: '20px', background: '#00ACFF', color: 'white', borderRadius: '5px' }}>Submit</button>

            </div>
        </>
    )
}

export default PersonalInfo