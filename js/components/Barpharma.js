import React from 'react';
import { connect } from 'react-redux';
import * as user from './Function.js';
@connect(store => {
  return {
    bar_change: store.bar_change
  };
})
export default class Barpharma extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="bar">
        {this.props.bar_change.next_pharma ? (
          <p
            className="bar_num move_first_num_bar"
            onClick={() => user.barChange(1, this.props.bar_change.array_pharma, this.props.bar_change.next_pharma, 'bar_change_pharma', 'pharma_bar_send')}>
            1
          </p>
        ) : (
          ''
        )}
        {this.props.bar_change.next_pharma ? (
          <p
            className="bar_num"
            onClick={() =>
              user.barChange(
                this.props.bar_change.array_pharma[0],
                this.props.bar_change.array_pharma,
                this.props.bar_change.next_pharma,
                'bar_change_pharma',
                'pharma_bar_send'
              )
            }>
            ...
          </p>
        ) : (
          ''
        )}

        <p
          className={
            this.props.bar_change.next_pharma === false
              ? this.props.bar_change.array_pharma[0] === this.props.bar_change.selected_pharma ? 'selected_bar' : 'bar_num'
              : this.props.bar_change.array_pharma[1] === this.props.bar_change.selected_pharma ? 'selected_bar' : 'bar_num'
          }
          onClick={() =>
            this.props.bar_change.next_pharma === false
              ? user.barChange(
                  this.props.bar_change.array_pharma[0],
                  this.props.bar_change.array_pharma,
                  this.props.bar_change.next_pharma,
                  'bar_change_pharma',
                  'pharma_bar_send'
                )
              : user.barChange(
                  this.props.bar_change.array_pharma[1],
                  this.props.bar_change.array_pharma,
                  this.props.bar_change.next_pharma,
                  'bar_change_pharma',
                  'pharma_bar_send'
                )
          }>
          {this.props.bar_change.next_pharma ? this.props.bar_change.array_pharma[1] : this.props.bar_change.array_pharma[0]}
        </p>

        <p
          className={
            this.props.bar_change.next_pharma === false
              ? this.props.bar_change.array_pharma[1] === this.props.bar_change.selected_pharma ? 'selected_bar' : 'bar_num'
              : this.props.bar_change.array_pharma[2] === this.props.bar_change.selected_pharma ? 'selected_bar' : 'bar_num'
          }
          onClick={() =>
            this.props.bar_change.next_pharma === false
              ? user.barChange(
                  this.props.bar_change.array_pharma[1],
                  this.props.bar_change.array_pharma,
                  this.props.bar_change.next_pharma,
                  'bar_change_pharma',
                  'pharma_bar_send'
                )
              : user.barChange(
                  this.props.bar_change.array_pharma[2],
                  this.props.bar_change.array_pharma,
                  this.props.bar_change.next_pharma,
                  'bar_change_pharma',
                  'pharma_bar_send'
                )
          }>
          {this.props.bar_change.next_pharma ? this.props.bar_change.array_pharma[2] : this.props.bar_change.array_pharma[1]}
        </p>

        <p
          className={
            this.props.bar_change.next_pharma === false
              ? this.props.bar_change.array_pharma[2] === this.props.bar_change.selected_pharma ? 'selected_bar' : 'bar_num'
              : this.props.bar_change.array_pharma[3] === this.props.bar_change.selected_pharma ? 'selected_bar' : 'bar_num'
          }
          onClick={() =>
            this.props.bar_change.next_pharma === false
              ? user.barChange(
                  this.props.bar_change.array_pharma[2],
                  this.props.bar_change.array_pharma,
                  this.props.bar_change.next_pharma,
                  'bar_change_pharma',
                  'pharma_bar_send'
                )
              : user.barChange(
                  this.props.bar_change.array_pharma[3],
                  this.props.bar_change.array_pharma,
                  this.props.bar_change.next_pharma,
                  'bar_change_pharma',
                  'pharma_bar_send'
                )
          }>
          {this.props.bar_change.next_pharma ? this.props.bar_change.array_pharma[3] : this.props.bar_change.array_pharma[2]}
        </p>

        <p
          className={
            this.props.bar_change.next_pharma === false
              ? this.props.bar_change.array_pharma[3] === this.props.bar_change.selected_pharma ? 'selected_bar' : 'bar_num'
              : this.props.bar_change.array_pharma[4] === this.props.bar_change.selected_pharma ? 'selected_bar' : 'bar_num'
          }
          onClick={() =>
            this.props.bar_change.next_pharma === false
              ? user.barChange(
                  this.props.bar_change.array_pharma[3],
                  this.props.bar_change.array_pharma,
                  this.props.bar_change.next_pharma,
                  'bar_change_pharma',
                  'pharma_bar_send'
                )
              : user.barChange(
                  this.props.bar_change.array_pharma[4],
                  this.props.bar_change.array_pharma,
                  this.props.bar_change.next_pharma,
                  'bar_change_pharma',
                  'pharma_bar_send'
                )
          }>
          {this.props.bar_change.next_pharma ? this.props.bar_change.array_pharma[4] : this.props.bar_change.array_pharma[3]}
        </p>

        {this.props.bar_change.next_pharma ? (
          <p
            className={
              this.props.bar_change.next_pharma === false
                ? this.props.bar_change.array_pharma[4] === this.props.bar_change.selected_pharma ? 'selected_bar' : 'bar_num'
                : this.props.bar_change.array_pharma[5] === this.props.bar_change.selected_pharma ? 'selected_bar' : 'bar_num'
            }
            onClick={() =>
              user.barChange(
                this.props.bar_change.array_pharma[5],
                this.props.bar_change.array_pharma,
                this.props.bar_change.next_pharma,
                'bar_change_pharma',
                'pharma_bar_send'
              )
            }>
            {this.props.bar_change.array_pharma[5]}
          </p>
        ) : (
          ''
        )}

        <p
          className={
            this.props.bar_change.next_pharma === false
              ? this.props.bar_change.array_pharma[5] === this.props.bar_change.selected_pharma ? 'selected_bar' : 'bar_num'
              : this.props.bar_change.array_pharma[6] === this.props.bar_change.selected_pharma ? 'selected_bar' : 'bar_num'
          }
          onClick={() =>
            this.props.bar_change.next_pharma === false
              ? user.barChange(
                  this.props.bar_change.array_pharma[4],
                  this.props.bar_change.array_pharma,
                  this.props.bar_change.next_pharma,
                  'bar_change_pharma',
                  'pharma_bar_send'
                )
              : user.barChange(
                  this.props.bar_change.array_pharma[6],
                  this.props.bar_change.array_pharma,
                  this.props.bar_change.next_pharma,
                  'bar_change_pharma',
                  'pharma_bar_send'
                )
          }>
          ...
        </p>
      </div>
    );
  }
}
