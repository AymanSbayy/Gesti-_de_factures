export class Factura {
  static numFactura = 0;
  data;
  nif;
  client;
  telefon;
  email;
  pagat;
  descompte;
  iva;

  constructor(data, nif, client, telefon, email, descompte, pagat, iva) {
    this.numFactura = ++Factura.numFactura;
    this.data = data;
    this.nif = nif;
    this.client = client;
    this.telefon = telefon;
    this.email = email;
    this.pagat = pagat;
    this.descompte = descompte;
    this.iva = iva;
    this.mostrarFactura();
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
    imgEditar.src = "edit.svg";
    imgEditar.alt = "Editar";
    btnEditar.appendChild(imgEditar);
    tdAcciones.appendChild(btnEditar);
    //btnEditar.addEventListener("click", editarFactura(this.numFactura));

    const btnEditArt = document.createElement("button");
    btnEditArt.id = this.numFactura;
    btnEditArt.setAttribute("tagName", "btnEditArt");
    const imgEditArt = document.createElement("img");
    imgEditArt.setAttribute("tagName", "btnEditArt");
    imgEditArt.src = "cesta.svg";
    imgEditArt.alt = "Editar Article";
    btnEditArt.appendChild(imgEditArt);
    tdAcciones.appendChild(btnEditArt);
    btnEditArt.addEventListener("click", );
    

    const btnImprimir = document.createElement("button");
    btnImprimir.id = this.numFactura;
    btnImprimir.setAttribute("tagName", "btnImprimir");
    const imgImprimir = document.createElement("img");
    imgImprimir.setAttribute("tagName", "btnImprimir");
    imgImprimir.src = "printer.svg";
    imgImprimir.alt = "Imprimir";
    btnImprimir.appendChild(imgImprimir);
    tdAcciones.appendChild(btnImprimir);
    //btnImprimir.addEventListener("click", imprimirFactura(this.numFactura));

    const btnEliminar = document.createElement("button");
    btnEliminar.id = this.numFactura;
    btnEliminar.setAttribute("tagName", "btnEliminar");
    const imgEliminar = document.createElement("img");
    imgEliminar.setAttribute("tagName", "btnEliminar");
    imgEliminar.src = "delete.svg";
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

  crearArticle()
  {
    
  }
}
