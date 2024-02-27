document.addEventListener("DOMContentLoaded", function () {
    let btnEncriptar = document.getElementById("btnEncriptar");
    let btnDesencriptar = document.getElementById("btnDesencriptar");

    function encriptarTexto() {
        let textoEncriptar = document.getElementById("textoEncriptar");
        let textoEncriptado = encriptar(textoEncriptar.value);


        if (validarMayusculas(textoEncriptar.value) || validarAcentos(textoEncriptar.value)) {
            alert("¡El texto contiene al menos una letra mayúscula o acento intrente de nuevo !");
        } else {
            agregarHtml(textoEncriptado);
        }

        textoEncriptar.value = "";
    }



    function desencriptarTexto() {
        let textoEncriptar = document.getElementById("textoEncriptar").value;
        let textoEncriptado = desencriptar(textoEncriptar);
        agregarHtml(textoEncriptado);
    }

    function encriptar(texto) {
        let textoEncriptado = texto.replace(/e/g, 'enter');
        textoEncriptado = textoEncriptado.replace(/i/g, 'imes');
        textoEncriptado = textoEncriptado.replace(/a/g, 'ai');
        textoEncriptado = textoEncriptado.replace(/o/g, 'ober');
        textoEncriptado = textoEncriptado.replace(/u/g, 'ufat');
        return textoEncriptado;
    }

    function desencriptar(texto) {
        let textoEncriptado = texto.replace(/enter/g, 'e');
        textoEncriptado = textoEncriptado.replace(/imes/g, 'i');
        textoEncriptado = textoEncriptado.replace(/ai/g, 'a');
        textoEncriptado = textoEncriptado.replace(/ober/g, 'o');
        textoEncriptado = textoEncriptado.replace(/ufat/g, 'u');
        return textoEncriptado;
    }

    function agregarHtml(dato) {
        let salida = document.getElementById("textoSalida");
        let agregarHtml = `
        <textarea name="" id="textosalida" cols="30" rows="10" class="text-salida">${dato}</textarea>
        <button  class="btn-salida" id="btnCopiar">Copiar</button>`;
        salida.innerHTML = agregarHtml;

        // Agregar event listener al botón de copiar después de agregarlo al DOM
        let btnCopiar = document.getElementById("btnCopiar");
        btnCopiar.addEventListener("click", copiarTexto);
    }

    function copiarTexto() {
        let texto = document.getElementById("textosalida");
        texto.select();
        document.execCommand('copy');
    }
    function validarMayusculas(texto) {
        if (/[A-Z]/.test(texto)) {
            return true;
        } else {
            return false;
        }
    }
    function validarAcentos(texto) {
        if (/[áéíóúÁÉÍÓÚ]/.test(texto)) {
            return true; // Se encontró al menos un carácter con acento
        } else {
            return false; // No se encontraron caracteres con acento
        }
    }


    btnEncriptar.addEventListener("click", encriptarTexto);
    btnDesencriptar.addEventListener("click", desencriptarTexto);
});
