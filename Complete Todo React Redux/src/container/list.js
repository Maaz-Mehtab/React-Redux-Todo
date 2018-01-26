import React, { Component } from 'react';
import '../index.css';
// import firebase from 'firebase';

export class List extends Component {
    constructor() {
        super()
        this.state = {
            arr: []
        }
    }
    componentWillMount() {
        setTimeout(() => {
            this.setState({arr : this.props.allTodo})
        }, 3000);
    }

    render() {
        const props = this.props;
        // console.log('props',props);
        return (<div>
            

            <ul>

                {props.allTodo.map((val, index) => {
                    return <li className="container-fluid mb-2 alert alert-danger list  " key={index}>{val.name}
                    
                        <button className="btn btn-outline-danger float-right" key={index} onClick={props.delItem.bind(this,val.id)} >Delete</button> 
                     <button className="btn btn-outline-warning float-right mr-2" onClick={props.editdata.bind(this,val.id,val.name)}>Edit</button>  
                    </li>
                })}
            </ul>
        </div>

        )
    }
}
