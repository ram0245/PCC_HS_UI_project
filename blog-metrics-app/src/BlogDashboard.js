import React from 'react';   
import { useEffect, useState } from 'react';  
  
const BlogDashboard = () => {  
    const [data, setData] = useState([]);  
  
  useEffect(() => {  
    fetchData();  
  }, []);  
  
  const fetchData = async () => {  
    try {  
      const response = await fetch('http://localhost:3000/blogs'); // Replace with your server's endpoint  
      const jsonData = await response.json(); 
      setData(jsonData);  
    } catch (error) {  
      console.error('Error fetching data:', error);  
    }  
  };  
  return (  
    <div>  
      {/*Fetch data and display it here*/} 
    </div>  
  );  
};  
  
export default BlogDashboard;  
