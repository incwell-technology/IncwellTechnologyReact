import React, {useEffect, useContext, useState} from 'react';
import {ModeContext} from '../../project_mode';
import axios from 'axios';

function Portfolio() {
  
  const [data, setData] = useState([]);
  const mode = useContext(ModeContext)

  useEffect(() => {
    const fetchData = async () => {
     await axios.get(mode+"/api/v1/portfolio")
      .then(res => console.log(res.data.data))
      .catch((err) => console.log('Error in teams'+err))
    };
  fetchData();
  }, []);

  return (
    <div className="Portfolio" id="Portfolio">
          {/* <div className="page8">
            <div className="contain pg2">
                <div className="page8-title">OUR REMARKABLE WORKS</div>
                <div className="page8-grid">
                  {
                    data.map(portfolio => (

                      <div key={portfolio.id} className="page8-grid-child">
                          <div className="page8-grid-img-container">
                              <img className="page8-grid-img" src={portfolio.image}/>
                          </div>
                      </div>
                    ))
                  }

                </div>
            </div>
        </div> */}
    </div>
  );
}

export default Portfolio;
