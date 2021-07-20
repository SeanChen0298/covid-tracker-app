import React from 'react';

import { Cards, Chart, CountryPicker } from './components';
import style from './App.module.css';
import { fetchData } from './api';

class App extends React.Component {

    state = {
        data: {},
        country: '',
    }

    async componentDidMount() {
        const covidData = await fetchData();
        this.setState({data: covidData});
    }

    handleCountryChange = async (country) =>
    {
        const fetchedData = await fetchData(country);
        this.setState({data: fetchedData});
    }
    render() {
        const {data} = this.state;
        return (
            <div className={style.container}>
                <Cards data={data}/>
                <CountryPicker handleCountryChange={this.handleCountryChange} />
                <Chart />
            </div>
        )
    }
}

export default App;