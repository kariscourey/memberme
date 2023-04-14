import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import { useEffect, useState } from "react";
import { CardList } from './common/CardList';
import { getMembers } from './common/util';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import ClearIcon from '@mui/icons-material/Clear';


export default function MainPage() {

    const [filterInput, setFilterInput] = useState("");

    const [loadData, setLoadData] = useState(
        {
            members: {},
            filteredMembers: {},
        }
    );

    const handleFilter = async (e) => {

        e.preventDefault();

        if (filterInput && filterInput != "") {

            let data = [...loadData.members];

            data = data?.filter(
                i => i.name?.first.toLowerCase().includes(filterInput.toLowerCase()) ||
                    i.name?.last.toLowerCase().includes(filterInput.toLowerCase())
            );

            setLoadData({
                ...loadData, filteredMembers: data
            });
        }

        else {
            setLoadData({
                ...loadData, filteredMembers: loadData.members
            });
        }
    }

    const handleClear = async (e) => {

        e.preventDefault();

        setLoadData({
            ...loadData, filteredMembers: loadData.members
        });

        setFilterInput("");


    }

    useEffect(() => {
        const fetchMembers = async () => {

            let data = {};
            data.members = (await getMembers()).results;
            data.filteredMembers = data.members;

            setLoadData(data);

        }
        fetchMembers();
    }, []);

    return (
        <>
            <Container>
                {/* optimization: turn into a component, utilize React Redux for cross-component state compatability  */}
                <FormControl className="flex-form">
                    <Box component="form"
                        method="post"
                        onSubmit={handleFilter}
                        noValidate sx={{ mt: 1 }}>
                        <TextField
                            id="standard-filter"
                            label="Enter first or last name"
                            variant="standard"
                            onChange={e => setFilterInput(e.target.value)}
                            value={filterInput}
                            sx={{ mt: 1.8, ml: 2.5 }}
                        />
                        <Button
                            type="submit"
                            variant="contained"
                            size="small"
                            sx={{ mt: 3.5, ml: 2 }}>
                            <FilterAltIcon />
                        </Button>
                    </Box>
                </FormControl>
                <FormControl className="flex-form">
                    <Box component="form"
                        method="post"
                        onSubmit={handleClear}
                        noValidate sx={{ mt: 1 }}>
                        <Button
                            type="submit"
                            variant="contained"
                            size="small"
                            sx={{ mt: 3.5, ml: 1 }}>
                            <ClearIcon />
                        </Button>
                    </Box>
                </FormControl>
            </Container>
            <Container>
                <CardList cards={loadData?.filteredMembers} />
            </Container>

        </>
    );
}
