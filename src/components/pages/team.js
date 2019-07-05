import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import {ModeContext} from '../../project_mode';

function Team() {

  
  const [data, setData] = useState([]);
  const mode = useContext(ModeContext)

  useEffect(() => {
    const fetchData = async () => {
     await axios.get(mode+"/api/v1/teams")
      .then(res => setData(res.data.data))
      .catch((err) => console.log('Error in teams'+err))
    };
  fetchData();
  }, []);


  return (
    <div className="Team">
        <h1>Team</h1>
        <ul>
        {data.map(team => (
          <li key={team.id}>
            <a href={team.id}>{team.full_name} - {team.designation}</a>
            <img src={team.image} alt={team.full_name}/>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Team;
