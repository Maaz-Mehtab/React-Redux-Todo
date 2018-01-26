import React, { Component } from 'react';
import firebase from 'firebase';

class Addtodo extends Component{
    constructor(props){
        super(props);
        this.state={
            // todo:[{
            //     id:'',
            //     item:''
            // }]
            question:[{
                id:"",
                pollname:"",
                ques:"",
                op1:"",
                op2:"",
                op3:"",
                op4:""}]
              }
          
        
        this.submit=this.submit.bind(this);
        this.add=this.add.bind(this);
        firebase.database().ref('/').child("pollVote").on('child_added', (snap) => {
            var obj = snap.val();
            obj.id = snap.key;
            this.state.question.push(obj)   
        })
            
           

        }
    submit(getval){
        this.setState({
          [getval.target.name]:getval.target.value  
        });
    }
    add(ee){
        let wo={pollname:this.state.pollname, 
            ques:this.state.ques,
             op1:this.state.op1,
            op2:this.state.op2,
        op3:this.state.op3,
        op4:this.state.op4}

        this.setState({
            [ee.target.name]:ee.target.value
        });
        firebase.database().ref('/').child("pollVote").push(wo)
    console.log(this.state.question)
    console.log(wo);

        
    }

    render(){
        console.log(this.state)
        return(
            <div>
                {/* <input type="text" name="item" ref={"text"} onChange={this._onchange} />
                <br/>
                <button  onClick={this.add}>add</button> */}
                 <div className="container">


                <input type="text" name="pollname" placeholder='Enter Poll Name' className="form-control mb-4 col-12" onChange={this.submit}/>

                    <textarea type="text" name="ques" ref="ques" placeholder='Enter question' className="form-control mb-4" onChange={this.submit}/>
                    <div className='container form-inline'>

                        <input type="text" name="op1" placeholder='Enter option 1' className="form-control mb-1 col-6" onChange={this.submit}/>

                        <input type="text" name="op2" placeholder='Enter option 2' className="form-control mb-1 col-6" onChange={this.submit}/>
                        
                        <input type="text" name="op3" placeholder='Enter option 3' className="form-control mb-1 col-6" onChange={this.submit}/>

                        <input type="text" name="op4" placeholder='Enter option 4' className="form-control mb-1 col-6" onChange={this.submit}/>
                       
                        <button className="btn btn-success center-block" onClick={this.add.bind(this)}>Submit</button>
                        
                    </div>
                </div>

                </div>

        )
    }
}
export default (Addtodo);