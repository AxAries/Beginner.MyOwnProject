import React from "react";
import "./AddUser.css";


const AddUser = ({ onAdd }) => {

const handleOnSubmit = (e) => {
    e.preventDefault();
    onAdd(e.target.offerText.value,
        e.target.city.value,
        e.target.street.value,
        e.target.salaryFrom.value,
        e.target.salaryTo.value,
        e.target.languages.value);

    e.target.offerText.value = "";
    e.target.city.value = "";
    e.target.street.value = "";
    e.target.salaryFrom.value = "";
    e.target.salaryTo.value = "";
    e.target.languages.value = "";

    alert("Twoje dane zostały wysłane" );
    window.location.href="/StrefaPracodawcy";
}



  return (
    <div className="pp">
      <form onSubmit={handleOnSubmit} >
        <h2>Dodawanie nowej oferty</h2>
        <div className="textInfo">Tytuł oferty</div>
        <p className="input_appearance">
        <input type="text" class="css-input" placeholder="Tytuł oferty" name="offerText" required/>
        </p>

        <div className="textInfo">Miasto</div>
        <p className="input_appearance">
        <input type="text" class="css-input" placeholder="Miasto" name="city" required />
        </p>

        <div className="textInfo">Ulica</div>
        <p className="input_appearance">
        <input type="text" class="css-input" placeholder="Ulica" name="street" required/>
        </p>

        <div className="textInfo">Wynagrodzenie miesięczne od</div>
        <p className="input_appearance">
        <input type="number" min="1" class="css-input" placeholder="Wynagrodzenie od" name="salaryFrom" required />
        </p>

        <div className="textInfo">Wynagrodzenie miesięczne do</div>
        <p className="input_appearance">
        <input type="number" min="2" class="css-input" placeholder="Wynagrodzenie do" name="salaryTo" required/>
        </p>

        <div className="textInfo">Języki programowania</div>
        <p className="input_appearance">
        <input type="text" class="css-input" placeholder="Języki programowania" name="languages" required/>
        </p>

        <p className="input_appearance">
          
        <button className="btn-add">Dodaj ofertę</button>
        </p>
      </form>
    </div>
  );
};

export default AddUser;
