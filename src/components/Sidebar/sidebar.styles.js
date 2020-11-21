import { makeStyles } from '@material-ui/core/styles';


const sidebarStyles = makeStyles(theme => ({
    root: {
        color: '#ffffff',
    },
    paperbase: {
        fontWeight: '400',
        fontSize: '1.4rem',
        padding: '1.1rem .7rem',
        marginLeft: '1rem',
    },
    overview: {
        padding: '1.1rem .7rem',
        display: 'flex',
        alignItems: 'center',
        color: '#bdbdbd',
        marginLeft: '1rem',
    },
    header: {
        backgroundColor: '#232F3E'
    },
    homeIcon: {
        fontSize: '1.2rem',
        marginRight: '1rem'
    },
    projectOverview: {
        fontWeight: '500'
    },
    develop: {
        color: '#ffffff',
        padding: '.6rem 2rem',
        fontSize: '1.1rem'
    },
    listItem: {
        padding: '.05rem 2rem',
        color: '#bdbdbd',
    },
    listIcon: {
        color: '#bdbdbd',
        fontSize: '.61rem'
    },
    listText: {
        fontSize: '.71rem'
    }
}))
export default sidebarStyles;