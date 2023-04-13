const app = require('../src/app');
const session = require('supertest');
const agent = session(app);

describe("Test de RUTAS",()=>{
    
    describe('GET /rickandmorty/character/:id', ()=>{
        it('Responde con status: 200', ()=>{

        })
    
        it('Responde un objeto con las propiedades: "id", "name", "species", "gender", "status", "origin" e "image"', ()=>{
    
        })
        it( 'Si hay un error responde con status: 500',()=>{
    
        })
    })
   

    describe("GET /rickandmorty/login", ()=>{

    })
    
    describe("POST /rickandmorty/fav", ()=>{
    
    })
    
    describe("DELETE /rickandmorty/fav/:id", ()=>{
        
    })
})

