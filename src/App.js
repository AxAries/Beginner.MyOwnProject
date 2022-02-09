import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./Sessions/Login/Login";
import RegisterEmployee from "./Sessions/Register/RegisterEmployee";
import RegisterEmployer from "./Sessions/Register/RegisterEmployer";
import Dashboard from "./Components/Pages/Dashboard";
import ForgotPassword from "./Sessions/ForgotPassword";
import ConfirmNumber from "./Sessions/ConfirmNumber";
import NotFound from "./Components/Pages/NotFound";
import OfertyPracy from "./Components/Pages/OfertyPracy";
import AddOffer from "./Components/Pages/AddOffer";
import Offer from "./Components/Offers/Offer";
import ProfileWorker from "./Components/Pages/ProfileWorker";
import ProfileEmployer from "./Components/Pages/ProfileEmployer";
import Foremka from "./Components/Profiles/Forms/FormsExp";
import FormInterested from "./Components/Profiles/Forms/FormInterested";
import FormEducation from "./Components/Profiles/Forms/FormEducation";
import CVandDocuments from "./Components/Profiles/DocumentsUser/CVandDocuments";
import DashboardEmployer from "./Components/EmployerZone/DashboardEmployer";
import DashboardEmployerCandidates from "./Components/EmployerZone/DashBoardEmployerCandidates";
import DashboardEmployerAddOffer from "./Components/EmployerZone/DashboardEmployerAddOffer";
import DashboardNew from "./Components/dashboard/dashboard";
import Dash from "./Sessions/Login/dash";
import Who from "./Sessions/Register/Who";
function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<RegisterEmployee />} />
        <Route path="/RegisterEmployer" element={<RegisterEmployer />} />
        <Route path="/ForgotPassword" element={<ForgotPassword />} />
        <Route path="/ConfirmNumber" element={<ConfirmNumber />} />
        <Route exact path="/" element={<DashboardNew />} />
        <Route path="/OfertyPracy" element={<DashboardNew />} />
        <Route path="/AddOffer" element={<AddOffer />} />
        <Route path="/Offer/:id" element={<Offer />} />
        <Route path="/Profil/:username" element={<Offer />} />
        <Route path="/Profiles" element={<ProfileWorker />} />
        <Route path="/ProfileEmployer" element={<ProfileEmployer />} />
        <Route path="/Doswiadczenie" element={<Foremka />} />
        <Route path="/Zainteresowania" element={<FormInterested />} />
        <Route path="/Edukacja" element={<FormEducation />} />
        <Route path="/Dokumenty" element={<CVandDocuments />} />
        <Route path="/StrefaPracodawcy" element={<DashboardEmployer />} />
        <Route path="/StrefaPracodawcy-DodajOferte" element={<DashboardEmployerAddOffer />} />
        <Route path="/StrefaPracodawcy-kandydaci" element={<DashboardEmployerCandidates />} />
        <Route path="/DashboardNew" element={<DashboardNew />} />
        <Route path="/Dash" element={<Dash />} />
        <Route path="/ChoiceRegister" element={<Who />} />
        <Route path="/DlaPracodawcow" />
        <Route path="/MapaPracy" />
        <Route path="/O-Nas" />
      </Routes>
    </React.Fragment>
  );
}

export default App;
