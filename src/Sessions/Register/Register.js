import React from 'react';
import './reg.css';





const AddUser = ({onAdd}) => {

  const handleOnSubmit = (e) => {
    e.preventDefault();
    onAdd(e.target.name.value,
        e.target.surname.value,
        e.target.email.value,
        e.target.phone_number.value,
        e.target.passwordHash.value,
        );

    e.target.name.value = "";
    e.target.surname.value = "";
    e.target.email.value = "";
    e.target.phone_number.value = "";
    e.target.passwordHash.value = "";
   
    alert(`Cześć, rejestracja powiodła się sukcesem! :) `);
    window.location.href="/";
}



  return (


    <div className="wrapper">
      <h2 className="registerTitle">Rejestracja pracobiorcy</h2>
      <form className="registerForm" onSubmit={handleOnSubmit} >
        <input className="textInput" type="text" name="name" placeholder="Imię"required/>
        
        <input
          className="textInput"
          type="text"
          name="surname"
          placeholder="Nazwisko"
          required
        />

        <input
          className="textInput"
          type="email"
          name="email"
          placeholder="Email"
          controlId="email"
          required
        />

        <input
          className="textInput"
          type="tel" 
          name="phone_number"
          placeholder="Numer telefonu"
          required
        />
        
        <input
          className="textInput"
          type="password"
          name="passwordHash"
          placeholder="Password"
          required
        />


        <label className="touCheckboxLabel">
          <input
            className="touCheckbox"
            type="checkbox"
            name="termsAccepted"
            
            required
          />
          Zaakceptuj warunki użytkowania
        </label>

        <button className="btn-add">Zarejestruj się</button>
      </form>
    </div>

  );
};

export default AddUser;
