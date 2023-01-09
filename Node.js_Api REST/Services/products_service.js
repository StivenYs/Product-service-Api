const fs = require('fs');
const faker = require('faker');
const pool = require('./../Database/Connect.mysql.Database');

function writeData(path,data){
    fs.writeFile(path,data,(err)=>{
        if (err){
            console.error(err);
        }
       
    })
}
function write(path,data){
    fs.writeFile(path,data,(err)=>{
        if (err){
            console.error(err);
        }
    })
}
function readData(path,cb){
    fs.readFile(path,(err,data)=>{
        if (err){
            console.error(err);
        }
        cb(data.toString());
    });
}


class services {
    constructor() {
        this.pool = pool;
    }
    
    async Create(reqData){
        
        const newProduct = {
            id:faker.datatype.uuid(),
                ...reqData
        }
        readData(__dirname +'/Data.json',(data)=>{
            const convertData = JSON.parse(data);
            convertData.push(newProduct);
            write(__dirname + '/Data.json', JSON.stringify(convertData));
        });
        
    }
    async Read(){
        return new Promise((resolve, reject)=>{
             setTimeout(()=>{
                 readData(__dirname +'/Data.json',(data)=>{
                     resolve(JSON.parse(data));
                 });
             },5000);
        });
       
    }
    async readOne(id,cb){
       
        readData(__dirname +'/Data.json',(data)=>{
            cb(JSON.parse(data).find(item => item.id === id));
        });
        
    }
    async Update(id,reqData,resData){
    
        return new Promise((resolve, reject)=>{
            
        readData(__dirname +'/Data.json',(data)=>{
            const object = JSON.parse(data);
            const index =  object.findIndex(item => item.id === id);
            if (index === -1){reject(new Error("Product not Found ")); } 
            else{
                object[index] = {
                    id,
                    ...reqData
                };
                write(__dirname + '/Data.json',JSON.stringify(object));
                resData("updated successful :)");
            }
        });
        });
    }
    async Delete(id,res){
        
        readData(__dirname+'/Data.json',(data)=>{
           const object = JSON.parse(data);
           const index = object.findIndex(item => item.id === id);
           if (index === -1){res('product no found 404 :(');}
           else{
               object.splice(index,1);
               write(__dirname + '/Data.json',JSON.stringify(object));
               res('Delete sucessful');
           }
        });
    }
    
}

module.exports = services;