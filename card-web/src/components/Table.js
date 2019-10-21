import React from 'react'
import Row from './Row'
//import CardInfoSchema from '../common/cardInfoSchema'

/*
const style = {
    "text-align": "left",
    "text-transform": "uppercase",
    "font-size": "medium",
    "font-weight": "bold",
    "color": "burlywood",
    "padding-bottom": "10px"
}

function TableSheet(headerInfo, rowData) {
    if (headerInfo === null) {
        return <div> Data is unavailable.</div>;
    } else {
        return (
            <div className="container">
                 <div className="row" style={style}>
                    {headerInfo}
                </div>

                <div class="w-100"></div>
                {rowData}
            </div>

        )
        
    }
}
const Table = ({ dataSet }) => {

    let rowData = dataSet.length !== 0 ? dataSet.map(data => (<Row row={data} key={data.id} />)) : null;
    let headerInfo = dataSet.length === 0 ? null : Object.keys(dataSet[0]).map(d => {
        let dataSetSchema = CardInfoSchema[d];
        console.log("dataSetSchema " + dataSetSchema);
        if (dataSetSchema.enable) {
            return (<div className="col-sm-4" key={d} scope="col">{dataSetSchema.desc}</div>);
        }
        return null;

    });
    
   return (TableSheet(headerInfo, rowData));
}
*/
function TableSheet(rowData){
    return (
        <div className="App-box">
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Card Number</th>
                        <th scope="col">Balance</th>
                        <th scope="col">Limit</th>
                    </tr>
                </thead>
                <tbody>{rowData}</tbody>
                
            </table>
        </div>
    )
}
const Table = ({ dataSet }) => {

    let rowData = dataSet.length !== 0 ? dataSet.map(data => (<Row row={data} key={data.id} />)) : null;
    return (TableSheet(rowData));
}



export default Table;




