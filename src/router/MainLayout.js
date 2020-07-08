import React from 'react';
import './Main.less';


export default class MainLayout extends React.Component {

    render() {
        return (
            <div className='app'>
                    {this.props.children}
            </div>
        );
    }
}