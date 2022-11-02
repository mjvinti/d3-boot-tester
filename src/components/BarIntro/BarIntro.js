import React, { Component } from 'react';
import * as d3 from 'd3';

class BarIntro extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataArray: [
                { width: 25, height: 4, fill: 'pink' },
                { width: 25, height: 14, fill: 'purple' },
                { width: 25, height: 44, fill: 'orange' },
                { width: 25, height: 124, fill: 'green' },
                { width: 25, height: 12, fill: 'grey' },
                { width: 25, height: 32, fill: 'red' }
            ]
        };
    }

    componentDidMount() {
        const { dataArray } = this.state;
        const canvas = d3.select('.bar-intro')
        const svg = canvas.append('svg')
                .attr('width', 600)
                .attr('height', 600);
        const rect = svg.selectAll('rect');
        rect.data(dataArray)
            .enter().append('rect')
            .attr('width', 24)
            .attr('height', (d) => d.height * 2)
            .attr('fill', (d) => d.fill)
            .attr('x', (_, i) => i * 25)
            .attr('y', (d) => 100 - (d.height * 2));
    }

    render() {
        return (
            <div className="bar-intro" />
        );
    }
}

export default BarIntro;