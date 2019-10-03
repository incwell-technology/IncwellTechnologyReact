import React, {useEffect, useContext, useState} from 'react';
import logo from '../../static/Images/logo-inv.png';
import {ModeContext} from '../../project_mode';
import axios from 'axios';


function Footer() {
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
    <div className="Footer" id="Footer">
      <div className="footer">
            <div className="footer-grid contain">
                <div className="footer-col-1">
                  <a href="/">
                    <img className="footer-logo" src={logo}/>
                  </a>
                </div>
                <div className="footer-col-2">
                <div>Contact Us:</div>
                {
                  data.map(company => (
                    <div key={company.id}>
                    <div>{company.email}</div>
                    <div>{company.phone}</div>
                    <div>{company.location}</div>
                    </div>
                  ))
                }
                </div>
                <div className="footer-col-3">
                    <div className="footer-navigation">
                        <ul>
                            <li>Service</li>
                            <li>Portfolio</li>
                            <li>Team</li>
                            <li>Career</li>

                        </ul>
                    </div>
                    <div className="footer-social">
                        <ul>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footer-last">
                Copyright 2019 || All Rights Reserved || Incwell Technology
            </div>

        </div>


    </div>

  );
}

export default Footer;
