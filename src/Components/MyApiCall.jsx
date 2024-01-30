import React, { useState,useEffect } from 'react'

function MyApiCall({api}) {
   let [data,setData]=useState({});
    let getapi=async ()=>{
        let resp=await fetch(api);
        let jData=await resp.json();
        setData(jData);
        console.log(data);
    }
    useEffect(()=>{
        getapi();
        
    },[api])
    console.log(data)
  return (
    <div className='w-screen h-screen flex justify-center items-center'>
      <div className='w-1/2 h-fit py-5 border-2 px-4 items-start flex flex-col border-black'>
        <img className='h-20 rounded-full' src={data.avatar_url} alt="" />
        <p className='text-2xl'>name : <span className='text-sm'>{data.name}</span> </p>
        <p className='text-2xl'>followers : <span className='text-sm'>{data.followers}</span> </p>
        <p className='text-2xl'>following : <span className='text-sm'>{data.following}</span> </p>
        <p className='text-2xl'>location : <span className='text-sm'>{data.location}</span> </p>
        <p className='text-2xl'>bio : <span className='text-sm'>{data.bio}</span> </p>
      </div>
    </div>
  )
}

export default MyApiCall
