/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@material-ui/core';

export default class Queries extends Component {
  static propTypes = {
    queries: PropTypes.array.isRequired,
  };

  // eslint-disable-next-line class-methods-use-this
  format = value => {
    const number = value.toFixed(2).split('.');
    number[0] = `R$ ${number[0].split(/(?=(?:...)*$)/).join('.')}`;
    return number.join(',');
  };

  render() {
    const { queries } = this.props;
    return (
      <Paper
        style={{
          width: '100%',
          marginTop: 50,
          overflowX: 'auto',
          marginBottom: 20,
        }}
      >
        <Table style={{ minWidth: 650 }}>
          <TableHead>
            <TableRow>
              <TableCell align="center">Origem</TableCell>
              <TableCell align="center">Destino</TableCell>
              <TableCell align="center">Tempo</TableCell>
              <TableCell align="center">Plano FaleMais</TableCell>
              <TableCell align="center">Com FaleMais</TableCell>
              <TableCell align="center">Sem FaleMais</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {queries.map(query => (
              <TableRow
                key={
                  query.source + query.destiny + query.minutes + query.planName
                }
              >
                <TableCell align="center">{query.source}</TableCell>
                <TableCell align="center">{query.destiny}</TableCell>
                <TableCell align="center">{query.minutes}</TableCell>
                <TableCell align="center">{query.planName}</TableCell>
                <TableCell align="center">
                  {this.format(query.withPlan)}
                </TableCell>
                <TableCell align="center">
                  {this.format(query.noPlan)}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    );
  }
}
