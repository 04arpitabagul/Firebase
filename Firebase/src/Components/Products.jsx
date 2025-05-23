import React, { useEffect, useState } from "react";
import "./style.css";
import axios from "axios";
import { collection, doc, getDocs, deleteDoc } from "firebase/firestore";
import { db } from "../Services/firebase";

const Products = () => {
  const [details, setdetails] = useState([]);
  console.log(details);

  useEffect(() => {
    getDocs(collection(db, "Product"))
      .then((res) => {
        const data = res.docs.map((doc) => {
          const docData = doc.data();
          docData.id = doc.id;
          return docData;
        });
        setdetails(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // delete document
  function handleDelete(docData) {
    console.log(docData);
    const docRef = doc(db, "Product", docData);
    console.log("Document path:", docRef.path);
    deleteDoc(docRef)
      .then(() => {
        console.log("Delete Successful");
      })
      .catch((err) => {
        console.error("Error deleting document:", err);
      });
  }

  return (
    <>
      <h1 style={{ textAlign: "center", paddingTop: "50px" }}>Products</h1>
      <div
        style={{
          width: "90%",
          margin: "auto",
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
        }}
      >
        {details.map((datas, index) => {
          return (
            <div className="Card" key={index}>
              <div className="images">
                <img src={datas.image} alt="Productimage" />
              </div>
              <div className="title">
                <h2>{datas.title}</h2>
              </div>
              <div className="Price">
                <h2>{datas.price}</h2>
              </div>
              <div className="Price">
                <h2>{datas.description}</h2>
              </div>
              <div className="BTn">
                <button onClick={() => handleDelete(datas.id)}>Delete</button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Products;
