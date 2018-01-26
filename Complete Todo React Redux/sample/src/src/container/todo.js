import React, { Component } from 'react';

export class Todo extends Component{
    render(){
        const prop=this.props;
        return (
            
            <div>
                <div className="container-fluid mt-3">
                    <div className="row">
                    <div className="col-sm-3 "> </div>
                    
                    <div className="col-sm-6">
                    <input className="container form-control" type="text" defaultValue={prop.state} name="name" ref={name} onChange={prop._onchange} placeholder="Enter todo Item"/>
                
                <br/>
                {/* <input type="text" refs={'text'}/> */}
                <div className="container">
                <div className="row">
                
                <div className="col-sm-5">
                <button className="container btn btn-success mt-1" onClick={prop.add}>Add</button>
                    </div>
                <div className="col-sm-2"></div>
                <div className="col-sm-5">
                <button className="container btn btn-primary  mt-1" onClick={prop.deleteall} >Delete All</button>
                </div>
                </div>
                </div>
                
                
                </div>
                <div className="col-sm-3">
                        
                    </div>
                </div>
                </div>
            <br/>
            <div >


                    
                </div>



            </div>



          
        )
    }
}