/// <reference path="index.d.ts" />
enum enumSexo{'h','m'}
enum enumEstado {'casado', 'soltero', 'divorciado', 'viudo'}
class Persona {
    private _nombre: string;
    private _edad: number;
    private _dni: string;
    private _sexo: string;
    private _peso: number;
    private _altura: number;
    private _estadoCivil: string;
    public constructor(nombre: string, edad: number, sexo: string, peso:number, altura: number, estadoCivil: string) {
        this._nombre = nombre;
        this._edad = edad;
        this._sexo = sexo;
        this._peso = peso;
        this._altura = altura;
        this._estadoCivil = estadoCivil;
    }
    get nombre(): string {
        return this._nombre;
    }
    set nombre(value: string) {
        this._nombre = value;
    }
    get edad(): number {
        return this._edad;
    }
    set edad(value: number) {
        this._edad = value;
    }
    get sexo(): string {
        return this._sexo;
    }
    set sexo(value: string) {
        this._sexo = value;
    }
    get peso(): number {
        return this._peso;
    }
    set peso(value: number) {
        this._peso = value;
    }
    get altura(): number {
        return this._altura;
    }
    set altura(value: number) {
        this._altura = value;
    }
    get estadoCivil(): string {
        return this._estadoCivil;
    }
    set estadoCivil(estadoCivil: string) {
        let x:number;
        for (x = 0; x < Object.keys(enumEstado).length && enumEstado[x] != estadoCivil; x++){
        }
        if (x == Object.keys(enumEstado).length && enumEstado[x] != estadoCivil){
        }
    }
    set dni(value: string) {
        this._dni = value;
    }
    calcularIMC():number{
        let valor:number;
        let peso: number = this._peso;
        let altura: number = this._altura;
        var calcular: number = (peso/(altura * altura));
        if (calcular < 20){
            valor = -1;
        }else
        if (calcular <= 25)
            valor = 0;
        else
            valor = 1;
        return valor;
    }
    esMayorDeEdad():boolean{
        let mayor:boolean;
        let edad: number = this._edad;
        if (edad >= 18)
            mayor = true
        else
            mayor = false
        return mayor;
    }
    comprobarSexo(sexo:string):string{
        if (sexo != enumSexo[0] && sexo != enumSexo[1])
            return enumSexo[0];
        return sexo;
    }
    toString():string{
        return this.nombre + " " + this.edad + " " + this.dni + " " + this.sexo + " " + this.peso + " " + this.altura + " " + this.estadoCivil + "\n";
    }
    generarDni():string{
        let num: number = Math.floor( ( Math.random() * 100000000 ) );
        let sNum: string = this.formatNumberLength(num, 8);
        return sNum + this.charDNI(sNum);
    }
    formatNumberLength(num, length){
        var r = "" + num;
        while ( r.length < length ) {
            r = "0" + r;
        }
        return r;
    }
    charDNI(dni) {
        var chain = "TRWAGMYFPDXBNJZSQVHLCKET";
        var pos = dni % 23;
        var letter = chain.substring( pos, pos + 1 );
        return letter;
    }
}