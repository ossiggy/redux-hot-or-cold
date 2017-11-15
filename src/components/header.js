import React from 'react';

import TopNav from './top-nav';
import InfoModal from './info-modal';
import {connect} from 'react-redux';
import {toggleInfo, newGame} from '../actions'
import './header.css';

export class Header extends React.Component  {

    render() {
        let infoModal;
        if (this.props.showInfoModal) {
            infoModal = <InfoModal onClose={() => this.props.dispatch(toggleInfo())} />;
        }

        return (
            <header>
                <TopNav onInfo={() => this.props.dispatch(toggleInfo())}
                    onNewGame={() => this.props.dispatch(newGame())} />
                {infoModal}
                <h1>HOT or COLD</h1>
            </header>
        );
    }
};

const mapStateToProps = state => ({
  showInfoModal: state.showInfoModal
})

export default connect(mapStateToProps)(Header)