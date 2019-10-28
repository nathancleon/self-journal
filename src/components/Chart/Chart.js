import React, { Component } from "react";
import { colors } from "../../globalStyles";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  Label,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis
} from "recharts";
import DateSelectOptions from "./DateSelectOptions";

export class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      yAxis: [1, 2, 3, 4, 5],
      rangeIsMoreThanThreeMonths: false
    };
    this.updateChart = this.updateChart.bind(this);
  }

  updateChart(newState) {
    this.setState({
      data: newState.data,
      yAxis: newState.yAxis,
      rangeIsMoreThanThreeMonths: newState.rangeIsMoreThanThreeMonths
    });
    // console.log(newState);
  }

  render() {
    return (
      <>
        <DateSelectOptions updateChart={this.updateChart} />
        <ResponsiveContainer>
          <LineChart
            data={this.state.data}
            yAxis={this.state.yAxis}
            margin={{ top: 10, right: 0, bottom: 40, left: 0 }}
          >
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            {this.state.rangeIsMoreThanThreeMonths ? (
              <XAxis dataKey="month" tick={false}>
                <Label
                  value="Overall Mental Health (example data)"
                  offset={-10}
                  position="bottom"
                />
              </XAxis>
            ) : (
              <XAxis dataKey="date" tick={false}>
                <Label
                  value="Overall Mental Health (example data)"
                  offset={-10}
                  position="bottom"
                />
              </XAxis>
            )}

            <YAxis domain={this.state.yAxis} allowDecimals={false} />
            <Tooltip
              viewBox={{ x: 0, y: 0, width: 10, height: 10 }}
              content={<CustomTooltip />}
            />
            <Line
              type="monotone"
              stroke={colors.main}
              dataKey="self"
              activeDot={{ r: 8 }}
              strokeWidth={3}
              isAnimationActive={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </>
    );
  }
}

const CustomTooltip = ({ active, payload, label }) => {
  if (active) {
    return (
      <div>
        <p>{`${label}`}</p>
        <p>{`score: ${payload[0].value}`}</p>
      </div>
    );
  }

  return null;
};

export default Chart;
