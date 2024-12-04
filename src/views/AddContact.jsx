import { useContext, useState } from "react";
import ContactContext from "../store/appContext";
import { Link } from "react-router-dom";


const AddContact = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [address, setAddress] = useState("")

    const { handleGetContacts } = useContext(ContactContext)

    const handleCreateContact = () => {

        fetch("https://playground.4geeks.com/contact/agendas/agendafs002/contacts", {
            method: "POST",
            body: JSON.stringify({
                "name": name,
                "phone": phone,
                "email": email,
                "address": address
            }),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then((res) => {
                if (res.ok) console.log("Contacto agregado correctamente")
            })
            .then(async () => await handleGetContacts())
        setName("")
        setPhone("")
        setEmail("")
        setAddress("")


    }


    return (
        <div>
            <div className="titulo">
                <h1>Agregar un nuevo contacto</h1>
            </div>
            <div className="datos">
                <label>Full Name</label>
                <input type="text" placeholder="Enter Full Name" onChange={(e) => setName(e.target.value)} value={name}></input>
                <label>Email</label>
                <input type="text" placeholder="Enter Email" onChange={(e) => setEmail(e.target.value)} value={email}></input>
                <label>Phone</label>
                <input type="text" placeholder="Enter Phone" onChange={(e) => setPhone(e.target.value)} value={phone}></input>
                <label>Address</label>
                <input type="text" placeholder="Enter Address" onChange={(e) => setAddress(e.target.value)} value={address}></input>
            </div>
            <div className="guardar">
                <button type="button" className="btn btn-primary save" onClick={() => handleCreateContact()}>Save</button>
                <Link to="/" className="back">Or get back to contacts</Link>
            </div>
        </div>
    )
}

export default AddContact;