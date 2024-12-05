import { createContext, useEffect, useReducer } from "react";

export const ContactContext = createContext(null);

const ContactReducer = (state, action) => {
  switch (action.type) {
    case "set":
      return action.payload;
    case "add":
      return [...state, action.payload];
    case "clear":
      return [];
    default:
      return state;
  }
};

export function ContactProvider({ children }) {
  const [contact, contactActions] = useReducer(ContactReducer, []);

  const handleGetContacts = async () => {
    try {
      const res = await fetch("https://playground.4geeks.com/contact/agendas/agenda_diana/contacts");
      const data = await res.json();
      if (res.ok)
        contactActions({
          type: "set",
          payload: data.contacts,
        });
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleGetContacts();
  }, []);

  return (
    <ContactContext.Provider value={{ contact, contactActions, handleGetContacts }}>
      {children}
    </ContactContext.Provider>
  );
}

export default ContactContext;