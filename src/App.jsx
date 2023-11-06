import { useEffect, useState } from 'react'
import Card  from "./components/Card";
import PageSelector from "./components/PageSelector"
import axios from "axios";
import rmLogo from "./assets/Rick_and_Morty.svg"

function App() {

  const [characters, setCharacters] = useState([])

  const getCharacters = (page = '1') => {
    axios.get(`https://rickandmortyapi.com/api/character?page=${page}`)
    .then((res) => {
      if (res.data.results) {
        console.log(res.data.results);
        setCharacters(res.data.results)
      } else {
        setCharacters([])
      }
    })
  }

  useEffect(() =>{
    getCharacters()
  }, [])

  return (
    <>
    <div className="bg-gradient-to-r from-green-200 via-green-300 to-blue-500">
      <span className='flex items-center justify-center py-5'>
        <img className='h-40' src={rmLogo} alt="" />
      </span>
    
      <PageSelector onSelect={(page) => getCharacters(page)}/>
      <main className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">

        {
          characters.map((character) => (
            
            <Card className="card"
            key={character.id}
            name={character.name}
            status={character.status}
            species={character.species}
            gender={character.gender}
            image={character.image}
        />

          ))
        }
      </main>
      <PageSelector onSelect={(page) => getCharacters(page)}/>
    </div>
    </>
  );

}

export default App
