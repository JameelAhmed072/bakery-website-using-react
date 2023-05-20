import React, { useState} from 'react'
import Images from '../choco/index.js'
import Items from './Items.js'
import Footer from './Footer'

const Chocolates = (props)=> {
  // const [images,setImages] = useState(Images);

  const [currentPage,setCurrentPage] = useState(1)
  const recordsPerPage = 5;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage; 
  const records = Images.slice(firstIndex,lastIndex);
  const npage = Math.ceil(Images.length / recordsPerPage);
  // const numbers = [...Array(npage + 1).keys()].slice(1)
 

  return (
    
        <div className='container my-5' style={{color:props.mode === 'dark'?'white':'green'}} >
            <h2 style={{marginTop: "4rem"}} >This is Chocolates portion</h2>
            <div className='row'>
            {
              
              records.map((image)=>{
                console.log(image);
                return(
                  <div className='col-md-4 my-4' key={image.id}>
                  <Items Image={image.image} mode={props.mode}/>
                  </div>
                )
              })
            }
            </div>

            <div className="container d-flex justify-content-between my-3">
                    <button onClick={prePage} disabled={currentPage<=1}  type="button" className="btn btn-dark" > &larr; Previous</button>
                    <button onClick={nextPage} disabled={currentPage + 1 > npage}  type="button" className="btn btn-dark" >Next &rarr;</button>
            </div> 
            <Footer mode={props.mode}/>

        </div>


  )
  function prePage(){
    if(currentPage !== firstIndex){
      setCurrentPage(currentPage -1)
    }
  }
  // function changeCPage(id){
  //   setCurrentPage(id)
  // }
  function nextPage(){
    if(currentPage !== lastIndex){
      setCurrentPage(currentPage + 1)
    }
  }
}
export default Chocolates;