import React, { useState, useEffect } from "react";
import "./sass/style.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Navbar from "./components/layout/Navbar";
import Home from "./components/pages/home/Home";
import PageDetails from "./components/PageDetails";
import ContactPage from "./components/pages/contact/Contact";
import Login from "./components/pages/login/Login";
import Admin from "./components/pages/admin/Admin";
import Search from "./components/pages/search/Search";
import Booking from "./components/pages/booking/Booking";
import Accommodations from "./components/pages/accommodations/Accommodations";
import Favourites from "./components/pages/favourites/Favourites";
import Explore from "./components/pages/explore/Explore";
import ReadMessages from "./components/adminpages/messages/ReadMesssages";
import ShowEnquiries from "./components/adminpages/enquiries/ShowEnquiries";
import NewEstablishment from "./components/adminpages/newaccommodation/NewEstablishment";

function App() {
  const [num, setNum] = useState(0);
  useEffect(() => {
    setNum(JSON.parse(localStorage.getItem("wishlist"))?.length);
  }, [num]);
  return (
    <AuthProvider>
      <Router>
        <Navbar num={num} />
        <Switch>
          <Route path="/" exact>
            <Home setNum={setNum} />
          </Route>
          <Route path="/accomodations" exact>
            <Accommodations setNum={setNum} />
          </Route>
          <Route path="/wishlist" exact>
            <Favourites setNum={setNum} />
          </Route>
          <Route path="/page/:id">
            <PageDetails />
          </Route>
          <Route path="/search/:search">
            <Search setNum={setNum} />
          </Route>
          <Route exact path="/contact">
            <ContactPage />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/admin" exact>
            <Admin />
          </Route>
          <Route path="/booking/:id">
            <Booking />
          </Route>
          <Route path="/explore">
            <Explore />
          </Route>
          <Route path="/messages" exact>
            <ReadMessages />
          </Route>
          <Route path="/enquiries" exact>
            <ShowEnquiries />
          </Route>
          <Route path="/newaccommodation" exact>
            <NewEstablishment />
          </Route>
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
