function validarFormulario(){
    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;
    const mensaje = document.getElementById("mensaje").value;
        
    if(!nombre) { alert("Ingrese campo nombre"); return false;}
    if(!email) { alert("Ingrese campo email");return false;}
    if(!mensaje) { alert("Ingrese campo mensaje");return false;}   
        
    else{
        alert("Mensaje enviado");
        return true;
    }
    
    return true;
}