import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import PropTypes from "prop-types";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { addDays, parse, format, setHours, setMinutes } from "date-fns";

class TimeSelectorCard extends Component {
  constructor(props) {
    super(props);
    const employeeTimes = this.convertTimes();
    this.state = {
      startDate: new Date(),
      endDate: addDays(new Date(), 13),
      selectedDate: null,
      employeeTimes: employeeTimes,
      includeTimes: [],
      timesAvailable: false,
      placeholderMessage: "Click to select",
    };

    this.handleChange = this.handleChange.bind(this);
  }

  convertTimes() {
    let availability = {};
    if (this.props.employeeAvailability) {
      this.props.employeeAvailability.forEach((day) => {
        let times = [];
        let date = parse(day.date, "yyyy-MM-dd", new Date());
        day.times.forEach((timeslot) => {
          let [hours, minutes] = timeslot.split(":");
          times.push(setMinutes(setHours(date, hours), minutes));
        });
        if (times.length > 0) {
          availability[day.date] = times;
        }
      });
    }

    return availability;
  }

  setTimes() {
    // Date picker component defaults to today, so we should as well
    let date = this.state.selectedDate || new Date();

    this.setState({
      includeTimes: this.state.employeeTimes[format(date, "yyyy-MM-dd")],
    });
  }

  componentDidUpdate(prevProps) {
    const employeeAvailabilityChanged =
      JSON.stringify(prevProps.employeeAvailability) !==
      JSON.stringify(this.props.employeeAvailability);

    if (employeeAvailabilityChanged) {
      const newTimes = this.convertTimes();

      this.setState(
        {
          employeeTimes: newTimes,
          timesAvailable: Object.keys(newTimes).length > 0,
        },
        () => {
          this.setTimes();
          this.setPlaceholderMessage();
        }
      );
    }
  }

  setPlaceholderMessage() {
    let message;
    if (this.state.timesAvailable) {
      message = "Click to select";
    } else {
      message = "No times available";
    }

    this.setState({ placeholderMessage: message });
  }

  handleChange(datetime) {
    this.setState({ selectedDate: datetime }, () => this.setTimes());
    this.props.onSelect(datetime);
  }

  renderDatePicker() {
    if (this.props.shouldShow) {
      return (
        <DatePicker
          className="datePickerContainer"
          selected={this.state.selectedDate}
          onChange={this.handleChange}
          showTimeSelect
          timeFormat="HH:mm"
          timeIntervals={30}
          minDate={this.state.startDate}
          maxDate={this.state.endDate}
          placeholderText={this.state.placeholderMessage}
          includeTimes={this.state.includeTimes}
          dateFormat="MMMM d, yyyy h:mm aa"
          disabled={!this.state.timesAvailable}
        />
      );
    } else {
      return <p>Select a service and employee</p>;
    }
  }

  render() {
    return (
      <Card
        className="shadow p-3 mb-5 bg-white rounded"
        border="light"
        style={{ width: "68rem" }}
      >
        <Card.Body>
          <Card.Title>Select a time</Card.Title>
          <br />
          {this.renderDatePicker()}
        </Card.Body>
      </Card>
    );
  }
}

TimeSelectorCard.propTypes = {
  employeeAvailability: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.string,
      times: PropTypes.arrayOf(PropTypes.string),
    })
  ),
  shouldShow: PropTypes.bool,
};

export default TimeSelectorCard;
