import React from 'react';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
import { USERS_API_URL } from '../../constants';
class RegistrationForm extends React.Component {
    state = {
        id: 0,
        name: '',
        document: '',
        email: '',
        phone: ''
    }
    componentDidMount() {
        if (this.props.user) {
            const { id, name, document, email, phone } = this.props.user
            this.setState({ id, name, document, email, phone});
        }
    }
}