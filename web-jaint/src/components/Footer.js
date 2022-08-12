import React from 'react'

export const  Footer = () =>{
    let footerStyle = {
         position: "absolute",
    top: "90rem",
    width: "100%",
    border: "2px solid red",
}
    
    return (
        <div className="bg-dark text-light py-3 my-3" style={footerStyle} >
           <p className="text-center">
           Copyright &copy; Web-Jaint.com
           </p>
           
          
        </div>
    )
}
