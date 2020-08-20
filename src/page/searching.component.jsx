import React from 'react';

import uuid from 'react-uuid';

import { Table, SearchingContainerr } from './searching.styles';

import FormInput from '../components/form-input/form-input.component';

class Searching extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [],
            Name: '',
            PriceFrom: '',
            PriceTo: '',
            Location: ''
        };
    }

    componentDidMount() {
        fetch('https://raw.githubusercontent.com/mdn/fetch-examples/master/fetch-json/products.json')
        .then(response => response.json())
        .then(products => this.setState({ data: products.products }));
    };

    handleChange = event => {
        const { value, name } = event.target;

        this.setState({ [name]: value });
    };

    filtrowanie = () => {

    const { data } = this.state;

    const result = data.filter( item => {
        var test1 = false;
        var test2 = false;
        var test3 = false;

        if((!this.state.Name && this.state.Name.length >= 0) || (item.Name.indexOf(this.state.Name) !== -1)) {
            test1 = true;
        }
        if((!this.state.PriceFrom && this.state.PriceFrom >= 0) || (item.Price >= this.state.PriceFrom)) {
            test2 = true;
        }
        if((!this.state.PriceTo && this.state.PriceTo >= 0) || (item.Price <= this.state.PriceTo)) {
            test3 = true;
        }
        if(test1 && test2 && test3) {
            return item
        }
    });
        this.setState({
            data: result
        });
        console.log(result);
    };

    render(){
        const { data } = this.state; 
        this.filtrowanie();
        return(
            <div>
                <table style={Table}>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Location</th>
                        </tr>
                    </thead>
                    <tbody>
                    {    
                        data.map( item => 
                            <tr 
                                data-nazwa={item.Name}
                                data-cena={item.Price}
                                data-location={item.Location} 
                                key={uuid()}>
                                <td>{item.Name}</td>
                                <td>{item.Price}</td>
                                <td>{item.Location}</td>
                            </tr>
                        )
                    }
                    </tbody>
                </table>
                <div style={SearchingContainerr}>
                <FormInput type='text' label='Name:' name='Name' handleChange={this.handleChange} value={this.state.Name} />
                <FormInput type='text' label='Price from:' name='PriceFrom' handleChange={this.handleChange} value={this.state.PriceFrom} />
                <FormInput type='text' label='Price to:' name='PriceTo' handleChange={this.handleChange} value={this.state.PriceTo} />
                <FormInput type='text' label='Location:' name='Location' handleChange={this.handleChange} value={this.state.Location} />
                </div>
            </div>
        );
    };
};

export default Searching;