import { makeStyles } from '@material-ui/styles';

const homeStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    toolbar: {
        minHeight: 0,
        marginTop: '-.5rem'
    },
    toolbarIcon: {
        color: '#ffffff',
        display: 'none',
        [theme.breakpoints.down("sm")]: {
            display: 'block',
        }
    },
    topToolbar: {
        display: 'flex',
        alignItems: 'center',
        marginLeft: 'auto'
    },
    small: {
        width: theme.spacing(3),
        height: theme.spacing(3),
    },
    auth: {
        fontWeight: 500,
        [theme.breakpoints.down("sm")]: {
            fontWeight: 400,
            fontSize: '1.2rem'
        }
    },
    toolbarDoc: {
        opacity: '.8',
        cursor: 'pointer',
        "&:hover": {
            opacity: '1',
            textDecoration: 'underline'
        }
    },
    tab: {
        fontSize: '.8rem',
        minWidth: 12,
        textTransform: 'capitalize',
        display: 'flex',
        justifyContent: 'flex-start'
    },
    indicator: {
        backgroundColor: '#ffffff',
        height: '3px',
        borderRadius: '9rem 9rem 0 0'
    }
}));

export default homeStyles;