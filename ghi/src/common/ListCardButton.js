import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

// stylize ListCardButton
export const ListCardButton = styled(Button)({
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 16,
    padding: '0px 0px',
    lineHeight: 1.5,
    color: '#2196f3',
    '&:hover': {
        color: '#1769aa',
        backgroundColor: 'inherit',
    },
    '&:active': {
        color: '#1769aa',
        backgroundColor: 'inherit',

    },
    '&:focus': {
        boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
        backgroundColor: 'inherit',
    },
});
