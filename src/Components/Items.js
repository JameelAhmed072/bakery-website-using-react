import React from 'react'
// import a from './chocolate.jpg'
// import Images from '../choco'
export default function Items(props) {
  return (
    <div className='card' style={{color:props.mode === 'dark'?'green':'black'}}>
      <div className="row" >
          <div className='d-flex justify-content-evenly my-3' style={{color:props.mode === 'dark'?'black':'green'}}>

      
            <div className="Card " style={{width: "18rem"}} >
                    <img src={props.Image} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
            </div>

           </div> 
      </div>
    </div>
  )
}
