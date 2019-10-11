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

export class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      yAxis: [1, 2, 3, 4, 5],
      rangeIsMoreThanThreeMonths: false
    };

    this.updateDateData = this.updateDateData.bind(this);
  }

  getCurrentMonthData() {
    const startOfMonth = moment().startOf("month");
    const today = moment();
    const currentMonthData = data.filter(item => {
      return (
        new Date(item.date) <= new Date(today) &&
        new Date(item.date) >= new Date(startOfMonth)
      );
    });
    this.setState({
      data: currentMonthData,
      yAxis: [1, 2, 3, 4, 5],
      rangeIsMoreThanThreeMonths: false
    });
  }

  getLastMonthData() {
    const firstOfLastMonth = moment()
      .subtract(1, "months")
      .startOf("month");
    const endofLastMonth = moment()
      .subtract(1, "months")
      .endOf("month");
    const lastMonthData = data.filter(item => {
      return (
        new Date(item.date) >= new Date(firstOfLastMonth) &&
        new Date(item.date) <= new Date(endofLastMonth)
      );
    });
    this.setState({
      data: lastMonthData,
      yAxis: [1, 2, 3, 4, 5],
      rangeIsMoreThanThreeMonths: false
    });
  }

  filterByRange(data, range) {
    const startOfRange = moment()
      .subtract(range, "months")
      .startOf("month");
    const endofRange = moment()
      .subtract(range, "months")
      .endOf("month");
    const filterByDateRange = data.filter(item => {
      return (
        new Date(item.date) >= new Date(startOfRange) &&
        new Date(item.date) <= new Date(endofRange)
      );
    });

    let filteredData;
    if (filterByDateRange.length === 0 || filterByDateRange === undefined) {
      return;
    } else {
      filteredData = filterByDateRange
        .map(item => item.self)
        .reduce((a, b) => a + b);
    }

    let result = {
      self: filteredData,
      month: moment(startOfRange).format("MMMM")
    };

    return result;
  }

  getDataByRange(data, range) {
    let filteredData = [];
    for (let i = 0; i < range; i++) {
      if (this.filterByRange(data, i) !== undefined) {
        filteredData.push(this.filterByRange(data, i));
      }
    }
    return filteredData;
  }

  getLastThreeMonthsData() {
    this.setState({
      data: this.getDataByRange(data, 3).reverse(),
      rangeIsMoreThanThreeMonths: true,
      yAxis: ["dataMin", "dataMax"]
    });
  }

  getLastSixMonthsData() {
    this.setState({
      data: this.getDataByRange(data, 6).reverse(),
      rangeIsMoreThanThreeMonths: true,
      yAxis: ["dataMin", "dataMax"]
    });
  }

  getPastYearData() {
    this.setState({
      data: this.getDataByRange(data, 12).reverse(),
      rangeIsMoreThanThreeMonths: true,
      yAxis: ["dataMin", "dataMax"]
    });
  }

  updateDateData(event) {
    if (event.target.value === "currentMonth") {
      this.getCurrentMonthData();
    } else if (event.target.value === "lastMonth") {
      this.getLastMonthData();
    } else if (event.target.value === "lastThreeMonths") {
      this.getLastThreeMonthsData();
    } else if (event.target.value === "lastSixMonths") {
      this.getLastSixMonthsData();
    } else if (event.target.value === "lastYear") {
      this.getPastYearData();
    }
  }

  componentDidMount() {
    this.getCurrentMonthData();
  }

  render() {
    return (
      <>
        <SelectDate>
          <select
            name="selectDate"
            onChange={event => this.updateDateData(event)}
          >
            <option value="currentMonth">Current Month</option>
            <option value="lastMonth">Last Month</option>
            <option value="lastThreeMonths">Last Three Months</option>
            <option value="lastSixMonths">Last Six Months</option>
            <option value="lastYear">Last Year</option>
          </select>
        </SelectDate>
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
