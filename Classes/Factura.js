"use strict";
import { imprimirFactura} from "../Factures.js";
export class Factura {
  static numFactura = 0;
  static subtotal_;
  constructor(data, nif, client, telefon, email, descompte, pagat, iva) {
    Factura.numFactura++;
    this.numFactura = Factura.numFactura;
    this.data = data;
    this.nif = nif;
    this.client = client;
    this.telefon = telefon;
    this.email = email;
    this.descompte = descompte;
    this.pagat = pagat;
    this.iva = iva;
    this.subtotal_ = 0;
    this.mostrarFactura();
  }

  //Setters

  set subtotal(subtotal) {
    this.subtotal_ = subtotal;

  const descompte = this.subtotal_ * this.descompte / 100;
  const baseImp = this.subtotal_ - descompte;
  const IVA = baseImp * this.iva / 100;
  const total = baseImp + IVA;

  const tdSubtotal = document.getElementById("tdSubtotal_" + this.numFactura);
  if (tdSubtotal) tdSubtotal.textContent = this.subtotal_.toFixed(2) + "€"; // Asegura 2 decimales

  const tdDescompte = document.getElementById("tdDescompte_" + this.numFactura);
  if (tdDescompte) tdDescompte.textContent = descompte.toFixed(2) + "€";

  const tdBaseImp = document.getElementById("tdBaseImp_" + this.numFactura);
  if (tdBaseImp) tdBaseImp.textContent = baseImp.toFixed(2) + "€";

  const tdIva = document.getElementById("tdIva_" + this.numFactura);
  if (tdIva) tdIva.textContent = IVA.toFixed(2) + "€";

  const tdTotal = document.getElementById("tdTotal_" + this.numFactura);
  if (tdTotal) tdTotal.textContent = total.toFixed(2) + "€";
  }

  set setData(data) {
    this.data = data;
    const tdData = document.getElementById("tdData_" + this.numFactura);
    if (tdData) tdData.textContent = this.data;
  }

  set setNif(nif) {
    this.nif = nif;
    const tdNif = document.getElementById("tdNif_" + this.numFactura);
    if (tdNif) tdNif.textContent = this.nif;
  }

  set setClient(client) {
    this.client = client;
    const tdClient = document.getElementById("tdClient_" + this.numFactura);
    if (tdClient) tdClient.textContent = this.client;
  }

  set setTelefon(telefon) {
    this.telefon = telefon;
    const tdTelefon = document.getElementById("tdTelefon_" + this.numFactura);
    if (tdTelefon) tdTelefon.textContent = this.telefon;
  }

  set setEmail(email) {
    this.email = email;
    const tdEmail = document.getElementById("tdEmail_" + this.numFactura);
    if (tdEmail) tdEmail.textContent = this.email;
  }

  set setPagat(pagat) {
    this.pagat = pagat;
    const tdPagat = document.getElementById("tdPagat_" + this.numFactura);
    if (tdPagat) tdPagat.textContent = this.pagat ? "Sí" : "No";
  }

  //Getters

  get getSubtotal() {
    return this.subtotal_;
  }

  get getDescompte() {
    return this.descompte;
  }

  get getIva() {
    return this.iva;
  }


  mostrarFactura() {
    const tbody = document.querySelector("table tbody");
    const tr = document.createElement("tr");

    const tdNumFactura = document.createElement("td");
    tdNumFactura.id = "tdNumFactura_" + this.numFactura;
    tdNumFactura.textContent = this.numFactura;
    tr.appendChild(tdNumFactura);

    const tdData = document.createElement("td");
    tdData.id = "tdData_" + this.numFactura;
    tdData.textContent = this.data;
    tr.appendChild(tdData);

    const tdNif = document.createElement("td");
    tdNif.id = "tdNif_" + this.numFactura;
    tdNif.textContent = this.nif;
    tr.appendChild(tdNif);

    const tdClient = document.createElement("td");
    tdClient.id = "tdClient_" + this.numFactura;
    tdClient.textContent = this.client;
    tr.appendChild(tdClient);

    const tdTelefon = document.createElement("td");
    tdTelefon.id = "tdTelefon_" + this.numFactura;
    tdTelefon.textContent = this.telefon;
    tr.appendChild(tdTelefon);

    const tdEmail = document.createElement("td");
    tdEmail.id = "tdEmail_" + this.numFactura;
    tdEmail.textContent = this.email;
    tr.appendChild(tdEmail);

    const tdSubtotal = document.createElement("td");
    tdSubtotal.id = "tdSubtotal_" + this.numFactura;
    tdSubtotal.textContent = "0 €";
    tr.appendChild(tdSubtotal);

    const tdDescompte = document.createElement("td");
    tdDescompte.id = "tdDescompte_" + this.numFactura;
    tdDescompte.textContent = "0 €";
    tr.appendChild(tdDescompte);

    const tdBaseImp = document.createElement("td");
    tdBaseImp.id = "tdBaseImp_" + this.numFactura;
    tdBaseImp.textContent = "0 €";
    tr.appendChild(tdBaseImp);

    const tdIva = document.createElement("td");
    tdIva.id = "tdIva_" + this.numFactura;
    tdIva.textContent = "0 €";
    tr.appendChild(tdIva);

    const tdTotal = document.createElement("td");
    tdTotal.id = "tdTotal_" + this.numFactura;
    tdTotal.textContent = "0 €";
    tr.appendChild(tdTotal);

    const tdPagat = document.createElement("td");
    tdPagat.id = "tdPagat_" + this.numFactura;
    tdPagat.textContent = this.pagat ? "Sí" : "No";
    tr.appendChild(tdPagat);

    const tdAcciones = document.createElement("td");

    const btnEditar = document.createElement("button");
    btnEditar.id = this.numFactura;
    btnEditar.setAttribute("tagName", "btnEditar");
    const imgEditar = document.createElement("img");
    imgEditar.setAttribute("tagName", "btnEditar");
    imgEditar.src = "./Imatges/edit.svg";
    imgEditar.alt = "Editar";
    btnEditar.appendChild(imgEditar);
    tdAcciones.appendChild(btnEditar);
    btnEditar.addEventListener("click", () => {
      this.editarFactura(this.numFactura);
    });

    const btnEditArt = document.createElement("button");
    btnEditArt.id = this.numFactura;
    btnEditArt.setAttribute("tagName", "btnEditArt");
    const imgEditArt = document.createElement("img");
    imgEditArt.setAttribute("tagName", "btnEditArt");
    imgEditArt.src = "./Imatges/cesta.svg";
    imgEditArt.alt = "Editar Article";
    btnEditArt.appendChild(imgEditArt);
    tdAcciones.appendChild(btnEditArt);
    btnEditArt.addEventListener("click", () => {
      this.editarArticle(this.numFactura);
    });

    const btnImprimir = document.createElement("button");
    btnImprimir.id = this.numFactura;
    btnImprimir.setAttribute("tagName", "btnImprimir");
    const imgImprimir = document.createElement("img");
    imgImprimir.setAttribute("tagName", "btnImprimir");
    imgImprimir.src = "./Imatges/printer.svg";
    imgImprimir.alt = "Imprimir";
    btnImprimir.appendChild(imgImprimir);
    tdAcciones.appendChild(btnImprimir);
   // btnImprimir.addEventListener("click", this.imprimirFactura(this.numFactura));
   btnImprimir.addEventListener("click", () => {
    imprimirFactura(this.numFactura);
  });

 

    const btnEliminar = document.createElement("button");
    btnEliminar.id = this.numFactura;
    btnEliminar.setAttribute("tagName", "btnEliminar");
    const imgEliminar = document.createElement("img");
    imgEliminar.setAttribute("tagName", "btnEliminar");
    imgEliminar.src = "./Imatges/delete.svg";
    imgEliminar.alt = "Eliminar";
    btnEliminar.appendChild(imgEliminar);
    tdAcciones.appendChild(btnEliminar);
    btnEliminar.addEventListener("click", () => {
      this.eliminarFactura(this.numFactura);
    });

    tr.appendChild(tdAcciones);

    tbody.appendChild(tr);
  }

  eliminarFactura(numFactura) {
    const tr = document.getElementById(numFactura).parentElement.parentElement;
    tr.remove();
  }

  editarFactura(numFactura) {
    $("#dades_factura").show();
        //Primero que se pongan los datos de la factura que ya tenemos en el formulario



    globalThis.num = numFactura;
    $("#insertFact").hide();
    $("#editFact").show();
    $("#dte").hide();
    $("#iva").hide();	
    let facturaData = document.getElementById("data_factura");
    facturaData.value = this.data;
    let facturaNif = document.getElementById("nif");
    facturaNif.value = this.nif;
    let facturaClient = document.getElementById("client");
    facturaClient.value = this.client;
    let facturaTelefon = document.getElementById("telefon");
    facturaTelefon.value = this.telefon;
    let facturaEmail = document.getElementById("email");
    facturaEmail.value = this.email;
  }

  editarArticle(numFactura) {
    $("#dades_article").show();
    globalThis.num = numFactura;

    if (existeIdFactura(numFactura)) {
      const tabla = document.querySelector("#miTabla");
      const tbody = tabla.querySelector("tbody");
      let articlesArray = globalThis.articless;
      if (!Array.isArray(articlesArray)) {
        throw new Error("articlesArray no es una matriz válida");
      } else {
        for (const article of articlesArray) {
          if (article.idFactura === numFactura) {
            const tr = document.createElement("tr");

            const tdCodi = document.createElement("td");
            tdCodi.textContent = article.codi;
            tr.appendChild(tdCodi);

            const tdArticle = document.createElement("td");
            tdArticle.textContent = article.article;
            tdArticle.contentEditable = true;
            tr.appendChild(tdArticle);

            const tdUnitats = document.createElement("td");
            tdUnitats.textContent = article.unitats;
            tdUnitats.contentEditable = true;
            tr.appendChild(tdUnitats);

            const tdPreu = document.createElement("td");
            tdPreu.textContent = article.preu;
            tdPreu.contentEditable = true;
            tr.appendChild(tdPreu);

            const tdSubtotal = document.createElement("td");
            tdSubtotal.textContent = article.unitats * article.preu;
            tr.appendChild(tdSubtotal);

            const upButton = document.createElement("button");
            upButton.id = article.codi;
            const upImg = document.createElement("img");
            upImg.src = "./Imatges/up.svg"; 
            const downButton = document.createElement("button");
            downButton.id = article.codi;
            const downImg = document.createElement("img");
            downImg.src = "./Imatges/down.svg";
            const tdAccions = document.createElement("td");
            const eliminarBtn = document.createElement("button");
            eliminarBtn.id = article.codi;
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

            upButton.addEventListener("click", function() {
              let tr = this.parentElement.parentElement;
              let trAnterior = tr.previousElementSibling;
              if (trAnterior != null) {
                trAnterior.before(tr);
              }
            });

            downButton.addEventListener("click", function() {
              let tr = this.parentElement.parentElement;
              let trSeguent = tr.nextElementSibling;
              if (trSeguent != null) {
                trSeguent.after(tr);
              }
            });

            eliminarBtn.addEventListener("click", function() {
              let tr = this.parentElement.parentElement;
              tr.remove();
            });
          }
        }
      }
    } else {
      return;
    }
  }

  



}

function existeIdFactura(numFactura) {
  let articlesArray = globalThis.articless;
  if (!Array.isArray(articlesArray)) {
    throw new Error("articlesArray no es una matriz válida");
  }

  for (const article of articlesArray) {
    if (article.idFactura === numFactura) {
      return true;
    }
  }
  return false;
}


