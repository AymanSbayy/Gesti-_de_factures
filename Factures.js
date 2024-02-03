"use strict";

import { Factura } from "./Factura.js";


function download(filename, text) {
    const file = new Blob([text], {type: 'text/plain'});
    const a = document.createElement('a');
    a.href = URL.createObjectURL(file);
    a.download = filename;
    a.click();
    URL.revokeObjectURL(a.href);
}

$(document).ready(init);


function init() {
    $("#dades_factura").hide();
    $("#novaFact").click(function() {
        $("#dades_factura").show();
    });
	$("#tancar").click(function() {
		$("#dades_factura").hide();
	});
  

document.getElementById("recuperar").addEventListener("click", function() {
    document.getElementById('arxiuJson').click();
});


document.getElementById('arxiuJson').addEventListener('change', function() {
    const file = this.files[0];
    const reader = new FileReader();

    reader.onload = function() {
        const factures = JSON.parse(reader.result);
        const tbody = document.querySelector("table tbody");
   // tbody.innerHTML = ''; //neteja el codi 
    factures.forEach(factura => {
        const tr = document.createElement("tr");
        Object.values(factura).forEach(valor => {
            const td = document.createElement("td");
            td.textContent = valor;
            tr.appendChild(td);
        });
        tbody.appendChild(tr);
    });
    };

    reader.readAsText(file);
});
}

let factures = [];

$('#factura').on('submit', function(event) {
    event.preventDefault();

    let dataFactura = document.getElementById('data_factura').value;
    let pagada = document.getElementById('pagada').checked;
    let nif = document.getElementById('nif').value;
    let nom = document.getElementById('nom').value;
    let telefon = document.getElementById('telefon').value;
    let email = document.getElementById('email').value;
    let descompte = parseFloat(document.getElementById('dte').value);
    let iva = parseFloat(document.getElementById('iva').value);
    let factura = new Factura(dataFactura, nif, nom, telefon, email, descompte, pagada, iva);
    console.log(factura);
    factures.push(factura);
});

document.getElementById("guardar").addEventListener("click", function(){
    let jsonFactures = JSON.stringify(factures);
    download(`factures_${Date.now()}.json`, jsonFactures);
});


