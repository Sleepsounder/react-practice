import React from 'react'
import ContactCard from './components/ContactCard'

function App() {

  return (
    <div className="todo-list">
      <ContactCard 
        contact = {
          {
            name: "Mr. Whiskerson",
            imgUrl: "http://placekitten.com/300/200",
            phone: "(828) 123-4567",
            email: "kit@ten.com"
          }
        }
      />
      <ContactCard 
        contact =  {
          {
            name: "Mrs. Clawface",
            imgUrl: "http://placekitten.com/400/200",
            phone: "(919) 123-4567",
            email: "tony@ten.com"
          }
        }
      />
      <ContactCard 
        contact =  {
          {
            name: "Todd",
            imgUrl: "http://placekitten.com/400/300",
            phone: "(828) 987-6543",
            email: "billups@ten.com"
          }
        }
      />
      <ContactCard
        contact =  {
          {
            name: "KoolAid",
            imgUrl: "http://placekitten.com/200/100",
            phone: "(919) 987-6543",
            email: "bowler@ten.com"
          }
        }
      />
    </div>
  )
}

export default App
