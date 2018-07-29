import React from 'react'
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import { Link } from 'react-router-dom'
import style from './style'

class Header extends React.Component {
  render() {
    const { classes } = this.props
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Link to="/">
              <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                <MenuIcon />
              </IconButton>
            </Link>
            <Typography variant="title" color="inherit" className={classes.flex}>
              React App
            </Typography>
            <Link to="/about">
              <Button color="inherit">About</Button>
            </Link>
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    name: state.app,
  }
}

export default connect(mapStateToProps)(withStyles(style)(Header))
