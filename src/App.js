import React, {useContext, useState, useEffect} from "react";
import './App.css';
import Table from "./components/Table";
import {Form} from "./components/Form/Form";
import Button from "./components/Button";
import Modal from "./components/Form/Modal";



function App() {
    const massPerson = [
        {
            name: "Кот",
            surname: "Матроскин",
            telephone: "простоквашино",
            address: "001",
            email: "КотМ@mail.ru",
            id: '1'
        },
        {
            name: "Пес",
            surname: "Алексеев",
            telephone: "252-63-08",
            address: "777",
            email: "ПесA@mail.ru",
            id: '2'
        },
        {
            name: "dev",
            surname: "Rzrabotchik",
            telephone: "8(999)773-51-05",
            address: "www",
            email: "DevR@gmail.ru",
            id: '3'
        },
    ]
    const [modalActive, setModalActive] = useState(false)
    const [editData, setEditData]=useState()
    const [clientData, setClientData] = useState(massPerson)

    useEffect(() => {
        // GET request using fetch inside useEffect React hook
        fetch('http://178.128.196.163:3000/api/records/')
            .then(response => response.json())
            .then(back => setClientData([...clientData, back]));
        // empty dependency array means this effect will only run once (like componentDidMount in classes)
    }, []);


    const deletePost = (data) => {
        setClientData(clientData.filter(p => p.id !== data.id))
        console.log(data)
    }
    const editPost = (data) => {
        setModalActive(true) //вызов модального окна
        setEditData(data) //данные TableRow записываются в data
       // data.indexOf(data.email, 0)
       //setClientData(clientData.splice(data.indexOf(data.email, 0), 1, editData))
       //  const ind = data.indexOf(data.id, 0)
       //  editData=data.map(data.id, 1, formData)
       //  console.log(ind - 'индекс')
        //arr.splice(index[, deleteCount, elem1, ..., elemN])
        //setEditData(data.slice(data.id, 1))
        //data.splice(data.id, 1, editData)
        //console.log('test', editData, data.id )

    }

  return (
    <div className="App">
      <div className="App-container">
          <Table remove={deletePost} data={clientData} edit={editPost} />
          <Button onClick={() => {
              setModalActive(true);
                  setEditData(undefined)
          }}> Добавить новую запись </Button>
          <Modal active={modalActive} setActive={setModalActive}>
              <Form data={clientData} setData={setClientData} editData={editData} setEditData={setEditData} setActive={setModalActive}/>
          </Modal>
      </div>
    </div>
  );
}

export default App;

