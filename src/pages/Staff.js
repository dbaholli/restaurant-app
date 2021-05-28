import React, { Component } from 'react';
import '../styles/Menu.css';
import { MenuList } from '../helpers/MenuList';
import MenuItem from '../components/MenuItem';
///
import { Col, Container, Row } from 'reactstrap';
import DataTable from '../components/DataTable';
import RegistrationModal from '../form/RegistrationModal';
import { USERS_API_URL } from '../constants';

// function Staff() {
//     return (
//         <div className="menu">
//             <h1 className="menuTitle">Staff</h1>
            
//         </div>
//     );
// }


class Staff extends Component {
  state = {
    items: []
  }
  componentDidMount() {
    this.getItens();
  }
  getItens = () => {
    fetch(USERS_API_URL)
      .then(res => res.json())
      .then(res => this.setState({ items: res }))
      .catch(err => console.log(err));
  }
  addUserToState = user => {
    this.setState(previous => ({
      items: [...previous.items, user]
    }));
  }
  updateState = (id) => {
    this.getItens();
  }
  deleteItemFromState = id => {
    const updated = this.state.items.filter(item => item.id !== id);
    this.setState({ items: updated })
  }
  render() {
    return <Container style={{ paddingTop: "100px" }}>
      <Row>
        <Col>
        <div className="menu">
        <h1 className="menuTitle">Add Staff</h1>
        </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <DataTable
            items={this.state.items}
            updateState={this.updateState}
            deleteItemFromState={this.deleteItemFromState} />
        </Col>
      </Row>
      <Row>
        <Col>
          <RegistrationModal isNew={true} addUserToState={this.addUserToState} />
        </Col>
      </Row>
    </Container>;
  }
}
export default Staff;
