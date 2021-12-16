import React from 'react'
import { Carousel } from 'antd';



function Hero() {
    return (
        <div id="home" className="heroBlock">
            <Carousel autoplay>
                <div>
                    <div className="content" >
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur provident suscipit doloremque. Explicabo nihil laborum et? Id esse dolorem velit totam, 
                        debitis veniam vitae perspiciatis error eligendi doloremque! Dicta, sapiente.</p>
                    </div>
                </div>
                <div>
                <div className="content">
                    <h3 >Learn</h3>
                </div>
                </div>
                <div>
                <div className="content">
                    <h3 >Repeat</h3>
                </div>
                </div>
               
                
            </Carousel>
        </div>

    )
}

export default Hero
