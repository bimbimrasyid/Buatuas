import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./navbar";

const koneksiStockMotor = axios.create({
  baseURL: "http://localhost:5000/api/stock_motor",
});

export default function ListMotor() {
  const [stockMotor, setStockMotor] = useState([]);
  const [namaMotor, setNamaMotor] = useState("");
  const [typeMotor, setTypeMotor] = useState("");
  const [harga, setHarga] = useState("");
  const [deskripsi, setDeskripsi] = useState("");
  const [foto, setFoto] = useState(null);
  const [isAdding, setIsAdding] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [selectedStockMotor, setSelectedStockMotor] = useState(null);
  const [error, setError] = useState(null); // State for error handling

  useEffect(() => {
    fetchStockMotor();
  }, []);

  const fetchStockMotor = async () => {
    try {
      const response = await koneksiStockMotor.get("/");
      setStockMotor(response.data.data);
      setError(null); // Clear any previous errors
    } catch (error) {
      console.error("Error retrieving stock motor:", error);
    }
  };

  const handleAddStockMotor = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("nama_motor", namaMotor);
    formData.append("type_motor", typeMotor);
    formData.append("harga", harga);
    formData.append("deskripsi", deskripsi);
    formData.append("foto", foto);

    try {
      await koneksiStockMotor.post("/", formData);
      resetForm();
      setIsAdding(false);
      fetchStockMotor();
    } catch (error) {
      console.error("Error adding stock motor:", error);
    }
  };

  const handleEditStockMotor = async (event) => {
    event.preventDefault();
    const id = selectedStockMotor.id;

    const updatedStockMotor = {
      nama_motor: namaMotor,
      type_motor: typeMotor,
      harga: harga,
      deskripsi: deskripsi,
      foto: foto,
    };

    const formData = new FormData();
    formData.append("nama_motor", updatedStockMotor.nama_motor);
    formData.append("type_motor", updatedStockMotor.type_motor);
    formData.append("harga", updatedStockMotor.harga);
    formData.append("deskripsi", updatedStockMotor.deskripsi);
    formData.append("foto", updatedStockMotor.foto);

    try {
      await koneksiStockMotor.put(`/${id}`, formData);
      resetForm();
      setIsEditing(false);
      setSelectedStockMotor(null);
      fetchStockMotor();
    } catch (error) {
      console.error("Error updating stock motor:", error);
    }
  };

  const handleDeleteStockMotor = async (id) => {
    try {
      console.log("Deleting stock motor with id:", id);
      await koneksiStockMotor.delete(`/${id}`);
      console.log("Stock motor deleted successfully");
      fetchStockMotor();
    } catch (error) {
      console.error("Error deleting stock motor:", error);
    }
  };

  const handleAdd = () => {
    setIsAdding(true);
    setIsEditing(false);
    setSelectedStockMotor(null);
    resetForm();
  };

  const handleEdit = (stockMotor) => {
    setIsAdding(false);
    setIsEditing(true);
    setSelectedStockMotor(stockMotor);
    setNamaMotor(stockMotor.nama_motor);
    setTypeMotor(stockMotor.type_motor);
    setHarga(stockMotor.harga);
    setDeskripsi(stockMotor.deskripsi);
  };

  const handleCancel = () => {
    setIsAdding(false);
    setIsEditing(false);
    setSelectedStockMotor(null);
    resetForm();
  };

  const resetForm = () => {
    setNamaMotor("");
    setTypeMotor("");
    setHarga("");
    setDeskripsi("");
    setFoto(null);
  };

  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="header">
          <h1>Stock Motor List</h1>
          {!isAdding && (
            <button className="btn btn-blue" onClick={handleAdd}>
              Add Stock Motor
            </button>
          )}
        </div>
        {isAdding && (
          <form onSubmit={handleAddStockMotor}>
            <div>
              <label>Nama Motor:</label>
              <input
                type="text"
                name="nama_motor"
                value={namaMotor}
                onChange={(e) => setNamaMotor(e.target.value)}
              />
            </div>
            <div>
              <label>Type Motor:</label>
              <input
                type="text"
                name="type_motor"
                value={typeMotor}
                onChange={(e) => setTypeMotor(e.target.value)}
              />
            </div>
            <div>
              <label>Harga:</label>
              <input
                type="number"
                name="harga"
                value={harga}
                onChange={(e) => setHarga(e.target.value)}
              />
            </div>
            <div>
              <label>Deskripsi:</label>
              <textarea
                name="deskripsi"
                value={deskripsi}
                onChange={(e) => setDeskripsi(e.target.value)}
              ></textarea>
            </div>
            <div>
              <label>Foto:</label>
              <input
                type="file"
                name="foto"
                onChange={(e) => setFoto(e.target.files[0])}
              />
            </div>
            <div className="form-actions">
              <button type="submit" className="btn btn-blue">
                Add
              </button>
              <button type="button" className="btn btn-blue" onClick={handleCancel}>
                Cancel
              </button>
            </div>
          </form>
        )}
        {isEditing && selectedStockMotor && (
          <form onSubmit={handleEditStockMotor}>
            <div>
              <label>Nama Motor:</label>
              <input
                type="text"
                name="nama_motor"
                value={namaMotor}
                onChange={(e) => setNamaMotor(e.target.value)}
              />
            </div>
            <div>
              <label>Type Motor:</label>
              <input
                type="text"
                name="type_motor"
                value={typeMotor}
                onChange={(e) => setTypeMotor(e.target.value)}
              />
            </div>
            <div>
              <label>Harga:</label>
              <input
                type="number"
                name="harga"
                value={harga}
                onChange={(e) => setHarga(e.target.value)}
              />
            </div>
            <div>
              <label>Deskripsi:</label>
              <textarea
                name="deskripsi"
                value={deskripsi}
                onChange={(e) => setDeskripsi(e.target.value)}
              ></textarea>
            </div>
            <div>
              <label>Foto:</label>
              <input
                type="file"
                name="foto"
                onChange={(e) => setFoto(e.target.files[0])}
              />
            </div>
            <div className="form-actions">
              <button type="submit" className="btn btn-blue">
                Update
              </button>
              <button type="button" className="btn btn-blue" onClick={handleCancel}>
                Cancel
              </button>
            </div>
          </form>
        )}
        <table className="table">
          <thead>
            <tr>
              <th>Nama Motor</th>
              <th>Type Motor</th>
              <th>Harga</th>
              <th>Deskripsi</th>
              <th>Foto</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {stockMotor.map((motor) => (
              <tr key={motor.id}>
                <td>{motor.nama_motor}</td>
                <td>{motor.type_motor}</td>
                <td>{motor.harga}</td>
                <td>{motor.deskripsi}</td>
                <td>
                  {motor.foto && <img src={motor.foto} alt="Foto Motor" width="80" />}
                </td>
                <td>
                  <button className="btn btn-blue" onClick={() => handleEdit(motor)}>
                    Edit
                  </button>
                  <button className="btn btn-blue" onClick={() => handleDeleteStockMotor(motor.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
