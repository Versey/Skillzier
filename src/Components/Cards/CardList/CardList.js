import Grid from '@material-ui/core/Grid';

import { useState } from 'react';
import MyCard from '../MyCard/MyCard'

const CardList = (id,...props) =>
{

    const [cards, setState] = useState([]);
    
    return(
        <div className="card-list">
        <Grid container>
            <Grid item xs={12}>
                <Grid container justify="center">

                {cards.map(card => 
                <MyCard key ={card.id} {...card}/>)}

                </Grid>
            </Grid>
        </Grid>

        </div>

    );

}

export default CardList;