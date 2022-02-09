import React, { useEffect } from "react";

import Navbartop from "../Navbar/Navbartop";
import Footer from "../Footer/Footer";

import  OfferShortInfo  from "../Offers/OfferShortInfo";
import OfferList from "../Offers/OfferList";

import { Row, Container } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { fetchAsyncOffers, getAllOffers } from "../../Redux/Offers/offerSlice";

const Dashboard = () => {
  const dispatch = useDispatch();
  const offers = useSelector(getAllOffers);
  useEffect(() => {
    dispatch(fetchAsyncOffers());
  }, [dispatch]);
  return (
    <>
      <Navbartop />
      <section style={{ backgroundColor: "#eee" }}>
        <Container className="justify-content-center align-items-center py-5">
        
        
        
        </Container>
      </section>
      <Footer />
    </>
  );
};
export default Dashboard;