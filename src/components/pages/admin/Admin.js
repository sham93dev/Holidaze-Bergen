import React from "react";
import AdminMenu from "../../layout/AdminMenu";
import Footer from "../../layout/Footer";
import ReadmoreButton from "../../buttons/ReadmoreButton";

export default function Admin() {
  return (
    <>
      <section className="admin-section">
        <div className="admin-dashboard-heading">
          <AdminMenu />
        </div>
        <div className="admin-dashboard-control">
          <div className="admin-dashboard-item">
            <h2>Favourites</h2>
            <p>Check if there is anything more interesting on the page, how about going to favorites</p>
            <ReadmoreButton />
          </div>
          <div className="admin-dashboard-picture">
            <img src="/assets/bergenview3.jpg" alt="illustration of admin" />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
