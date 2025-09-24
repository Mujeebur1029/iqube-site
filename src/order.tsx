import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./order.css";

interface OrderItem {
  poNo: string;
  poDate: string;
  createdBy: string;
  qty: number;
  amount: number | string;
  stockPoint: string;
  type: string;
  currency: string;
  docDate: string;
  validity: string;
  status: string;
}

const initialOrders: OrderItem[] = [
  {
    poNo: "PO/0046/25",
    poDate: "25-08-2025",
    createdBy: "Sarath",
    qty: 22400,
    amount: "50,40,000",
    stockPoint: "DEFAULT-HO",
    type: "Standard",
    currency: "INR",
    docDate: "25-08-2025",
    validity: "-",
    status: "Open",
  },
  {
    poNo: "PO/0045/25",
    poDate: "23-08-2025",
    createdBy: "Sarath",
    qty: 35,
    amount: "3,325",
    stockPoint: "DEFAULT-HO",
    type: "Standard",
    currency: "INR",
    docDate: "23-08-2025",
    validity: "-",
    status: "Approved",
  },
];

const Order: React.FC = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [showNewOrderModal, setShowNewOrderModal] = useState(false);

  const filtered = initialOrders.filter((o) => {
    const term = search.trim().toLowerCase();
    if (!term) return true;
    return (
      o.poNo.toLowerCase().includes(term) ||
      o.createdBy.toLowerCase().includes(term)
    );
  });

  const closeTab = () => {
    navigate("/dashboard");
  };

  const handleCancel = () => {
    if (window.confirm("Cancel and go back to Dashboard?")) {
      navigate("/dashboard");
    }
  };

  // ✅ Handle Add Product (navigate to OrderInfo)
  const handleAddProduct = () => {
    setShowNewOrderModal(false); // close modal
    navigate("/dashboard/procurement-order/info"); // go to OrderInfo page
  };

  return (
    <div className="order-page">
      {/* Small tab with X */}
      <div className="order-tab">
        <button className="tab-close" onClick={closeTab}>
          Order &nbsp; ×
        </button>
      </div>

      {/* Header */}
      <div className="order-header">
        <div>
          <h2>Purchase Order</h2>
          <p className="order-sub">Manage and track purchase orders</p>
        </div>
        <div className="header-actions">
          <button className="cancel-btn" onClick={handleCancel}>
            Cancel
          </button>
          <button
            className="new-order-btn"
            onClick={() => setShowNewOrderModal(true)}
          >
            + New Order
          </button>
        </div>
      </div>

      {/* Status Cards */}
      <div className="status-row">
        <div className="status-card open">
          <div className="label">Open</div>
          <div className="count">20</div>
        </div>
        <div className="status-card cancelled">
          <div className="label">Cancelled</div>
          <div className="count">0</div>
        </div>
        <div className="status-card approved">
          <div className="label">Approved</div>
          <div className="count">23</div>
        </div>
        <div className="status-card hold">
          <div className="label">Hold</div>
          <div className="count">2</div>
        </div>
        <div className="status-card total">
          <div className="label">Total PO</div>
          <div className="count">75</div>
        </div>
      </div>

      {/* Orders Table */}
      <div className="table-wrap">
        <table className="order-table">
          <thead>
            <tr>
              <th>PO No</th>
              <th>PO Date</th>
              <th>Created By</th>
              <th>Qty</th>
              <th>Amount</th>
              <th>Stock Point</th>
              <th>Type</th>
              <th>Currency</th>
              <th>Doc Date</th>
              <th>Validity</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((o, i) => (
              <tr key={i}>
                <td>{o.poNo}</td>
                <td>{o.poDate}</td>
                <td>{o.createdBy}</td>
                <td>{o.qty}</td>
                <td>{o.amount}</td>
                <td>{o.stockPoint}</td>
                <td>{o.type}</td>
                <td>{o.currency}</td>
                <td>{o.docDate}</td>
                <td>{o.validity}</td>
                <td>
                  <span
                    className={`status-badge ${
                      o.status === "Open"
                        ? "badge-open"
                        : o.status === "Approved"
                        ? "badge-approved"
                        : "badge-progress"
                    }`}
                  >
                    {o.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal Popup for New Order */}
      {showNewOrderModal && (
        <div className="modal-overlay">
          <div className="modal-box">
            {/* Red cancel tab */}
            <div
              className="cancel-tab"
              onClick={() => setShowNewOrderModal(false)}
            >
              ✕ Cancel
            </div>
            <h3 className="modal-title">Purchase Order</h3>
            <p className="modal-sub">Create a new purchase order</p>

            {/* Summary section */}
            <h4 className="section-title">Summary</h4>
            <div className="form-grid">
              <div>
                <label>Type *</label>
                <select>
                  <option>Standard</option>
                  <option>Urgent</option>
                </select>
              </div>
              <div>
                <label>Vendor</label>
                <select>
                  <option>Select Vendor</option>
                </select>
              </div>
              <div>
                <label>Stock Point *</label>
                <input type="text" value="DEFAULT-HO" readOnly />
              </div>
              <div>
                <label>Currency</label>
                <select>
                  <option>Select Currency</option>
                  <option>INR</option>
                  <option>USD</option>
                </select>
              </div>
              <div>
                <label>Document Number</label>
                <input type="text" />
              </div>
              <div>
                <label>Doc Date</label>
                <input type="date" />
              </div>
              <div>
                <label>Validity</label>
                <div className="date-range">
                  <input type="date" />
                  <span>→</span>
                  <input type="date" />
                </div>
              </div>
              <div>
                <label>Billing</label>
                <select>
                  <option>Supplier</option>
                </select>
              </div>
              <div>
                <label>Merchant</label>
                <select>
                  <option>Select Merchant</option>
                </select>
              </div>
              <div>
                <label>Transporter</label>
                <select>
                  <option>Select Transporter</option>
                </select>
              </div>
              <div>
                <label>Payment Terms</label>
                <select>
                  <option>Select</option>
                </select>
              </div>
              <div>
                <label>Order Mode</label>
                <select>
                  <option>Select</option>
                </select>
              </div>
            </div>

            {/* Footer actions */}
            <div className="modal-footer">
              <button className="reset-btn">Reset</button>
              <button className="add-btn" onClick={handleAddProduct}>
                Add Product
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Order;
