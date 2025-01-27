import React from 'react'
import Card from './Card'
import './Cards.css'
function Cards() {
  let cardsData = [
    {
      title: "News App using ReactJS (Parsing XML RSS feed to JSON)",
      description: "News App using ReactJS (Parsing XML to JSON)",
      author: "Mehul Kothari",
      date: "Aug 13, 2020 04:32",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQJzWdNZLNRMHUGaHXASBm_2N23Zq1luoHGg&s"
    },
    {
      title: "Medium Like Blogging App Using Angular 9 and Firebase",
      description: "Creating a Medium Like Blog App Using Angular 9 and Firebase",
      author: "Mehul Kothari",
      date: "Jul 18, 2020 10:59",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx17ini8sLthnr67AaQyaM98JqSgw0GNRAEw&s"
    },
    {
      title: "COVID 19 Tracker (Statistics) app Using Angular",
      description: "COVID 19 Tracker (Statistics) app Using Angular Dark Mode",
      author: "Mehul Kothari",
      date: "Apr 04, 2020 08:46",
      image: "https://miro.medium.com/v2/da:true/resize:fit:640/1*eXeYu9VpRiJPtNFEbfdb0g.gif"
    }
  ];
  
  return (
    <div className="cards-list"> 
      {cardsData.map((card, index) => (
        <Card 
          key={index} 
          title={card.title} 
          description={card.description} 
          author={card.author} 
          date={card.date} 
          image={card.image} 
        />
      ))}
    </div>
  )
}

export default Cards