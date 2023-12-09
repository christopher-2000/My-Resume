import React, { useState, useEffect } from 'react';

const Visits = () => {
  // State to store the fetched data
  const [count, setCount] = useState(1001);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Replace 'YOUR_API_KEY' with your actual API key
        //const apiKey = '9CLmvaQgg9cvn0r7GrLp6PzaJntnFN2TJwiEaw0l';

        const response = await fetch(
          'https://api.counterapi.dev/v1/mgchristopher.netlify.app/portfolio/up'
        );

        console.log(response);

        const data = await response.json();
        console.log(data);
        // Update the state with the fetched count value
        setCount(data.count);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    // Call the fetchData function when the component mounts
    fetchData();


    
  }, []); // The empty dependency array ensures that the effect runs only once on mount

  return (
    <div className="count center">
      <br /><br /><br /><br /><br /><br />
      <p style={{ fontSize: 20, margin: 0 }}>This page was viewed</p>
      <p style={{ fontSize: 40, margin: 0 }}>{count}</p>
      <p style={{ fontSize: 20, margin: 0 }}>Times</p>
    </div>
  );
};

export default Visits;
