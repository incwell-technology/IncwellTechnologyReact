import React, {useEffect, useContext, useState} from 'react';
import {ModeContext} from '../../project_mode';
import axios from 'axios';
import useForm from 'react-hook-form';


function Career() {
  const {register, handleSubmit, errors} = useForm();
  const [data, setData] = useState([]);
  const mode = useContext(ModeContext)
  const onSubmit = (data) => { 
    let file = data.cv
    let formData = new FormData()
    formData.append('full_name', data.full_name)   
    formData.append('phone', data.phone)   
    formData.append('career', data.career)   
    formData.append('cv', file)   
    axios({
      url:mode+"/api/v1/apply-career",
      method:"POST",
      headers: {
        'content-type': 'multipart/form-data'
      }, 
      data: formData    
    }).then((res) => {
      console.log(res)
    }).catch((err) => {
      console.log(err)
    })
  }

  useEffect(() => {
    const fetchData = async () => {
     await axios.get(mode+"/api/v1/careers")
      .then(res => setData(res.data.data))
      .catch((err) => console.log('Error in teams'+err))
    };                                                                                                                                                    
  fetchData();
  }, []);

  return (
    <div className="Career" id="Careers">
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
            <h2>Apply Career</h2>
            <form onSubmit={handleSubmit(onSubmit)} method="post" encType="multipart/form-data">
                <input type="text" name="full_name" ref={register({ required: true })}  placeholder="Full Name"/>
                {errors.full_name && 'Full name is required.'}

                <input type="text" name="phone" ref={register({ required: true })} placeholder="Phone"/>
                {errors.phone && 'Phone number is required.'}

                <input type="file" name="cv" ref={register({ required: true })}/>
                {errors.cv && 'CV is required.'}

                <select name="career" ref={register({ required: true })}>
                {data.map(career => (
                <option value={career.id} key={career.id}>
                  {career.title}
                </option>
                ))}
                </select>
                {errors.career && 'Career Option is required.'}

                <input type="submit"/>
            </form>
    </div>
  );
}

export default Career;
