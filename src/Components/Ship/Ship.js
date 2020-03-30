import React from 'react';
import { useForm } from 'react-hook-form'
import './Ship.css'
import { useAuth } from '../Login/useAuth';


const Ship = () => {
    const { register, handleSubmit, errors } = useForm()
    const onSubmit = data => {
        console.log("thank you")
    }
    const auth= useAuth();


    return (
        <form className='ship-form' onSubmit={handleSubmit(onSubmit)}>
            
            <input name="name" ref={register({ required: true })} placeholder="your name"/>
            {
                errors.name && <span className="error">Exact Address is required</span>
            }

            <input name="address" ref={register({ required: true })} placeholder="your exact address"/>
            {
                errors.address && <span className="error">Exact Address is required</span>
            }
            

            <input name="phone" ref={register({ required: true })} placeholder="your phone"/>
            {errors.phone && <span className="error">Phone is required</span>}

            <textarea style={{resize:"none"}} rows="5" name="instruction" ref={register({ required: false })} placeholder="your instructions"/>
            {errors.instruction && <span>This field is required</span>}
            
            <input type="submit" />
        </form>
    )
};

export default Ship;