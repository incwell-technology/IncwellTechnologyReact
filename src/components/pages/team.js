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
    <div className="Team" id="Team">
      <div className="page5 contain pg2">
            <div className="page5-title-container">
                <div className="page5-title">OUR TEAM</div>
                <div className="page5-sub-title">Teamwork builds trust and trust builds growth</div>
            </div>
            <div className="page5-content-container">
                <div className="page5-content-text">We are a team of innovate minds incorperated together to innovate
                    something disruptive. Always looking forward to learning something new and investing our time in
                    most effective and efficient way. We are what our clients need us to be.</div>
                <div className="page5-content-team-grid">
                    {
                      data.map(
                        team => (
                          <div key={team.id} className="page5-content-team-child">
                            <div className="page5-team-image-container">
                                <img className="page5-team-image" alt={team.full_name} src={team.image}/>
                            </div>
                            <div className="page5-team-title-container">
                                <div className="page5-team-name">{team.full_name}</div>
                                <div className="page5-team-title">{team.designation}</div>
                            </div>
                        </div>
                        )
                      )
                    }
                </div>
            </div>
        </div>
    </div>
  );
}

export default Team;
