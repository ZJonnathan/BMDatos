import React from 'react';
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import Match from './Match'
import { withStyles } from '@material-ui/core/styles';

const MatchesList = withStyles({
    root: {
        padding: 0,
        width: '100%'
    },
})(List);
  
class Matches extends React.Component {
    render() {
        const { matches } = this.props
        return (
            <MatchesList>
                {
                    matches.map((match, index) =>
                        <ListItem key={index} button>
                            <Match match={match} />
                        </ListItem>
                    )
                }
            </MatchesList>
        );
    }
}

export default Matches