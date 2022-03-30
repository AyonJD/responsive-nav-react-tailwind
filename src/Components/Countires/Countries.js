import React, { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, AreaChart, CartesianGrid, Area } from 'recharts';

const Countries = () => {
    const [countries, setCountries] = useState([])
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])
    const newCountryArr = [...countries];
    const countryArrData = [];
    newCountryArr.forEach((country, index) => {
        countryArrData[index] = {name : country.name.common, area: country.area, population: country.population};
    })
    console.log(countryArrData);
    return (
        <div className='m-5'>
            <h1 className='text-4xl p-5'>Simple Line Chart</h1>
            <LineChart width={1200} height={600} data = {countryArrData}>
                <Line type="monotone" dataKey="area" stroke="#00FF00" activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="population" stroke="#FF0000" />
                <XAxis dataKey="name" />
                <YAxis className='pl-4 w-1/3'></YAxis>
                <Tooltip></Tooltip>
                <Legend />
            </LineChart>
            <h1 className='text-4xl p-5 mt-10'>Simple Area Chart</h1>
            <div>
                <AreaChart
                    width={1200}
                    height={600}
                    data={countryArrData}
                    margin={{
                        top: 10,
                        right: 30,
                        left: 0,
                        bottom: 0,
                    }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Area type="monotone" dataKey="area" stackId="1" stroke="#8884d8" fill="#8884d8" />
                    <Area type="monotone" dataKey="population" stackId="1" stroke="#82ca9d" fill="#00FF00" />
                </AreaChart>
            </div>
        </div>
    );
};

export default Countries;