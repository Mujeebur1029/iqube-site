import React, { useState } from "react";
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
import "./Dashboard.css";
import { Link } from "react-router-dom";

const Dashboard: React.FC = () => {
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  const toggleMenu = (menu: string) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <aside className="sidebar">
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

          {/* Procurement with submenu */}
          <li
            className={`menu-item ${openMenu === "procurement" ? "open" : ""}`}
            onClick={() => toggleMenu("procurement")}
            style={{ position: "relative" }}
          >
            <Bolt size={18} />
            <span>Procurement</span>
            <ChevronRight
              size={16}
              className={`chevron ${openMenu === "procurement" ? "rotated" : ""}`}
            />

            {/* Floating submenu */}
            <ul className={`submenu ${openMenu === "procurement" ? "show" : ""}`}>
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
        {/* Dashboard Content */}
        <div className="dashboard-content">
          <img
            src={`${process.env.PUBLIC_URL}/pinacular.png`}
            alt="Dashboard Illustration"
            className="dashboard-image"
          />
          <h1 className="dashboard-title">Dashboard</h1>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
