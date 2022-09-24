import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { colorDanger, colorDark, colorInfo, colorLight, colorSuccess, colorWarning } from '../redux/colors/action';
import { makeDecrement, makeIncrement } from '../redux/counter/action';

const Counter = () => {

    const {counter, color} = useSelector(state => state);

    const dispatch = useDispatch();

  return (
    <div>
        <Row className='justify-content-center mt-5'>
            <Col md='5'>
                <Card className='shadow'>
                    <Card.Body className={`text-center rounded bg-${color}`}>
                        <h1 className={`display-1 fw-bold`}>{ counter }</h1>
                        <Button onClick={ () => dispatch( makeIncrement() )} className='btn btn-success'>++</Button>  <Button onClick={ () => dispatch( makeDecrement() )} className='btn btn-danger'>--</Button>
                        <div className="bg-changes mt-3 d-flex justify-content-center gap-2">
                            <Button onClick={() => dispatch( colorDark() )} className='btn btn-dark'>Dark</Button>
                            <Button onClick={() => dispatch( colorDanger() )} className='btn btn-danger'>Danger</Button>
                            <Button onClick={() => dispatch( colorSuccess() )} className='btn btn-success'>Success</Button>
                            <Button onClick={() => dispatch( colorInfo() )} className='btn btn-info'>Info</Button>
                            <Button onClick={() => dispatch( colorWarning() )} className='btn btn-warning'>Warning</Button>
                            <Button onClick={() => dispatch( colorLight() )} className='btn btn-light text-dark'>Light</Button>
                        </div>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    </div>
  )
}

export default Counter