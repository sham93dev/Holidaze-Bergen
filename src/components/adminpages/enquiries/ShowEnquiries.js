import React from "react";
import AdminMenu from "../../layout/AdminMenu";
import Footer from "../../layout/Footer";
import EnquiriesList from "../../adminpages/enquiries/EnquiriesList";
function ShowEnquiries() {
  return (
    <div>
      <AdminMenu />
      <EnquiriesList />
      <Footer />
    </div>
  );
}

export default ShowEnquiries;
