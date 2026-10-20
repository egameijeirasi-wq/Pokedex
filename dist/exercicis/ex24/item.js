export class item {
    _nom;
    _descripcio;
    _pes;
    constructor(nom, descripcio, pes) {
        this._nom = nom;
        this._descripcio = descripcio;
        this._pes = pes;
    }
    get nom() {
        return this._nom;
    }
    get descripcio() {
        return this._descripcio;
    }
    get pes() {
        return this._pes;
    }
    set nom(nom) {
        this._nom = nom;
    }
    set descripcio(descripcio) {
        this._descripcio = descripcio;
    }
    set pes(pes) {
        this._pes = pes;
    }
}
//# sourceMappingURL=item.js.map