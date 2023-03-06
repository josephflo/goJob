import React, { useEffect } from 'react'

export default function FailPago(){


  useEffect(()=>{
    const timer = setTimeout(() => {
      window.close();
    }, 2000);
  }, [])

  return (
    <div>Fail pago</div>
  )
}


