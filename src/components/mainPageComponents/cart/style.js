import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
    toolbar: theme.mixins.toolbar,
    title: {
        marginTop: '5%'
    },
    emptyButton: {
        minWidth:'150px',
        
        [theme.breakpoints.down('xs')]: {
            marginBottom: '5px',
            marginRight:'5px',
        },
        [theme.breakpoints.up('xs')]: {
            marginRight: '20px'
        },

    },
    checkoutButton: {
        minWidth:'150px',
        marginRight:'5px'
    },
    link: {
        textDecoration: 'none',
    },
    cardDetails : {
        display:'flex',
        marginTop:'10px',
        width:'100%',
        justifyContent:'space-between'
    }
}))