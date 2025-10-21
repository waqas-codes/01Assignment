import React from 'react'
import './App.css'
import Navbar from './Navbar'
import Card from './card/Card'
import { Footer } from './footer/Footer'

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="cards">
        <Card 
        name="Mark Zuckerberg"
        imageUrl="https://cdn.britannica.com/99/236599-050-1199AD2C/Mark-Zuckerberg-2019.jpg"
        companyName="Meta (formerly Facebook)"
        details="Founded Facebook, Instagram, WhatsApp, and leads development of the metaverse and VR technologies through Oculus."
        />
        <Card 
        name="Elon Musk"
        imageUrl="https://assets-us-01.kc-usercontent.com/5cb25086-82d2-4c89-94f0-8450813a0fd3/0c3fcefb-bc28-4af6-985e-0c3b499ae832/Elon_Musk_Royal_Society.jpg?fm=jpg&auto=format"
        companyName="Tesla, SpaceX, X (Twitter)"
        details="Electric vehicles (Tesla), space exploration (SpaceX), acquired and transformed Twitter into X, neural technology (Neuralink)."
        />
        <Card 
        name="Sundar pichi"
        imageUrl="https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcQRU5LplPgp2u_mKot71VxVbFPD8u1lGfdkO5wedvV4BeeIxZibJdd2137t5wK7RYVB6BAa95cQJmMdcyrGPt5ctR40ORKtaNwe6z5PWy8ceq4QJTYmXpx0xnaWrg3_N2h3mCSoX96K"
        companyName="Google & Alphabet"
        details="CEO of Google and its parent company Alphabet, overseeing Google Search, YouTube, Android, Chrome, and AI development."
        />
        <Card 
        name="Satya Nadella"
        imageUrl="https://static.toiimg.com/thumb/msid-124272677,imgsize-20982,width-400,resizemode-4/microsoft-ceo-satya-nadella.jpg"
        companyName="Microsoft"
        details="Transformed Microsoft into cloud computing leader with Azure, pushed AI integration across products, acquired LinkedIn and GitHub."
        />
        <Card 
        name="Jeff Bezos"
        imageUrl="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcShxuO6qPH3-0T7KRNBk0uIVQx5VDW2rC-YKVkwZWoWPbsMg86WQBRGcQNt_vclzSOcLQmYX1o7x02Syxt1ssWPY_aOOzZbUaudYS295Y8"
        companyName="Amazon, Blue Origin"
        details="Founded Amazon (e-commerce giant, AWS cloud computing), space company Blue Origin, and owns Washington Post."
        />
        <Card
        name="Tim Cook"
        imageUrl="https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcSMbZa23Wu_ENHn5VoCtB2GJAqiE6jHY_DVDLtau91BlaKEwndeZZ0m8f_RgLx4XDgRxu5JQMgWfyG04C_b_-1YRmb-4KJ97dMkNPUHYBGwtm-9KdqXYoYdNE5x_ECIRuuGkfhWU3gD"
        companyName="Apple"
        details="CEO who succeeded Steve Jobs, expanded Apple's product line, services business, and made Apple the first $3 trillion company."
        />
        <Card 
        name="Jensen Huang"
        imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7yu_aEZhmnPWTQHNkkkhT01_mNIdZ9MTC0vs_66tfDLcRdgC3a3xJMmawctfxitYjZjC_73jvEbkEhxzR5zIhpPNKDo-sRibcLhFY8gU"
        companyName="NVIDIA"
        details="Co-founded NVIDIA, pioneered GPU technology, now leads in AI chips and computing, making NVIDIA crucial for AI development."
        />
        <Card 
        name="Brian Chesky"
        imageUrl="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSSoifbwlN68SmX7RYsX1OOE3Fj1I2MC_zraSi9XMkzgAaZUci52mMPVd7rSyVL2U6tHAbi7o5QrqmNSG8sKIh-QqVafRIOvlntl-Cm2tI"
        companyName="Airbnb"
        details="Co-founded and leads Airbnb, revolutionized travel and hospitality industry through home-sharing platform."
        />
      </div>
      <Footer />
    </div>
  )
}

export default App