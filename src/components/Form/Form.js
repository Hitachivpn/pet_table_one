import React, {useEffect, useRef, useState} from "react";
import './Form.css';
import AddButton from "../Button";
import MyInput from "./MyInput";
//import { uuid } from 'uuidv4';
import { v4 as uuid } from 'uuid';

const initial = {
    name: '',
    surname: '',
    telephone: '',
    address: '',
    email: ''
}
export const Form = ({data, setData, editData, setEditData, setActive}) => {
    const [formData, setFormData] = useState(initial)
    const addNewPost = () => {

        const newData={...formData, id: uuid()}
        setData([...data, newData])
        setFormData(initial)
        setEditData(null)
        setActive(false)
       //console.log(uuid());
        // const prices = [19.99, 4.95, 25, 3.50];
        // let new_prices = prices.map(price => price * 1.06);
    }
    useEffect(() => {
         editData
             ? setFormData(editData)
             : setFormData(initial)
        },[editData]);//зависимости, от которых вызывается effect

    const editPost = () => {
        //setData([...data, formData])
        setActive(false)
        setFormData(initial)
        setData(data.map(item => {
            if (item.id === editData.id) {
                return formData
            }
            return item
        }))
       //setFormData(data.splice(data.id, 1, formData))
        //в массиве data найти элемент id

    }
const onChange = (e, field) => setFormData({...formData, [field]: e.target.value})
const bodyInputRef= useRef();
    return (
        <div className="container">
            <div className="MyForm">
                Имя:
                <MyInput ref={bodyInputRef}   value={formData?.name} onChange={(e) => onChange(e, 'name')} placeholder="Имя" type="text" />
                <MyInput value={formData?.surname} onChange={(e) => onChange(e, 'surname')} placeholder="Фамилия" type="text" />
                <MyInput value={formData?.telephone} onChange={(e) => onChange(e, 'telephone')} placeholder="Номер телефона" type="text" />
                <MyInput value={formData?.address} onChange={(e) => onChange(e, 'address')} placeholder="Адрес" type="text" />
                <MyInput value={formData?.email} onChange={(e) => onChange(e, 'email')} placeholder="e-mail" type="text" />
                {editData ?
                <AddButton onClick={editPost}> Редактировать запись </AddButton>:
                <AddButton onClick={addNewPost}> Добавить запись </AddButton>
                }
            </div>
        </div>
    )
}



