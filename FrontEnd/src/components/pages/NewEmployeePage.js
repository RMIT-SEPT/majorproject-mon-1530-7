import React, {Component} from 'react'
import NewEmployeeForm from '../layouts/NewEmployeeForm';
import { Container, Jumbotron, CardDeck, Form, Button} from 'react-bootstrap';

class NewEmployeePage extends Component {
NewEmployeePage
    constructor(props){

        super(props);
        this.state = {
            
            showError:false,
            showSuccess:false
        };

        this.handleSubmit = this.handleSubmit.bind(this); 
    }

    handleSubmit(event){

        if(this.state.showError){
            alert('Invalid Employee Creation: Please input a name and set availability.');
            event.preventDefault();
        }
        else{
            alert('Employee Successfully Added!');
            event.preventDefault();
        }
        
    }

    showSuccessAlert = () =>{

        this.setState({showSuccess:true});
    }

    hideSuccessAlert = () =>{

        this.setState({showSuccess:false})
    }

    showErrorAlert = () =>{

        this.setState({showError:true});
    }

    hideErrorAlert = () =>{

        this.setState({showError:false})
    }

    render() {

        return (
            <Form onSubmit={this.handleSubmit}>
            <Jumbotron id="jumbotron-cus-book-page">
                <h2 className="h2-cus-book-page" class="text-center">Add Employee</h2>
                <Container className="customerBookingPageContainer">
                    <CardDeck>
                        <NewEmployeeForm/>
                    </CardDeck>
                </Container>
                <Container className="makeCusBooking">
                    <Button variant="primary" size="lg" type="submit"
                        onClick={this.showErrorAlert}>
                        Add Employee!
                    </Button>
                </Container>
            </Jumbotron>
            </Form>
        )
    }
}

export default NewEmployeePage;
