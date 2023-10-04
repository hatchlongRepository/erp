import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Slide from '../components/Slide';
import { Link } from 'react-router-dom';
// import TopBar from '../components/TopBar';

export default function SubCategoryList() {
    return (
        <>
            {/* <TopBar/> */}
            <div className='row'>
                <div className='col-3'>
                    <Slide />
                    </div>
                <div className='col-9'>
                <div className='' style={{ marginLeft: '50px',marginTop:'50px' }}>
                    <h3 style={{ margin: '20px' }}>INVENTORY<span style={{ fontSize: '17px', color: 'lightgrey' }}>/PRODUCT SUB CATEGORY LIST</span></h3>
                    <hr />
                    <Box sx={{ '& button': { m: 0.3 } }}>


                        <div style={{ marginTop: '30px' }}>
                            <Link to='/prosubcat'><Button variant="contained" style={{ background: '#00ACFF', fontSize: '12px' }} size="small"> Add Sub Category </Button></Link>
                            <Button variant='contained' size='small ' style={{ background: '#EE4B2B', height: '30px', fontSize: '12px' }}><i class="fa-solid fa-trash"></i>Delete Selected Category</Button>
                            <Button variant='outlined' style={{ background: '#00ACFF', color: 'white', width: 'auto', height: '30px' }}><i class="fa-solid fa-arrows-rotate"></i></Button>
                        </div>
                        <div class='row' style={{ marginTop: '30px' }}>
                            <div class='col-sm-4'>

                            </div>
                            <div class='col-sm-8' style={{ marginLeft: '-250px' }}>
                                <select style={{ width: '150px', fontSize: '14px', height: '30px', marginTop: '3px', borderRadius: '5px' }}>Select store
                                    <option>Sub Category</option>
                                </select>
                                <select style={{ width: '150px', fontSize: '14px', height: '30px', margin: '3px', borderRadius: '5px' }}>Select store
                                        <option>Status</option>
                                    </select>
                                <input type="text" name="" id="" placeholder='Search...' style={{ width: '240px', fontSize: '14px', marginTop: '0', height: '30px', borderRadius: '5px', border: '1px solid grey', margin: '4px' }} />

                                <Button variant='outlined' size="small" style={{ fontSize: '12px', height: '30px', color: 'black', border: '1px solid black' }}><i class="fa-solid fa-magnifying-glass"></i> Go </Button>

                                <table style={{ width: '900px' }}>
                                    <tr style={{ background: '#FAFAFA' }}>
                                        <th>S.No.</th>
                                        <th>Item Class</th>
                                        <th>Inventory Class</th>
                                        <th>Item Category</th>
                                        <th>Title</th>
                                        <th>Description</th>
                                        <th>Sale Profit</th>
                                        <th>Discount</th>
                                        <th>Actions</th>
                                        <th><input type="checkbox" name="" id="" />Select All</th>
                                    </tr>
                                    <tr>
                                        <td>1</td>
                                        <td>Deserts</td>
                                        <td>Headquarters</td>
                                        <td>Deserts</td>
                                        <td>VAT</td>
                                        <td>Discr</td>
                                        <td>prof</td>
                                        <td>dis</td>

                                        <td ><span className='btn-del'><i class="fa-solid fa-trash-arrow-up"></i> </span><i class="fa-solid fa-user-pen"></i></td>
                                        <td><input type="checkbox" name="" id="" /></td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>Deserts</td>
                                        <td>Headquarters</td>
                                        <td>Deserts</td>
                                        <td>VAT</td>
                                        <td>Discr</td>
                                        <td>prof</td>
                                        <td>dis</td>

                                        <td><span className='btn-del'><i class="fa-solid fa-trash-arrow-up"></i></span><i class="fa-solid fa-user-pen"></i></td>
                                        <td><input type="checkbox" name="" id="" /></td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>Deserts</td>
                                        <td>Headquarters</td>
                                        <td>Deserts</td>
                                        <td>VAT</td>
                                        <td>Discr</td>
                                        <td>prof</td>
                                        <td>dis</td>

                                        <td><span className='btn-del'><i class="fa-solid fa-trash-arrow-up"></i></span><i class="fa-solid fa-user-pen"></i></td>
                                        <td><input type="checkbox" name="" id="" /></td>
                                    </tr>
                                    <tr>
                                        <td>4</td>
                                        <td>Deserts</td>
                                        <td>Headquarters</td>
                                        <td>Deserts</td>
                                        <td>VAT</td>
                                        <td>Discr</td>
                                        <td>prof</td>
                                        <td>dis</td>

                                        <td ><span className='btn-del'><i class="fa-solid fa-trash-arrow-up"></i></span><i class="fa-solid fa-user-pen"></i></td>
                                        <td><input type="checkbox" name="" id="" /></td>
                                    </tr>
                                    <tr>
                                        <td>5</td>
                                        <td>Deserts</td>
                                        <td>Headquarters</td>
                                        <td>Deserts</td>
                                        <td>VAT</td>
                                        <td>Discr</td>
                                        <td>prof</td>
                                        <td>dis</td>

                                        <td ><span className='btn-del'><i class="fa-solid fa-trash-arrow-up"></i></span><i class="fa-solid fa-user-pen"></i></td>
                                        <td><input type="checkbox" name="" id="" /></td>
                                    </tr>
                                    <tr>
                                        <td>6</td>
                                        <td>Deserts</td>
                                        <td>Headquarters</td>
                                        <td>Deserts</td>
                                        <td>VAT</td>
                                        <td>Discr</td>
                                        <td>prof</td>
                                        <td>dis</td>

                                        <td ><span className='btn-del'><i class="fa-solid fa-trash-arrow-up"></i></span><i class="fa-solid fa-user-pen"></i></td>
                                        <td><input type="checkbox" name="" id="" /></td>
                                    </tr>
                                    <tr>
                                        <td>7</td>
                                        <td>Deserts</td>
                                        <td>Headquarters</td>
                                        <td>Deserts</td>
                                        <td>VAT</td>
                                        <td>Discr</td>
                                        <td>prof</td>
                                        <td>dis</td>

                                        <td ><span className='btn-del'><i class="fa-solid fa-trash-arrow-up"></i></span><i class="fa-solid fa-user-pen"></i></td>
                                        <td><input type="checkbox" name="" id="" /></td>
                                    </tr>
                                    <tr>
                                        <td>8</td>
                                        <td>Deserts</td>
                                        <td>Headquarters</td>
                                        <td>Deserts</td>
                                        <td>VAT</td>
                                        <td>Discr</td>
                                        <td>prof</td>
                                        <td>dis</td>

                                        <td ><span className='btn-del'><i class="fa-solid fa-trash-arrow-up"></i></span><i class="fa-solid fa-user-pen"></i></td>
                                        <td><input type="checkbox" name="" id="" /></td>
                                    </tr>
                                    <tr>
                                        <td>9</td>
                                        <td>Deserts</td>
                                        <td>Headquarters</td>
                                        <td>Deserts(Beverages)</td>
                                        <td>VAT</td>
                                        <td>Discr</td>
                                        <td>prof</td>
                                        <td>dis</td>

                                        <td ><span className='btn-del'><i class="fa-solid fa-trash-arrow-up"></i></span><i class="fa-solid fa-user-pen"></i></td>
                                        <td><input type="checkbox" name="" id="" /></td>

                                    </tr>
                                </table>
                                <div style={{ marginLeft: '50%', marginTop: '20px' }}>
                                    1-10<Button variant='outlined' >Next<i class="fa-solid fa-chevron-right"></i></Button>
                                </div>

                            </div>
                        </div>
                    </Box>
                </div></div>
            </div>
        </>
    )
}
