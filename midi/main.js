function tocaSom (idTeclaAudio) {
    document.querySelector(idTeclaAudio).play();
}

const ListaDeTeclas = document.querySelectorAll('.tecla');    



let contador = 0;

for (let contador=0 ; contador < ListaDeTeclas.length ; contador++){
    const tecla = ListaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    //Template String
    const audio = `#som_${instrumento}`;

    //função anonima
    tecla.onclick = function (){
        tocaSom(audio);
    }

}