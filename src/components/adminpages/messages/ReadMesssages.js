import React from "react";
import AdminMenu from "../../layout/AdminMenu";
import MessageList from "../../adminpages/messages/MessageList";
import Footer from "../../layout/Footer";

function readmesssages() {
  return (
    <div>
      <AdminMenu />
      <MessageList />
      <Footer />
    </div>
  );
}

export default readmesssages;
