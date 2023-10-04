import React from 'react'
import Button from '@mui/material/Button';
import CustomNav from './CustomNav';

const Documents = () => {
    return (
        <>
            <CustomNav/>
            <div style={{marginLeft:'350px',marginTop:'-300px'}}>
            <div style={{marginLeft:'30px'}}>
                <h4 className='mt-5 text-muted'>Documents</h4>
                <h5 style={{ fontWeight: '100' }}>Uploaded Documents:</h5>
            </div>
            <div class='row' style={{ marginLeft: '20px' }}>
                <div class="col-sm-6">
                    <label className='mt-2 text-muted'>Identity Document</label><br />
                    <input type="text" placeholder='Select type of proof...' className='input-height rounded border-1 w-75 mt-1' /><br />
                    <Button variant='outlined' style={{ background: '#00ACFF'}} className='text-light mt-2'><i class="fa-solid fa-folder-open"></i>Browse</Button>
                    <Button variant='outlined' style={{ background: '#00ACFF' }} className='text-light mt-2 ms-3'><i class="fa-solid fa-upload"></i>Upload</Button> <br />
                    <label className='mt-2 text-muted'>Company Document</label><br />
                    <input type="text" placeholder='Select type of proof...' className='input-height rounded border-1 w-75 mt-1' /><br />
                    <Button variant='outlined' style={{ background: '#00ACFF'}} className='text-light mt-2'><i class="fa-solid fa-folder-open"></i>Browse</Button>
                    <Button variant='outlined' style={{ background: '#00ACFF' }} className='text-light mt-2 ms-3'><i class="fa-solid fa-upload"></i>Upload</Button> <br />

                    <label className='mt-2 text-muted'>Other</label><br />
                    <input type="text" placeholder='Select type of proof...' className='input-height rounded border-1 w-75 mt-1' /><br />
                    <Button variant='outlined' style={{ background: '#00ACFF'}} className='text-light mt-2'><i class="fa-solid fa-folder-open"></i>Browse</Button>
                    <Button variant='outlined' style={{ background: '#00ACFF' }} className='text-light mt-2 ms-3'><i class="fa-solid fa-upload"></i>Upload</Button> <br />

                </div>
                <div class="col-sm-6">
                    <label className='mt-2 text-muted'>Bank Document</label><br />
                    <input type="text" placeholder='Select type of proof...' className='input-height rounded border-1 w-75 mt-1' /><br />
                    <Button variant='outlined' style={{ background: '#00ACFF'}} className='text-light mt-2'><i class="fa-solid fa-folder-open"></i>Browse</Button>
                    <Button variant='outlined' style={{ background: '#00ACFF' }} className='text-light mt-2 ms-3'><i class="fa-solid fa-upload"></i>Upload</Button> <br />

                    <label className='mt-2 text-muted'>Address Document</label><br />
                    <input type="text" placeholder='Select type of proof...' className='input-height rounded border-1 w-75 mt-1' /><br />
                    <Button variant='outlined' style={{ background: '#00ACFF'}} className='text-light mt-2'><i class="fa-solid fa-folder-open"></i>Browse</Button>
                    <Button variant='outlined' style={{ background: '#00ACFF' }} className='text-light mt-2 ms-3'><i class="fa-solid fa-upload"></i>Upload</Button> <br />

                </div>
            </div>
            </div>
        </>
    )
}

export default Documents