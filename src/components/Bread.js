export default class Bread{
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