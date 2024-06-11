import React,{useState,useEffect} from 'react';
import { useAuth } from '../../Context/auth';





const ServicesList = () => {
    const { service } = useAuth();
    console.log("services are ready",service)
    // console.log(serv.msg);


  return (
    <>
    
    <h1 className='Shead'>Services List</h1>
  
<div className="cards">
    {service.map((currentElement,index)=>{
        const{service, price, description,provider  } = currentElement;
        return(

  <ul className='card-container'>
    <li className="card" key={index}>

    <div className='img-services'>
    <img src="/images/webdev.png" alt="img" />
    </div>
    </li>

  
    <li className='torow li'>
        <p className='col'>{service}</p>
        <p className='col'>{price}</p>
    </li>
    <li className='li'>
        <h1 className='pro'>{provider}</h1>
        <p classnName="desc">{description}</p>
    </li>
  </ul>
        );

  
    })}

</div>
</>
  )
}

export default ServicesList;