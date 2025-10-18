import React, { useState, useRef } from "react";
import {
  Home,
  ShoppingCart,
  Box,
  BarChart,
  Settings,
  Bell,
  ChevronRight,
  Search,
  NotebookTabs,
  Tag,
  Bolt,
} from "lucide-react";
import { Link } from "react-router-dom";
import "./Dashboard.css";

const Dashboard: React.FC = () => {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [sidebarActive, setSidebarActive] = useState<boolean>(false);
  const procurementRef = useRef<HTMLLIElement>(null);

  const toggleMenu = (menu: string) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  const toggleSidebar = () => {
    setSidebarActive(!sidebarActive);
  };

  return (
    <div className="dashboard-container">
      {/* Mobile Toggle Button with custom image */}
      <button className="menu-toggle" onClick={toggleSidebar}>
        <img
          src={`${process.env.PUBLIC_URL}/icube.png`} // <-- Replace with your image path
          alt="Menu Toggle"
          style={{ width: "25px", height: "25px" }}
        />
      </button>

      {/* Sidebar */}
      <aside className={`sidebar ${sidebarActive ? "active" : ""}`}>
        <div className="logo-section">
          <img
            src={`${process.env.PUBLIC_URL}/icube-logo.png`}
            alt="icube logo"
            className="logo"
          />
          <div className="search-box sidebar-search">
            <Search size={16} className="search-icon" />
            <input type="text" placeholder="Search..." />
          </div>
        </div>

        <ul className="menu">
          <li className="menu-item active">
            <Home size={18} />
            <span>Favourites</span>
          </li>
          <li className="menu-item">
            <ShoppingCart size={18} />
            <span>Retail</span>
          </li>

          {/* Procurement */}
          <li
            className="menu-item"
            onClick={() => toggleMenu("procurement")}
            ref={procurementRef}
          >
            <Bolt size={18} />
            <span>Procurement</span>
            <ChevronRight
              size={16}
              className={`chevron ${openMenu === "procurement" ? "rotated" : ""}`}
            />
          </li>

          <li className="menu-item">
            <Box size={18} />
            <span>Inventory</span>
          </li>
          <li className="menu-item">
            <BarChart size={18} />
            <span>Sales</span>
          </li>
          <li className="menu-item">
            <Tag size={18} />
            <span>Finance</span>
          </li>
          <li className="menu-item">
            <Settings size={18} />
            <span>Production</span>
          </li>
          <li className="menu-item">
            <NotebookTabs size={18} />
            <span>Reports</span>
          </li>
          <li className="menu-item">
            <Settings size={18} />
            <span>Admin</span>
          </li>
          <li className="menu-item">
            <Bell size={18} />
            <span>Notification</span>
          </li>
        </ul>

        {/* User Info */}
        <div className="user-info">
          <div className="avatar">SA</div>
          <div className="user-details">
            <div className="user-name">My Account</div>
            <div className="user-location">Milton - HO</div>
          </div>
        </div>
      </aside>

      {/* Main content */}
      <main className="main-content">
        <div className="dashboard-content">
          <img
            src={`${process.env.PUBLIC_URL}/pinacular.png`}
            alt="Dashboard Illustration"
            className="dashboard-image"
          />
          <h1 className="dashboard-title">Dashboard</h1>
        </div>
      </main>

      {/* Floating Procurement Submenu */}
      {openMenu === "procurement" && procurementRef.current && (
        <ul
          className="submenu show"
          style={{
            position: "fixed",
            top: procurementRef.current.getBoundingClientRect().top,
            left: procurementRef.current.getBoundingClientRect().right,
            zIndex: 9999,
          }}
        >
          <li>
            <Link to="/dashboard/procurement-order">Order</Link>
          </li>
          <li>Receive</li>
          <li>Return</li>
          <li>Invoice</li>
          <li>Print Barcode</li>
          <li>Business Partner</li>
          <li>Charges</li>
          <li>Terms</li>
          <li>Margin Rule</li>
          <li>GRN Collections</li>
          <li>Debit Note</li>
        </ul>
      )}
    </div>
  );
};

export default Dashboard;
