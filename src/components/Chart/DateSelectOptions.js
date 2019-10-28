import React, { Component } from "react";
import moment from "moment";
import { data } from "./data";
import { SelectDate } from "./ChartStyles";

class DateSelectOptions extends Component {
  constructor(props) {
    super(props);
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
    let newState = {
      data: currentMonthData,
      yAxis: [1, 2, 3, 4, 5],
      rangeIsMoreThanThreeMonths: false
    };
    return newState;
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
    let newState = {
      data: lastMonthData,
      yAxis: [1, 2, 3, 4, 5],
      rangeIsMoreThanThreeMonths: false
    };
    return newState;
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
    let newState = {
      data: this.getDataByRange(data, 3).reverse(),
      rangeIsMoreThanThreeMonths: true,
      yAxis: ["dataMin", "dataMax"]
    };
    return newState;
  }

  getLastSixMonthsData() {
    let newState = {
      data: this.getDataByRange(data, 6).reverse(),
      rangeIsMoreThanThreeMonths: true,
      yAxis: ["dataMin", "dataMax"]
    };
    return newState;
  }

  getPastYearData() {
    let newState = {
      data: this.getDataByRange(data, 12).reverse(),
      rangeIsMoreThanThreeMonths: true,
      yAxis: ["dataMin", "dataMax"]
    };
    return newState;
  }

  getDateData(event) {
    if (event.target.value === "currentMonth") {
      this.props.updateChart(this.getCurrentMonthData());
    } else if (event.target.value === "lastMonth") {
      this.props.updateChart(this.getLastMonthData());
    } else if (event.target.value === "lastThreeMonths") {
      this.props.updateChart(this.getLastThreeMonthsData());
    } else if (event.target.value === "lastSixMonths") {
      this.props.updateChart(this.getLastSixMonthsData());
    } else if (event.target.value === "lastYear") {
      this.props.updateChart(this.getPastYearData());
    }
  }

  componentDidMount() {
    this.props.updateChart(this.getCurrentMonthData());
  }

  render() {
    return (
      <SelectDate>
        <select name="selectDate" onChange={event => this.getDateData(event)}>
          <option value="currentMonth">Current Month</option>
          <option value="lastMonth">Last Month</option>
          <option value="lastThreeMonths">Last Three Months</option>
          <option value="lastSixMonths">Last Six Months</option>
          <option value="lastYear">Last Year</option>
        </select>
      </SelectDate>
    );
  }
}

export default DateSelectOptions;
