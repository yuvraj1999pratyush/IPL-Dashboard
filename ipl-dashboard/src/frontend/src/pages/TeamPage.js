import React, { useEffect, useState} from 'react';
import { MatchDetailCard } from '../components/MatchDetailCard';
import { MatchSmallCard } from '../components/MatchSmallCard';
import { useParams, Link } from 'react-router-dom';
import './TeamPage.scss';
import { PieChart } from 'react-minimal-pie-chart';

export const TeamPage = () => {

  const [team, setTeam] = useState({ matches: [] });

  const { teamName } = useParams();

  useEffect(
    () => {
      const fetchTeam = async () => {
        const response = await fetch(`${process.env.REACT_APP_API_ROOT_URL}/team/${teamName}`);
        const data = await response.json();
        setTeam(data);
      };

      fetchTeam();



    }, [teamName]

  );


  if (!team || !team.teamName) {
    return <h1>Team Not Found</h1>
  }

  return (
    <div className="TeamPage">
      <div className="team-name-section">
      <h3 style={{marginBottom:"170px"}}>
        <Link to={`/`} style={{color:"#61DAFB"}}>Home</Link>
      </h3>
        <h1 className="team-name">{team.teamName}</h1>
      </div>
      <div className="win-loss-section">
        Wins / Losses
        <PieChart
          data={[
            
            { title: 'Losses', value: team.totalMatches-team.totalWins, color: '#821E2F' },
            { title: 'Wins', value: team.totalWins, color: '#3B652C' },
            
          ]}
        />
      </div>
      <div className="match-detail-section">
        <h3 style={{color:"#61DAFB"}}>Latest Matches</h3>
        <MatchDetailCard teamName={team.teamName} match={team.matches[0]} />
      </div>
      {team.matches.slice(1).map(match => <MatchSmallCard key={match.id} teamName={team.teamName} match={match} />)}
      <div className='more-link'>
        <Link to={ `/teams/${teamName}/matches/${process.env.REACT_APP_DATA_END_YEAR}`} style={{color:"#61DAFB"}}>
          More >>
        </Link>
      </div>
    </div>
  );
}


