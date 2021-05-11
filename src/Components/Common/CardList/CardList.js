import Grid from '@material-ui/core/Grid';
import { SdCardSharp } from '@material-ui/icons';
import { useState } from 'react';
import MyCard from '../MyCard/MyCard'

const CardList = props =>
{
    const [cards,setCards] = useState([
    {
        title: "Hello",
        content: "Ayy",
        points: 200
    },
]);

    return(
        <div className="card-list">

        <Grid container>
            <Grid item xs={12}>
                <Grid container justify="center">
                {cards.map(card => <MyCard title="Hello"/>)}
                </Grid>
            </Grid>
        </Grid>

        </div>

);

}

export default CardList;