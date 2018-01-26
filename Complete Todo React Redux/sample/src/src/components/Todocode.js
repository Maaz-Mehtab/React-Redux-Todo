import React, { Component } from 'react';
import firebase from 'firebase';
import { Todo } from '../container/todo';
import {connect} from 'react-redux';
import {addtodo}  from '../store/action/action';
import {deleteall}  from '../store/action/action';

 class Todocode extends Component{
    constructor(props){
        super(props);
        this.state={
            name:''
        }
        this.refreshPage=this.refreshPage.bind(this);
        this.add=this.add.bind(this);
        this.deleteall=this.deleteall.bind(this);    
       
       
    }   

    _onchange(getval){
        getval.preventDefault();

        this.setState({
            [getval.target.name]:getval.target.value
        });
    }
    
    add(event){
 event.preventDefault();
       let ob={
            name:this.state.name
        }
        console.log(ob)
        this.props.isaddtodo(ob);
  }

    refreshPage(){ 
        window.location.reload(); 
    }

    deleteall(e){
        e.preventDefault();
        console.log("deleteAll");
        
        firebase.database().ref('/').remove();

        this.props.isdeleteall(this.state)
        console.log("Firebase Succefully done ");
            this.setState({
              name:this.state  
            })
    console.log(this.setState,"maaz");         
    }



render(){
    return(
        <div>
        <Todo add={this.add} _onchange={this._onchange.bind(this)} deleteall={this.deleteall}  />    
        </div>
    )
}
 }

 const mapStateToProps =(state) => {
    // console.log("state",state.root.name);
    // console.log("state",state.root.id); 
    return {
         
         name:state.root.name,
         id:state.root.id
     }
 }

const mapDispatchToProps = (dispatch) => {
    return {
         isaddtodo : (items) => {
            dispatch(addtodo(items))
        },
        isdeleteall :(delet) =>{
            dispatch(deleteall(delet))
        }
    }
}
 export default connect(mapStateToProps,mapDispatchToProps)(Todocode);