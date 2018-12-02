
class CustomError extends Error {
    constructor(message, name, code) {
        super(message)
        this.name = name
        this.code = code
    }
}

class NotFoundError extends CustomError {
    constructor(message) {
        super(  message || "El recurso al que intentas acceder ya no existe",
                "NotFoundError",
                404)
    }
}

class UnauthorizedError extends CustomError {
    constructor(message) {
        super(  message || "🐱‍👤 No posees los privilegios necesarios para acceder al recurso",
                "UnauthorizedError",
                401)
    }
}

class ImaTeapotError extends CustomError {
    constructor(message) {
        super(  message || "Soy una tetera, tus argumentos son inválidos.. ☕",
                "ImaTeapotError",
                418)
    }
}

class MethodNotAllowed extends CustomError {
    constructor(message) {
        super(  message || "El método no está soportado, no es un bug, es una feature",
                "MethodNotAllowed",
                405)
    }
}

class BadRequestError extends CustomError {
    constructor(message) {
        super(  message || "El pedido fue mal formulado, prueba pidiendo 'Por favor'",
                "BadRequestError",
                400)
    }
}

class NotImplpementedError extends CustomError {
    constructor(message) {
        super(  message || "Otra funcionalidad a la que no llegamos.. 📋📋📋",
                "NotImplpementedError",
                501)
    }
}

class ForbiddenEror extends CustomError {
    constructor(message) {
        super(  message || "🍎 No te hagas el vivo, sabés que está prohibido 🐍",
                "ForbiddenEror",
                403)
    }
}

class InternalServerError extends CustomError {
    constructor(message) {
        super(  message || "El hamster ya no quiere correr más..",
                "InternalServerError",
                500)
    }
}

module.exports = {
    UnauthorizedError,
    ImaTeapotError,
    NotFoundError,
    MethodNotAllowed,
    NotImplpementedError,
    ForbiddenEror,
    BadRequestError,
    InternalServerError,
    CustomError
}