aimport React, { Component } from "react";
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
      yAxis: [0, 25, 50, 75, 100, 150],
      currentMonth: [],
      lastMonth: [],
      lastThreeMonths: [],
      threeMonthFilter: false,
      lastSixMonths: [],
      lastYear: [],
      data: [
        {
          self: 0,
          month: "january"
        },
        {
          self: 28,
          month: "february"
        },
        {
          self: 68,
          month: "march"
        }
      ]
    };

    this.getCurrentMonthData = this.getCurrentMonthData.bind(this);
    this.getLastMonthData = this.getLastMonthData.bind(this);
    this.getLastThreeMonthsData = this.getLastThreeMonthsData.bind(this);
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
      currentMonth: currentMonthData,
      data: currentMonthData
    });
    console.log(currentMonthData);
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
      lastMonth: lastMonthData,
      data: lastMonthData
    });
  }

  getLastThreeMonthsData() {
    const lastMonthArray = [];
    const secondMonthArray = [];
    const thirdMonthArray = [];
    const totalDataArray = [];
    const firstOfLastMonth = moment()
      .subtract(1, "months")
      .startOf("month");
    const endofLastMonth = moment()
      .subtract(1, "months")
      .endOf("month");
    const firstOfSecondMonth = moment()
      .subtract(2, "months")
      .startOf("month");
    const endofSecondMonth = moment()
      .subtract(2, "months")
      .endOf("month");
    const firstOfThirdMonth = moment()
      .subtract(3, "months")
      .startOf("month");
    const endofThirdMonth = moment()
      .subtract(3, "months")
      .endOf("month");

    const currentDate = moment();

    data
      .filter(item => {
        return (
          new Date(item.date) >= new Date(firstOfLastMonth) &&
          new Date(item.date) <= new Date(endofLastMonth)
        );
      })
      .map(item => lastMonthArray.push(item.self));

    data
      .filter(item => {
        return (
          new Date(item.date) >= new Date(firstOfSecondMonth) &&
          new Date(item.date) <= new Date(endofSecondMonth)
        );
      })
      .map(item => secondMonthArray.push(item.self));

    data
      .filter(item => {
        return (
          new Date(item.date) >= new Date(firstOfThirdMonth) &&
          new Date(item.date) <= new Date(endofThirdMonth)
        );
      })
      .map(item => thirdMonthArray.push(item.self));
    let lastMonthData = lastMonthArray.reduce((a, b) => a + b);
    let secondMonthData = secondMonthArray.reduce((a, b) => a + b);
    let thirdMonthData = thirdMonthArray.reduce((a, b) => a + b);
    totalDataArray.push.apply(totalDataArray, [
      lastMonthData,
      secondMonthData,
      thirdMonthData
    ]);
    console.log(totalDataArray);
    this.setState({
      threeMonthFilter: true,
      data: totalDataArray,
      yAxis: [1, 25, 50, 75, 100, 125, 150]
    });
  }

  updateDateData(event) {
    console.log("this ran");
    if (event.target.value === "currentMonth") {
      this.getCurrentMonthData();
    } else if (event.target.value === "lastMonth") {
      this.getLastMonthData();
    } else if (event.target.value === "lastThreeMonths") {
      this.getLastThreeMonthsData();
    }
  }

  componentDidMount() {
    // this.getCurrentMonthData();
  }

  render() {
    return (
      <>
        {/* <SelectDate>
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
        </SelectDate> */}
        <ResponsiveContainer>
          <LineChart
            data={this.state.data}
            yAxis={this.state.yAxis}
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
            <XAxis dataKey="month" tick={false}>
              <Label
                value="Overall Mental Health"
                offset={-10}
                position="bottom"
              />
            </XAxis>

            <YAxis type="number" domain={[0, 150]} allowDecimals={false} />
          </LineChart>
        </ResponsiveContainer>
      </>
    );
  }
}

export default ChartThreeMonth;
