import React, { useEffect, useState } from "react";

export default function Dashboard() {
  const [appointments, setAppointments] = useState([]);
  const [formData, setFormData] = useState({
    patientName: "",
    doctorName: "",
    date: "",
    time: "",
    reason: "",
  });
  const [editId, setEditId] = useState(null);
  const [editData, setEditData] = useState({});

  // ✅ Fetch all appointments
  const fetchAppointments = async () => {
    try {
      const res = await fetch("http://localhost:5000/appointment");
      const data = await res.json();
      if (res.ok) setAppointments(data);
      else alert("Failed to fetch appointments");
    } catch (error) {
      console.error("❌ Fetch Error:", error);
    }
  };

  useEffect(() => {
    fetchAppointments();
  }, []);

  // ✅ Handle input for create form
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // ✅ Create new appointment
  const handleCreate = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5000/appointment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (res.ok) {
        alert("Appointment created successfully!");
        setFormData({ patientName: "", doctorName: "", date: "", time: "", reason: "" });
        fetchAppointments();
      } else alert(data.msg || "Error creating appointment");
    } catch (error) {
      console.error("❌ Create Error:", error);
    }
  };

  // ✅ Start editing (inline)
  const handleEdit = (appt) => {
    setEditId(appt._id);
    setEditData({
      patientName: appt.patientName,
      doctorName: appt.doctorName,
      date: appt.date,
      time: appt.time,
      reason: appt.reason,
    });
  };

  // ✅ Handle inline edit change
  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditData({ ...editData, [name]: value });
  };

  // ✅ Save edited appointment
  const handleUpdate = async (id) => {
    try {
      const res = await fetch(`http://localhost:5000/appointment/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(editData),
      });
      const data = await res.json();
      if (res.ok) {
        alert("Appointment updated successfully!");
        setEditId(null);
        fetchAppointments();
      } else alert(data.msg || "Error updating appointment");
    } catch (error) {
      console.error("❌ Update Error:", error);
    }
  };

  // ✅ Delete appointment
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this appointment?")) return;

    try {
      const res = await fetch(`http://localhost:5000/appointment/${id}`, {
        method: "DELETE",
      });
      const data = await res.json();
      if (res.ok) {
        alert("Appointment deleted successfully!");
        fetchAppointments();
      } else alert(data.msg || "Error deleting appointment");
    } catch (error) {
      console.error("❌ Delete Error:", error);
    }
  };

  return (
    <div className="container py-4">
      <h2 className="text-center mb-4">Hospital Appointment Dashboard</h2>

      {/* ✅ Create Appointment Form */}
      <div className="card p-3 mb-4 shadow-sm">
        <h5 className="mb-3">Add Appointment</h5>
        <form onSubmit={handleCreate} className="row g-3">
          <div className="col-md-3">
            <input
              type="text"
              name="patientName"
              className="form-control"
              placeholder="Patient Name"
              value={formData.patientName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-md-3">
            <input
              type="text"
              name="doctorName"
              className="form-control"
              placeholder="Doctor Name"
              value={formData.doctorName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-md-2">
            <input
              type="date"
              name="date"
              className="form-control"
              value={formData.date}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-md-2">
            <input
              type="time"
              name="time"
              className="form-control"
              value={formData.time}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-md-2 d-grid">
            <button type="submit" className="btn btn-primary">
              Add
            </button>
          </div>
        </form>
      </div>

      {/* ✅ Appointments Table */}
      <div className="card shadow-sm p-3">
        <h5>All Appointments</h5>
        <table className="table table-bordered table-hover text-center align-middle mt-3">
          <thead className="table-light">
            <tr>
              <th>Patient</th>
              <th>Doctor</th>
              <th>Date</th>
              <th>Time</th>
              <th>Reason</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {appointments.length === 0 ? (
              <tr>
                <td colSpan="6">No Appointments Found</td>
              </tr>
            ) : (
              appointments.map((appt) => (
                <tr key={appt._id}>
                  {editId === appt._id ? (
                    <>
                      <td>
                        <input
                          type="text"
                          name="patientName"
                          value={editData.patientName || ""}
                          onChange={handleEditChange}
                          className="form-control"
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          name="doctorName"
                          value={editData.doctorName || ""}
                          onChange={handleEditChange}
                          className="form-control"
                        />
                      </td>
                      <td>
                        <input
                          type="date"
                          name="date"
                          value={editData.date || ""}
                          onChange={handleEditChange}
                          className="form-control"
                        />
                      </td>
                      <td>
                        <input
                          type="time"
                          name="time"
                          value={editData.time || ""}
                          onChange={handleEditChange}
                          className="form-control"
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          name="reason"
                          value={editData.reason || ""}
                          onChange={handleEditChange}
                          className="form-control"
                        />
                      </td>
                      <td>
                        <button
                          className="btn btn-success btn-sm me-2"
                          onClick={() => handleUpdate(appt._id)}
                        >
                          Save
                        </button>
                        <button
                          className="btn btn-secondary btn-sm"
                          onClick={() => setEditId(null)}
                        >
                          Cancel
                        </button>
                      </td>
                    </>
                  ) : (
                    <>
                      <td>{appt.patientName}</td>
                      <td>{appt.doctorName}</td>
                      <td>{appt.date}</td>
                      <td>{appt.time}</td>
                      <td>{appt.reason || "—"}</td>
                      <td>
                        <button
                          className="btn btn-warning btn-sm me-2"
                          onClick={() => handleEdit(appt)}
                        >
                          Edit
                        </button>
                        <button
                          className="btn btn-danger btn-sm"
                          onClick={() => handleDelete(appt._id)}
                        >
                          Delete
                        </button>
                      </td>
                    </>
                  )}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
