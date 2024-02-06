"use strict";

import { Factura } from "./Classes/Factura.js";
import { Article } from "./Classes/Article.js";

function download(filename, text) {
  const file = new Blob([text], { type: "text/plain" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(file);
  a.download = filename;
  a.click();
  URL.revokeObjectURL(a.href);
}

let articless = [];
let facturess = [];
let article = new Article;


$(document).ready(init);
let contador = 0;

function init() {
  $("#dades_factura").hide();
  $("#dades_article").hide();
  $("#novaFact").click(function () {
    $("#dades_factura").show();
  });
  $("#tancar").click(function () {
    $("#dades_factura").hide();
  });
  $("#tancar2").click(function () {
    $("#dades_article").hide();

    const tabla = document.querySelector("#miTabla");
    const tbody = tabla.querySelector("tbody");

    // Remove all rows
    while (tbody.firstChild) {
      tbody.removeChild(tbody.firstChild);
    }
  });
  $("#nouArticle").click(crearTaulaEditable);
  $("#guardarArt").click(guardarArticles);
}

$("#factura").on("submit", function (event) {
  event.preventDefault();

  let dataFactura = document.getElementById("data_factura").value;
  let pagada = document.getElementById("pagada").checked;
  let nif = document.getElementById("nif").value;
  let nom = document.getElementById("nom").value;
  let telefon = document.getElementById("telefon").value;
  let email = document.getElementById("email").value;
  let descompte = parseFloat(document.getElementById("dte").value);
  let iva = parseFloat(document.getElementById("iva").value);
    let factura = new Factura(
    dataFactura,
    nif,
    nom,
    telefon,
    email,
    descompte,
    pagada,
    iva
  );
    facturess.push(factura);
  taulaEventListeners();
});

function crearTaulaEditable() {
  contador++;

  const tabla = document.querySelector("#miTabla");
  const tbody = tabla.querySelector("tbody");
  const tr = document.createElement("tr");
  const tdCodi = document.createElement("td");
  tdCodi.setAttribute("contenteditable", "true");
  tdCodi.textContent = contador;
  tr.appendChild(tdCodi);
  const tdArticle = document.createElement("td");
  tdArticle.setAttribute("contenteditable", "true");
  tr.appendChild(tdArticle);
  const tdUnitats = document.createElement("td");
  tdUnitats.setAttribute("contenteditable", "true");
  tr.appendChild(tdUnitats);
  const tdPreu = document.createElement("td");
  tdPreu.setAttribute("contenteditable", "true");
  tr.appendChild(tdPreu);
  const tdSubtotal = document.createElement("td");
  tr.appendChild(tdSubtotal);

  const upButton = document.createElement("button");
  upButton.id = contador;
  const upImg = document.createElement("img");
  upImg.src = "./Imatges/up.svg";
  const downButton = document.createElement("button");
  downButton.id = contador;
  const downImg = document.createElement("img");
  downImg.src = "./Imatges/down.svg";
  const tdAccions = document.createElement("td");
  const eliminarBtn = document.createElement("button");
  eliminarBtn.id = contador;
  const eliminarImg = document.createElement("img");
  eliminarImg.src = "./Imatges/delete.svg";
  upButton.appendChild(upImg);
  downButton.appendChild(downImg);
  eliminarBtn.appendChild(eliminarImg);
  tdAccions.appendChild(upButton);
  tdAccions.appendChild(downButton);
  tdAccions.appendChild(eliminarBtn);
  tr.appendChild(tdAccions);
  tbody.appendChild(tr);

  upButton.addEventListener("click", function () {
    let tr = this.parentElement.parentElement;
    let trAnterior = tr.previousElementSibling;
    if (trAnterior != null) {
      trAnterior.before(tr);
    }
  });
  downButton.addEventListener("click", function () {
    let tr = this.parentElement.parentElement;
    let trSeguent = tr.nextElementSibling;
    if (trSeguent != null) {
      trSeguent.after(tr);
    }
  });
  eliminarBtn.addEventListener("click", function () {
    let tr = this.parentElement.parentElement;
    tr.remove();
  });
}

function guardarArticles() {
  const tabla = document.querySelector("#miTabla");
  const tbody = tabla.querySelector("tbody");
  const filas = tbody.querySelectorAll("tr");
  let alertaMostrada = false;


  filas.forEach((tr, index) => {
    let codi = tr.children[0].textContent;
    let articles = tr.children[1].textContent;
    let unitats = tr.children[2].textContent;
    let preu = tr.children[3].textContent;
    let idFactura = globalThis.num;
    

    if (unitats === "" || preu === "") {
      if (!alertaMostrada) {
        alert("Falten dades a la fila " + (index + 1));
        alertaMostrada = true;
      }
    } else {
      article = new Article(codi, articles, unitats, preu, idFactura);
      articless.push(article);
      globalThis.articless = articless;
      
      let total = 0;
        for (let i = 0; i < articless.length; i++) {
            if (articless[i].idFactura === idFactura) {
            total += articless[i].unitats * articless[i].preu;
            }
        }

        let _factura = facturess.find((factura) => factura.idFactura === idFactura);
        _factura.total = total;

    }
  });
}

function taulaEventListeners() {
  const tabla = document.querySelector("#miTabla");
  tabla.addEventListener("input", function (event) {
    if (
      event.target.closest("td").cellIndex === 2 ||
      event.target.closest("td").cellIndex === 3
    ) {
      let tr = event.target.closest("tr");
      calcul(tr);
    }
  });
}

function calcul(tr) {
  let unitats = parseInt(tr.children[2].textContent, 10) || 0;
  let preu = parseFloat(tr.children[3].textContent) || 0;
  let subtotalFila = unitats * preu;
  tr.children[4].textContent = subtotalFila.toFixed(2) + "€";
  actualizarTotal();
}

function actualizarTotal() {
  const filas = document.querySelectorAll("#miTabla tbody tr");
  let subtotal = 0;

  filas.forEach((tr) => {
    let valorSubtotal =
      parseFloat(tr.children[4].textContent.replace("€", "")) || 0;
    subtotal += valorSubtotal;
  });

  const totalArticlesElement = document.querySelector("#totalArticles");
  if (totalArticlesElement) {
    totalArticlesElement.textContent = subtotal.toFixed(2) + "€";
  }
}
