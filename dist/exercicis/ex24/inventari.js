export class Inventari {
    _capacitatMaxima;
    _items;
    constructor(capacitatMaxima, items = []) {
        this._capacitatMaxima = capacitatMaxima;
        this._items = items;
    }
    get capacitatMaxima() {
        return this._capacitatMaxima;
    }
    get items() {
        return this._items;
    }
    // Setters
    set capacitatMaxima(capacitat) {
        this._capacitatMaxima = capacitat;
    }
    set items(items) {
        this._items = items;
    }
    getPesTotal() {
        return this._items.reduce((total, item) => total + item.pes, 0);
    }
    afegirItem(item) {
        if (this.getPesTotal() + item.pes <= this._capacitatMaxima) {
            this._items.push(item);
            return true;
        }
        return false;
    }
    toString() {
        let resultat = "";
        for (let item of this._items) {
            resultat += `Nom: ${item.nom} Descripcio: ${item.descripcio} Pes: ${item.pes}kg<br>`;
        }
        return resultat;
    }
}
//# sourceMappingURL=inventari.js.map