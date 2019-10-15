
import React from 'react'
const style = {
    padding: '7px'

};
const Row = ({ row }) => {
    let rowId = row ===undefined ? null :Object.values(row).map(r => ( <div className="col-sm-4">{r}</div> ));
    console.log(row)
    return (<div className="w-100"><div className="row" key={row.id} style={style}>{rowId}</div></div>)
}
export default Row;