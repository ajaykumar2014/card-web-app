
import React from 'react'

const blockIndexCol = {
    display: 'none'

};
const Row = ({ row }) => {

    //Dynamic generated columns.
    /*
      let rowId = row ===undefined ? null :Object.values(row).map(r =>( <div className="col-sm-4">{r}</div> ));
      return (<div className="w-100"><div className="row" key={row.id} style={style}>{rowId}</div></div>)
  

    return (
        <div className="w-100">
            <div className="row" key={row.id}>
                <div className="col-sm-4" style={blockIndexCol}>{row['id']}</div>
                <div className="col-sm-4">{row['name']}</div>
                <div className="col-sm-4">{row['cnumber']}</div>
                <div className="col-sm-4">{row['climit']}</div>
            </div>

        </div>
    )
    */

    return (
        <tr>
            <td>{row['name']}</td>
            <td>{row['cnumber']}</td>
            <td>$0</td>
            <td>{row['climit']}</td>
        </tr>
    )
}

export default Row;