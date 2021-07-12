export default class Card{
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