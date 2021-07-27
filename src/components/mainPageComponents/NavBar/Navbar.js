import React from 'react'
import {AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography} from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import logo from '../../../assets/images/R (5).png';
import {useStyles} from './style'
import { Link, useLocation } from 'react-router-dom';

function NavBar({totalItems,onClick}) {
    const classes = useStyles()
    const location = useLocation()
    return (
        <>
            <AppBar position="fixed" className={classes.appBar} color="inherit">
                <Toolbar>
                    <Link to="/" style={{textDecorationLine:'none',color:'black'}}>
                    <Typography variant="h6" className={classes.title}>
                        <img src={logo} alt="Commerce.js" height="80px" className={classes.image}/>
                        فروشگاه گل و گیاه 
                    </Typography>
                    </Link>
                    <div className={classes.grow}/>
                   <div className={classes.button}>
                        
                        <IconButton >
                            <Badge component={Link} to="/basket" badgeContent={totalItems} color="secondary" >
                                <ShoppingCartIcon onClick={onClick}/>
                            </Badge>
                        </IconButton>

                    </div>
                </Toolbar>
            </AppBar>
            
        </>
    )
}

export default NavBar