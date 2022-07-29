import React from "react";
import Button from "../Button";
import {Form} from "../Form/Form";

export default function TableRow({value, remove, edit}) {


    return (
        <tr>
            <td>{!!value.name ? value.name : 'NO CATTY'}</td>
            <td>{value.surname}</td>
            <td>{value.telephone}</td>
            <td>{value.address}</td>
            <td>{value.email}</td>
        <td>
            <Button onClick={() => edit(value)}>Редактировать</Button>
            <Button onClick={() => remove(value)}>Удалить </Button>
        </td>
        </tr>)
    }