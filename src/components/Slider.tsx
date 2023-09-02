"use client"
import Image from 'next/image'
import React, { useState, useEffect } from 'react'

const data = [
    {
        id: 1,
        title: "Always fresh, cripsy and hot",
        image: "/slide1.png"
    },
    {
        id: 2,
        title: "We deliver your order to you",
        image: "/slide2.png"
    },
    {
        id: 3,
        title: "The best pizza for you and your family",
        image: "/slide3.jpg"
    },
]

const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0)
    // changing the title and pic ever 4 secs you use useEffect hook
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev+1) % data.length)
        }, 2000)
        return () => clearInterval(interval)
    }, [])
    return (
        <div className="flex flex-col h-screen lg:flex-row bg-fuchsia-50">
            {/* TEXT CONTAINER */}
            <div className="flex-1 flex items-center justify-center flex-col gap-8 text-red-500 font-bold">
                <h1 className="text-5xl text-center uppercase p-4 md:p-10 md:text-6xl xl:text-7xl">
                        {data[currentSlide].title}
                </h1>
                <button className="bg-red-500 text-white py-4 px-8 ">Order Now</button>
            </div>
            {/* IMAGE CONTAINER */}
            <div className="w-full flex-1 relative lg:h-full lg:w-1/2">
                <Image src={data[currentSlide].image} alt="" fill className='object-cover'/>
            </div>
        </div>
    )
}

export default Slider