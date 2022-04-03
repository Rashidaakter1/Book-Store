import React from 'react';
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Legend, Line, LineChart, Pie, PieChart, Tooltip, XAxis, YAxis } from 'recharts';

const Dashboard = () => {
    const data = [
        {
            "month": "Mar",
            "investment": 10000,
            "sell": 24100,
            "revenue": 10401
        },
        {
            "month": "Apr",
            "investment": 20000,
            "sell": 42300,
            "revenue": 24500
        },
        {
            "month": "May",
            "investment": 50000,
            "sell": 72697,
            "revenue": 67010
        },
        {
            "month": "Jun",
            "investment": 50000,
            "sell": 52976,
            "revenue": 40405
        },
        {
            "month": "Jul",
            "investment": 60000,
            "sell": 60160,
            "revenue": 50900
        },
        {
            "month": "Aug",
            "investment": 70000,
            "sell": 67033,
            "revenue": 61000
        }
    ]

    return (
        <div>
            <h1 className='text-5xl mb-10 font-medium text-purple-900 border-2
             rounded-2xl px-4 py-5 bg-purple-200'>DASHBOARD</h1>

            <div className="flex flex-wrap">
            <LineChart width={500} height={250} data={data}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <XAxis dataKey="month" />
                <YAxis></YAxis>
                <Tooltip></Tooltip>
                <Line type="monotone" dataKey="investment" stroke="#8884d8" />
            </LineChart>

            <AreaChart  width={500} height={250} data={data}
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>

                <defs>
                    <linearGradient id="colorSell" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                        <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                        <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                    </linearGradient>
                </defs>

                <XAxis dataKey="month" />
                <YAxis></YAxis>
                <Tooltip></Tooltip>
                <Area type="monotone" dataKey="sell" stroke="#8884d8" fillOpacity={1} fill="url(#colorSell)" />
                <Area type="monotone" dataKey="revenue" stroke="#82ca9d" fillOpacity={1} fill="url(#colorRevenue)" />
            </AreaChart>



            <BarChart className='mt-20' width={500} height={250} data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="sell" fill="#8884d8" />
                <Bar dataKey="investment" fill="#82ca9d" />
            </BarChart>
            </div>


            {/* <PieChart width={730} height={250}>
                <Pie data='sell 'dataKey="value" nameKey="month" cx="50%" cy="50%" outerRadius={50} fill="#8884d8" />
                <Pie data='' dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d" label />
            </PieChart> */}
        </div>
    );
};

export default Dashboard;