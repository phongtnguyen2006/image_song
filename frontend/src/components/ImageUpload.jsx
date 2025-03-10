import { useState } from "react";
import ReadMeCard from "./ReadMe"; 
import Dropdown from "./Dropdown";

export default function ImageUpload() {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [outputText, setOutputText] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async () => {
    if (!image) return;
    
    const formData = new FormData();
    formData.append("image", image);
  
    try {
      const response = await fetch("http://127.0.0.1:5174/upload", {
        method: "POST",
        body: formData,
      });
  
      const result = await response.json();
      console.log("Success:", result);
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  const getJsonData = async () => {
    try {
      const response = await fetch("http://127.0.0.1:5174/get-output");
      const jsonData = await response.json();
      console.log(jsonData.output);
      setOutputText(jsonData.output);
    } catch (error) {
      console.error("Error fetching JSON:", error);
    }
  };
  
  return (
    <div style={{ 
      display: "flex", 
      height: "80 vh",
      width: "100vw", 
      justifyContent: "center", 
      alignItems: "center", 
      gap: "30px", // Adds space between the ReadMeCard and other content
      padding: "20px",
    }}>
      <div 
        style={{ 
          display: "flex", 
          flexDirection: "column", 
          alignItems: "center", 
          justifyContent: "center", 
          gap: "15px", 
          padding: "20px", 
          height: "80vh"
        }}
      >
        <ReadMeCard />
      </div>
  
      <div 
        style={{ 
          display: "flex", 
          flexDirection: "column", 
          alignItems: "center", 
          justifyContent: "center", 
          gap: "15px", 
          padding: "20px", 
          height: "100%", 
        }}
      >
        <input 
          type="file" 
          accept="image/*" 
          onChange={handleImageChange} 
          style={{ padding: "10px", color: "black" }} 
        />
        {preview && 
          <img 
            src={preview} 
            alt="Preview" 
            style={{ maxWidth: "300px", borderRadius: "10px", boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)" }} 
          />
        }
        <button 
          onClick={async () => { await handleSubmit(); getJsonData(); }} 
          style={{ 
            padding: "10px 20px", 
            background: "#007bff", 
            color: "white", 
            border: "none", 
            borderRadius: "5px", 
            cursor: "pointer", 
            fontSize: "16px", 
            fontWeight: "bold", 
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)"
          }}
        >
          Submit
        </button>
        <div 
          style={{ 
            width: "80%", 
            maxWidth: "500px", 
            background: "#fff", 
            padding: "15px", 
            borderRadius: "8px", 
            border: "1px solid #ddd", 
            fontFamily: "monospace", 
            whiteSpace: "pre-wrap",
            overflowX: "auto",
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
            color: "#000"
          }}
        >
          {outputText || "recommended song will appear here..."}
        </div>
      </div>
      <Dropdown/>
    </div>
  );
  
}
