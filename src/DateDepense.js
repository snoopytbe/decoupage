import React from "react";
import { SingleDatePicker } from "react-dates";
import moment from "moment";
import "moment/min/locales.min";
import "./assets/styles/base.scss";
import i18n from "i18next";

class DateDepense extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      focused: false
    };
  }

  handleChange(date) {
    this.props.onDateChoisieChange(date);
  }

  render() {
    const startDate = this.props.dateChoisie;
    moment.locale(i18n.language);

    return (

        <div className="content">
          {
            <SingleDatePicker
              numberOfMonths={1}
              onDateChange={this.handleChange}
              focused={this.state.focused}
              date={startDate}
              onFocusChange={({ focused }) => this.setState({ focused })}
              id="choixDate"
            />
          }
        </div>

    );
  }
}

export default DateDepense;