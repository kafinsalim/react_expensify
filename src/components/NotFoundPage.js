import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => (
  <center>
    <br />
    <h3>
      error 404 : Page Not Found - <Link to="/">Go Home</Link>
    </h3>
  </center>
);

export default NotFoundPage;
