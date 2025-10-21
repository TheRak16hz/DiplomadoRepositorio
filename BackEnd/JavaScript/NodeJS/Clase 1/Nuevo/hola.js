const mensaje=(curso, academia)=>{
    let cadena=`Esta realizando el curso ${curso} en ${academia}`;
    return cadena;
}
let sms = mensaje("NodeJS","Ingenieria Digital Plus");
console.log(sms)