import React, {useEffect, useContext, useState} from 'react';
import {ModeContext} from '../../project_mode';
import axios from 'axios';

function Portfolio() {
  
  const [data, setData] = useState([]);
  const mode = useContext(ModeContext)

  useEffect(() => {
    const fetchData = async () => {
     await axios.get(mode+"/api/v1/portfolio")
      .then(res => setData(res.data.data))
      .catch((err) => console.log('Error in teams'+err))
    };
  fetchData();
  }, []);

  return (
    <div className="Portfolio">
        <h1>Portfolio</h1>
        <ul>
          {data.map(portfolio => (
            <li key={portfolio.id}>
              <a href={portfolio.id}>{portfolio.link}</a>
              <img src={portfolio.image} alt={portfolio.link}/>
            </li>
            ))}
          </ul>
    </div>
  );
}

export default Portfolio;
