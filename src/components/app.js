import React from 'react'
import {connect} from "react-redux";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import TextField from '@material-ui/core/TextField';
import {actions as appAction} from "../reducers/app";
import LoadingBar from 'react-redux-loading-bar'

class App extends React.Component {

    render() {
        const {classes, searching, active, name, list, changeText} = this.props;
        return (
            <div className={classes.root}>
                <LoadingBar/>
                <form noValidate autoComplete="off">
                    <div>
                        <TextField
                            id="search-name"
                            label="Search name"
                            className={classes.textField}
                            value={name}
                            onChange={({target: {value}}) => changeText(value)}
                            margin="normal"
                            variant="filled"
                        />
                    </div>
                </form>
                {/*{searching && <CircularProgress className={classes.progress}/>}*/}
                <List>
                    {
                        list.map(item => (
                            <ListItem key={item.login} dense button>
                                <Avatar alt="Remy Sharp" src={item.avatar_url}/>
                                <ListItemText primary={item.login}/>
                            </ListItem>
                        ))
                    }
                </List>
            </div>
        )
    }
}

const styles = theme => ({
    root: {
        backgroundColor: theme.palette.background.paper,
    },
    progress: {},
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
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
        changeText: (text) => dispatch(appAction.changeText(text)),
    }
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
