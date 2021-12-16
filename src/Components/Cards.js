import React, { useState, useEffect } from 'react';
//import CardDetail from '../Components/CardDetail.js';
import { Row, Col } from 'antd';
import { Card, Space } from 'antd';
const { Meta } = Card;

function Cards() {
    const [mydata, setmydata] = useState([]);

    const getdata = async () => {
        const response = await fetch('http://10.1.4.205:8085/api/Noticeboard/Advertisments');
        setmydata(await response.json());
    }
    const openInNewTab = (url) => {
       const newWindow = window.open(url,'_blank', 'noopener,noreferrer');
        if (newWindow) newWindow.opener = null;
    }
    const origin = "http://10.1.4.205:8085";

    var mainImg;

    useEffect(() => {
        getdata();
    }, []);

    return (
        <div id="cards" className="container-fluid">
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                {
                    mydata.map((curEle) => {

                        return (
                            
                            <Col span={8}>
                                {
                                    curEle.Images.forEach(img => {
                                        if (img.IsMainImage == "Y") {
                                            mainImg = origin + img.Path;
                                            console.log(img.Path);
                                        } 
                                    })
                                }
                                
                                <Card
                                    hoverable
                                    style={{ marginBottom: 20 }}
                                    cover={
                                            <img 
                                                alt="example" 
                                                src= {
                                                    mainImg
                                                } 
                                            
                                            />
                                        }
                                    key={curEle.Id}
                                    onClick={() => openInNewTab(curEle.url)}
                                >
                                    <div className='posted-date mb-3' style={{ marginBottom: 20 }}>
                                        
                                        <p>
                                            <b>Posted on:</b> {curEle.AdvertismentDate}
                                        </p>
                                        <p>
                                            <b>Remarks:</b> {curEle.Remarks}
                                        </p> 
                                        <p>
                                            <b>Value:</b> {curEle.ItemValue}
                                        </p> 
                                        
                                    </div>
                                    <Meta title={curEle.Detail} description={curEle.CreatedBy} />
                                </Card>
                            </Col>
                            )
                    })
                }
            </Row>
        </div>
    )
}

export default Cards

