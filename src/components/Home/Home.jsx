import React, { useState } from 'react'
import Card from '../Card/Card.jsx'
import list from '../data.jsx'
import './Home.scss'

const Home = ({handleClick}) => {
  return (
    <section>
        {
            list.map((item) => (
                <Card key={item.id} item={item} handleClick={handleClick} />
            ))
        }
    </section>
  )
}

export default Home