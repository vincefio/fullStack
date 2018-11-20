import React, { Component } from 'react'
import AnyChart from 'anychart-react'

export default class StockChart extends Component {
    render() {

        return (
            <div>
                <AnyChart
                    type="pie"
                    data={[1, 2, 3, 4]}
                    title="Simple pie chart"
                />
            </div>
        )
    }
}
