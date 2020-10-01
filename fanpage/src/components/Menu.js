
import React from 'react'
class Menu extends React.Component {
 
    render() {
   
     return (
   
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" id="mainNav">
        <div class="container">
          <a class="navbar-brand js-scroll-trigger" href="#page-top">CANSAT 2020</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarResponsive">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item">
                <a class="nav-link js-scroll-trigger" href="#about">Nosotros</a>
              </li>
              <li class="nav-item">
                <a class="nav-link js-scroll-trigger" href="#faq">FAQ</a>
              </li>
              <li class="nav-item">
                <a class="nav-link js-scroll-trigger" href="#Apoyanos">Apoyanos</a>
              </li>
              <li class="nav-item">
                <a class="nav-link js-scroll-trigger" href="#contact">Contacto</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>      
    )
    }
   
  }

class Footer extends React.Component {
 
  render() {
 
    return (
 
        <footer class="py-5 bg-dark">
        <div class="container">
          <p class="m-0 text-center text-white">Copyright &copy; Proyecto CANSAT 2020</p>
          <p class="m-3 text-center text-white"> TNT - Daniel Morales</p>
        </div>
      </footer>
 
    )
    
  }
 
}
 
const Home = class extends React.Component {
    render(){
        return(
       <>
        <Menu/>
        <header class="bg-primary text-white">
            <div class="container text-center">
                <h1>Proyecto CANSAT 2020 Para la Nasa</h1>
                    <p class="lead">El mejor grupo de trabajo del IPN - Tacosa And Tequila (TNT)</p>
            </div>
        </header>
        
        <section id="about">
            <div class="container">
            <div class="row">
                <div class="col-lg-8 mx-auto">
                <h2>Quienes somos</h2>
                <p class="lead">TNT es un grupo de personas dedicado al avance y al desarrollo Tecnologicos.</p>
                <ul>
                    <li>Somos jovenes estudintes y egresados de la Upiita</li>
                    <li>Tenemos los conocimietnos necesarios para el desarrollo de tecnologia</li>
                    <li>El mejor grupo de trabajo</li>
                </ul>
                </div>
            </div>
            </div>
        </section>

        <section id = "Faq" class="bg-dark text-white">
        <div class="container">
      <div class="row">
        <div class="col-lg-8 mx-auto">
          <h2>Preguntas Frecuentes</h2>
          <p class="lead">¿Que es un Cansat?</p>
          <ul>
            <li>Es una minisatelite con Fines cientificos, que puede caber en una LATA.</li>
            <li>Otra Cosa </li>
            <li>Otra cosasaa</li>
          </ul>
          <p class="lead">¿Cual es la mision de TNT?</p>
          <ul>
            <li>Mision jajaja.</li>
          </ul>
          </div>
      </div>
    </div>
        </section>
                
        <section id = "Apoyanos" >
            <div class="container">
        <div class="row">
            <div class="col-lg-8 mx-auto">
            <h2>Tu tambien puedes apoyarnos</h2>
            <p class="lead">¿Por qué adoptar?</p>
            <ul>
                <li>Es un acto de gran humanidad</li>
                <li>Al rescatar un animal de la calle, obtienes un amigo que te lo agradecerá toda su vida.</li>
                <li>Disminuyes el número de sacrificios innecesarios realizados para controlar las poblaciones felina y canina</li>
            </ul>
            <p class="lead">¿Puedo anunciar mi refugio de perros?</p>
            <ul>
                <li>Claro! ponte en contacto con nosotros.</li>
            </ul>
            </div>
        </div>
        </div>
        </section>

        <section id="contact" class="bg-dark text-white">
            <div class="container">
            <div class="row">
                <div class="col-lg-8 mx-auto text-center">
                <h2>Contactanos</h2>
                <a href="https://wwww.facebook.com"></a>  
                <a href="https://www.instagram.com"></a>
                <a href="https://www.twitter.com"></a>
                <a href="https://www.google.com"></a>
                </div>
            </div>
            </div>
        </section>
        <Footer/>
        </>
        )
    }
}
export {Home}
export {Footer}; 
export {Menu};