const fs = require('fs')
class News{

    constructor(filename){
        this.filename = filename;
        try {
            fs.accessSync(this.filename);

        } catch (error) {
            fs.writeFileSync(this.filename, 'this is from new class')
        }
        
        super()
    }
}