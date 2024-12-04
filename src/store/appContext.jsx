import { createContext, useEffect, useReducer } from "react";

export const ContactContext = createContext(null);

// patron flux
const ContactReducer = (state, action) => {
  // Dependiendo del type de la acción realiza una tarea distinta
  switch (action.type) {
    case "set":
      return action.payload
    case "add":
      return [...state, action.payload];
    case 'clear':
      return []
    default:
      return state;
  }
};

// eslint-disable-next-line react/prop-types
export function ContactProvider({ children }) {

  const [contact, contactActions] = useReducer(ContactReducer, []);

  const handleGetContacts = async () => {
    try {
      const res = await fetch("https://playground.4geeks.com/contact/agendas/agendafs002/contacts")
      const data = await res.json()
      if (res.ok) contactActions({
        type: "set",
        payload: data.contacts

      })
      console.log(data)
    } catch (error) {
      console.log(error)
    }

  }
  useEffect(() => {
    handleGetContacts()
  }, [])

  return (
    <ContactContext.Provider value={{ contact, contactActions, handleGetContacts }}>
      {children}
    </ContactContext.Provider>
  );
}

export default ContactContext;