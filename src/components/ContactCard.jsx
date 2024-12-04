import { useEffect, useState } from "react";
import Modal from "./Modal";

const ContactCard = ({ name, address, phone, email, onUpDate, idDeleteSelect }) => {



  return (
    <>
      <div className="card mb-3 tarjeta" >
        <div className="row g-0">
          <div className="col-2">
            <img src="https://plus.unsplash.com/premium_photo-1731492051322-c4536cbc1606?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="rounded-circle" alt="..." />
          </div>
          <div className="col-10">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-center">
                <h5 className="card-title">{name}</h5>
                <div>
                  <i className="fa-solid fa-pencil mx-2" onClick={onUpDate}></i>
                  <i className="fa-solid fa-trash mx-2" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={idDeleteSelect}></i>
                </div>
              </div>
              <p className="card-text"><i className="fa-solid fa-location-dot"></i> {address}</p>
              <p className="card-text"><i className="fa-solid fa-phone"></i> {phone}</p>
              <p className="card-text"><i className="fa-solid fa-envelope"></i> {email}</p>
            </div>
          </div>
        </div>
      </div>
      
    </>
  )
}
export default ContactCard;


