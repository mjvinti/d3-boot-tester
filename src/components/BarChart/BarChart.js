import React, { Component } from 'react';
import * as d3 from 'd3';

const WIDTH = 600;
const HEIGHT = 600;
const MARGIN = { top: 20, right: 20, bottom: 70, left: 70 };
const GRAPH_WIDTH = 600 - MARGIN.left - MARGIN.right;
const GRAPH_HEIGHT = 600 - MARGIN.top - MARGIN.bottom;

class BarChart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            yScale: d3.scaleLinear()
                .domain([0, d3.max(this.props.data, d => d.height)])
                .range([GRAPH_HEIGHT, 0]),
            xScale: d3.scaleBand()
                .domain(this.props.data.map((item) => item.fill))
                .range([0, GRAPH_WIDTH])
                .paddingInner(0.1)
                .paddingOuter(0.2)
        }
    }

    componentDidMount() {
        const { yScale, xScale } = this.state; 
        const { data } = this.props;
        const graph = d3.select('g');
        const xAxisGroup = graph.append('g')
            .attr('transform', `translate(0, ${GRAPH_HEIGHT})`);
        const yAxisGroup = graph.append('g');
        const rect = graph.selectAll('rect');
        const xAxis = d3.axisBottom(xScale);
        const yAxis = d3.axisLeft(yScale);
        xAxisGroup.call(xAxis);
        yAxisGroup.call(yAxis);
        
        rect.data(data)
            .enter().append('rect')
            .attr('width', xScale.bandwidth)
            .attr('height', (d) => GRAPH_HEIGHT - yScale(d.height))
            .attr('fill', (d) => d.fill)
            .attr('x', (d) => xScale(d.fill))
            .attr('y', (d) => yScale(d.height))
            .on('mouseover', (_, i, n) => d3.select(n[i])
                .transition()
                .duration(100)
                .style('opacity', 0.7)
            )
            .on('mouseout', (_, i, n) => d3.select(n[i])
                .transition()
                .duration(100)
                .style('opacity', 1)
            )
    }

    render() {
        return (
            <div className="bar-chart">
                <svg
                    version="1.1"
                    baseProfile="full"
                    width={WIDTH}
                    height={HEIGHT}
                    xmlns="http://www.w3.org/2000/svg">
                        <g
                            width={GRAPH_WIDTH}
                            height={GRAPH_HEIGHT}
                            transform={`translate(${MARGIN.left}, ${MARGIN.top})`}>
                        </g>
                </svg>
            </div>
        );
    }
}

export default BarChart;