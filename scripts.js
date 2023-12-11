

function generateNumber() {
    const min = Math.ceil(document.querySelector (".input-min").value)
    const max = Math.floor(document.querySelector (".input-max").value)
    
    if(min >= max) {
        alert("Valor minimo tem que ser necessariamente MENOR que o valor maximo")
    } else {
        console.log(min, max)


    const result = Math.floor(Math.random() * (max - min + 1)) + min;

    alert(result)
    }

}
    
