import React from 'react';
import { Row, Col} from 'antd';

export default function CardDetail({props}) {
    return (
        <div>
            <Row>
                <Col flex={2}>
                    {/* <img src={props.src} alt="Not found" /> */}
                    </Col>
                <Col flex={3}>
                    <>
                    <h1>{props.title}</h1>
                    <h2>{props.url}</h2>
                    </>
                    </Col>
            </Row>
        </div>
    )
}
