import React, { useEffect, useState } from "react";
import axios from "axios";

const AdminContactList = () => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch contact data from backend
    axios
      .get("http://localhost:8989/api/contact/get/all/users")
      .then((response) => {
        setContacts(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError("Failed to fetch contact data");
        setLoading(false);
      });
  }, []);

  return (
    <div className="container mt-4">
      <h2 className="mb-4">User Contact Requests</h2>

      {loading && <p>Loading...</p>}
      {error && <p className="text-danger">{error}</p>}

      {!loading && !error && (
        <table className="table table-striped">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Message</th>
            </tr>
          </thead>
          <tbody>
            {contacts.length > 0 ? (
              contacts.map((contact, index) => (
                <tr key={contact.id}>
                  <td>{index + 1}</td>
                  <td>{contact.name}</td>
                  <td>{contact.email}</td>
                  <td>{contact.message}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="text-center">No contact requests found</td>
              </tr>
            )}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default AdminContactList;
