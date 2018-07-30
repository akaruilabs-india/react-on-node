import React from 'react'
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import Hidden from '@material-ui/core/Hidden'
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Divider from '@material-ui/core/Divider'
import MenuIcon from '@material-ui/icons/Menu'
import { Link } from 'react-router-dom'
import style from './style'

class Header extends React.Component {
  state = {
    right: false,
  }

  toggleDrawer = open => () => {
    this.setState({
      right: open,
    })
  }

  render() {
    const { classes } = this.props
    const { right } = this.state
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Link to="/" className={classes.flex}>
              <Typography variant="title" color="inherit">
                React App
              </Typography>
            </Link>
            <Hidden smUp>
              <IconButton
                onClick={this.toggleDrawer(true)}
                className={classes.menuButton}
                color="inherit"
                aria-label="Menu"
              >
                <MenuIcon />
              </IconButton>
            </Hidden>
            <Hidden xsDown>
              <Link to="/about">
                <Button color="inherit">About</Button>
              </Link>
              <Link to="/users/register">
                <Button color="inherit">Register</Button>
              </Link>
              <Link to="/users/login">
                <Button color="inherit">Log In</Button>
              </Link>
            </Hidden>
            <SwipeableDrawer
              anchor="right"
              open={right}
              onClose={this.toggleDrawer(false)}
              onOpen={this.toggleDrawer(true)}
            >
              <div tabIndex={0} role="button" onClick={this.toggleDrawer(false)} onKeyDown={this.toggleDrawer(false)}>
                <List component="nav">
                  <Link to="/about">
                    <ListItem className={classes.drawerItem} button>
                      <ListItemText primary="About" />
                    </ListItem>
                  </Link>
                  <Divider />
                  <Link to="/users/register">
                    <ListItem button>
                      <ListItemText primary="Register" />
                    </ListItem>
                  </Link>
                  <Link to="/users/login">
                    <ListItem button>
                      <ListItemText primary="Log In" />
                    </ListItem>
                  </Link>
                </List>
              </div>
            </SwipeableDrawer>
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
