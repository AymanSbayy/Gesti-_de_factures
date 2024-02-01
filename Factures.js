"use strict";

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


document.getElementById('factura').addEventListener('submit', function(event) {
    event.preventDefault();

    const factura = {
        numFactura: document.getElementById('num_factura').value,
        dataFactura: document.getElementById('data_factura').value,
        pagada: document.getElementById('pagada').checked,
        nif: document.getElementById('nif').value,
        nom: document.getElementById('nom').value,
        telefon: document.getElementById('telefon').value,
        email: document.getElementById('email').value,
        dte: document.getElementById('dte').value,
        iva: document.getElementById('iva').value
    };

    gestorFacturas.añadirFactura(factura);
});