import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {updateUser, apiRequest} from './actions/user-actions';
import {createSelector} from 'reselect'

class App extends Component {
    constructor(props) {
        super(props);
        this.onUpdateUser = this.onUpdateUser.bind(this);
    }

    onUpdateUser(event) {
        this.props.onUpdateUser(event.target.value);
    }

    // componentDidMount () {
    //     setTimeout(() => {
    //         this.props.onApiRequest();
    //     }, 1500);
    // }

    render() {
        console.log(this.props)
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>

                <input onChange={this.onUpdateUser} />
                {this.props.user}
            </div>
        );
    }
}


const productsSeletor = createSelector(
    state => state.products,
    products => products
)

const userSelector = createSelector(
    state => state.user,
    user => user
)

const mapStateToProps = createSelector(
    productsSeletor,
    userSelector,
    (products, user) => ({
        products,
        user
    })
)

// const mapStateToProps = (state, props) => {
//     console.log(props)
//     return {
//         products: state.products,
//         user: state.user,
//         userPlusProp: `${state.user} ${props.aRandomProps}`
//     }
// }

const mapActionToProps = {
    onUpdateUser: updateUser,
    onApiRequest: apiRequest
}

// const mergeProps = (propsFromState, propsFromDispatch, ownProps) => {
//     console.log(propsFromState, propsFromDispatch, ownProps)
//     return {}
// }
export default connect(mapStateToProps, mapActionToProps)(App);
