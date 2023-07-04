import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./navbar";

const koneksiStockMotor = axios.create({
  baseURL: "http://localhost:5000/api/stock_motor",
});

export default function Home() {
  const [stockMotor, setStockMotor] = useState([]);

  useEffect(() => {
    fetchStockMotor();
  }, []);

  const fetchStockMotor = async () => {
    try {
      const response = await koneksiStockMotor.get("/");
      setStockMotor(response.data.data);
    } catch (error) {
      console.error("Error retrieving stock motor:", error);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="card-container">
          {stockMotor.map((motor) => (
            <div key={motor.id} className="card">
              <img className="card-image" src={motor.foto} alt="" />
              <div className="card-content">
                <h3 className="card-title">{motor.nama_motor}</h3>
                <p className="card-text">Type: {motor.type_motor}</p>
                <p className="card-text">Price: {motor.harga}</p>
                <p className="card-text">Description: {motor.deskripsi}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
