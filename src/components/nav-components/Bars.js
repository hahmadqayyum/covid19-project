import React from 'react';
import './Bar.css'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';




const useStyles = makeStyles({
    root: {
        minWidth: 275,
        paddingTop: 10,
        backgroundColor: '#3f3c3c',
    },

    title: {
        fontSize: 40,
        color: 'white',
        textShadow: '0 0 10px white, 0 0 1000px white, 0 0 100px white',
        textAlign: "center"
    },
    title2: {
        paddingTop: '5px',
        fontSize: 25,
        color: 'white',
        textShadow: '0 0 10px white, 0 0 1000px white, 0 0 100px white',
        textAlign: "center"
    },
    pos: {
        marginBottom: 12,
    },
    date: {
        textAlign: "center",
        color: 'whitesmoke',
        fontSize: '15px'
    }
});


function Bar(prop) {

    function tominute() {
        let minute = new Date();
        let m = minute.getMinutes();
        return m;
    }
    const classes = useStyles();

    return (
        <div className="bar-wrapper">
            <div className="bar">
                <Card className={classes.root}>
                    <CardContent>
                        <Typography className={classes.title} color="textSecondary" gutterBottom>
                            Confirmed
        </Typography>
                        <Typography variant="h5" component="h2" style={{ color: ' rgb(140, 140, 211)', textAlign: "center" }}>
                            {prop.value}
                        </Typography>
                        <Typography className={classes.title2} color="textSecondary" gutterBottom>
                            Today Reported
        </Typography>
                        <Typography variant="p" component="h5" style={{ color: 'white', textAlign: "center" }}>
                            {prop.todayC}
                        </Typography>
                        <hr />
                        <Typography variant="p" component="h5" className={classes.date} >
                            {tominute(prop.lastupdate)} min ago
                </Typography>
                    </CardContent>
                </Card>


                <Card className={classes.root}>
                    <CardContent>
                        <Typography className={classes.title} color="textSecondary" gutterBottom>
                            Recovered
        </Typography>
                        <Typography variant="h5" component="h2" style={{ color: ' rgb(147, 224, 32)', textAlign: "center" }} >
                            {prop.recovered}
                        </Typography>
                        <Typography className={classes.title2} color="textSecondary" gutterBottom>
                            Today Recovered
        </Typography>
                        <Typography variant="p" component="h5" style={{ color: 'white', textAlign: "center" }}>
                            {prop.todayR}
                        </Typography>
                        <hr />
                        <Typography variant="p" component="h5" className={classes.date} >
                            {tominute(prop.lastupdate)} min ago
                </Typography>
                    </CardContent>
                </Card>
                <Card className={classes.root}>
                    <CardContent>
                        <Typography className={classes.title} color="textSecondary" gutterBottom>
                            Deaths
        </Typography>
                        <Typography variant="h5" component="h2" style={{ color: 'rgba(240, 35, 35, 0.76)', textAlign: "center" }} >
                            {prop.deaths}
                        </Typography>
                        <Typography className={classes.title2} color="textSecondary" gutterBottom>
                            Today Deaths
        </Typography>
                        <Typography variant="p" component="h5" style={{ color: 'white', textAlign: "center" }}>
                            {prop.todayD}
                        </Typography>
                        <hr />
                        <Typography variant="p" component="h5" className={classes.date}>
                            {tominute(prop.lastupdate)} min ago
                </Typography>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}

export default Bar;









// return (
//     <div>
//         <div className="bar-wrapper">
//             <div className="bar">
//                 <div className="confirmed">
//                     <h1>Confirmed</h1>
//                     <p>{prop.value}</p>
//                     <h6>{tominute(prop.lastupdate)} min ago</h6>
//                 </div>


//                 <div className="deaths">
//                     <h1>Deaths</h1>
//                     <p>{prop.deaths}</p>
//                     <h6>{tominute(prop.lastupdate)} min ago</h6>
//                 </div>
//                 <div className="recovered">
//                     <h1>Recovered</h1>
//                     <p>{prop.recovered}</p>
//                     <h6>{tominute(prop.lastupdate)} min ago</h6>
//                 </div>


//             </div>
//         </div>
//     </div>
// )
// }