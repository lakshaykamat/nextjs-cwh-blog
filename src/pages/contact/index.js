import React, { useState } from 'react'

const contact = () => {
  const [contactDetail,setContactDetail]=useState({})
  const handler = (e)=>{
    e.preventDefault()
    setContactDetail((prevData)=>{
      return{
        ...prevData,
        [e.target.name]:e.target.value
      }
    })
  }
  const submit = (e)=>{
    e.preventDefault()
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    
    var raw = JSON.stringify({
      "name": contactDetail.name,
      "email":contactDetail.email,
      "message": contactDetail.message
    });
    
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
    
    fetch("http://localhost:3000/api/postcontact", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
  }
  return (
<div className="mx-4 py-8 px-4">
      <h1 className="text-4xl font-semibold mb-4">Contact Us</h1>
      <p className="text-gray-600 mb-8">
        Have a question, comment, or suggestion? Please feel free to reach out to us using the contact form
        below. We'd love to hear from you!
      </p>
      <form className="max-w-md">
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-600 font-semibold mb-1">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            placeholder="Your Name"
            onChange={handler}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-600 font-semibold mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            placeholder="Your Email"
            onChange={handler}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-gray-600 font-semibold mb-1">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="4"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            placeholder="Your Message"
            onChange={handler}
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md transition duration-300 hover:bg-blue-600"
          onClick={submit}>
          Submit
        </button>
      </form>
    </div>
  )
}

export default contact
