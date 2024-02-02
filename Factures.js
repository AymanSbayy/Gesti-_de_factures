"use strict";

import { Factura } from "./Factura.js";

$(document).ready(init);


function init() {
    $("#dades_factura").hide();
    $("#novaFact").click(function() {
        $("#dades_factura").show();
    });
	$("#tancar").click(function() {
		$("#dades_factura").hide();
	});
}


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
});

document.addEventListener('click', (event) => {
    if (event.target.tagName === 'BUTTON') {
        const facturaId = event.target.id;
        
        switch (facturaId) {
            case 'btnEditar':
                
                break;
            case 'btnImprimir':
                
                break;
            case 'btnEliminar':
                
                break;
            default:
                
                break;
        }
    }
});
