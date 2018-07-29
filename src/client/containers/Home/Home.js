import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Card, Grid } from '@material-ui/core'
import { nameUpdate } from '../../actions/app'
import MaterialUI from '../../images/material-ui.png'

class Home extends Component {
  nameUpdate = () => {
    const { nameUpdate } = this.props
    nameUpdate(document.getElementById('name').value)
  }

  render() {
    const {
      app: { name },
    } = this.props
    return (
      <Grid container justify="center">
        <Card className="card">
          <img alt="material-ui" src={MaterialUI} />
          <div className="container home">
            <h1>Home</h1>
            Enter your name: <input name="name" id="name" onKeyUp={() => this.nameUpdate()} />
            {name && <h3>Hello {name}</h3>}
          </div>
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
)(Home)
