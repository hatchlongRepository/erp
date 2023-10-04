import React from 'react';

export default function GlType() {
    const glType = ["Nostro", "Misc Dr", "Misc Cr", "Inter Branch", "Cash", "Normal"];
    const categories = ["Asset", "Liability", "Income", "Expense", "Contingent Asset", "Contingent Liability", "Memo", "Position", "Position Equivalent"];

    return (
        <div className='row mt-5'>
            <div className='col-4 border '></div>
            <div className='col-4'>
                <span style={{ fontWeight: 'bold' }} className='fs-5'>MASTER/</span>
                <span className='fs-6'>CHART OF ACCOUNT</span>
                <hr />
                <span style={{ marginLeft: '30px' }}> GL Code </span>
                <input type='text' style={{ marginLeft: '5px' }} />
                <br />
                <span style={{ marginLeft: '11px', marginTop: '15px' }}>Description</span>
                <input type='text' style={{ marginLeft: '8px', marginTop: '15px' }} />
                <br />
                <label className='mx-2' style={{ marginTop: '15px' }}>
                    Customer/Internal GL
                    <input type='radio' name='glType' style={{ marginLeft: '10px' }} /> Customer GL <br />
                    <input type='radio' name='glType' style={{ marginLeft: '162px' }} /> Internal GL
                </label>
                <br />
                <span style={{ marginLeft: '105px', marginTop: '15px' }}>GL Type </span>
                <select style={{ marginLeft: '7px', marginTop: '15px' }}>
                    <option value=""></option>
                    {glType.map((option, index) => (
                        <option key={index} value={option}>
                            {option}
                        </option>
                    ))}
                </select>
                <br />
                <span style={{ marginLeft: '95px' }}> Category </span>
                <select className=' mx-2 ' style={{ marginTop: '15px' }}>
                    <option value=""></option>
                    {categories.map((opt, ind) => (
                        <option key={ind} value={opt}>
                            {opt}
                        </option>
                    ))}
                </select>
                <br />
                <span style={{ marginLeft: '34px', marginTop: '15px' }}> Branch Restriction </span>
                <input type='radio' name='currency' style={{ marginLeft: '5px', marginTop: '15px' }} /> Head Office GL  <br />
                <input type='radio' name='currency' style={{ marginLeft: '172px' }} /> Branch GL <br />
                <input type='radio' name='currency' style={{ marginLeft: '172px' }} /> Both  <br />

                <p className='text-primary' >Year End Profit and Loss Accounts </p>
                <hr className='text-primary w-25' style={{ marginTop: '-27px', marginLeft: '250px' }} />

                <span style={{ marginLeft: '59px', marginTop: '15px' }}>Profit Account</span>
                <input type="text" style={{ marginLeft: '15px', marginTop: '10px' }} />
                <br />
                <span style={{ marginLeft: '67px', marginTop: '15px' }}>Loss Account</span>
                <input type="text" style={{ marginLeft: '15px', marginTop: '15px' }} />
                <br />
            </div>
            <div className="col-4  " style={{ marginTop: '30px', marginLeft: '-24px' }} > <hr />
                <span className='mx-1'> Leaf :&nbsp;<input type='radio' name='leaf' className='' /> Leaf GL </span> <br />
                <span className='mx-5'>  <input type='radio' name='leaf' className='' /> Node GL  </span>
                <br />
                <input type='checkbox' style={{ marginLeft: '50px' }} />Revaluation
                <br />
                <input type='checkbox' style={{ marginLeft: '50px' }} />Blocked
                <br />
                <span className='mx-1'> Currency Restrictions </span>
                <input type='radio' name='currency' /> Single Currency  <br />
                <span className='' style={{ marginLeft: '160px' }}>
                    <input type='radio' name='currency' className='' /> All forgein Currencies </span><br />
                <span className='' style={{ marginLeft: '160px' }}>
                    <input type='radio' name='currency' className='' /> All Currencies <br />
                </span>
                <span className='' style={{ marginLeft: '90px', marginTop: '10px' }}>
                    Currency <input type='text' className='mx-1' style={{ marginTop: '10px' }} />
                </span>
                <br />
                <span style={{ marginLeft: '17px' }}> Posting Restrictions  </span>
                <input type='radio' name='gl' className='' style={{ marginLeft: '3px', marginTop: '10px' }} /> Leaf GL
                <br />
                <span className='mx-5'>  <input type='radio' name='gl' className='' style={{ marginLeft: '112px' }} /> Node GL  </span>
                <br />
                <input type='checkbox' style={{ marginLeft: '162px' }} /> Allow Back Period Entry
                <br />
                <div>
                    <p className='text-primary mx-1' style={{ marginTop: '10px' }} >Parent GL </p>
                    <hr className='text-primary' style={{ marginTop: '-27px', marginLeft: '80px', width: '280px' }} />
                </div>
                <span style={{ marginLeft: '83px' }}>Parent GL</span>
                <input type='text' style={{ marginLeft: '12px' }} />
                <br />
                <span style={{ marginLeft: '43px' }} >General Ledger </span>
                <input type="text" style={{ marginLeft: '8px', marginTop: '20px' }} className='mt-1' />
                <br /><span style={{ marginLeft: '70px' }}>Description</span>
                <br />
                <span style={{ marginLeft: '85px', marginTop: '-30px' }}>Category</span>
                <input type="text" style={{ marginLeft: '15px' }} />
                <br />

                <button style={{ background: '#00ACFF', color: 'white', height: '40px', marginTop: '15px', marginLeft: '170px', border: '5px solid #00ACFF', borderRadius: '5px' }}><i className="fa-solid fa-check"></i> Submit</button>
                <button style={{ background: '#00ACFF', color: 'white', height: '40px', margin: '10px', border: '5px solid #00ACFF', borderRadius: '5px' }}><i className="fa-solid fa-circle-xmark"></i> Cancel</button>
            </div>
        </div>
    );
}