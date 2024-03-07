import React, { Fragment } from 'react'
import Header from '@/Components/Header'
import Footer from '@/Components/Footer'
import Main from '../Components/Main'
const page = () => {
  return (
  <Fragment>
    <Header/>

    <div class="flex flex-col  justify-center items-center ">
   <div class="text-2xl ">Contact-Form</div>
 
     </div>

    <Main/>
    <Footer/>
    </Fragment>
    
  )
}

export default page