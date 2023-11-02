import React, { useEffect, useRef } from 'react';
import { Chart } from 'chart.js';


function SmoothGraph() {
    const chartRef = useRef(null);

    useEffect(() => {
        // Define your graph data and options here
        const data = {
            labels: ['Label 1', 'Label 2', 'Label 3', 'Label 4', 'Label 5'],
            datasets: [
                {
                    label: 'Smooth Graph',
                    data: [5, 10, 15, 10, 20],
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 2,
                    fill: true, // To create a smooth line graph
                    tension: 0.4, // Adjust tension for smoother lines
                },
            ],
        };

        const options = {
            scales: {
                y: {
                    beginAtZero: true,
                },
            },
        };

        // Create the chart inside the specified <div>
        const ctx = chartRef.current.getContext('2d');
        new Chart(ctx, {
            type: 'line',
            data: data,
            options: options,
        });
    }, []);

    return (
        <div className="visitors-container">
            <canvas ref={chartRef} width={400} height={200}></canvas>
        </div>
    );
}

export default SmoothGraph;
