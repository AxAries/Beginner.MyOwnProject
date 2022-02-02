import React from "react";
import '../Profile.css';
import konto from './konto.jpg';
import techniczne from './techniczne.jpg';
import zgloszeniaiodwolania from './zgloszeniaiodwolania.jpg';


function Profile(){

    return (
    <div>
        <div className="Profile_Settings">
                            <div className="Profile_Settings-Account">
                                <h1>Ustawienia</h1>
                                <div className="Profile_Settings-Account-Card">
                                    <div className="Profile_Settings-Account-Card-Info">
                                        <h4>Twoje dane</h4>
                                        <p>Informacje o tobie i twoim koncie</p>
                                    </div>
                                    <div className="Profile_Settings-Account-Card-Button">
                                        <button>Zmień</button>
                                    </div>
                                </div>
                                <div className="Profile_Settings-Account-Card">
                                    <div className="Profile_Settings-Account-Card-Info">
                                        <h4>Powiadomienia</h4>
                                        <p>Powiadomienia o najnowszych ofertach pracy, można ją wyłączyć</p>
                                    </div>
                                    <div className="Profile_Settings-Account-Card-Button">
                                        <button>Zmień</button>
                                    </div>
                                </div>
                            </div>
                            <div className="Profile_Settings-Security">
                                <h1>Bezpieczeństwo</h1>
                                <div className="Profile_Settings-Account-Card">
                                    <div className="Profile_Settings-Account-Card-Info">
                                        <h4>Logowania i hasło</h4>
                                        <p>Lorem ipsum lorem ipsum</p>
                                    </div>
                                    <div className="Profile_Settings-Account-Card-Button">
                                        <button>Zmień</button>
                                    </div>
                                </div>
    
                                <div className="Profile_Settings-Account-Card">
                                    <div className="Profile_Settings-Account-Card-Info">
                                        <h4>Dwustopniowe logowanie</h4>
                                        <p>Lorem ipsum lorem ipsum</p>
                                    </div>
                                    <div className="Profile_Settings-Account-Card-Button">
                                        <button>Zmień</button>
                                    </div>
                                </div>
    
                                <div className="Profile_Settings-Account-Card">
                                    <div className="Profile_Settings-Account-Card-Info">
                                        <h4>Twoje urządzenia</h4>
                                        <p>Lorem ipsum lorem ipsum</p>
                                    </div>
                                    <div className="Profile_Settings-Account-Card-Button">
                                        <button>Zmień</button>
                                    </div>
                                </div>
    
                                <div className="Profile_Settings-Account-Card">
                                    <div className="Profile_Settings-Account-Card-Info">
                                        <h4>Weryfikacja pomocnicza</h4>
                                        <p>Lorem ipsum lorem ipsum</p>
                                    </div>
                                    <div className="Profile_Settings-Account-Card-Button">
                                        <button>Zmień</button>
                                    </div>
                                </div>
                            </div>
                    </div>
    
                        <div className="Profile_ContactWithSupport">
                            <h1>Skontaktuj się z wsparciem</h1>
                            <h2>Przeglądaj kategorie</h2>
                            <div className="Profile_ContactWithSupport-Position">
                                <div className="Profile_ContactWithSupport-Card">
                                    <div id="Profile_ContactWithSupport-Card-info">
                                        <p>Konto</p>
                                    </div>
                                    <div id="Profile_ContactWithSupport-Card-Image">
                                        <img className="Profile_ContactWithSupport-Image" src={konto} alt="logo" />
                                    </div>
                                </div>
    
                                <div className="Profile_ContactWithSupport-Card">
                                    <div id="Profile_ContactWithSupport-Card-info">
                                        <p>Techniczne</p>
                                    </div>    
                                    <div id="Profile_ContactWithSupport-Card-Image">    
                                        <img className="Profile_ContactWithSupport-Image" src={techniczne} alt="logo" />
                                    </div>
                                </div>
    
                                <div className="Profile_ContactWithSupport-Card">
                                    <div id="Profile_ContactWithSupport-Card-info">
                                        <p>Zgłoszenia i odwołania</p>
                                    </div>    
                                    <div id="Profile_ContactWithSupport-Card-Image">    
                                        <img className="Profile_ContactWithSupport-Image" src={zgloszeniaiodwolania} alt="logo" />
                                    </div>
                                </div>
    
                            </div>
    
                        </div>            
                    </div>
      );
    }
    
    export default Profile