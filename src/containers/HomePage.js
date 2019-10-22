import React from 'react';
import NavBar from '../components/NavBar';
import DashBoard from './DashBoard';
import { Link } from 'react-router-dom';

class HomePage extends React.Component {

    render() {
        console.log(this.props);
        return (
            <div>
                <h1>This is the HOMEPAGE!</h1>
                <NavBar />
                <Link to="/dashboard">
                    <DashBoard />
                </Link>
            </div>
        )
    }
    
}

export default HomePage;