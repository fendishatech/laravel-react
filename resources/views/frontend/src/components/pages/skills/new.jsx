import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { toast } from "react-toastify";
import {useNavigate} from 'react-router-dom'

const New = () => {
  const [skill, setSkill] = useState("");

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    const data  = {
      name : skill,
      slug : skill.toLowerCase().replace(' ','-')
    }

     try {
      const res = await axios.post('http://localhost:8000/api/v1/skills',data);

     console.log({res});
     if (res.data.success) {
      toast(res.data.message);
      navigate('/')
     }
     console.log({res});
     } catch (error) {
      console.log({error});
     }
  }

  return (
    <form className='mt-4 flex flex-col justify-center items-center gap-4 ' onSubmit={handleSubmit}>
      <input 
      onChange={(e) => setSkill(e.target.value)}
      className='outline-none py-2 px-4 w-1/2 bg-slate-400 rounded' 
      type="text" 
      />
      <button className='bg-blue-400 w-1/2 py-2 px-8 text-white font-semibold rounded' type='submit'>Save</button>
    </form>
  )
}

export default New