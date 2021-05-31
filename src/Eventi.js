import React, {Component} from 'react';
import {Table} from 'react-bootstrap';

import {Button,ButtonToolbar} from 'react-bootstrap';
import {AddDepModal} from './AddDepModal';
import {EditDepModal} from './EditDepModal';

export class Eventi extends Component {

    constructor(props){
        super(props);
        this.state={deps:[], addModalShow:false,editModalShow:false}
    }

    refreshList(){
        let url = 'http://localhost:5000/api/';
        fetch(url+'Eventi')
        .then(response=>response.json())
        .then(data=>{
            this.setState({deps:data});
        });
    }
    componentDidMount(){
        this.refreshList();
    }

    componentDidUpdate(){
        this.refreshList();
    }
    deleteDep(depid){
        if(window.confirm('Are you sure?')){
            let url = 'http://localhost:5000/api/';
            fetch(url+'Eventi/'+depid,{
            method:"DELETE",
           headers :{
                'Accept':'application/json',
                'Content-Type':'application/json'}
            })       
    }
    }
   
    render(){
        const{deps,depid,depname}=this.state;
        let addModalClose=()=>this.setState({addModalShow:false});
        let editModalClose=()=>this.setState({editModalShow:false});

        return(
            <div >
                <Table className="mt-4"striped bordered hover size="sm">
                   <thead>
                       <tr>
                       <th>EventiId</th>
                       <th>EventiName</th>
                       <th>Options</th>
                       </tr>
                   </thead>
                   <tbody>
                   {deps.map(dep=>
                       <tr key={dep.EventiId}>
                           <td>{dep.EventiId}</td>
                           <td>{dep.EventiName}</td>
                           <td>
                           <ButtonToolbar>
                        <Button className="mr-2" variant="info"
                        onClick={()=>this.setState({editModalShow:true,depid:dep.EventiId,depname:dep.EventiName})}>
                        Edit
                        </Button>
                        <Button className="mr-2" variant="danger"
                        onClick={()=>this.deleteDep(dep.EventiId)}>
                        DELETE
                        </Button>

                        <EditDepModal show  ={this.state.editModalShow}
                        onHide={editModalClose}
                        depid={depid}
                        depname={depname}/>
           </ButtonToolbar>

                           </td>
</tr>)}
                   </tbody>
                   
                           </Table>

                           <ButtonToolbar>
                           <Button variant='primary'
                       onClick={()=>this.setState({addModalShow:true})}>
                            Add Event
                       </Button>
                       <AddDepModal show={this.state.addModalShow}
                       onHide={addModalClose}/>

                           </ButtonToolbar>
            </div>
        )
    }
}