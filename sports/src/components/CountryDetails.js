import React from 'react';
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Divider from '@material-ui/core/Divider'
import Match from './Match'
import { withStyles } from '@material-ui/core/styles';

const CountryDetailsContainer = withStyles({
    root: {
        padding: 20,
        width: '100%',
        backgroundColor: '#e3f2fd'
    },
})(Container);

class CountryDetails extends React.Component {
    render() {
        const { countryDetails, handleOnClickExpand } = this.props
        return (
            <Grid container item spacing={2}>
                <Grid item xs={12}>
                    <CountryDetailsContainer maxWidth={false}>
                        <Typography>
                            {countryDetails.nameCountry}
                        </Typography>
                    </CountryDetailsContainer>
                </Grid>
                {
                    countryDetails.divisions.map((division, index) =>
                        <Grid item key={index}>
                            <CountryDetailsContainer maxWidth={false}>
                                <Grid container spacing={2}>
                                    <Grid item>
                                        <Typography>
                                            {`Division ${index + 1}`}
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Divider />
                                    </Grid>
                                    <Grid container item spacing={4}>
                                        {
                                            division.matches.map((match, index) =>
                                                <Grid item key={index}>
                                                    <Match
                                                        fullDetails
                                                        match={match}
                                                        handleOnClickExpand={handleOnClickExpand}
                                                    />
                                                </Grid>
                                            )
                                        }
                                    </Grid>
                                </Grid>
                            </CountryDetailsContainer>
                        </Grid>
                    )
                }
            </Grid>
        );
    }
}

export default CountryDetails