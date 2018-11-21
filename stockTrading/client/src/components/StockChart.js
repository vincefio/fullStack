import React, { Component } from 'react'
import AnyChart from 'anychart-react'
import anychart from 'anychart'

export default class StockChart extends Component {
    render() {
        var msftDataTable = anychart.data.table();
        msftDataTable.addData(window.get_msft_daily_short_data());
        var orclDataTable = anychart.data.table();
        orclDataTable.addData(window.get_orcl_daily_short_data());
        var cscoDataTable = anychart.data.table();
        cscoDataTable.addData(window.get_csco_daily_short_data());
        var ibmDataTable = anychart.data.table();
        ibmDataTable.addData(window.get_ibm_daily_short_data());
        var chart = anychart.stock();
        var firstPlot = chart.plot(0);
        firstPlot.area(msftDataTable.mapAs({ 'value': 4 })).name('MSFT');
        var secondPlot = chart.plot(1);
        secondPlot.splineArea(orclDataTable.mapAs({ 'value': 4 })).fill('#1976d2 0.65').stroke('1.5 #1976d2').name('ORCL');
        var thirdPlot = chart.plot(2);
        thirdPlot.stepArea(cscoDataTable.mapAs({ 'value': 4 })).fill('#ef6c00 0.65').stroke('1.5 #ef6c00').name('CSCO');
        var forthPlot = chart.plot(3);
        forthPlot.line(msftDataTable.mapAs({ 'value': 4 })).name('MSFT').tooltip(null);
        forthPlot.spline(orclDataTable.mapAs({ 'value': 4 })).name('ORCL').tooltip(null);
        forthPlot.stepLine(cscoDataTable.mapAs({ 'value': 4 })).name('CSCO').tooltip(null);
        chart.scroller().area(msftDataTable.mapAs({ 'value': 4 }));
        chart.selectRange('2005-01-03', '2005-11-20');

        return (
            <div>
                <AnyChart
                    width={800}
                    height={600}
                    instance={chart}
                    title="Stock demo"
                />
            </div>
        )
    }
}
