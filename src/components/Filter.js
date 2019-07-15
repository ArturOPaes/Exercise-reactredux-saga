/* eslint-disable react/forbid-prop-types */
/* eslint-disable no-shadow */
/* eslint-disable no-underscore-dangle */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
} from '@material-ui/core';

export default class Queries extends Component {
  static propTypes = {
    calculate: PropTypes.func.isRequired,
    plans: PropTypes.array.isRequired,
    rates: PropTypes.array.isRequired,
  };

  state = {
    source: '',
    destiny: '',
    minutes: 0,
    plan: '',
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  onClick = () => {
    const { calculate } = this.props;
    const { source, destiny, minutes, plan } = this.state;

    calculate(source, destiny, minutes, plan);
  };

  completedFields = () => {
    const { source, destiny, minutes, plan } = this.state;

    if (source && destiny && plan && minutes > 0) {
      return false;
    }
    return true;
  };

  render() {
    const { plans, rates } = this.props;
    rates.source = [...new Set(rates.map(rate => rate.source))].sort();
    rates.destiny = [...new Set(rates.map(rate => rate.destiny))].sort();

    const { source, destiny, minutes, plan } = this.state;

    return (
      <Grid container spacing={3}>
        <Grid item lg={3} sm={12} xs={12}>
          <FormControl style={{ margin: 1, width: '100%' }} required>
            <InputLabel htmlFor="source">Origem</InputLabel>
            <Select
              value={source}
              onChange={this.handleChange}
              inputProps={{
                name: 'source',
                id: 'source',
              }}
            >
              {rates.source.map(source => (
                <MenuItem key={source} value={source}>
                  {source}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item lg={3} sm={12} xs={12}>
          <FormControl style={{ margin: 1, width: '100%' }} required>
            <InputLabel htmlFor="destiny">Destino</InputLabel>
            <Select
              value={destiny}
              onChange={this.handleChange}
              inputProps={{
                name: 'destiny',
                id: 'destiny',
              }}
            >
              {rates.destiny.map(destiny => (
                <MenuItem key={destiny} value={destiny}>
                  {destiny}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item lg={1} sm={12} xs={12}>
          <TextField
            style={{ width: '100%' }}
            label="Minutos"
            value={minutes < 0 ? 0 : minutes}
            type="Number"
            onChange={this.handleChange}
            id="minutes"
            name="minutes"
            required
          />
        </Grid>
        <Grid item lg={3} sm={12} xs={12}>
          <FormControl style={{ margin: 1, width: '100%' }} required>
            <InputLabel htmlFor="plans">Planos</InputLabel>
            <Select
              value={plan}
              onChange={this.handleChange}
              inputProps={{
                name: 'plan',
                id: 'plan',
              }}
            >
              {plans.map(plan => (
                <MenuItem key={plan.amountMinPlan} value={plan.amountMinPlan}>
                  {plan.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid
          item
          lg={2}
          xs={12}
          sm={12}
          style={{ marginTop: 10, width: '100%' }}
        >
          <Button
            variant="contained"
            color="primary"
            style={{ width: '100%' }}
            onClick={this.onClick}
            disabled={this.completedFields()}
          >
            Calcular
          </Button>
        </Grid>
      </Grid>
    );
  }
}
