import React from 'react'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import Button from '@material-ui/core/Button'

import { withStyles } from '@material-ui/core/styles'

const MatchScoreTypography = withStyles({
    root: {
        backgroundColor: '#ef5350',
        color: '#ffffff',
        width: '50px'
    },
})(Typography);

const DummyGrid = withStyles({
    root: {
        width: '50px'
    },
})(Grid);

const FullMatchDetailsGrid = withStyles({
    root: {
        backgroundColor: '#b2dfdb',
        padding: '20px'
    },
})(Grid);

const FullMatchDetailsButton = withStyles({
    root: {
        height:'100%',
        width: '100%'
    },
})(Button);
  
class Match extends React.Component {
    
    render() {
        const { fullDetails, match, handleOnClickExpand } = this.props
        const xs=2
        const dummyTextField = fullDetails && <Grid item xs>
            <TextField fullWidth />
        </Grid>
        const scores = <Grid container spacing={2}>
            {
                ["home", "visit"].map((team, index) =>
                    <Grid
                        alignItems="center"
                        container
                        item
                        key={index}
                        spacing={2}
                    >
                        <Grid
                            item
                            xs={fullDetails ? xs : true}
                        >
                            <Typography>
                                { match[team].name }
                            </Typography>
                        </Grid>
                        <Grid item>
                            <MatchScoreTypography align="center">
                                { match[team].score }
                            </MatchScoreTypography>
                        </Grid>
                        { dummyTextField }
                        { dummyTextField }
                        { dummyTextField }
                    </Grid>
                )
            }
            <Grid item xs={2} />
            <Grid item>
                <MatchScoreTypography align="center" />
            </Grid>
            <Grid item xs />
            { dummyTextField }
            <Grid item xs />
        </Grid>

        if(fullDetails){
            return(
                <FullMatchDetailsGrid container spacing={2}>
                    <Grid container item spacing={2} xs={11}>
                        <Grid item xs={xs}>
                            <Typography>
                                {`${match.time}' first half`}
                            </Typography>
                        </Grid>
                        <DummyGrid item />
                        {
                            ["S", "M", "T"].map((letter, index) =>
                                <Grid item key={index} xs>
                                    <Typography align="center">
                                        { letter }
                                    </Typography>
                                </Grid>
                            )
                        }
                        <Grid item xs={12}>
                            <Divider />
                        </Grid>
                        {scores}
                    </Grid>
                    <Grid item xs={1}>
                        <FullMatchDetailsButton
                            color='secondary'
                            variant='contained'
                            onClick={handleOnClickExpand}
                        >
                            Expand
                        </FullMatchDetailsButton>
                    </Grid>
                </FullMatchDetailsGrid>
            )
        }
        return (scores);
    }
}

export default Match