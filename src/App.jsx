import { useEffect, useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import Cart from './components/Cart/Cart'

function App() {

  const [show,setShow] = useState(true);
  const [cart,setCart] = useState([]);
  const handleClick = (item) => {
    if(cart.indexOf(item) !== -1) return;
    setCart([...cart, item])
  }

  const handleChange = (item, d) => {
    const ind = cart.indexOf(item);
    const arr = cart;
    arr[ind].amount += d;

    if (arr[ind].amount === 0) arr[ind].amount = 1;
    setCart([...arr]);
  }

  useEffect(() => {
    console.log("cart change")
  },[cart])

  return (
    <div className='app'>
      <Navbar setShow={setShow} size={cart.length}/>
      { show ? (<Home handleClick={handleClick}/>) : (<Cart cart={cart} setCart={setCart} handleChange={handleChange}/>) }
    </div>
  )
}

export default App
