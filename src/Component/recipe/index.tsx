import React, { useState } from 'react';
import { makeid } from '../../helper';
import Detail from './Detail';
import Formik from './formik';


const Index = (props: any) => {
    const [isShowForm, setIsShowForm] = useState(false);
    const [selectedID, setSlectedID] = useState<any>();
    const setShopingCart = props.setShopingCart
    const food = props.food
    const setFood = props.setFood
    console.log(props.food);
    

    const handelSelected = (id: string) => {
        food.forEach((item: any) => {
            if (item.id === id) {
                setSlectedID(item)
            }
        })

    }

    
    return (
        <div className='d-flex container'>
            <div className='w-50'>
                <button type="button" className="btn btn-success" onClick={()=> setIsShowForm(!isShowForm)}>Success</button>
                {
                    food.map((item: any) => {
                        return <div key={makeid(10)}>
                            <div className='d-flex justify-content-between border w-75 h-75 ml-3 mt-3'>
                                <div className='pl-2'>
                                    <h2>{item.name}</h2>
                                    <p>{item.name}</p>
                                </div>

                                <div>
                                    <img src={item.img} style={{ height: 105 }} alt="" />
                                </div>

                                <input type='button' value="detail" onClick={() => handelSelected(item.id)} />
                            </div>
                        </div>
                    })
                }
            </div>

            <div className='w-50'>
                {
                    isShowForm
                        ? <Formik 
                            setFood={props.setFood} 
                            foods={props.food}
                            setIsShowForm = {setIsShowForm}
                        />
                        : selectedID
                            ? <Detail 
                                selectedID={selectedID}
                                setShopingCart={setShopingCart}
                            ></Detail>
                            : <div><h1>Please select a Repice</h1></div>
                }

                {

                }
            </div>
        </div>
    )
}

export default Index
