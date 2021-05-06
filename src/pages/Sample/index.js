import React from 'react';
import {useHistory} from 'react-router-dom';
import Button from '../../components/forms/Button';
import { useSelector, useDispatch } from 'react-redux';
import './styles.scss';
import { clearCart } from '../../redux/Cart/cart.actions';

const OrderPlaced = () =>{
    const history = useHistory()
    const dispatch = useDispatch();
    const onSubmitBtn = () => {
        dispatch(
            clearCart()
        )

    }
    return(

        <div className="orderPlaced">
            <h1>
            Order Placed
            </h1>
            <div className="orderplacedbtn">
            <Button onClick={() => history.push('/')}
            onsubmit={onSubmitBtn()}
        
           
            >
                Continue Shopping
            </Button>
            </div>
            
        </div>
    )
}

export default OrderPlaced;