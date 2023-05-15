const fs = require('fs')


class News{

    constructor(filename = 'news.json'){
        this.path = `./data/${filename}`;

        try {
            fs.readdirSync('data')
        } catch (error) {
            fs.mkdirSync('data')
        }


        try {
            fs.accessSync(this.path);

        } catch (error) {
            fs.writeFileSync(this.path, '[]')
        }
        
      
    }

    createId(){
        return new Date().getTime().toString();
    }

   async create(data){
   const useData =JSON.parse( await fs.promises.readFile(this.path));
   const id = this.createId();
   useData.push({...data, id})
   

   await fs.promises.writeFile(this.path, JSON.stringify(useData, null, 2));
     
}

async getAll(){

     return JSON.parse( await fs.promises.readFile(this.path))
}
    
async getSingle(id){
    const data = await this.getAll()
     return data.find(news=> news.id == id)
}

async getByCategory(){
    const data = await this.getAll()
    return data.filter(news => news.category === category);
}
}

module.exports= News;