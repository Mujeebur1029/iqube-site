import React from "react";
import "./orderInfo.css";

const OrderInfo: React.FC = () => {
  return (
    <div className="oi-page">
      <div className="oi-container">

        {/* HEADER */}
        <header className="oi-header">
          <div className="oi-header-left">
            <button className="oi-back">←</button>
            <div className="oi-title-wrap">
              <h1 className="oi-title">SaleHoo</h1>
              <div className="oi-meta">
                <span className="oi-created">
                  Created By: <strong>Admin</strong>
                </span>
                <span className="oi-badge">Open</span>
              </div>
            </div>
          </div>
          <div className="oi-header-right">
            <button className="oi-cancel">Cancel</button>
            <button className="oi-reset">Reset</button>
            <button className="oi-save">Save</button>
          </div>
        </header>

        {/* ACTIONS CARD */}
        <div className="oi-actions-card">
          <div className="oi-actions">
            <div className="oi-actions-left">
              <input
                type="text"
                placeholder="Scan Barcode"
                className="oi-input"
              />
              <button className="oi-btn oi-outline">Search</button>
              <button className="oi-btn oi-outline">Import</button>
              <button className="oi-btn oi-primary oi-pill">+ Add Product</button>
            </div>
            <div className="oi-actions-right">
              <div className="oi-tabs">
                <button className="oi-tab active">Order Info</button>
                <button className="oi-tab">Charges</button>
              </div>
            </div>
          </div>
        </div>

        {/* MAIN SECTION */}
        <div className="oi-main">
          {/* Table */}
          <div className="oi-table-card">
            <div className="oi-table-wrap">
              <table className="oi-table">
                <thead>
                  <tr>
                    <th>Barcode</th>
                    <th>Products</th>
                    <th>QTY</th>
                    <th>Sales Price</th>
                    <th>Retail Price</th>
                    <th>Rate</th>
                    <th>Discount</th>
                    <th>Amount</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="cell-barcode">MU22250</td>
                    <td>
                      <div className="p-name">Shirts</div>
                      <div className="p-desc">
                        Shirts Johnson & Johnson Tn Style Dark Brown 28 Cotton
                      </div>
                    </td>
                    <td className="cell-center">50</td>
                    <td className="cell-right">258.00</td>
                    <td className="cell-right">281.00</td>
                    <td className="cell-right">225.00</td>
                    <td className="cell-center">0</td>
                    <td className="cell-right">11250.00</td>
                    <td className="cell-center">
                      <button className="oi-delete">🗑</button>
                    </td>
                  </tr>
                  <tr>
                    <td className="cell-barcode">MU22251</td>
                    <td>
                      <div className="p-name">Shirts</div>
                      <div className="p-desc">
                        Shirts Johnson & Johnson Tn Style Brown 28 Cotton
                      </div>
                    </td>
                    <td className="cell-center">50</td>
                    <td className="cell-right">258.00</td>
                    <td className="cell-right">281.00</td>
                    <td className="cell-right">225.00</td>
                    <td className="cell-center">0</td>
                    <td className="cell-right">11250.00</td>
                    <td className="cell-center">
                      <button className="oi-delete">🗑</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="oi-sidebar">
            <div className="sidebar-card">
              <div>
                <div className="sidebar-top">
                  <h3>Order Information</h3>
                  <a href="#" className="sidebar-edit">Edit</a>
                </div>
                <div className="sidebar-list">
                  <div className="info">
                    <div className="label">Order#</div>
                    <div className="value">PO/0046/25</div>
                  </div>
                  <div className="info">
                    <div className="label">Type</div>
                    <div className="value">Standard</div>
                  </div>
                  <div className="info">
                    <div className="label">Vendor</div>
                    <div className="value">SaleHoo</div>
                  </div>
                  <div className="info">
                    <div className="label">Stockpoint</div>
                    <div className="value">DEFAULT-HO</div>
                  </div>
                  <div className="info">
                    <div className="label">Transported</div>
                    <div className="value">Porter</div>
                  </div>
                  <div className="info">
                    <div className="label">Doc Date</div>
                    <div className="value">25-08-2025</div>
                  </div>
                  <div className="info">
                    <div className="label">Billing</div>
                    <div className="value">Supplier</div>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>

        {/* FOOTER */}
        <footer className="oi-footer">
          <div className="oi-summary">
            <div className="summary-item">
              Item: <strong>2</strong>
            </div>
            <div className="summary-item">
              Quantity: <strong>100</strong>
            </div>
            <div className="summary-amount">₹22,500.00</div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default OrderInfo;
