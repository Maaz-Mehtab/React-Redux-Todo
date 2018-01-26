import React, { Component } from 'react';
import { Todo } from '../container/todo';
import { connect } from 'react-redux';
import { addtodo } from '../store/action/action';
import { deleteall } from '../store/action/action';
import { display } from '../store/action/action';

class Todocode extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: ''
        }
        this.add = this.add.bind(this);
        this.deleteall = this.deleteall.bind(this);
    }
    _onchange(getval) {
        getval.preventDefault();

        this.setState({
            name: getval.target.value
        });
    }
    add(event) {
        if(this.state.name===""){
            alert("Enter Todo");
        }
        else{
        event.preventDefault();
        let ob = {
            name: this.state.name
        }
        this.setState({
            name:''
        })
        this.state.name='';
        this.props.isaddtodo(ob);
        this.props.isdisplay();
        this.state.name='';
     
    }
}
    deleteall(e) {
        e.preventDefault();
        this.props.isdeleteall("");
        this.props.isdisplay();
    }



    render() {
        return (
            <div>
                <Todo add={this.add} _onchange={this._onchange.bind(this)} deleteall={this.deleteall} state={this.state.name} />
            </div>
        )
    }
}

const mapStateToProps = (state) => {

    return {

        name: state.root.name,
        id: state.root.id
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        isaddtodo: (items) => {
            dispatch(addtodo(items))
        },


        isdisplay: () => {
            dispatch(display())
        },



        isdeleteall: (delet) => {
            dispatch(deleteall(delet))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Todocode);