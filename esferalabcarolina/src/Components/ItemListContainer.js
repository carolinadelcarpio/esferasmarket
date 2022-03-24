import Item from './Item';
import Titulo from './Titulo';
import Input from './Input';
import React from 'react';

class AppContainer extends React.Component {
    constructor (props){
        super(props);
        this.state ={
            temas: ['JavaScript','React JS','Componentes']
        };
    }
render(){
    const items = this.state.temas.map(t=>(
        <Item valor={t}/>
    ));
    return(
        <div>
            <Titulo nombre='List Items'/>
            <ul>{items}</ul>
            <Titulo nombre='Inputs'/>
            <div>
                <Input placeholder='Nombre'/>
                <Input placeholder='Apellido'/>
            </div>
        </div>
        );
    }
}
export default AppContainer;