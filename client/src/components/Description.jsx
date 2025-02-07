import React from 'react'
import { assets } from '../assets/assets'
import { motion } from "motion/react"

const Description = () => {
  return (
    <motion.div className='flex flex-col justify-center items-center my-24 p-6 md:px-28'
    initial={{ opacity: 0,y:100 }}
    transition={{ duration: 1, delay: 0.2 }}
    whileInView={{ opacity: 1,y:0 }}
    viewport={{ once: true }}
    >
        <h1 className='text-3xl sm:text-4xl font-semibold mb-2'>Create Your Dream Images</h1>
        <p className='text-gray-500 mb-8'>Turn your imagination into breathtaking visuals !</p>

        <div className='flex flex-col gap-5 md:flex-row md:gap-14 items-center'>
            <img src={assets.sample_img_1} alt=""className='w-80 xl:w-96 rounded-lg' />
            <div>
                <h2 className='text-3xl font-medium max-w-lg mb-4'>Introducing the Text to Image wizardry</h2>
                <p className='text-gray-600 mb-4'>With MystiSketch you can turn your imagination into stunning visuals in seconds.
                    Whether you need stunning visuals or unique imagery, our tool transforms your text into eye-catching images with just a few clicks. Imagine it, describe it and watch it come to life instantly.
                </p>
                <p className='text-gray-600'>
                    Simply type in your text and watch as our AI generates a unique image that matches your description. You can also customize the image to your liking by adjusting the style, color and more.
                </p>
            </div>
        </div>
    </motion.div>
  )
}

export default Description