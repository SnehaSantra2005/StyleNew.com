import React from 'react'
import './SkinCare.css'
import Item from '../Item/Item'


const SkinCare = (props) => {
    return (
        <>
            <div className='skinCare'>
                <h1>SKIN CARE</h1>
                <hr />

                <div className="skinCare-item">
                    {props.data.map((item, index) => {
                        return <Item id={item.id} key={index} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
                    })}
                </div>

            </div>
        </>
    )
}

export default SkinCare
