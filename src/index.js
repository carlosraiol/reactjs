import React, { Component } from "react"
import ReactDOM from "react-dom"
/*import Button from './Button'
import ComponetA from './ComponentA'
import ComponetB from './ComponentB'*/
import "./style.css"

//const element = 'Digital Innovation'
//const element2 = <h1>Olá turma</h1>
/*
function soma(a, b) {
    alert(a + b);
}

function App() {
    return (
        <div className="App">
            Olá Mundo!
            <Button onClick={() => soma(10, 20)} name="Carlos Raiol" />
            <ComponetA>
                <ComponetB>
                    <Button onClick={() => soma(30, 40)} name="Sonia Raiol" />
                </ComponetB>
            </ComponetA>    
        </div>
    )
}*/
/*
function primeiroJSX() {
    return (
        <div className="teste">
            Carlos Raiol - Introdução ao ReactJS
            <h1>Soma: {sum(10, 20)}</h1>
        </div>
    )
}

const App = () => {
    return (
        <div className="App">
            {primeiroJSX()}
        </div>
    )
}
*/
class App extends Component {
    
    constructor(props) {
        super(props)

        this.state = {
            clock: 1000,
            copo: 'água'
        }
    }
    
    alterarCopo = () => {
        this.setState({
            copo: 'refrigerante'
        })
    }

    render() {
        const { clock, copo } = this.state
        return(
            <div>
                <h1>{clock}</h1>
                <button onClick={() => this.alterarCopo()}>{copo}</button>
            </div>
        )
    }


}
 
const rootElement =  document.getElementById("root")
ReactDOM.render(<App />, rootElement)