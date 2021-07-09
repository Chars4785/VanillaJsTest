// import API from "./util/api"
const PREFIX ="https://localhost:3000"
async function request({ url,method, body }){
    try{
        const res = await fetch( url,{
            method,
            body,
            headers:{
                'Content-Type': 'application/json'
            }
        })
        if( res.ok ){
            return await res.json()    
        }else{
            throw await res.json();
        }
    }catch(e){
        throw { 
            message: e.message,
            code: e.code
        }
    }
}


const API = {
    getFile: async ()=>{
        return [ {name:'고양이',value:'images/sample_image.jpg'},
        {name:'파일',value:'images/file.png'}]
    },
}

class Card{
    constructor( value, root ){
        this.root = root
        this.value = value
        this.render()
    }
    render(){
        const name = document.createElement('div')
        name.innerText = this.value
        this.root.appendChild(name)
    }

}

class Bread{
    constructor(target){
        this.nav = document.createElement('nav')
        this.nav.className = 'Breadcrumb'
        target.appendChild(this.nav)
        this.data = []
        this.render()
    }

    setState(nextState){
        this.data = nextState
        this.render();
    }

    render(){
        console.log(this.data)
        this.data.map( rootPath =>{
            console.log(rootPath)
            const bread = document.createElement('div')
            bread.className = "breadPath"
            bread.innerText = `${rootPath.name}`
            bread.addEventListener('click',(e)=>{
                console.log(e.target.value)
            })
            this.nav.appendChild(bread)
        })
    }
}

class App{
    constructor(target){
        this.root = target
        this.Bread = new Bread(target)
        this.init();
        this.render()
    }
    
    async init(){
        const result = await API.getFile();
        this.Bread.setState(result)
    }

    render(){

    }
}
const init = new App(document.querySelector('.app'))
console.log(init)
