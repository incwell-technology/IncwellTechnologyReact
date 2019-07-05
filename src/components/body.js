import React, {useEffect, useContext, useState} from 'react';
import Header from './pages/header';
import About from './pages/about-us';
import Service from './pages/services';
import Reason from './pages/reason';
import Team from './pages/team';
import Career from './pages/career';
import Portfolio from './pages/portfolio';
import {ModeContext} from '../project_mode';
import axios from 'axios';


function Body() {

  const [data, setData] = useState([]);
  const mode = useContext(ModeContext)

  useEffect(() => {
    const fetchData = async () => {
     await axios.get(mode+"/api/v1/company-details")
      .then(res => setData(res.data.data))
      .catch((err) => console.log('Error in teams'+err))
    };
  fetchData();
  }, []);

  return (
    <div className="Body">
        <Header/>
        <About/>
        <Service/>
        <Reason/>
        <Team/>
        <Career/>
        <Portfolio/>
        <div className="Team">
          <h1>Team</h1>
            <ul>
            {data.map(company => (
              <li key={company.id}>
                <a href={company.id}>{company.company_name} - {company.phone}</a>
                <p>{company.location} - {company.email}</p>
              </li>
              ))}
            </ul>
        </div>
    </div>
  );
}

export default Body;
