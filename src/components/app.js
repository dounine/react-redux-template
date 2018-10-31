import React from 'react'
import {connect} from "react-redux";
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Slide from "@material-ui/core/Slide/Slide";
import Snackbar from "@material-ui/core/Snackbar/Snackbar";
import Loading from 'react-loading-bar'
import {actions as appAction} from "../reducers/app";
import 'react-loading-bar/dist/index.css'

class App extends React.Component {

    render() {
        const {classes,active,value} = this.props;
        return (
            <div className={classes.root}>
                value:{value}
                <Button onClick={this.props.increase}>increase</Button>
                <Button onClick={this.props.decrease}>decrease</Button>
            </div>
        )
    }
}

const styles = theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    },
});


function mapStateToProps(state) {
    return {
        classes: {...styles},
        ...state.app
    }
}

function mapDispatchToProps(dispatch) {
    return {
        increase:()=>dispatch(appAction.increase()),
        decrease:()=>dispatch(appAction.decrease())
    }
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
