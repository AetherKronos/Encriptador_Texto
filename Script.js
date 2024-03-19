const TextArea = document.querySelector(".Text_Area");
const Mensaje = document.querySelector(".Mensaje");

//La letra "a" es convertida a: "ai"
//La letra "e" es convertida a: "enter"
//La letra "i" es convertida a: "imes"
//La letra "o" es convertida a: "ober"
//La letra "u" es convertida a: "ufat"

function BtnEncriptar(){
    const TextoEncriptado = Encriptar(TextArea.value)
    Mensaje.value = TextoEncriptado
    TextArea.value = "";
    Mensaje.style.backgroundImage = "none"
}
function Encriptar(StringEncriptado){
    let MatrixCode = [["a", "art"], ["e", "enter"], ["i", "imes"], ["o", "ober"], ["u", "ufat"]];
    StringEncriptado = StringEncriptado.toLowerCase()

    for(let j = 0; j < MatrixCode.length; j++)
    {
        if(StringEncriptado.includes(MatrixCode[j][0])){
            StringEncriptado = StringEncriptado.replaceAll(MatrixCode[j][0], MatrixCode[j][1])
        }
    }return StringEncriptado
}

function BtnDesencriptar(){
    const TextoEncriptado = Desencriptar(TextArea.value)
    Mensaje.value = TextoEncriptado
    TextArea.value = "";
}
function Desencriptar(StringDesencriptado){
    let MatrixCode = [["a", "art"], ["e", "enter"], ["i", "imes"], ["o", "ober"], ["u", "ufat"]];
    StringDesencriptado = StringDesencriptado.toLowerCase()

    for(let j = 0; j < MatrixCode.length; j++)
    {
        if(StringDesencriptado.includes(MatrixCode[j][1])){
            StringDesencriptado = StringDesencriptado.replaceAll(MatrixCode[j][1], MatrixCode[j][0])

        }
    }return StringDesencriptado
}

function Copiar() {
    TextArea.select();
    navigator.clipboard.writeText(TextArea.value)
        .then(() => {
            alert("Texto copiado al portapapeles.");
        })
        .catch(err => {
            console.error('Error al copiar el texto: ', err);
            alert("Hubo un error al intentar copiar el texto.");
        });
}
