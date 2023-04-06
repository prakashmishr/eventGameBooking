import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function GameList() {

  const [games, setGames] = React.useState([
    { id: 1, name: 'Hi Striker', price: 20 },
    { id: 2, name: 'Punch Challenge', price: 15 },
    { id: 3, name: 'Bow & Arrow', price: 25 },
    { id: 4, name: 'Catch Fish', price: 30 },
  ]);
  const [cart, setCart] = React.useState([]);

  const handleAddToCart = (game) => {
    setCart([...cart, game]);
  };

  const handleRemoveFromCart = (game) => {
    const newCart = cart.filter((item) => item.id !== game.id);
    setCart(newCart);
  };

  const handleCheckout = () => {
    // perform any necessary validation on the cart items
    // send an enquiry to the backend API
  };


  return (
    <div style={{display:"flex", marginTop:"80px"}}>

<ul>
        {games.map((game) => (
          <Card sx={{ maxWidth: 345 }}>
             <CardActionArea>
             <CardContent>
             <Typography gutterBottom variant="h5" component="div">         
          <li key={game.id}>
            <span>{game.name}</span>
            <span>{game.price}</span>
            {cart.includes(game) ? (
              <button onClick={() => handleRemoveFromCart(game)}>Remove from cart</button>
            ) : (
              <button onClick={() => handleAddToCart(game)}>Add to cart</button>
            )}
          </li> </Typography></CardContent> </CardActionArea></Card>
        ))}
      </ul>

    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
  );
}