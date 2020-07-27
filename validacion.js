var formulario = document.getElementById("miFormulario");

window.onload = iniciar;
function iniciar(){
    document.getElementById("enviar").addEventListener('click', validar, false);
    document.getElementById("reset").addEventListener('click', reset, false);
}

function validaName(){
       var eleName = document.getElementById("nombre").value;
       if( eleName == null || eleName.length == 0 || /^\s+$/.test(eleName) ){      
              document.getElementById("required_Name").innerHTML = '*';
              alert("Debe completar el campo nombre.");
              document.getElementById('nombre').style.borderColor = "red";
              return false;
       }else if(eleName != null || eleName.length != 0){
              document.getElementById("required_Name").innerHTML = '';
              document.getElementById('nombre').style.borderColor = "green";
       }
       return true;
}

function validaLastName(){
       var lastName = document.getElementById("apellido").value;
       if( lastName == null || lastName.length == 0 || /^\s+$/.test(lastName) ){
              document.getElementById("required_Apellido").innerHTML = '*';
              alert("Debe completar el campo apellido.");
              document.getElementById('apellido').style.borderColor = "red";
              return false;
       }else if(lastName!= null || lastName.length != 0){
              document.getElementById("required_Apellido").innerHTML = '';
              document.getElementById('apellido').style.borderColor = "green";
       }
       return true;
}

function validaCedula(cedula){
       cedula = document.getElementById('cedula').value;
       c = cedula.split('');
       v = [1,2,1,2,1,2,1,2,1,2]
       var result = 0 ; 
       var ar ;
       var up;
       var oc ;
       for (i=0;i <10;i++){  
       up =c[i] * v[i];
       ab = up;
       if ( ab >= 10 ) {
       oc = ab.toString()
                     .split('')
                     .map(x => parseInt(x) )
                     .reduce( (x, y) => x + y);
       }else {
       oc = ab;
       }
       result = parseFloat(result) + parseFloat(oc);   
       }
       dp = result;
       ac = dp.toString().split('')[0] + '0';
       ac = parseInt(ac);
       uj = (ac / 10) * 10;
              if (uj < dp ) {
              dp = (uj + 10) - dp; 
              }   

       if (c[10] == dp && cedula != 0) { 
              document.getElementById("required_DNI").innerHTML = '';
              document.getElementById('cedula').style.borderColor = "green";  
              return true;

       }else{
              document.getElementById("required_DNI").innerHTML = '*';
              alert("Verifique el campo Cedula/Pasaporte\n Debe de ser sin guiones!");
              document.getElementById('cedula').style.borderColor = "red";
              return false;
       }
       return true;
}       

function validaTelefono(){
       var eleTelephone = document.getElementById("telefono").value;
       if( (!(/^\d{10}$/.test(eleTelephone)) ) || isNaN(eleTelephone) || eleTelephone == 0){
              document.getElementById('required_Phone').innerHTML = '*';
              alert("El campo telefono tiene que ser numerico y sin guiones.");
              document.getElementById('telefono').style.borderColor = "red";
              return false;
       }else if(eleTelephone != null || eleTelephone.length != 0){
              document.getElementById("required_Phone").innerHTML = '';
              document.getElementById('telefono').style.borderColor = "green";
       }
       return true;
}

/*function validaTelefono(){
       var eleTelephone = document.getElementById("telefono").value;
       if( !(/^\d{3}-\d{3}-\d{4}$/.test(eleTelephone) ) || isNaN(eleTelephone)){
              document.getElementById('required_Phone').innerHTML = '*';
              alert("El campo telefono tiene que ser numerico y con guiones.");
              return false;
       }else if(eleTelephone != null || eleTelephone.length != 0){
              document.getElementById("required_Phone").innerHTML = '';
       }
       return true;
}*/

function validaDireccion(){
       var eleDireccion = document.getElementById("direccion").value; 
       if( eleDireccion == null || eleDireccion.length == 0 || /^\s+$/.test(eleDireccion) ){
              document.getElementById('required_Address').innerHTML = '*';
              alert("Debe completar el campo direccion.");
              document.getElementById('direccion').style.borderColor = "red";
              return false;
       }else if(eleDireccion != null || eleDireccion.length != 0){
              document.getElementById("required_Address").innerHTML = '';
              document.getElementById('direccion').style.borderColor = "green";
       }
       return true;
}

function validaEdad(){
       var eleEdad = document.getElementById("edad").selectedIndex;
       if(eleEdad == null || eleEdad == 0 ){
              document.getElementById('required_Age').innerHTML = '*';
              alert("Debe seleccionar su rango de edad.");
              document.getElementById('edad').style.borderColor = "red";
              return false;
       }else if(eleEdad != null || eleEdad.length != 0){
              document.getElementById("required_Age").innerHTML = '';
              document.getElementById('edad').style.borderColor = "green";
       }
       return true;
}

function validaRadioButton(){
       if(!document.querySelector('input[name="sexo"]:checked')) {
              alert('Seleccione su genero.');
              return false;
      }
      return true;
}

function validar(e){
       if(validaName() && validaLastName() && validaCedula() && validaTelefono() 
       && validaDireccion() && validaEdad() && validaRadioButton() && confirm("Pulsa aceptar para enviar el formulario") ){
              return true;
       }else{
              e.preventDefault(); //evite que se ejecute el evento por defecto asociado a la accion.
              return false;
       }
}

function reset(){
       document.getElementById('required_Name').innerHTML = '';
       document.getElementById('required_Apellido').innerHTML = '';
       document.getElementById('required_DNI').innerHTML = '';
       document.getElementById('required_Phone').innerHTML = '';
       document.getElementById('required_Address').innerHTML = '';
       document.getElementById('required_Age').innerHTML = '';    
}
 

