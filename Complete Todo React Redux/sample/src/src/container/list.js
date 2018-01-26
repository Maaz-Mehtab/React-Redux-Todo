import React, { Component } from 'react';
// import firebase from 'firebase';
    
export class List extends Component{
    

    render(){
        const props=this.props;
        console.log(props.name);
      
        
        console.log(props.state)
        return (<div>
             <h1>Maaz</h1>
             
              
              {/* <ul>

                {props.state.map((val,index)=>{
                     return <li className="container-fluid list mb-2 " key={index}>{val.name}
                     <button className="btn btn-outline-danger float-right" key={index} onClick={this.props.delItem.bind(this,index,val.id)} >Delete</button> 
                     <button className="btn btn-outline-warning float-right mr-2" onClick={this.edit.bind(this,index,val.id)}>Edit</button> 
                    </li>
                })}
            </ul>  */}
            </div>
        
        )}
}
