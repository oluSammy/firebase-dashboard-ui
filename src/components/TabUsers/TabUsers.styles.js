import { makeStyles } from '@material-ui/styles';

const tabUsersStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        marginTop: '3rem'
    },
    paper: {
        maxWidth: '80%',
        backgroundColor: '#fafafa',
        margin: '0 auto',
        [theme.breakpoints.down("sm")]: {
            maxWidth: '95%'
        }
    },
    paperRounded: {
        borderRadius: '.5rem'
    },
    searchBar: {
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#eeeeee',
        borderRadius: '.5rem .5rem',
        padding: '.2rem 1rem',
        flexWrap: 'wrap'
    },
    search: {
        // maxWidth: '70%',
        minWidth: '70%',
        marginLeft: '3%',
        marginRight: '3%',
        border: 'none',
        backgroundColor: '#eeeeee',
        '&:focus': {
            outline: 'transparent'
        },
        [theme.breakpoints.down("sm")]: {
            minWidth: '80%',
            marginRight: 'auto'
        },
        [theme.breakpoints.down("xs")]: {
            marginRight: 'auto'
        }
    },
    users: {
        height: '8rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }
}));

export default tabUsersStyles;