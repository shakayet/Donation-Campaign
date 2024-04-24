import React, { useState, useEffect } from 'react';
import { PieChart, Pie, Cell, Legend } from 'recharts';

const PieChartComponent = () => {
    const [dataPresent, setDataPresent] = useState(0);
    const [dataAbsent, setDataAbsent] = useState(0);

    useEffect(() => {
        for (let i = 1; i <= 12; i++) {
            // Retrieve data from local storage
            const storedData = localStorage.getItem(i);

            // Check if data is present in local storage
            if (storedData) {
                setDataPresent(prevCount => prevCount + 1);
            } else {
                setDataAbsent(prevCount => prevCount + 1);
            }
        }
        // setDataPresent(dataPresent/2);
        // setDataAbsent(dataAbsent/2);

    }, []);

    const data = [
        {
            name: "My Donation",
            value: Math.round((dataPresent/2)/12 * 100)
        },
        {
            name: "Total Donation",
            value: Math.round((dataAbsent/2)/12 * 100)
        }
    ];

    const colors = ['#36A2EB', '#FF6384'];

    return (
        <div>
            <PieChart width={1230} height={450}>
                <Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={150} label>
                    {
                        data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                        ))
                    }
                </Pie>
                <Legend align="center" verticalAlign="bottom" height={36} />
            </PieChart>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <div style={{ marginRight: "20px" }}>
                    <span style={{ color: colors[0], fontWeight: "bold" }}>My Donation:</span> {data[0].value}%
                </div>
                <div>
                    <span style={{ color: colors[1], fontWeight: "bold" }}>Total Donation:</span> {data[1].value}%
                </div>
            </div>
        </div>
    );
};

export default PieChartComponent;
