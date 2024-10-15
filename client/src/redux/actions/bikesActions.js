import { message } from 'antd';
import axios from 'axios';

export const getAllCars=()=>async dispatch=>{

    dispatch({type: 'LOADING' , payload:true})

    try {
<<<<<<< HEAD
        const response = await axios.get('http://localhost:5000/api/cars/getallcars')
=======
        const response = await axios.get('https://renteasy-23qt.onrender.com/api/cars/getallcars')
>>>>>>> 408a58c2292f0fe19dff75dd038f4993860c3534
        dispatch({type: 'GET_ALL_CARS', payload:response.data})
        dispatch({type: 'LOADING' , payload:false})
    } catch (error) {
        console.log(error)
        dispatch({type: 'LOADING' , payload:false})
    }

}

export const addCar=(reqObj)=>async dispatch=>{

    dispatch({type: 'LOADING' , payload:true})

    try {
         await axios.post('https://renteasy-23qt.onrender.com/api/cars/addcar' , reqObj)
       
         dispatch({type: 'LOADING' , payload:false})
         message.success('New bike added successfully')
         setTimeout(() => {
            window.location.href='/admin'
         }, 500);
    } catch (error) {
        console.log(error)
        dispatch({type: 'LOADING' , payload:false})
    }
      

}

export const editCar=(reqObj)=>async dispatch=>{

    dispatch({type: 'LOADING' , payload:true})

    try {
         await axios.post('https://renteasy-23qt.onrender.com/api/cars/editcar' , reqObj)
       
         dispatch({type: 'LOADING' , payload:false})
         message.success('Bike details updated successfully')
         setTimeout(() => {
            window.location.href='/admin'
         }, 500);
    } catch (error) {
        console.log(error)
        dispatch({type: 'LOADING' , payload:false})
    }
      

}

export const deleteCar=(reqObj)=>async dispatch=>{

    dispatch({type: 'LOADING' , payload:true})

    try {
         await axios.delete('https://renteasy-23qt.onrender.com/api/cars/deletecar/'+reqObj.carid)
       
         dispatch({type: 'LOADING' , payload:false})
         message.success('Bike deleted successfully')
         setTimeout(() => {
            window.location.reload()
         }, 500);
    } catch (error) {
        console.log(error)
        dispatch({type: 'LOADING' , payload:false})
    }
      

}
