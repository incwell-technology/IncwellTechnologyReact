import React, {useEffect, useContext, useState} from 'react';
import {ModeContext} from '../../project_mode';
import axios from 'axios';



function Video() {
    const [data, setData] = useState([]);
    const mode = useContext(ModeContext)
  
    useEffect(() => {
      const fetchData = async () => {
       await axios.get(mode+"/api/v1/company-details")
        .then(res =>{ setData(res.data.data)
          vi()
        })
        .catch((err) => console.log('Error in teams'+err))
      };
     fetchData();
    }, []);

  return (
    <div className="Portfolio">
        <div className="page7">
            {
                data.map(video => (
                    <iframe  id="page7-video" key={video.id} className="page7-video" src={video.video}>
                    </iframe>
                ))
            }
        </div>
    </div>
    
  );
}

let vi = async () => {
  var video = document.getElementsByClassName('page7-video')[0];
  video.style.height = (video.clientWidth / 1.77) + "px"; 
}


export default Video;

