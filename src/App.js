import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header'
import Footer from './components/Footer';
import Sections from './components/Sections';



const App = () => {
  const users = [
    {name:"Чонгук",
    lastName: "Чон",
    age: 25,
    id: Math. random() 
    },
    {name:"Техён",
    lastName: "Ким",
    age: 26,
    id:Math. random() 
    },
    {name:"Чимин",
    lastName: "Пак",
    age: 26,
    id:Math. random() 
    },
    {name:"Юнги",
    lastName: "Мин",
    age: 30,
    id:Math. random() 
    },
    {name:"Хосок",
    lastName: "Чон",
    age: 28,
    id:Math. random() 
    },
    {name:"Намджун",
    lastName: "Ким",
    age: 28,
    id:Math. random() 
    },
    {name:"Сокджин",
    lastName: "Ким",
    age: 31,
    id:Math. random() 
    },
  ]
  return (
    <div>
    <Header/>
    |<Sections users={users}/>
     <Footer/>  
    </div>
  )
}

export default App