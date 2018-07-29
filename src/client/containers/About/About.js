import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button, Card, Grid } from '@material-ui/core'
import { Link } from 'react-router-dom'
import { getUserName } from '../../actions/app'
import './About.css'

class About extends Component {
  componentDidMount() {
    const { getUserName } = this.props
    getUserName()
  }

  render() {
    const {
      app: { name },
    } = this.props
    return (
      <Grid container justify="center">
        <Card className="card">
          {name ? <h1>Hello {name}</h1> : <h1>Loading...</h1>}
          <Link to="/">
            <Button variant="contained" color="primary">
              Click Me
            </Button>
          </Link>
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
    getUserName: data => dispatch(getUserName(data)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(About)
