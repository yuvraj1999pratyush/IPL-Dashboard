import { React } from 'react';
import './TeamTitle.scss';
import { Link } from 'react-router-dom';
export const TeamTitle = ({ teamName }) => {

    return (
        <div className='TeamTitle teamLink'>
            <h1>
                <Link className='teamLink' to={`/teams/${teamName}`}>{teamName}</Link>
            </h1>
        </div>
    )
}