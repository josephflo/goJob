import React, { useEffect } from "react";
import {useSelector, useDispatch} from 'react-redux';

function Filter () {
    const jobs = useSelector((state) => state.job)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getService())
    }, [dispatch])

    function handleClick(e){
        e.preventDefault(e);
        dispatch(getService())
    }
    return(
        <div>
            <select>
            <option disabled selected value='job'>Areas de trabajos</option>
                {
                jobs.map((j) => {
                    <option key={j.id}>{j.name}</option>
                })}
            </select>
            <select>Localidad</select>
            <button type="button" onClick={(e) => { handleClick(e) }}>Resetear filtros</button>
        </div>
    )
}

export default Filter;