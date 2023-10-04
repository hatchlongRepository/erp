import React, { useState } from 'react'
import Button from '@mui/material/Button';
import Slide from '../components/Slide';

const StoreInfo = () => {

    const [st_name, setName] = useState("");
    const [st_man_name, setMname] = useState("");
    const [st_email, setEmail] = useState("");
    const [st_contact, setContact] = useState("");
    const [st_store, setStore] = useState("");
    const [st_po_box, setBox] = useState("");
    const [st_province, setProvince] = useState("");
    const [st_district, setDistrict] = useState("");
    const [st_city, setCity] = useState("");
    const [st_landmark, setLandmark] = useState("");
    const [st_add1, setAddress] = useState("");
    const [st_add2, setAdd] = useState("");

    const [error, setError] = useState(null);

    const addstore = async () => {
        console.log(st_name, st_man_name, st_email, st_contact, st_store, st_po_box, st_province, st_district, st_city, st_landmark, st_add1, st_add2);
        let result = await fetch('http://localhost:4500/addstore', {
            method: 'post',
            body: JSON.stringify({ st_name, st_man_name, st_email, st_contact, st_store, st_po_box, st_province, st_district, st_city, st_landmark, st_add1, st_add2 }),
            headers: {
                'Content-type': 'application/json'
            }
        });
        result = await result.json();
        if (result.Status) {
            alert("Data saved Successfully")
            window.location.reload(false);
        }
        if (result.Required) {
            alert("All field are required");
        }

    }

    const handle = (event) => {
        if (event.target.value = " ") {
            console.log("All Field Mandatory");
        }
        else {
            setError(null);
            console.log("Successfully");
        }
    }

    return (
        <>
            <div className='row'>
                <div className='col-3'>
                    <Slide/>
                </div>
                <div className='col-9 mt-5'>
                    <h3 style={{ margin: '20px' }}>INVENTORY/<span className='fs-5 text-muted'>STORE AND LOCATION LIST</span><span className='text-muted' style={{fontSize:'1rem'}}>/ADD STORE</span></h3>
                    <hr />
                    <div style={{ marginLeft: '20px' }}>
                        <form onFocus={handle}>
                            <h4 style={{ textAlign: 'left', marginTop: '5px', color: "grey" }}>Store Information</h4>
                            <div class='row' >
                                <div class='col-sm-6'>
                                    {error && <h2 style={{ color: 'red' }}>{error}</h2>}
                                    <label style={{ fontSize: '16px', color: 'grey', marginTop: '5px' }}>Store Name *</label><br />
                                    <input type="text" required placeholder='Enter Store Name' value={st_name} onChange={(e) => setName(e.target.value)} style={{ height: '40px', width: '450px', borderRadius: '5px', border: '1px solid grey' }} /><br />

                                    <label style={{ fontSize: '16px', color: 'grey', marginTop: '15px' }}>Store Manager Name *</label><br />
                                    <input type="text" required placeholder='Enter Manager Name' value={st_man_name} onChange={(e) => setMname(e.target.value)} style={{ height: '40px', width: '450px', borderRadius: '5px', border: '1px solid grey' }} /><br />

                                    <label style={{ fontSize: '16px', color: 'grey', marginTop: '25px' }}>Phone Number *</label><br />
                                    <input type="number" required placeholder='Enter Phone Number' value={st_contact} onChange={(e) => setContact(e.target.value)} style={{ height: '40px', width: '450px', borderRadius: '5px', border: '1px solid grey' }} />

                                    <h4 style={{ textAlign: 'left', marginTop: '35px', color: "grey" }}>Address Info</h4><br />

                                    <label style={{ fontSize: '16px', color: 'grey', marginTop: '2px' }}>P.O. Box *</label><br />
                                    <input type="text" required placeholder='P.O. Box' value={st_po_box} onChange={(e) => setBox(e.target.value)} style={{ height: '40px', width: '450px', borderRadius: '5px', border: '1px solid grey' }} /><br />

                                    <label style={{ fontSize: '16px', color: 'grey', marginTop: '10px' }}>Province</label><br />
                                    <select value={st_province} onChange={(e) => setProvince(e.target.value)} style={{ height: '40px', color: 'grey', width: '450px', borderRadius: '5px', border: '1px solid grey' }}>
                                        <option>Select Province</option>
                                        <option value="UP">UP</option>
                                    </select><br />

                                    <label style={{ fontSize: '16px', color: 'grey', marginTop: '5px' }}>District</label><br />
                                    <select value={st_district} onChange={(e) => setDistrict(e.target.value)} style={{ height: '40px', color: 'grey', width: '450px', borderRadius: '5px', border: '1px solid grey' }}>
                                        <option>Select District</option>
                                        <option value="Lucknow">Lucknow</option>
                                    </select><br />

                                    <label style={{ fontSize: '16px', color: 'grey', marginTop: '5px' }}>Address 1 *</label><br />
                                    <input type="text" required placeholder='Enter Address 1' value={st_add1} onChange={(e) => setAddress(e.target.value)} style={{ height: '40px', width: '450px', borderRadius: '5px', border: '1px solid grey' }} /><br />

                                    <Button variant='contained' onClick={addstore} style={{ marginTop: '20px', background: '#00ACFF', height: '42px' }}>Save</Button>
                                </div>
                                <div class='col-sm-6'>
                                    <label style={{ fontSize: '16px', color: 'grey', marginTop: '3px' }}>Store Type </label><br />
                                    <select value={st_store} onChange={(e) => setStore(e.target.value)} style={{ height: '40px', color: 'grey', width: '450px', borderRadius: '5px', border: '1px solid grey' }}>
                                        <option>Select Type</option>
                                        <option value="Store">Store</option>
                                        <option value="Warehouse">Warehouse</option>
                                    </select><br />
                                    <label style={{ fontSize: '16px', color: 'grey', marginTop: '15px' }}>Email *</label><br />
                                    <input type="email" required placeholder='Enter Your Email' value={st_email} onChange={(e) => setEmail(e.target.value)} style={{ height: '40px', width: '450px', borderRadius: '5px', border: '1px solid grey' }} /><br />

                                    <label style={{ fontSize: '16px', color: 'grey', marginTop: '200px' }}>City</label><br />
                                    <select value={st_city} onChange={(e) => setCity(e.target.value)} style={{ height: '40px', color: 'grey', width: '450px', borderRadius: '5px', border: '1px solid grey' }}>
                                        <option>Select City</option>
                                        <option value="Lucknow">Lucknow</option>
                                    </select><br />

                                    <label style={{ fontSize: '16px', color: 'grey', marginTop: '10px' }}>Landmark </label><br />
                                    <input type="text" placeholder='Enter Your Landmark ' value={st_landmark} onChange={(e) => setLandmark(e.target.value)} style={{ height: '40px', width: '450px', borderRadius: '5px', border: '1px solid grey' }} /><br />

                                    <label style={{ fontSize: '16px', color: 'grey', marginTop: '74px' }}>Address 2</label><br />
                                    <input type="text" placeholder='Enter Address 2' value={st_add2} onChange={(e) => setAdd(e.target.value)} style={{ height: '40px', width: '450px', borderRadius: '5px', border: '1px solid grey' }} /><br />
                                </div>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default StoreInfo