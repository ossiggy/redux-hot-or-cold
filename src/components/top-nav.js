import React from 'react';
import {connect} from 'react-redux';

import './top-nav.css';

export class TopNav extends React.Component {

    render() {
        return (
            <nav>
                <ul className="clearfix">
                    <li>
                        <a className="what" href="#" onClick={() => this.props.onInfo()}>
                            What?
                        </a>
                    </li>
                    <li>
                        <a className="new" href="#" onClick={() => this.props.onNewGame()}>
                            + New Game
                        </a>
                    </li>
                </ul>
            </nav>
        );
    }
};

export default connect()(TopNav);