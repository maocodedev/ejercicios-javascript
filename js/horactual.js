let horactual=new Date().getHours();

const horario=()=>{

    let dia;
    if(horactual<=11){
        dia = 'AM';


    }else if(horactual>=12){
        dia='PM'
    }
    return dia;
}
const print=()=>{
    let fechactual= new Date().toLocaleDateString("en-ES");// fecha del sistema
    let minutosactuales=new Date().getMinutes()
    let horactual=new Date().getHours();
    let mensaje=`fecha del sistema:${fechactual} hora:${horactual}:${minutosactuales}
${horario()}`;
    return mensaje
}

export default print;