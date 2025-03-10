import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";


const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("Model");


  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = async (option) => {
    setSelected(option);
    setIsOpen(false);
    console.log("selected");

    try {
      const response = await fetch("http://127.0.0.1:5174/choose-model", {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // Send JSON content
        },
        body: JSON.stringify({ model: option }), // Send data as JSON
      });

      const result = await response.json();
      console.log("Success:", result);
    } catch (error) {
      console.error("Error choosing model:", error);
    }
    };

  return (
<div className="dropdown">
  <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" onClick={toggleDropdown}>
    {selected}
  </button>
  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a className="dropdown-item" href="#" onClick = {(e)=> {
  console.log("Dropdown item text:", e.target.textContent); // Check the value being passed
  handleSelect(e.target.textContent);}}>deepseek-r1-distill-llama-70b</a>
    <a className="dropdown-item" href="#" onClick = {(e)=> handleSelect(e.target.textContent)}>deepseek-r1-distill-qwen-32b</a>
    <a className="dropdown-item" href="#" onClick = {(e)=> handleSelect(e.target.textContent)}>gemma2-9b-it</a>
    <a className="dropdown-item" href="#" onClick = {(e)=> handleSelect(e.target.textContent)}>llama-3.1-8b-instant</a>
    <a className="dropdown-item" href="#" onClick = {(e)=> handleSelect(e.target.textContent)}>llama-3.2-11b-vision-preview</a>
    <a className="dropdown-item" href="#" onClick = {(e)=> handleSelect(e.target.textContent)}>llama-3.2-1b-preview</a>
    <a className="dropdown-item" href="#" onClick = {(e)=> handleSelect(e.target.textContent)}>llama-3.2-3b-preview</a>
    <a className="dropdown-item" href="#" onClick = {(e)=> handleSelect(e.target.textContent)}>llama-3.2-90b-vision-preview</a>
    <a className="dropdown-item" href="#" onClick = {(e)=> handleSelect(e.target.textContent)}>llama-3.3-70b-specdec</a>
    <a className="dropdown-item" href="#" onClick = {(e)=> handleSelect(e.target.textContent)}>llama-3.3-70b-versatile</a>
    <a className="dropdown-item" href="#" onClick = {(e)=> handleSelect(e.target.textContent)}>llama-guard-3-8b</a>
    <a className="dropdown-item" href="#" onClick = {(e)=> handleSelect(e.target.textContent)}>llama3-70b-8192</a>
    <a className="dropdown-item" href="#" onClick = {(e)=> handleSelect(e.target.textContent)}>llama3-8b-8192</a>
    <a className="dropdown-item" href="#" onClick = {(e)=> handleSelect(e.target.textContent)}>mistral-saba-24b</a>
    <a className="dropdown-item" href="#" onClick = {(e)=> handleSelect(e.target.textContent)}>mixtral-8x7b-32768</a>
    <a className="dropdown-item" href="#" onClick = {(e)=> handleSelect(e.target.textContent)}>qwen-2.5-32b</a>
    <a className="dropdown-item" href="#" onClick = {(e)=> handleSelect(e.target.textContent)}>qwen-2.5-coder-32b</a>
    <a className="dropdown-item" href="#" onClick = {(e)=> handleSelect(e.target.textContent)}>qwen-qwq-32b</a>
  </div>
</div>  
  );
};

export default Dropdown;
