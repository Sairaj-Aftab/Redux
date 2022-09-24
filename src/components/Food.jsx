import React from 'react';
import { Col, FormSelect, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { foodChange } from '../redux/food/action';

const Food = () => {

    const food = useSelector(state => state.food);
    const dispatch = useDispatch();

    const foodImg = (food) => {
        switch (food) {
            case 'barger':
                return 'https://cdn.dribbble.com/users/6270070/screenshots/15092376/barger_4x.jpg'
            case 'bereyani':
                return 'https://user-images.immediate.co.uk/bbcgoodfood/recipes/user-recipe/url_4.jpg'
            case 'fish':
                return 'https://static.toiimg.com/thumb/60973839.cms?imgsize=381178&width=800&height=800'
        
            default:
                return '';
        }
    }

  return (
    <div>
        <Row className='mt-5'>
            <h4 className='text-center'>Choose your favorite foods</h4>
            <Col md={4}>
                { food && <img style={{maxWidth : '100%'}} src={foodImg(food)} alt="" /> }
            </Col>
            <Col md={4}>
                <FormSelect onChange={(e) => dispatch(foodChange(e.target.value))}>
                <option>--Select--</option>
                <option value="barger">Barger</option>
                <option value="bereyani">Bereyani</option>
                <option value="fish">Fish</option>
                </FormSelect>
            </Col>
            <Col md={4}>
                <h4>{food}</h4>
            </Col>
        </Row>
    </div>
  )
}

export default Food;