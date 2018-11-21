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
                    type="stock"
                    data={['2015-12-25', 512.53, 514.88, 505.69, 507.34],
                ['2015-12-26', 511.83, 514.98, 505.59, 506.23],
                ['2015-12-27', 511.22, 515.30, 505.49, 506.47],
                ['2015-12-28', 510.35, 515.72, 505.23, 505.80],
                ['2015-12-29', 510.53, 515.86, 505.38, 508.25],
                ['2015-12-30', 511.43, 515.98, 505.66, 507.45],
                ['2015-12-31', 511.50, 515.33, 505.99, 507.98],
                ['2016-01-01', 511.32, 514.29, 505.99, 506.37],
                ['2016-01-02', 511.70, 514.87, 506.18, 506.75],
                ['2016-01-03', 512.30, 514.78, 505.87, 508.67],
                ['2016-01-04', 512.50, 514.77, 505.83, 508.35],
                ['2016-01-05', 511.53, 516.18, 505.91, 509.42],
                ['2016-01-06', 511.13, 516.01, 506.00, 509.26],
                ['2016-01-07', 510.93, 516.07, 506.00, 510.99],
                ['2016-01-08', 510.88, 515.93, 505.22, 509.95],
                ['2016-01-09', 509.12, 515.97, 505.15, 510.12],
                ['2016-01-10', 508.53, 516.13, 505.66, 510.42]}
                title="Simple pie chart"
            />
            </div>
        )
    }
}
