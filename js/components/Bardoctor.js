import React from 'react';
import { connect } from 'react-redux';
import * as user from './Function.js';
@connect(store => {
  return {
    bar_change: store.bar_change
  };
})
export default class Bardoctor extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this._isMounted = true;
    window.onpopstate = () => {
      if (this._isMounted) {
        window.scrollTo(0, 0);
        // history.state.num ===   this.props.bar_change.page_num_doctor
        // you can also compare with window.location.href
        //user.barChangeCheck(this.props.bar_change.array_doctor[1], this.props.bar_change.array_doctor, this.props.bar_change.next_doctor)
        if (history.state.num == '1') {
          console.log('THIS IS NEXT doctor VALUE: ' + this.props.bar_change.next_doctor);
          // 0
          //0,1   1
          //1,2   2
          //2,3   3
          //3,4   4
          //5     ...
          //4,6
          this.callButtonData(0, 1, 'stop');
        }
        if (history.state.num == '2') {
          console.log('THIS IS NEXT doctor VALUE: ' + this.props.bar_change.next_doctor);
          this.callButtonData(1, 2, 'stop');
        }
        if (history.state.num == '3') {
          console.log('THIS IS NEXT doctor VALUE: ' + this.props.bar_change.next_doctor);

          this.callButtonData(2, 3, 'stop');
        }
        if (history.state.num == '4') {
          console.log('THIS IS NEXT doctor VALUE: ' + this.props.bar_change.next_doctor);
          console.log('should have gone here');
          this.callButtonData(3, 4, 'stop');
        }
        // The rest
        //------------------------------------------

        if (user.checkNumber(history.state.num, 5, 1300)) {
          console.log('THIS IS NEXT doctor VALUE: ' + this.props.bar_change.next_doctor);
          this.callButtonData(0, 1, 'stop');
        }
        if (user.checkNumber(history.state.num, 6, 1300)) {
          console.log('THIS IS NEXT doctor VALUE: ' + this.props.bar_change.next_doctor);
          this.callButtonData(1, 2, 'stop');
        }
        if (user.checkNumber(history.state.num, 7, 1300)) {
          console.log('THIS IS NEXT doctor VALUE: ' + this.props.bar_change.next_doctor);
          this.callButtonData(2, 3, 'stop');
        }
        if (user.checkNumber(history.state.num, 8, 1300)) {
          console.log('THIS IS NEXT doctor VALUE: ' + this.props.bar_change.next_doctor);
          console.log('went here');
          this.callButtonData(3, 4, 'stop');
        }
        if (user.checkNumber(history.state.num, 9, 1300)) {
          console.log('THIS IS NEXT doctor VALUE: ' + this.props.bar_change.next_doctor);
          user.barChange(
            this.props.bar_change.array_doctor[5],
            this.props.bar_change.array_doctor,
            this.props.bar_change.next_doctor,
            'bar_change_doctor',
            'doctor_bar_send',
            'stop'
          );
        }
      }
    };
  }
  callButtonData(index_1, index_2, stop) {
    this.props.bar_change.next_doctor === false
      ? user.barChange(
          this.props.bar_change.array_doctor[index_1],
          this.props.bar_change.array_doctor,
          this.props.bar_change.next_doctor,
          'bar_change_doctor',
          'doctor_bar_send',
          stop
        )
      : user.barChange(
          this.props.bar_change.array_doctor[index_2],
          this.props.bar_change.array_doctor,
          this.props.bar_change.next_doctor,
          'bar_change_doctor',
          'doctor_bar_send',
          stop
        );
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div className="bar">
        {this.props.bar_change.next_doctor ? (
          <p
            className="bar_num move_first_num_bar"
            onClick={() => user.barChange(1, this.props.bar_change.array_doctor, this.props.bar_change.next_doctor, 'bar_change_doctor', 'doctor_bar_send')}>
            {' '}
            1{' '}
          </p>
        ) : (
          ''
        )}
        {this.props.bar_change.next_doctor ? (
          <p
            className="bar_num"
            onClick={() => {
              user.barChange(
                this.props.bar_change.array_doctor[0],
                this.props.bar_change.array_doctor,
                this.props.bar_change.next_doctor,
                'bar_change_doctor',
                'doctor_bar_send'
              );
            }}>
            {' '}
            ...{' '}
          </p>
        ) : (
          ''
        )}
        <p
          className={
            this.props.bar_change.next_doctor === false
              ? this.props.bar_change.array_doctor[0] === this.props.bar_change.selected_doctor ? 'selected_bar' : 'bar_num'
              : this.props.bar_change.array_doctor[1] === this.props.bar_change.selected_doctor ? 'selected_bar' : 'bar_num'
          }
          onClick={() => {
            this.callButtonData(0, 1);
          }}>
          {this.props.bar_change.next_doctor ? this.props.bar_change.array_doctor[1] : this.props.bar_change.array_doctor[0]}{' '}
        </p>
        <p
          className={
            this.props.bar_change.next_doctor === false
              ? this.props.bar_change.array_doctor[1] === this.props.bar_change.selected_doctor ? 'selected_bar' : 'bar_num'
              : this.props.bar_change.array_doctor[2] === this.props.bar_change.selected_doctor ? 'selected_bar' : 'bar_num'
          }
          onClick={() => {
            this.callButtonData(1, 2);
          }}>
          {this.props.bar_change.next_doctor ? this.props.bar_change.array_doctor[2] : this.props.bar_change.array_doctor[1]}{' '}
        </p>
        <p
          className={
            this.props.bar_change.next_doctor === false
              ? this.props.bar_change.array_doctor[2] === this.props.bar_change.selected_doctor ? 'selected_bar' : 'bar_num'
              : this.props.bar_change.array_doctor[3] === this.props.bar_change.selected_doctor ? 'selected_bar' : 'bar_num'
          }
          onClick={() => {
            this.callButtonData(2, 3);
          }}>
          {this.props.bar_change.next_doctor ? this.props.bar_change.array_doctor[3] : this.props.bar_change.array_doctor[2]}{' '}
        </p>
        <p
          className={
            this.props.bar_change.next_doctor === false
              ? this.props.bar_change.array_doctor[3] === this.props.bar_change.selected_doctor ? 'selected_bar' : 'bar_num'
              : this.props.bar_change.array_doctor[4] === this.props.bar_change.selected_doctor ? 'selected_bar' : 'bar_num'
          }
          onClick={() => {
            this.callButtonData(3, 4);
          }}>
          {this.props.bar_change.next_doctor ? this.props.bar_change.array_doctor[4] : this.props.bar_change.array_doctor[3]}{' '}
        </p>
        {this.props.bar_change.next_doctor ? (
          <p
            className={
              this.props.bar_change.next_doctor === false
                ? this.props.bar_change.array_doctor[4] === this.props.bar_change.selected_doctor ? 'selected_bar' : 'bar_num'
                : this.props.bar_change.array_doctor[5] === this.props.bar_change.selected_doctor ? 'selected_bar' : 'bar_num'
            }
            onClick={() => {
              user.barChange(
                this.props.bar_change.array_doctor[5],
                this.props.bar_change.array_doctor,
                this.props.bar_change.next_doctor,
                'bar_change_doctor',
                'doctor_bar_send'
              );
            }}>
            {this.props.bar_change.array_doctor[5]}{' '}
          </p>
        ) : (
          ''
        )}
        <p
          className={
            this.props.bar_change.next_doctor === false
              ? this.props.bar_change.array_doctor[5] === this.props.bar_change.selected_doctor ? 'selected_bar' : 'bar_num'
              : this.props.bar_change.array_doctor[6] === this.props.bar_change.selected_doctor ? 'selected_bar' : 'bar_num'
          }
          onClick={() => {
            this.callButtonData(4, 6);
          }}>
          {' '}
          ...
        </p>{' '}
      </div>
    );
  }
}
