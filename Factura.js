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

    const tdPagat = document.createElement("td");
    tdPagat.textContent = this.pagat ? "Sí" : "No";
    tr.appendChild(tdPagat);

    const tdEditar = document.createElement("td");
    const btnEditar = document.createElement("button");
    btnEditar.id = this.numFactura;
    btnEditar.setAttribute("tagName", "btnEditar");
    const imgEditar = document.createElement("img");
    imgEditar.src = "edit.svg";
    imgEditar.alt = "Editar";
    btnEditar.appendChild(imgEditar);
    tdEditar.appendChild(btnEditar);
    tr.appendChild(tdEditar);


    const tdImprimir = document.createElement("td");
    const btnImprimir = document.createElement("button");
    btnImprimir.id = this.numFactura;
    btnImprimir.setAttribute("tagName", "btnImprimir");
    const imgImprimir = document.createElement("img");
    imgImprimir.src = "print.svg";
    imgImprimir.alt = "Imprimir";
    btnImprimir.appendChild(imgImprimir);
    tdImprimir.appendChild(btnImprimir);
    tr.appendChild(tdImprimir);

    const tdEliminar = document.createElement("td");
    const btnEliminar = document.createElement("button");
    btnEliminar.id = this.numFactura;
    btnEliminar.setAttribute("tagName", "btnEliminar");
    const imgEliminar = document.createElement("img");
    imgEliminar.src = "delete.svg";
    imgEliminar.alt = "Eliminar";
    btnEliminar.appendChild(imgEliminar);
    tdEliminar.appendChild(btnEliminar);
    tr.appendChild(tdEliminar);

    tbody.appendChild(tr);
  }

  static eliminarFactura(numFactura) {
    const factura = document.getElementById(numFactura);
    factura.remove();
    mostrarFactura();
    
  }
}
