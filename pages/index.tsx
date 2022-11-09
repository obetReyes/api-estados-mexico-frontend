import { useAut } from "../contexts/authContext";


import {ToastContainer} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";
import { useEffect } from "react";

export default function App() {
  const {emailSent, token} = useAut()
  
  async function getData() {
    try {
      const response = await axios.get('http://192.168.1.71:8000/');
      console.log(response);
    } catch (error:any) {
      console.error(error);
    }
  }

  const handleClick = () => {
    getData()
  }
  return (
    <>
      {emailSent.length >1 &&   <ToastContainer  limit={1}/>}
      <div className="p-2 mx-auto">
    <button onClick={handleClick}>otener info</button>     
      
      </div>
    </>
  );
}
