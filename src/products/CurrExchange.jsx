import React, { useState } from 'react'


export default function CurrExchange() {
    const curr1 = ['INR', 'USD', 'ZMW', 'ZAR'];

    const curr2 = {
        'INR': ['USD', 'ZMW', 'ZAR'],
        'USD': ['INR', 'ZMW', 'ZAR'],
        'ZMW': ['INR', 'USD', 'ZAR'],
        'ZAR': ['INR', 'USD', 'ZMW']
    }

    const [curr, setCurr] = useState('');
    console.log(curr);


    const [tableData, setTableData] = useState([
        ["1", "Item 1", "Description 1", "Unit 1", "10", "Remarks 1", "19 sep", "001"],
        ["2", "Item 2", "Description 2", "Unit 2", "20", "Remarks 2", "20 sep", "002"],
    ]);
    const [selectedRows, setSelectedRows] = useState([]);

    const add = () => {
        const newRow = ["", "", "", "", "", "","",""];
        setTableData([...tableData, newRow]);
    };

    const del = () => {
        if (selectedRows.length === 0) {
            // No rows selected, delete the last row
            const updatedData = [...tableData];
            updatedData.pop();
            setTableData(updatedData);
        } else {
            // Rows are selected, remove selected rows
            const updatedData = tableData.filter((_, index) => !selectedRows.includes(index));
            setTableData(updatedData);
        }
        setSelectedRows([]);
    };

    const handleCheckboxChange = (rowIndex) => {
        if (selectedRows.includes(rowIndex)) {
            setSelectedRows(selectedRows.filter((row) => row !== rowIndex));
        } else {
            setSelectedRows([...selectedRows, rowIndex]);
        }
    };

    const handleCellChange = (event, rowIndex, colIndex) => {
        const updatedData = [...tableData];
        updatedData[rowIndex][colIndex] = event.target.value;
        setTableData(updatedData);
      };
    return (
        <div>
            <h3 style={{ margin: '20px' }}>MASTER/<span style={{ fontSize: '17px', color: 'grey' }}>CURRENCY EXCHANGE RATE</span></h3>
            <hr />
            <div>
                <h4 style={{ margin: '20px' }}>Currency Exchange Rates Input</h4>
                <label style={{ fontSize: '16px', color: 'grey', marginLeft: '55px' }}>Currency 1 <span style={{ color: 'red' }}>*</span></label>
                <select onChange={(e) => { setCurr(e.target.value) }} style={{ height: '40px', color: 'grey', width: '350px', borderRadius: '5px', border: '1px solid grey' }}>
                    <option>Select </option>
                    {
                        curr1.map(c1 => {
                            return <option>{c1}</option>
                        })
                    }
                </select>
                <label style={{ fontSize: '16px', color: 'grey', marginLeft: '55px' }}>Currency 2 <span style={{ color: 'red' }}>*</span></label>
                {curr && <select style={{ height: '40px', color: 'grey', width: '350px', borderRadius: '5px', border: '1px solid grey' }}>
                    <option>Select currency 2</option>
                    {
                        curr2[curr].map(c2 => {
                            return <option>{c2}</option>
                        })
                    }

                </select>
                }
                <h5 style={{ fontSize: '17px', marginLeft: '20px', marginTop: '20px' }}>Currency Rate</h5>
                <table style={{ width: '300px', marginLeft: '15px' }} border='1' id='data_table'>
                     <tr style={{ background: '#c5e3ec' }}>
                        <th><i class="fa-solid fa-backward-step"></i></th>
                        <th><i class="fa-solid fa-caret-left"></i> 1 of 1 <i class="fa-solid fa-caret-right"></i></th>
                        <th><i class="fa-solid fa-forward-step"></i></th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th><input type="button" value="+" class='add' onClick={add} style={{ width: '30px' }} /> <input type="button" class='del' value="-" onClick={del} style={{ width: '30px' }} /></th>
                    </tr>
                    <tr style={{ background: '#c5e3ec'}}>
                        <th style={{ border: '1px solid skyblue' }}><input type="checkbox" name="" id="aaa" /></th>
                        <th style={{ border: '1px solid skyblue'}}>Rate Type *</th>
                        <th style={{ border: '1px solid skyblue' }}>Mid Rate</th>
                        <th style={{ border: '1px solid skyblue' }}>Buy Spread</th>
                        <th style={{ border: '1px solid skyblue' }}>Sell Spread</th>
                        <th style={{ border: '1px solid skyblue' }}>Buy Rate</th>
                        <th style={{ border: '1px solid skyblue' }}>Sale Rate</th>
                        <th style={{ border: '1px solid skyblue' }}>Rate Date</th>
                        <th style={{ border: '1px solid skyblue' }}>Rate Sequence</th>
                    </tr>
                    <tbody >
                        {tableData.map((row, rowIndex) => (
                            <tr key={rowIndex}>
                                <td>
                                    <input
                                        type="checkbox"
                                        checked={selectedRows.includes(rowIndex)}
                                        onChange={() => handleCheckboxChange(rowIndex)}
                                    />
                                </td>
                                {row.map((cell, colIndex) => (
                                    <td key={colIndex}>
                                        <input
                                            style={{width:'100px'}}
                                            type="text"
                                            value={cell}
                                            onChange={(event) => handleCellChange(event, rowIndex, colIndex)}
                                        />
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>

                </table>
                <input type="button" value="Save" id='save_button1' style={{ color: 'white', background: '#00acff', border: '1px solid skyblue', height: '40px', width: '70px', borderRadius: '5px', margin: '10px', marginLeft: '49%' }} />
                <input type="button" value="Cancel" id='delete_button1' style={{ color: 'white', background: '#00acff', border: '1px solid skyblue', height: '40px', width: '70px', borderRadius: '5px' }} />

            </div>
        </div>
    )
}

