import { createStyles, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => createStyles({
  '@global': {
    '*': {
      boxSizing: 'border-box',
      margin: 0,
      padding: 0,
    },
    html: {
      '-webkit-font-smoothing': 'antialiased',
      '-moz-osx-font-smoothing': 'grayscale',
      height: '100%',
      width: '100%'
    },
    body: {
      backgroundColor: '#f4f6f8',
      height: '100%',
      width: '100%'
    },
    a: {
      textDecoration: 'none'
    },
    '#root': {
      height: '100%',
      width: '100%'
    },
    '.mapContainer': {
      height: '440px',
      width: '800px'
    },
    'div.blueTable': {
      border: '1px solid #1C6EA4',
      backgroundColor: '#EEEEEE',
      width: '100%',
      textAlign: 'left',
      borderCollapse: 'collapse',
    },
    '.divTable.blueTable' : {
      border:'1px solid #AAAAAA',
      padding: '3px 2px'
    },

    '.divTableCell' : {
      border:'1px solid #AAAAAA',
      padding: '3px 2px'      
    },

    '.divTable.blueTable' : {
      border:'1px solid #AAAAAA',
      padding: '3px 2px'     
    },

    '.divTableHead' : {
      border:'1px solid #AAAAAA',
      padding: '3px 2px'        
    },
    '.divTable.blueTable .divTableBody .divTableCell': {
      fontSize: '13px'
    }, 
    '.divTable.blueTable .divTableRow:nth-child(even)' :  {
      background: '#D0E4F5'
    },
    '.blueTable .tableFootStyle': {
      fontSize: '14px'
    },
    '.blueTable .tableFootStyle .links': {
         textAlign: 'right'
    },
    '.blueTable .tableFootStyle .links' : {
      display: 'inline-block',
      background: '#1C6EA4',
      color: '#FFFFFF',
      padding: '2px 8px',
      borderRadius: '5px'
    },
    '.blueTable.outerTableFooter' : {
      borderTop: 'none'
    },
    '.blueTable.outerTableFooter .tableFootStyle': {
      padding: '3px 5px' 
    },
    
    '.divTable' : { display: 'table' },
    '.divTableRow' : { display: 'table-row' },
    '.divTableHeading' : { display: 'table-header-group'},
    '.divTableCell, .divTableHead': { display: 'table-cell'},
    '.divTableHeading': { display: 'table-header-group'},
    '.divTableFoot': { display: 'table-footer-group'},
    '.divTableBody': { display: 'table-row-group'}
  }
}));

const GlobalStyles = () => {
  useStyles();

  return null;
};

export default GlobalStyles;
