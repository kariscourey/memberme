import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';

export function CustomFilter() {
    return (
        <FormControl className="flex-form">

            <TextField
                id="standard-filter"
                label="Enter first or last name"
                type="search"
                variant="standard"
            />

            <Button className="action-button" variant="primary" type="submit">
                Filter
            </Button>
        </FormControl>
    );
}
