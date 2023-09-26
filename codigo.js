window.onload = () =>{



    const toogleSwitch = document.getElementById("switch")
    const toogleSwitchText = toogleSwitch.querySelector("p")
    const body = document.body

  toogleSwitch.onclick = () =>{
    if(body.style.backgroundColor == ""){
        body.style.backgroundColor = "black" // cambia el fondo a negro
        toogleSwitch.style.backgroundColor = "white" // cambia el fondo a blanco
        toogleSwitchText.innerHTML = "Encender" // cambia el texto del swhitch al encender
        toogleSwitchText.style.color = "black" // cambia el coloder de la letra a negro
     
    } else if(body.style.backgroundColor == "white"){
        body.style.backgroundColor = "black" // cambia el fondo a negro
        toogleSwitch.style.backgroundColor = "white" // cambia el fondo a blanco
        toogleSwitchText.innerHTML = "encender" //cambia el texto del switch al encender
        toogleSwitchText.style.color = "black" // cambia el color de la letra a negro
    }else{
        body.style.backgroundColor = "white"
        toogleSwitch.style.backgroundColor = "black"
        toogleSwitchText.innerHTML = "apagar"
        toogleSwitchText.style.color = "white"
   
    }
  }
}   