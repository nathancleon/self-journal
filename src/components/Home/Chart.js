import React, { Component } from "react";
import moment from "moment";
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
import { data } from "./data";
import { SelectDate } from "./HomeStyles";

const yAxis = [1, 2, 3, 4, 5];

export class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentMonth: [],
      lastMonth: [],
      lastThreeMonths: [],
      lastSixMonths: [],
      lastYear: []
    };
  }

  componentDidMount() {
    const startOfMonth = moment().startOf("month");
    const today = moment();
    const currentMonthData = data.filter(item => {
      return (
        new Date(item.date) <= new Date(today) &&
        new Date(item.date) >= new Date(startOfMonth)
      );
    });
    this.setState({
      currentMonth: currentMonthData
    });
  }

  render() {
    return (
      <>
        <SelectDate>
          <select>
            <option value="CurrentMonth">Current Month</option>
            <option value="LastMonth">Last Month</option>
            <option value="PastThreeMonths">Past Three Months</option>
            <option value="PastSixMonths">Past Six Months</option>
            <option value="PastYear">Past Year</option>
          </select>
        </SelectDate>
        <ResponsiveContainer>
          <LineChart
            data={this.state.currentMonth}
            yAxis={yAxis}
            margin={{ top: 10, right: 0, bottom: 40, left: 0 }}
          >
            <Line
              type="monotone"
              stroke={colors.main}
              dataKey="self"
              activeDot={{ r: 8 }}
              strokeWidth={3}
              isAnimationActive={false}
            />
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <Tooltip viewBox={{ x: 0, y: 0, width: 10, height: 10 }} />
            <XAxis dataKey="date" tick={false}>
              <Label
                value="Overall Mental Health"
                offset={-10}
                position="bottom"
              />
            </XAxis>
            <YAxis type="number" domain={yAxis} allowDecimals={false} />
          </LineChart>
        </ResponsiveContainer>
      </>
    );
  }
}

export default Chart;
