import React, { Component } from 'react';
import { List } from '../container/list';
import { connect } from 'react-redux';

import { delet } from '../store/action/action'
import { display,edit,closeEdit } from '../store/action/action';

class Listcode extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            

        }
        this.props.isdisplay();


        this.dat = this.dat.bind(this)
        this.delItem = this.delItem.bind(this);
        // this.dat();
        this.editdata = this.editdata.bind(this);

       
    }

    componentDidMount() {
        // this.props.isdisplay()
        // console.log('hhh')
        // console.log(this.props.name,'123');
    }

 

    delItem(id) {
        this.props.isdelet(id);
        this.props.isdisplay();
    }

    editdata(id,val){
       
        let input=prompt("Edit Todo",val);
        let newData ={
            name:input
        }
        if(input===""){
            alert("Enter Update Todo")
        }
        else{
        this.props.isedit(id,newData);
        this.props.iscloseEdit()
        this.props.isdisplay();
        }
    }
    dat(big) {
    }
    render() {
        

        return (
            <div>
                <List allTodo={this.props.allTodo} id={this.props.id} delItem={this.delItem} editdata={this.editdata} />
            </div>

        )
    }

}
const mapStateToProps = (state) => {
   return {
        allTodo: state.root.todos,
        name: state.root.name,
        id: state.root.id
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        isdelet: (id) => {
            dispatch(delet(id))
        },
        isdisplay: () => {
            dispatch(display())
        },
        isedit: (id,data) => {
            dispatch(edit(id,data))
        },
        iscloseEdit: () =>{
            dispatch(closeEdit())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Listcode);