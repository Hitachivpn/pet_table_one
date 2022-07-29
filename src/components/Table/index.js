import React from "react";
import TableBody from "./TableBody";
import {TableHeader} from "./TableHeader";


export default function Table({data, remove, edit}) {

    return (
        <table border={1}>
            <TableHeader />
            <TableBody remove={remove} mens={data} edit={edit}/>
        </table>
    )
}
