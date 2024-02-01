
export class Factura {
    factura;
    data;
    nif;
    client;
    telefon;
    email;
    descompte;
    pagat;
    articles;
    unitats;
    preu;


    constructor(factura,data,nif,client,telefon,email,descompte,pagat,articles,unitats,preu){
        this.factura = factura;
        this.data = data;
        this.nif = nif;
        this.client = client;
        this.telefon = telefon ;
        this.email = email;
        this.descompte = descompte;
        this.pagat = pagat;
        this.articles = articles;
        this.unitats = unitats;
        this.preu = preu;
    }
}