import React from 'react'
import Navegation from '../components/Navegation'
import Arrow from '../assets/arrow.svg'
import Card from '../components/Card'
import './another.css'
import TextStyle from '../components/TextStyle'
import Footer from '../components/Footer'

const Home = () => {
    return (
        <main>
            <Navegation />

            <section className='bg-hero w-full h-screen bg-cover flex flex-col justify-center items-start px-20 bg-fixed'>
                <div className='w-3/5 text-start flex flex-col gap-10'>
                    <h1 className='text-6xl font-bold text-white'>Live the Experience to the Fullest with Us</h1>

                    <a href="/packages" className='bg-[#0874bc] text-white w-[250px] flex justify-center gap-4 font-bold py-2 rounded-xl'>
                        Explore Packages <img className='w-[20px]' src={Arrow} alt="Right Arrow" />
                    </a>
                </div>
            </section>

            <section className='w-full h-screen p-20 flex flex-col justify-between'>
                <h1 className='text-6xl font-bold'>We Offer Best Services</h1>

                <div className='grid grid-cols-3 gap-10'>
                    <Card imgsrc='Beach' title='Vacation Tourism' description='Discover exotic getaways with our travel expertise.' />
                    <Card imgsrc='Package' title='Tourist Packages' description='Discover curated adventures with our packages.' />
                    <Card imgsrc='Education' title='Educational Tourism' description='Explore enriching journeys with our educational trips.' />
                    <Card imgsrc='Business' title='Business Tourism' description='Unlock professional horizons with our business journeys.' />
                    <Card imgsrc='Health' title='Health Tourism' description='Explore well-being with our health journeys.' />
                    <Card imgsrc='Housing' title='Housing Search' description='Find your ideal home with our housing search.' />
                </div>
            </section>

            <section className='whoarewe p-20 h-screen bg-[#0874bc]'>
                <TextStyle 
                    title='Who Are We?'
                    description='We are a tourism services company that works with passion and dedication—committed to fulfilling the travel dreams of our clients, Creating unique experiences and exceeding their expectations, and creating social, cultural and economic awareness in favour of equity. We want to be important to you.'
                    flexdirection='left' 
                />
            </section>

            <section className='h-screen p-20 w-full bg-[#0874bc]'>
                <TextStyle 
                    title='Mission'
                    description='To advise and organize, with excellence, responsibility and warmth, vacation, educational, health, business or other tourism services, creating unique experiences and exceeding the expectations proposed to our clients.'
                    flexdirection='middle' 
                />
            </section>

            <section className='vision p-20 h-screen w-full bg-[#0874bc]'>
                <TextStyle 
                    title='Vision'
                    description='To position ourselves as a leading company in tourism services in British Columbia, with expansion to other provinces of Canada and countries center the world, through partnerships with organizations that allow our economic and organizational growth in favour of the quality of service and needs of our customers.'
                    flexdirection='right' 
                />
            </section>
            
            

            <Footer />
        </main>
    )
}

export default Home