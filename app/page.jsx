import React from 'react'
import Feed from '@components/Feed'

const Home = () => {
  return (
    <section className='w-full flex-center flex-col'>
        <h1 className='head_text text-center' >Discover and Share</h1>
        <br  className='max-md: hidden'/>
        <span className='orange_gradient text-center'>
            AI-POWERED-PROMTS
        </span>
        <p className='desc text-center'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, obcaecati! Quo voluptatem eveniet consequatur obcaecati est culpa! Reiciendis suscipit assumenda exercitationem, incidunt amet omnis ea autem minus debitis delectus dolorem.
        </p>
        <Feed/>
    </section>
  )
}

export default Home