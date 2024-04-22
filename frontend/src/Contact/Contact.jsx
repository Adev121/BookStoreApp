import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useForm } from "react-hook-form";

function Contact() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => console.log(data)
  return (
    <>
      <Navbar/>
      <div className="max-w-screen-lg mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="mt-1 p-2 block w-full border rounded-md"
              placeholder="Your name"
              {...register("name", { required: true })}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 p-2 block w-full border rounded-md"
              placeholder="Your email"
              {...register("email", { required: true })}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="mt-1 p-2 block w-full border rounded-md"
              placeholder="Your message"
              {...register("message", { required: true })}
            ></textarea>
          </div>
          <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
            Send
          </button>
        </form>
      </div>
      <Footer/>
    </>
  )
}

export default Contact
