import React, { Component } from 'react'
import * as d3 from 'd3';

class SvgIntro extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        // const canvas = d3.select('.canvas');
        // const svg = canvas.append('svg')
        //     .attr('width', 400)
        //     .attr('height', 250);

        // svg.append('circle')
        //     .attr('cx', 100)
        //     .attr('cy', 100)
        //     .attr('r', 50)
        //     .attr('fill', 'blue');

        // svg.append('rect')
        //     .attr('width', 100)
        //     .attr('height', 100)
        //     .attr('x', 110)
        //     .attr('y', 0)
        //     .attr('fill', 'green')
        //     .attr('rx', 15)
        //     .attr('ry', 15);

        // svg.append('line')
        //     .attr('x1', 129)
        //     .attr('x2', 45)
        //     .attr('y1', 100)
        //     .attr('y2', 46)
        //     .attr('stroke', 'gray');

        // svg.append('text')
        //     .text('Hello!')
        //     .attr('text-anchor', 'start')
        //     .attr('fill', 'grey')
        //     .attr('stroke', 'green')
        //     .attr('font-size', 23)
        //     .attr('x', 110)
        //     .attr('y', 80);

        // svg.append('text')
        //     .text('Hello There!')
        //     .attr('text-anchor', 'middle')
        //     .attr('fill', 'grey')
        //     .attr('font-size', 12)
        //     .attr('x', 110)
        //     .attr('y', 30);

        // svg.append('text')
        //     .text('Hello World!')
        //     .attr('text-anchor', 'end')
        //     .attr('fill', 'grey')
        //     .attr('font-size', 12)
        //     .attr('x', 110)
        //     .attr('y', 50);
    }

    render() {
        return (
            <div className="svg-intro">
                <div className="canvas">hello there</div>
            </div>
        )
    }
}

export default SvgIntro;