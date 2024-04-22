import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Course from '../components/Course'

function About() {
  return (
    <>
    <Navbar/>
    {/* <div className='min-h-screen'>About</div> */}
    <div className="max-w-screen-lg mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">About Us</h1>
        <p className="mb-4">
          Welcome to our bookstore! We are passionate about books and love sharing our enthusiasm with our customers.
          Our mission is to provide a wide selection of high-quality books for readers of all ages and interests.
        </p>
        <p className="mb-4">
          Our bookstore was founded in [year] by [founder's name]. Since then, we have been dedicated to fostering
          a love of reading in our community and beyond. Whether you're looking for the latest bestseller, a classic
          novel, or a children's book, we have something for everyone.
        </p>
        <p className="mb-4">
          In addition to our extensive collection of books, we also host author events, book clubs, and other
          literary activities. We believe that books have the power to inspire, educate, and entertain, and we strive
          to create a welcoming space where readers can discover new stories and connect with fellow book lovers.
        </p>
        <p>
          Thank you for visiting our bookstore! We look forward to serving you and helping you find your next
          great read.
        </p>
      </div>
    <Footer/>
    </>
  )
}

export default About
