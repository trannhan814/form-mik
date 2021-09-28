import React from 'react'
import { Link } from 'react-router-dom';
import { makeid } from '../../helper';

const Detail = (props: any) => {
    const detail = props.selectedID;
    const setShopingCart = props.setShopingCart
    
    const handelAddShopping = ()=>{
        setShopingCart((shoppingCart: any)=> {            
            return [...shoppingCart, ...detail.toppics]
        })
    }

    return (
        
        <div>
            <img src={detail.img} alt="" />
            <h1>Humberger</h1>
            <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Dropdown button
                </button>

                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <div className="dropdown-item"  onClick={handelAddShopping}>to shoping list</div>
                    <div className="dropdown-item" >Another action</div>
                    <div className="dropdown-item" >Something else here</div>
                </div>

                <div className=' mt-3'>
                   {detail.toppics.map((item: any)=>{
                       return <div key={makeid(10)} className='border'>{item.name} - {item.count}</div>
                   })}
                </div>
            </div>
        </div>
    )
}

export default Detail
