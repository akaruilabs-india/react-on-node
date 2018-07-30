import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { Button, Card, Grid, Typography } from '@material-ui/core'
import TextInput from '../../components/Input/TextInput'
import { nameUpdate } from '../../actions/app'

class Login extends Component {
  login = values => {
    console.log(values) // eslint-disable-line
  }

  render() {
    const { handleSubmit } = this.props
    return (
      <Grid container justify="center">
        <Card className="card center-card">
          <Typography gutterBottom variant="headline" component="h2">
            Log In
          </Typography>
          <form onSubmit={handleSubmit(this.login)}>
            <div>
              <Field name="email" autoFocus component={TextInput} label="Email" />
            </div>
            <div>
              <Field name="password" component={TextInput} type="password" label="Password" />
            </div>
            <Button type="submit" variant="contained" color="primary" className="margin-top">
              Submit
            </Button>
          </form>
        </Card>
      </Grid>
    )
  }
}

function mapStateToProps(state) {
  return {
    app: state.app,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    nameUpdate: data => dispatch(nameUpdate(data)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(
  reduxForm({
    form: 'login',
  })(Login)
)
