import React from 'react';

import { Cards, Chart, CountryPicker } from './components';
import style from './App.module.css';
import { fetchData } from './api';

class App extends React.Component {

    state = {
        data: {},
    }

    async componentDidMount() {
        const covidData = await fetchData();
        console.log(covidData);
        this.setState({data: covidData});
    }

    render() {
        const {data} = this.state;
        return (
            <div className={style.container}>
                <Cards data={data}/>
                <CountryPicker />
                <Chart />
            </div>
        )
    }
}

export default App;