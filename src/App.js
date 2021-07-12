import API from './util/api.js'
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
