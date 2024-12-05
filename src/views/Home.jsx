import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ContactContext } from "../store/appContext"
import ContactCard from "../components/ContactCard";
import ButtonAdd from "../components/ButtonAdd";
import Modal from "../components/Modal";

const Home = () => {
    const navigate = useNavigate()
    const { contact, handleGetContacts } = useContext(ContactContext)

    const [idDelete, setIdDelete] = useState(null)
 

    
    const handleDelete = async () => {
        const deleteResponse = await fetch("https://playground.4geeks.com/contact/agendas/agendafs002/contacts/" + idDelete,
            {
                method: "DELETE"
            })

        if (deleteResponse.ok) console.log("Contacto eliminado correctamente")

        await handleGetContacts()

    }

    return (
        <>
            <div className="container-fluid">
                <ButtonAdd />
                {contact && contact.map((contact, index) => (
                    <ContactCard
                        contactoId={contact.id}
                        key={index}
                        name={contact.name}
                        address={contact.address}
                        phone={contact.phone}
                        email={contact.email}
                        idDeleteSelect= {() => setIdDelete(contact.id)}
                        onUpDate={() => navigate("/updatecontact/" + contact.id)}
                    />
                ))}
            </div>
            <Modal onDelete={() => handleDelete(idDelete)} />
        </>
    )
}

export default Home;