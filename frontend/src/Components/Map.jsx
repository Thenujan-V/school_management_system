import React from 'react'
import { map } from './Styles/Index';

const Map = () => {
        const iframeStyle = {
            // border: '2px solid #000', 
            // width: '800px',          
            // height: '600px',          
            // borderRadius: '10px',     
            // margin: '10px auto',      
            // display: 'block'      
        };
  return (
    <div className='map'>
        <h1>Way to our school</h1>
        <div className='frame'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6572.446242006984!2d81.83339945713605!3d6.878571098911781!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae5a2ef15fc7281%3A0xcdd32c53605fb659!2sPottuvil%20Central%20College%20(National%20School)!5e0!3m2!1sen!2slk!4v1714195905032!5m2!1sen!2slk"
                style={iframeStyle}
                allowfullscreen="" 
                loading="lazy" 
                referrerpolicy="no-referrer-when-downgrade">
            </iframe>
        </div>
    </div>
  )
}

export default Map