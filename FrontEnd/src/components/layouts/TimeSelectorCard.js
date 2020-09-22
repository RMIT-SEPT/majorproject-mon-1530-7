import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import PropTypes from "prop-types";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { addDays, parse, setHours, setMinutes } from "date-fns";

class TimeSelectorCard extends Component {
  constructor(props) {
    super(props);
    const includeTimes = this.convertTimes();
    this.state = {
      startDate: new Date(),
      endDate: addDays(new Date(), 14),
      selectedDate: null,
      includeTimes: includeTimes,
      timesAvailable: false,
      placeholderMessage: "Click to select",
    };
  }

  convertTimes() {
    let times = [];
    if (this.props.employeeAvailability) {
      this.props.employeeAvailability.forEach((day) => {
        let date = parse(day.date, "yyyy-MM-dd", new Date());
        day.times.forEach((timeslot) => {
          let [hours, minutes] = timeslot.split(":");
          times.push(setMinutes(setHours(date, hours), minutes));
        });
      });
    }

    if (times.length > 0) {
      this.setState({ timesAvailable: true });
    }

    return times;
  }

  componentDidUpdate(prevProps) {
    const employeeAvailabilityChanged =
      JSON.stringify(prevProps.employeeAvailability) !==
      JSON.stringify(this.props.employeeAvailability);

    if (employeeAvailabilityChanged) {
      const newTimes = this.convertTimes();

      this.setState(
        {
          includeTimes: newTimes,
          timesAvailable: newTimes.length > 0,
        },
        () => {
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

  renderDatePicker() {
    if (this.props.shouldShow) {
      return (
        <DatePicker
          className="datePickerContainer"
          selected={this.state.selectedDate}
          onChange={(date) => this.setState({ selectedDate: date })}
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
