import { useContext, useEffect, useState } from "react";
import ContactContext from "../store/appContext";
import { Link, useParams, useNavigate } from "react-router-dom";


const UpDateContact = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [address, setAddress] = useState("")

    const { handleGetContacts, contact } = useContext(ContactContext)

    const { idContact } = useParams()

    const navigate = useNavigate()

    useEffect(() => {

        const getContactDetail = contact.filter((contact) => contact.id == idContact)
        setName(getContactDetail[0].name)
        setEmail(getContactDetail[0].email)
        setPhone(getContactDetail[0].phone)
        setAddress(getContactDetail[0].address)
    }, [idContact])

    const handleUpdateContact = () => {

        fetch("https://playground.4geeks.com/contact/agendas/agendafs002/contacts/" + idContact, {
            method: "PUT",
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
                if (res.ok) console.log("Contacto editado correctamente")
            })
            .then(async () => await handleGetContacts())
        setName("")
        setPhone("")
        setEmail("")
        setAddress("")

        navigate("/")



    }


    return (
        <div>
            <div className="titulo">
                <h1>Editar un Contacto</h1>
            </div>
            <div className="datos">
                <label>Full Name</label>
                <input type="text" placeholder="Enter Full Name" onChange={(e) => setName(e.target.value)} value={name}></input>
                <label>Email</label>
                <input type="email" placeholder="Enter Email" onChange={(e) => setEmail(e.target.value)} value={email}></input>
                <label>Phone</label>
                <input type="text" placeholder="Enter Phone" onChange={(e) => setPhone(e.target.value)} value={phone}></input>
                <label>Address</label>
                <input type="text" placeholder="Enter Address" onChange={(e) => setAddress(e.target.value)} value={address}></input>
            </div>
            <div className="guardar">
                <button type="button" className="btn btn-primary save" onClick={() => handleUpdateContact()}>Save</button>
                <Link to="/" className="back">Or get back to contacts</Link>
            </div>
        </div>
    )
}

export default UpDateContact;