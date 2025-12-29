import { useState } from 'react'
import './App.css'
import { useForm } from 'react-hook-form';

function App() {

  const {
    register,
    handleSubmit,
    watch,
    setError,
    formState: { errors , isSubmitting},
  } = useForm();


  const delay = (time) => {
    return new Promise((resolve,reject)=>{
      setTimeout(() => {
        resolve();
      }, time * 1000);
    })
  }
  const onSubmit = async (data) => {
    // await delay(2); // simulating network delay
    let response = await fetch('http://localhost:3000/' , {method : 'POST' , headers : {'Content-Type' : 'application/json'}, body : JSON.stringify(data)})
    if (response.ok) {
      let value = await response.text();
      console.log(data,'-',value);
    }
    console.log(data);
    // if (data.username.toLowerCase().trim() === "harry") {
    //   setError("myForm" , {message : "Username invalid"})
    // }
    // else if (data.username.toLowerCase().trim() === "rohan") {
    //   setError("blockedUser" , {message : "Sorry this user is blocked"})
    // }
  }

  return (
    <>
    {/* {isSubmitting && <div className='absolute top-0 left-0 w-full h-full flex justify-center items-center bg-[#000b148c]'><span className='px-8 py-6 flex justify-center items-center bg-slate-700 rounded-3xl'>Loading...</span></div>} */}
    {isSubmitting && <div>Loading...</div>}
      <div className="container">
        <form action="" onSubmit={handleSubmit(onSubmit)} className='flex flex-col'>

          <input className='outline-1 rounded-[5px]'
            {...register("username", { required: { value: true, message: "This field id required" }, minLength: { value: 3, message: "Min length is 3" }, maxLength: { value: 8, message: "Max length is 8" } })}
            type="text" placeholder='Enter username' autoComplete='false' />
          {errors.username && <div className='text-red-600'>{errors.username.message}</div>}

          <input className='outline-1 rounded-[5px]'
            {...register("password", { required: { value: true, message: "This field id required" }, minLength: { value: 5, message: "Min length is 5" }, maxLength: { value: 8, message: "Max length is 8" } })}
            type="password" placeholder='Password' />
          {errors.password && <div className='text-red-600'>{errors.password.message}</div>}

          <input disabled={isSubmitting && !errors.username && !errors.password}  type="submit" value="submit" />
          {errors.myForm && <div className='text-red-600'>{errors.myForm.message}</div>}
          {errors.blockedUser && <div className='text-red-600'>{errors.blockedUser.message}</div>}
        </form>
      </div>
    </>
  )
}

export default App

