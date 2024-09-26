function cadastrar() {
    const placa = document.getElementById("placa").value;
    const proprietario = document.getElementById("proprietario").value;
    const apartamento = document.getElementById("apartamento").value;
    const bloco  = document.getElementById("bloco").value;
    const modelo = document.getElementById("modelo").value;
    const cor  = document.getElementById("cor").value;
    const vaga = document.getElementById("vaga").value;


    console.log("Proprietário: " + proprietario  )
    console.log("Bloco: " + bloco);
    console.log("Apartamento: " + apartamento);
    console.log("Modelo: " + modelo);
    console.log("Placa: " + placa);
    console.log("Cor do carro: " + cor);
    console.log("Vaga: "+ vaga);

}
