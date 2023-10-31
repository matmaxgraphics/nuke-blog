import React, { useState } from "react";
import { Link } from "react-router-dom";
import nukeLogo from "../assets/nuke-logo.png";
import AdminNavbar from "../components/admin-navbar";

const AdminLoginForm = () => {
  return (
    <>
      <AdminNavbar />
      <section className="admin-login_form contact-section">
        <h1>Login to Admin Panel</h1>
        <main className="form-field">
          <form className="contact-form">
            <div>
              <label>Email</label>
              <input
                type="email"
                name="email"
                className="input-field"
                placeholder="email@example.com"
                required
              />
            </div>
            <div>
              <label>Password</label>
              <input
                type="password"
                name="pword"
                className="input-field"
                placeholder="Input your password"
                
                required
              />
            </div>
            <button type="submit" className="btn">
              Login to Panel
            </button>
          </form>
        </main>
      </section>
    </>
  );
};


export default AdminLoginForm;