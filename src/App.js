import React from 'react';

import { Cards, Chart, CountryPicker } from './components';
import style from './App.module.css';
import { fetchData } from './api';

import coronaImage from './image/covid-19 logo.png'

class App extends React.Component {

    state = {
        data: {},
        country: '',
    }

    async componentDidMount() {
        const covidData = await fetchData();
        this.setState({ data: covidData });
    }

    handleCountryChange = async (country) => {
        const fetchedData = await fetchData(country);
        this.setState({ data: fetchedData, country: country });
    }
    render() {
        const { data, country } = this.state;
        return (
            <div className={style.container}>
                <img className={style.image} src={coronaImage} alt="COVID-19"></img>
                <Cards data={data} />
                <CountryPicker handleCountryChange={this.handleCountryChange} />
                <Chart data={data} country={country} />
            </div>
        )
    }
}

export default App;