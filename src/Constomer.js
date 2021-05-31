import React, {Component} from "react";
import {Table} from "react-bootstrap";

import {Button,ButtonToolbar} from "react-bootstrap";
import {AddEmpModal} from "./AddEmpModal";
import {EditEmpModal} from "./EditEmpModal";

export class Constomer extends Component {

    constructor(props){
        super(props);
        this.state={emps:[], addModalShow:false,editModalShow:false};
    }

    refreshList(){
        const url = 'http://localhost:5000/api/';
        fetch(url+"Constomer")
        .then((response) => response.json())
        .then((data) =>{
            this.setState({emps:data});
        });
    }
    componentDidMount(){
        this.refreshList();
    }

    componentDidUpdate(){
        this.refreshList();
    }
    deleteEmp(empid){
        if(window.confirm('Are you sure?')){
           
            fetch(process.env.REACT_APP_API + "Constomer/" + empid, {
            method:"DELETE",
           headers :{
              Accept:"application/json",
                "Content-Type":"application/json",
              },
            }) ;      
    }
    }
   
    render(){
        const{emps,empid,empname,emplastname,depni,photofilename,doe}=this.state;
        let addModalClose=()=>this.setState({addModalShow:false});
        let editModalClose=()=>this.setState({editModalShow:false});

        return(
            <div >
                <Table className="mt-4"striped bordered hover size="sm">
                   <thead>
                       <tr>
                       <th>ID</th>
                       <th>Name</th>
                       <th>LastName</th>
                       <th>Eventi</th>
                       <th>DOE</th>
                       <th>PhotoofEvent</th>
                       <th>Options</th>
                       </tr>
                   </thead>
                   <tbody>
                   {emps.map((emp)=> (
                       <tr key={emp.ConstomerId}>
                           <td>{emp.ConstomerId}</td>
                           <td>{emp.ConstomerName}</td>
                           <td>{emp.ConstomerLastName}</td>
                           <td>{emp.Eventi}</td>
                           <td>{emp.DateOfEvent}</td>
                           <td>
                  <img
                    alt="not found!"
                    width="70px"
                    height="100px"
                    src={"http://localhost:5000/Photos/" + emp.PhotoFileName}
                  ></img>
                </td>
                
                           <td>
                           <ButtonToolbar>
                           <Button
                      className="mr-2"
                      variant="info"
                      onClick={() =>
                        this.setState({
                          editModalShow: true,
                          empid: emp.ConstomerID,
                          empname: emp.ConstomerName,
                          emplastname: emp.ConstomerLastName,
                          depni: emp.Eventi,
                          photofilename: emp.PhotoFileName,
                          doe: emp.DateOfEvent,
                        })
                      }
                    >
                      Edit
                    </Button>
                        
                        <Button 
                        className="mr-2" 
                        variant="danger"
                        onClick={()=>this.deleteEmp(emp.ConstomerID)}
                        >
                        DELETE
                        </Button>

                        <EditEmpModal 
                        show  ={this.state.editModalShow}
                        onHide={editModalClose}
                        empid={empid}
                        empname={empname}
                        emplastname={emplastname}
                        depni={depni}
                        photofilename={photofilename}
                        doe={doe}
                        />
           </ButtonToolbar>

                           </td>
</tr>
))}
                   </tbody>
                   
                           </Table>

                           <ButtonToolbar>
                           <Button variant='primary'
                       onClick={()=>this.setState({addModalShow:true})}>
                            Add Constomer
                       </Button>
                       <AddEmpModal show={this.state.addModalShow}
                       onHide={addModalClose}/>

                           </ButtonToolbar>
            </div>
        )
    }
}