import React from 'react'
import Row from './Row'

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
        return <div> Data Table is unknown.</div>;
    } else {
        return (
            <div className="container">
                    <div className="row" style={style}>
                        {headerInfo}
                        <div className="col-sm-4" scope="col">Action</div>
                    </div>
                
                    <div class="w-100"></div>
                    {rowData}
              
            </div>

        )
    }
}
const Table = ({ dataSet }) => {
    
    let rowData = dataSet.length !== 0 ? dataSet.map(data => (<Row row={data} key={data.id}/>)) : null;
    console.log()
    let headerInfo = dataSet.length === 0 ? null : Object.keys(dataSet[0]).map(d => (<div className="col-sm-4" key={d} scope="col">{d}</div>));
    
    return (TableSheet(headerInfo, rowData));
}

export default Table;




