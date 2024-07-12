const dotenv = require('dotenv')

dotenv.config({ path: '.env' })

const URL = process.env.BASE_URL
class AddUrl {
    constructor(schema) {
        this.schema = schema
    }

    post(fileName) {

        this.schema.post('init', (doc) => {
            if (doc.image) {
                const imageUrl = `${URL}/${fileName}/${doc.image}`
                doc.image = imageUrl
            }

        });
        return this
    }

    save(fileName) {

        this.schema.post('save', (doc) => {
            if (doc.image) {
                const imageUrl = `${URL}/${fileName}/${doc.image}`
                doc.image = imageUrl
            }

        });
        return this
    }

}


module.exports = AddUrl;