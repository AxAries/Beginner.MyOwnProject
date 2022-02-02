import React from "react";
import './Profile.css';
import EditAndSupport from "./EditAndSupport/EditAndSupportProfiles";
import filedocuments from './filedocuments.png';
import save from './save.png';
import myaplication from './myaplication.jpg';

function Profile(){

return (
<div>
    <div className="Profile_Section">
        <div className="Profile_Wrapper">
            <h1 className="Profile_Heading">
                Moje konto
                <div className="Profile_Container">
                    <div className="Profile_Dashboard-Welcome">
                        <div className="Profile_Dashboard-Welcome-Picture">
                            <img class="Profile_image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThLP6xJXBY_W2tT5waakogfnpHk4uhpVTy7A&usqp=CAU" alt="photo"/>
                        </div>
                        <div className="Profile_Dashboard-Welcome-Info">
                            <h2>Cześć IMIĘ!</h2>                       
                            <ul className="Profile_Info">
                                <li>Twoje nowe osiągnięcia: 70/100</li>
                                <li>Twój aktualny poziom w C#: 50/100</li>
                                <li>Twój aktualny poziom w JavaScript: 89/100</li>
                                <li>Twój aktualny poziom w języku TypeScript: 65/100</li>
                            </ul>
                        </div>
                    </div>
                    <div className="Profile_CV">
                        <div className="Profile_CV-Experience">
                            <h1>Doświadczenie</h1>
                                <div className='buttonic'>
                                    <a href='/Doswiadczenie'>
                                        <button className='btn btn-primary btn-lg btn-block'>Dodaj/Edytuj</button>
                                    </a>
                                </div>
                        </div>
                        <div className="Profile_CV-Education">
                            <h1>Wykształcenie</h1>
                            <div className='buttonic'>
                                    <a href='/Edukacja'>
                                        <button className='btn btn-primary btn-lg btn-block'>Dodaj/Edytuj</button>
                                    </a>
                                </div>
                        </div>
                        <div className="Profile_CV-Interested">
                            <h1>Zainteresowania</h1>
                            <div className='buttonic'>
                                    <a href='/Zainteresowania'>
                                        <button className='btn btn-primary btn-lg btn-block'>Dodaj/Edytuj</button>
                                    </a>
                                </div>
                        </div>
                    </div>
                    <div className="Profile_Options">
                        <div className="Profile_Options-MyAplication">
                        <h1>Moje Aplikacje</h1>
                        <img className="Profile_Options-Image" src={myaplication} alt="logo" />
                        <button>Otwórz</button>
                        </div>
                        <div className="Profile_Options-SaveOffer">
                        <h1>Zapisane Oferty</h1>
                        <img className="Profile_Options-Image" src={save} alt="logo" />
                        <button>Otwórz</button>
                        </div>
                        <div className="Profile_Options-Documents">
                        <h1>CV i inne dokumenty</h1>
                        <img className="Profile_Options-Image" src={filedocuments} alt="logo" />
                        <a href='/Dokumenty' >
                        <button>Otwórz</button>
                        </a>
                        </div>
                    </div>

                    <EditAndSupport title={"EditAndSupportAddition"} />      

                </div>
            </h1>
        </div>
    </div>
</div>
  );
}

export default Profile