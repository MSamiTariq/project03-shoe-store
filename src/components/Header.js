import React, {useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import {Link} from 'react-router-dom';
import { GlobalContext } from '../context/Context';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import { withStyles } from '@material-ui/core/styles';

const StyledBadge = withStyles((theme) => ({
  badge: {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}))(Badge);


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    opacity: 0.7,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    fontStyle: 'italic',
    textalign: 'left',
    position: 'absolute',
    bottom: '10px',
  },
  toolbarButtons: {
    marginRight: 'auto',
  },
  "&:hover": {
    background: "black"
  },
}));

export default function Header() {
  const classes = useStyles();
  const {cartCount} = useContext(GlobalContext);

  return (
    <div className={classes.root}>
      <AppBar position="sticky" color="secondary">
        <Toolbar>
          <Link to ='/' style={{ color: 'inherit', textDecoration: 'inherit', }}>
          <Typography variant="h6" className={classes["&:hover"], classes.title }>
            HOT-SHOES
          </Typography>
          </Link>
          <div className={classes.toolbarButtons}>
                        <Link to="/cart" style={{ color: 'inherit', textDecoration: 'inherit' }}>
                            <IconButton aria-label="show cart" color="inherit" style={{position:'absolute', right: '20px', top: '10px'}}>
                                <Badge badgeContent={cartCount.toString()} color="secondary">
                                    <ShoppingCartIcon />
                                </Badge>
                            </IconButton>
                        </Link>

                    </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
