//Importing useState for State Management
import React, { useState } from "react";

//Importing Link from react-router-dom for navigation
import { Link } from "react-router-dom";

const Navbar = () => {
  //using state to update the active tab
  const [activeTab, setActiveTab] = useState("/");

  // activating the tab as per click
  const handleChange = (tab) => {
    setActiveTab(tab);
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid px-4 px-lg-5 justify-content-between">
          {/* through Link tab declaring where to navigate by click */}
          <div className="d-flex justify-content-center">
            <button
              className="navbar-toggler collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navItems"
              aria-controls="navItems"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <Link
              to={"/"}
              className="navbar-brand d-lg-flex d-inline-block align-items-center"
            >
              <img
                src="data:image/png;base64,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"
                alt="axios_logo"
                className="img-fluid nav-logo d-none d-lg-block"
              />
              <h2 className="h2 ms-2 mb-0 d-md-block d-lg-none">Dashboard</h2>
            </Link>
          </div>

          {/* Nav Links  */}
          <div className="navbar-collapse collapse" id="navItems">
            <ul className="navbar-nav me-auto my-2 mb-lg-0 ms-lg-4">
              <li className="nav-item">
                <Link
                  to="/"
                  onClick={() => handleChange("/")}
                  className={`nav-link ${activeTab === "/" ? "active" : ""}`}
                >
                  Books
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/authors"
                  onClick={() => handleChange("/authors")}
                  className={`nav-link ${
                    activeTab === "/authors" ? "active" : ""
                  }`}
                >
                  Authors
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/add-book-form"
                  onClick={() => handleChange("/add-book-form")}
                  className={`nav-link ${
                    activeTab === "/add-book-form" ? "active" : ""
                  }`}
                >
                  Add Books
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/add-author-form"
                  onClick={() => handleChange("/add-author-form")}
                  className={`nav-link ${
                    activeTab === "/add-author-form" ? "active" : ""
                  }`}
                >
                  Add Authors
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/modify-books"
                  onClick={() => handleChange("/modify-books")}
                  className={`nav-link ${
                    activeTab === "/modify-books" ? "active" : ""
                  }`}
                >
                  Modify Books
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/modify-authors"
                  onClick={() => handleChange("/modify-authors")}
                  className={`nav-link ${
                    activeTab === "/modify-authors" ? "active" : ""
                  }`}
                >
                  Modify Authors
                </Link>
              </li>
            </ul>
          </div>

          {/* Admin  */}
          <div>
            <span className="me-3 d-none d-xl-inline text-white">Admin</span>
            <img
              className="img-profile rounded-circle"
              src="data:image/png;base64,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"
              alt="User-Profile"
            />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;