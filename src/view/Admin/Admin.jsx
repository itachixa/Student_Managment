import React, { useEffect, useState } from "react";
import "../../Styles/Admin.css";

function Admin() {
  const [activeTab, setActiveTab] = useState("users");
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const [newEmail, setNewEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [newRole, setNewRole] = useState("student");

  const [editingUserId, setEditingUserId] = useState(null);
  const [editEmail, setEditEmail] = useState("");
  const [editPassword, setEditPassword] = useState("");
  const [editRole, setEditRole] = useState("student");

  // ✅ Auto switch backend (local ↔️ Render)
  const API_BASE =
    window.location.hostname === "localhost"
      ? "http://localhost:3008"
      : "https://schoolapp-neon-backend.onrender.com";

  // Fetch users
  const fetchUsers = async () => {
    setLoading(true);
    try {
      const res = await fetch(`${API_BASE}/users`);
      if (!res.ok) throw new Error("Failed to load users");
      const data = await res.json();
      const sorted = data.sort((a, b) => a.id - b.id);
      setUsers(sorted);
    } catch (err) {
      console.error("Error fetching users:", err);
      alert("⚠️ Unable to fetch users. Check your backend connection.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // Add user
  const addUser = async () => {
    if (!newEmail || !newPassword || !newRole) {
      alert("⚠️ Please fill in all fields!");
      return;
    }

    const emailExists = users.some(
      (u) => u.email.toLowerCase() === newEmail.toLowerCase()
    );
    if (emailExists) {
      alert("❌ This email already exists.");
      return;
    }

    try {
      const res = await fetch(`${API_BASE}/users`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: newEmail.trim(),
          password: newPassword.trim(),
          role: newRole.trim().toLowerCase(),
        }),
      });

      if (!res.ok) {
        const errText = await res.text();
        console.error("❌ Backend error:", errText);
        alert("❌ Error from backend: " + errText);
        return;
      }

      const createdUser = await res.json();
      setUsers((prev) => [...prev, createdUser].sort((a, b) => a.id - b.id));
      setNewEmail("");
      setNewPassword("");
      setNewRole("student");
    } catch (err) {
      console.error("⚠️ Error while adding user:", err);
      alert("⚠️ Error while adding user. Check backend logs.");
    }
  };

  // Delete user
  const deleteUser = async (id) => {
    if (!window.confirm("Do you really want to delete this user?")) return;
    try {
      const res = await fetch(`${API_BASE}/users/${id}`, {
        method: "DELETE",
      });
      if (res.ok) {
        setUsers((prev) => prev.filter((u) => u.id !== id));
      } else {
        alert("❌ Failed to delete user.");
      }
    } catch (err) {
      console.error("Error deleting user:", err);
      alert("⚠️ Error deleting user.");
    }
  };

  // Start editing
  const startEditing = (user) => {
    setEditingUserId(user.id);
    setEditEmail(user.email);
    setEditPassword(user.password);
    setEditRole(user.role);
  };

  const cancelEditing = () => {
    setEditingUserId(null);
    setEditEmail("");
    setEditPassword("");
    setEditRole("student");
  };

  // Save edits
  const saveEdit = async (id) => {
    if (!editEmail || !editPassword || !editRole) {
      alert("⚠️ All fields are required.");
      return;
    }

    try {
      const res = await fetch(`${API_BASE}/users/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: editEmail.trim(),
          password: editPassword.trim(),
          role: editRole.trim().toLowerCase(),
        }),
      });

      if (res.ok) {
        const updatedUser = await res.json();
        setUsers((prev) =>
          prev.map((u) => (u.id === id ? updatedUser : u)).sort((a, b) => a.id - b.id)
        );
        cancelEditing();
      } else {
        alert("❌ Failed to update user.");
      }
    } catch (err) {
      console.error("Error updating user:", err);
      alert("⚠️ Error updating user. Check backend logs.");
    }
  };

  // --- Render users table ---
  const renderUsersTab = () => (
    <div>
      <h2>User Management</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Email</th>
              <th>Password</th>
              <th>Role</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((u) => (
              <tr key={u.id}>
                <td>{u.id}</td>
                <td>
                  {editingUserId === u.id ? (
                    <input
                      type="email"
                      value={editEmail}
                      onChange={(e) => setEditEmail(e.target.value)}
                    />
                  ) : (
                    u.email
                  )}
                </td>
                <td>
                  {editingUserId === u.id ? (
                    <input
                      type="text"
                      value={editPassword}
                      onChange={(e) => setEditPassword(e.target.value)}
                    />
                  ) : (
                    "••••••••"
                  )}
                </td>
                <td>
                  {editingUserId === u.id ? (
                    <select
                      value={editRole}
                      onChange={(e) => setEditRole(e.target.value)}
                    >
                      <option value="student">student</option>
                      <option value="faculty">faculty</option>
                    </select>
                  ) : (
                    u.role
                  )}
                </td>
                <td>
                  {editingUserId === u.id ? (
                    <>
                      <button onClick={() => saveEdit(u.id)}>💾 Save</button>
                      <button onClick={cancelEditing}>❌ Cancel</button>
                    </>
                  ) : (
                    <>
                      <button onClick={() => startEditing(u)}>✏️ Edit</button>
                      <button onClick={() => deleteUser(u.id)}>🗑️ Delete</button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      <div className="add-form">
        <h3>Add a User</h3>
        <input
          type="email"
          placeholder="Email"
          value={newEmail}
          onChange={(e) => setNewEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />
        <select value={newRole} onChange={(e) => setNewRole(e.target.value)}>
          <option value="student">Student</option>
          <option value="faculty">Faculty</option>
        </select>
        <button className="add-btn" onClick={addUser}>
          ➕ Add
        </button>
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeTab) {
      case "users":
        return renderUsersTab();
      default:
        return <h2>Welcome to the Admin Dashboard</h2>;
    }
  };

  return (
    <div className="admin-dashboard">
      <aside className="sidebar">
        <h1>Admin</h1>
        <ul>
          <li
            className={activeTab === "users" ? "active" : ""}
            onClick={() => setActiveTab("users")}
          >
            📧 Users
          </li>
          <li
            className={activeTab === "attendance" ? "active" : ""}
            onClick={() => setActiveTab("attendance")}
          >
            📋 Attendance
          </li>
          <li
            className={activeTab === "notes" ? "active" : ""}
            onClick={() => setActiveTab("notes")}
          >
            📝 Grades
          </li>
          <li
            className={activeTab === "filters" ? "active" : ""}
            onClick={() => setActiveTab("filters")}
          >
            🔎 Filters
          </li>
        </ul>
      </aside>
      <main className="content">{renderContent()}</main>
    </div>
  );
}

export default Admin;
