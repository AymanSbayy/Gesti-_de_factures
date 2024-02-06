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
    this.mostrarFactura();
  }


  agregarArticulo(articulo) {
    this.cesta.push(articulo);
  }

  mostrarFactura() {
    const tbody = document.querySelector("table tbody");
    const tr = document.createElement("tr");

    const tdNumFactura = document.createElement("td");
    tdNumFactura.textContent = this.numFactura;
    tr.appendChild(tdNumFactura);

    const tdData = document.createElement("td");
    tdData.textContent = this.data;
    tr.appendChild(tdData);

    const tdNif = document.createElement("td");
    tdNif.textContent = this.nif;
    tr.appendChild(tdNif);

    const tdClient = document.createElement("td");
    tdClient.textContent = this.client;
    tr.appendChild(tdClient);

    const tdTelefon = document.createElement("td");
    tdTelefon.textContent = this.telefon;
    tr.appendChild(tdTelefon);

    const tdEmail = document.createElement("td");
    tdEmail.textContent = this.email;
    tr.appendChild(tdEmail);

    const tdSubtotal = document.createElement("td");
    tdSubtotal.textContent = "";
    tr.appendChild(tdSubtotal);

    const tdDescompte = document.createElement("td");
    tdDescompte.textContent = this.descompte;
    tr.appendChild(tdDescompte);

    const tdBaseImp = document.createElement("td");
    tdBaseImp.textContent = "";
    tr.appendChild(tdBaseImp);

    const tdIva = document.createElement("td");
    tdIva.textContent = this.iva;
    tr.appendChild(tdIva);

    const tdTotal = document.createElement("td");
    tdTotal.textContent = "";
    tr.appendChild(tdTotal);

    const tdPagat = document.createElement("td");
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
    //btnEditar.addEventListener("click", editarFactura(this.numFactura));

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
      this.editarFactura(this.numFactura);
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
   btnImprimir.addEventListener("click", function() {
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


