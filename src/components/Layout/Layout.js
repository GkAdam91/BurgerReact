import React, { Component } from 'react'
import Auxiliary from '../../hoc/Auxiliary';
import ToolBar from '../Navigation/Toolbar/Toolbar'
import classes from './Layout.css'
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';


class Layout extends Component {
    state = {
        showSideDrawer: false
    }

    sideDrawerToggleHandler = () => {
        this.setState((prevState) => {
            return {showSideDrawer: !prevState.showSideDrawer};
        });
    }

    sideDrawerClosedHandler = () => {
        this.setState({ showSideDrawer: false });
    }

    render() {
        return (
            <Auxiliary>
                <ToolBar drawerToggleClicked = {this.sideDrawerToggleHandler}/>
                <SideDrawer
                    open={this.state.showSideDrawer}
                    closed={this.sideDrawerClosedHandler} />
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Auxiliary >
        )
    }
}

export default Layout;