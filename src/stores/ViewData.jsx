import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import Button from '@mui/material/Button';

const ViewData = () => {
    let params = useParams();

    let [data, setData] = useState([]);
    let getdata = async () => {
        let result = await fetch(`http://localhost:4500/storedata/${params.id}`);
        result = await result.json()
        setData(result);
    }
    useEffect(() => {
        getdata();
    });

    return (
        <div style={{ marginLeft: '20px' }}>
            <h3 style={{ margin: '20px' }}>STORE/<span style={{ fontSize: '17px', color: 'grey' }}>VIEW STORE</span></h3>
            <hr />
            <h4 style={{ textAlign: 'left', marginTop: '5px', color: "grey" }}>Store Information</h4>
                    <div class='row' >
                        <div class='col-sm-6'>
                            <label style={{ fontSize: '16px', color: 'grey', marginTop: '5px' }}>Store Name *</label><br />
                            <input type="text" disabled placeholder='Enter Store Name' value={data.st_name}  style={{ height: '40px', width: '450px', borderRadius: '5px', border: '1px solid grey' }} /><br />

                            <label style={{ fontSize: '16px', color: 'grey', marginTop: '15px' }}>Store Manager Name *</label><br />
                            <input type="text" disabled placeholder='Enter Manager Name' value={data.st_man_name}  style={{ height: '40px', width: '450px', borderRadius: '5px', border: '1px solid grey' }} /><br />

                            <label style={{ fontSize: '16px', color: 'grey', marginTop: '25px' }}>Phone Number *</label><br />
                            <input type="number" disabled placeholder='Enter Phone Number' value={data.st_contact}  style={{ height: '40px', width: '450px', borderRadius: '5px', border: '1px solid grey' }} />

                            <h4 style={{ textAlign: 'left', marginTop: '35px', color: "grey" }}>Address Info</h4><br />

                            <label style={{ fontSize: '16px', color: 'grey', marginTop: '2px' }}>P.O. Box *</label><br />
                            <input type="text" disabled placeholder='P.O. Box' value={data.st_po_box}  style={{ height: '40px', width: '450px', borderRadius: '5px', border: '1px solid grey' }} /><br />

                            <label style={{ fontSize: '16px', color: 'grey', marginTop: '10px' }}>Province</label><br />
                            <select value={data.st_province} disabled  style={{ height: '40px', color: 'grey', width: '450px', borderRadius: '5px', border: '1px solid grey' }}>
                                <option>Select Province</option>
                                <option value="UP">UP</option>
                            </select><br />

                            <label style={{ fontSize: '16px', color: 'grey', marginTop: '5px' }}>District</label><br />
                            <select value={data.st_district} disabled  style={{ height: '40px', color: 'grey', width: '450px', borderRadius: '5px', border: '1px solid grey' }}>
                                <option>Select District</option>
                                <option value="Lucknow">Lucknow</option>
                            </select><br />

                            <label style={{ fontSize: '16px', color: 'grey', marginTop: '5px' }}>Address 1 *</label><br />
                            <input type="text" disabled placeholder='Enter Address 1' value={data.st_add1}  style={{ height: '40px', width: '450px', borderRadius: '5px', border: '1px solid grey' }} /><br />

                           <Link to='/addstore'><Button variant='contained'  style={{ marginTop: '20px', background: '#00ACFF', height: '42px' }}>BACK</Button></Link> 
                        </div>
                        <div class='col-sm-6'>
                            <label style={{ fontSize: '16px', color: 'grey', marginTop: '3px' }}>Store Type </label><br />
                            <select value={data.st_store} disabled  style={{ height: '40px', color: 'grey', width: '450px', borderRadius: '5px', border: '1px solid grey' }}>
                                <option>Select Type</option>
                                <option value="Store">Store</option>
                                <option value="Warehouse">Warehouse</option>
                            </select><br />
                            <label style={{ fontSize: '16px', color: 'grey', marginTop: '15px' }}>Email *</label><br />
                            <input type="email" disabled placeholder='Enter Your Email' value={data.st_email}  style={{ height: '40px', width: '450px', borderRadius: '5px', border: '1px solid grey' }} /><br />

                            <label style={{ fontSize: '16px', color: 'grey', marginTop: '185px' }}>City</label><br />
                            <select value={data.st_city} disabled  style={{ height: '40px', color: 'grey', width: '450px', borderRadius: '5px', border: '1px solid grey' }}>
                                <option>Select City</option>
                                <option value="Lucknow">Lucknow</option>
                            </select><br />

                            <label style={{ fontSize: '16px', color: 'grey', marginTop: '10px' }}>Landmark </label><br />
                            <input type="text" placeholder='Enter Your Landmark ' disabled value={data.st_landmark}  style={{ height: '40px', width: '450px', borderRadius: '5px', border: '1px solid grey' }} /><br />

                            <label style={{ fontSize: '16px', color: 'grey', marginTop: '74px' }}>Address 2</label><br />
                            <input type="text" placeholder='Enter Address 2' disabled value={data.st_add2}  style={{ height: '40px', width: '450px', borderRadius: '5px', border: '1px solid grey' }} /><br />
                        </div>
                    </div>
        </div>
    )
}

export default ViewData