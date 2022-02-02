import React from "react";
import "./ProfileEmployer.css"
import EditAndSupport from "../EditAndSupport/EditAndSupportProfiles";
import Candidates from './candidates.png';
import Announcements from './Announcements.png';
import AddAnnouncements from './AddNewAdvertisement.png';

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
                            <h2>Cześć Pracowadco!</h2>                       
                            <ul className="Profile_Info">
                                <li>Lorem ipsum Lorem ipsum</li> 
                            </ul>
                        </div>
                    </div>
                    
                    <div className="ProfileEmployer_Options">
                        <div className="ProfileEmployer_Options-Announcements">
                        <h1>Ogłoszenia</h1>
                        <img className="ProfileEmployer_Options-Image" src={Announcements} alt="logo" />
                        <button>Otwórz</button>
                        </div>
                        <div className="ProfileEmployer_Options-AddAnnouncements">
                        <h1>Dodaj nowe ogłoszenie</h1>
                        <img className="ProfileEmployer_Options-Image" src={AddAnnouncements} alt="logo" />
                        <button>Otwórz</button>
                        </div>
                        <div className="ProfileEmployer_Options-Candidates">
                        <h1>Kandydaci</h1>
                        <img className="ProfileEmployer_Options-Image" src={Candidates} alt="logo" />
                        <button>Otwórz</button>
                        </div>
                    </div>

                    <div className="ProfileEmployer_Options-Two">
                            <div className="ProfileEmployer_Options-Two-Pay">
                                <h1>Płatności i subskrybcje</h1>
                                    <div className="ProfileEmployer_Options-Two-PaySize">
                                        <div className="ProfileEmployer_Options-Two-AccountPayment">
                                            <p>Tutaj będzie wyświetlał panel płatności</p>
                                        </div>
                                    </div>
                                <button>Otwórz</button>
                            </div>
                            <div className="ProfileEmployer_Options-Two-Test">
                                <h1>Twoje testy</h1>
                                    <div className="ProfileEmployer_Options-Two-PaySize">
                                        <p>Tutaj będzie się wyświetlała lista</p>
                                    </div>
                                <button>Otwórz</button>
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