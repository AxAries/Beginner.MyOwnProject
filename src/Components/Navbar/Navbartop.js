import React, { useState, useEffect, useCallback } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { NavbarItems } from "./NavbarItems";
import { useDispatch, useSelector } from "react-redux";
import { Nav, Navbar, Button, Container } from "react-bootstrap";
import EventBus from "../../common/EventBus";
import { logout } from "../../Redux/User/auth";

export default function Navbartop() {
  const { user: currentUser } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const logOut = useCallback(() => {
    dispatch(logout());
  }, [dispatch]);

  useEffect(() => {
    EventBus.on("logout", () => {
      logOut();
    });

    return () => {
      EventBus.remove("logout");
    };
  }, [currentUser, logOut]);
  const link = "/Profil/" + currentUser;

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container fluid>
        <Navbar.Brand href="/">Beginner.pl</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {NavbarItems.map((item) => {
              return (
                <Nav.Link key={item.id} href={item.url}>
                  {item.title}
                </Nav.Link>
              );
            })}
          </Nav>
          {currentUser ? (
            <Nav className="pullright">
              <button type="button" variant="light" to={`Profil/${currentUser}`}>
                Profil
              </button>
              <Button
                variant="dark"
                onClick={() => {
                  logOut();
                }}
              >
                Wyloguj się
              </Button>
            </Nav>
          ) : (
            <Nav className="pullright">
              <Button variant="light" href="/Login">
                Zaloguj się
              </Button>

              <Button variant="dark" href="/Register">
                Zarejestruj się
              </Button>
            </Nav>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
