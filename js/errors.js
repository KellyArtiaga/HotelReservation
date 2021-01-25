class Errors {
    static invalidClientType() {
        return new Error('Invalid Client')
    }

    static invalidDates() {
        return new Error('Invalid Date')
    }

    static invalidHotel() {
        return new Error('Invalid Hotel')
    }

}

module.exports = Errors;