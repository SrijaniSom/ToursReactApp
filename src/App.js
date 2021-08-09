import React, { useEffect } from 'react'
import Loading from './Loading'
import './styles.css'
import Tours from './Tours'

const url='https://course-api.com/react-tours-project';
const App = () => {

  const [loading, setloading] = React.useState(true);
  const [tours, settours] = React.useState([]);
  
  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id)
    settours(newTours)
  }

  const fetchTours=async() => {
    setloading(true);
    try
    {

      const response=await fetch(url);
      const tours=await response.json();
      setloading(false);
      settours(tours);

    }
    catch(error)
    {
      setloading(false);
      console.log(error);

    }
  };

  useEffect(() => {

    fetchTours();

  },[]);






  if(loading)
    {
      return(
        <main>

            <Loading/>

        </main>
      )
    }

    if (tours.length === 0) {
      return (
        <main>
          <div className='title'>
            <h2>no tours left</h2>
            <button className='btn' onClick={() => fetchTours()}>
              refresh
            </button>
          </div>
        </main>
      )
    }


  return (
    <>
      <main>
        <Tours tours={tours} removeTour={removeTour}/>
      </main>
    </>
  )
}

export default App

