import React from 'react'
import './styles/StyleLogin.css'

export default function Login() {
  return (
    <>
    <section className='section'>
      <div className='formulario'>
            <h1 className='h1'>Login</h1>
            <form method='post'>
                <div className='username'>
                    <input type="text" required/>
                    <label>Username</label>
                </div>
                <div className='username'>
                    <input type="password" required/>
                    <label >Password</label>
                </div>
                <div className='recordar'>¿Olvido su contraseña?</div>
                <input type="submit" value="Iniciar"/>
                <div className='registrarse'>
                    Quiero hacer el <a href="#">registro</a>
                </div>
            </form>
      </div>
    </section>
    </>
  )
}
