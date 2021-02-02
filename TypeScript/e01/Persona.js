/// <reference path="index.d.ts" />
var enumSexo;
(function (enumSexo) {
    enumSexo[enumSexo["h"] = 0] = "h";
    enumSexo[enumSexo["m"] = 1] = "m";
})(enumSexo || (enumSexo = {}));
var enumEstado;
(function (enumEstado) {
    enumEstado[enumEstado["casado"] = 0] = "casado";
    enumEstado[enumEstado["soltero"] = 1] = "soltero";
    enumEstado[enumEstado["divorciado"] = 2] = "divorciado";
    enumEstado[enumEstado["viudo"] = 3] = "viudo";
})(enumEstado || (enumEstado = {}));
var Persona = /** @class */ (function () {
    function Persona(nombre, edad, sexo, peso, altura, estadoCivil) {
        this._nombre = nombre;
        this._edad = edad;
        this._sexo = sexo;
        this._peso = peso;
        this._altura = altura;
        this._estadoCivil = estadoCivil;
    }
    Object.defineProperty(Persona.prototype, "nombre", {
        get: function () {
            return this._nombre;
        },
        set: function (value) {
            this._nombre = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "edad", {
        get: function () {
            return this._edad;
        },
        set: function (value) {
            this._edad = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "sexo", {
        get: function () {
            return this._sexo;
        },
        set: function (value) {
            this._sexo = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "peso", {
        get: function () {
            return this._peso;
        },
        set: function (value) {
            this._peso = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "altura", {
        get: function () {
            return this._altura;
        },
        set: function (value) {
            this._altura = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "estadoCivil", {
        get: function () {
            return this._estadoCivil;
        },
        set: function (estadoCivil) {
            var x;
            for (x = 0; x < Object.keys(enumEstado).length && enumEstado[x] != estadoCivil; x++) {
            }
            if (x == Object.keys(enumEstado).length && enumEstado[x] != estadoCivil) {
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "dni", {
        set: function (value) {
            this._dni = value;
        },
        enumerable: false,
        configurable: true
    });
    Persona.prototype.calcularIMC = function () {
        var valor;
        var peso = this._peso;
        var altura = this._altura;
        var calcular = (peso / (altura * altura));
        if (calcular < 20) {
            valor = -1;
        }
        else if (calcular <= 25)
            valor = 0;
        else
            valor = 1;
        return valor;
    };
    Persona.prototype.esMayorDeEdad = function () {
        var mayor;
        var edad = this._edad;
        if (edad >= 18)
            mayor = true;
        else
            mayor = false;
        return mayor;
    };
    Persona.prototype.comprobarSexo = function (sexo) {
        if (sexo != enumSexo[0] && sexo != enumSexo[1])
            return enumSexo[0];
        return sexo;
    };
    Persona.prototype.toString = function () {
        return this.nombre + " " + this.edad + " " + this.dni + " " + this.sexo + " " + this.peso + " " + this.altura + " " + this.estadoCivil + "\n";
    };
    Persona.prototype.generarDni = function () {
        var num = Math.floor((Math.random() * 100000000));
        var sNum = this.formatNumberLength(num, 8);
        return sNum + this.charDNI(sNum);
    };
    Persona.prototype.formatNumberLength = function (num, length) {
        var r = "" + num;
        while (r.length < length) {
            r = "0" + r;
        }
        return r;
    };
    Persona.prototype.charDNI = function (dni) {
        var chain = "TRWAGMYFPDXBNJZSQVHLCKET";
        var pos = dni % 23;
        var letter = chain.substring(pos, pos + 1);
        return letter;
    };
    return Persona;
}());
