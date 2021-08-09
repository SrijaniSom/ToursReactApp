import React from 'react'

const Tours = ({tours,removeTour}) => {
    const [readMore, setReadMore] = React.useState(false);
    

    return (
        <>
        <section className="whole">
        <h2>Our Tours</h2>  
          <div className="underline"></div>
         <div>
             {
                tours.map((currElem) => {

                    return(

                        <main className="singleTour" key={currElem.id}>
                            <div className="ImageContainer">
                                <img src={currElem.image} className="pic"/>
                            </div>

                            <div className="TextContainer">

                                <div className="heading">
                                    <div className="nameOfTour">
                                        {currElem.name}
                                    </div>

                                    <div className="PriceOfTour">
                                       ${currElem.price}
                                    </div>
                                </div>

                                 <p className="Description">
                                {readMore ? currElem.info : `${currElem.info.substring(0, 200)}...`}
                                <div class ="readmore" onClick={() => setReadMore(!readMore)}>
                                    {readMore ? 'show less' : '  read more'}
                                </div>
                                </p>
                                

                                
                            </div>

                            <button onClick={() => removeTour(currElem.id)}>
                                Not Interested
                            </button>
                        </main>
                    )

                }) 
             }
         </div>
        </section>
        
        </>
    )
}

export default Tours
