import React, { Component } from 'react';
import { List } from '../container/list';
import {connect} from 'react-redux';
import firebase from 'firebase';
import {delet} from '../store/action/action'
// import {addtodo}  from '../store/action/action';
 class Listcode extends Component{
    constructor(props) {
        super(props);
        this.state={
        
                name:[],
                id:[]
            
        
        }
        this.dat=this.dat.bind(this)
        this.delItem=this.delItem.bind(this);
        this.dat();
        this.refreshPage=this.refreshPage.bind(this);    
       console.log("---",this.state);
    } 

    refreshPage(){ 
        window.location.reload(); 
    }

    delItem(index,id,val){
        console.log(index,"del");
         this.props.isdelet(this.state)
         console.log(this.state);
         firebase.database().ref('/').child('Redux_todo/'+index).remove()

                let a=this.state.arr;
                // console.log("arrat",a);
                a.splice(index,1);
                // console.log("splice",a);
        
        this.setState({
            arr:a
        })
        console.log(this.state.arr)
    
      
    }
    dat(big){
        console.log(this.props.name);

        // firebase.database().ref("Redux_todo").on('child_added',(snap)=>{
        //     let obj=snap.val();
        //     obj.id=snap.key;
        //     obj.id=snap.key;
          
        //     this.state.todo.push(obj)   
            
        // })
            // console.log(this.state.todo)
       

              


            }
                
                
        
                    
    
render(){
    
    // for(var i=0; i<this.state.arr.length;i++){
    // console.log(this.state.arr[i].name)
    // }
    // console.log(this.props.todo);
    return(
        <div>
            <List name={this.props.name} id={this.props.id} delItem={this.delItem}  />
            </div>

    )
}

 }


 const mapStateToProps =(state) => {
    console.log("state",state.root.name);
    console.log("state",state.root.id); 
    return {
         
         name:state.root.name,
         id:state.root.id
     }
 }

const mapDispatchToProps =(dispatch) =>{
   return {
       isdelet:(del) =>{
           dispatch(delet(del))
       },
       
   }
}

export default connect(mapStateToProps,mapDispatchToProps)(Listcode);