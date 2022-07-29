import React from "react";
import TableRow from "./TableRow";

const TableBody = ({mens, remove, edit}) => {
    return (
        <tbody>
        {/*<TableRow menss={mens}/>*/}
        {mens.map((man) => <TableRow remove={remove} value={man} edit={edit} key={man.id}/>)}
        </tbody>
    )
}

export default TableBody