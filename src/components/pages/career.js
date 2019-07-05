import React, {useEffect, useContext, useState} from 'react';
import {ModeContext} from '../../project_mode';
import axios from 'axios';


function Career() {

  const [data, setData] = useState([]);
  const mode = useContext(ModeContext)

  useEffect(() => {
    const fetchData = async () => {
     await axios.get(mode+"/api/v1/careers")
      .then(res => setData(res.data.data))
      .catch((err) => console.log('Error in teams'+err))
    };
  fetchData();
  }, []);

  return (
    <div className="Career">
          <h1>Careers</h1>
            <ul>
            {data.map(career => (
              <li key={career.id}>
                <a href={career.id}>{career.title}</a>
                <p>Short: {career.short_description}<br/><br/>Job{career.job_description}</p>
                <p>Skills: {career.skills}</p>
              </li>
              ))}
            </ul>
    </div>
  );
}

export default Career;
