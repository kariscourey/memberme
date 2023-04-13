import { useEffect, useState } from "react";
import { getMembers } from './common/util';
import { CardList } from './common/CardList';
import FormControl from '@mui/material/FormControl';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';




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
            {
                (Object.keys(loadData.members).length != 0) ?
                    <>
                        <Container>
                            {/* optimization: turn into a component, utilize React Redux for cross-component state compatability  */}
                            <FormControl className="flex-form" onSubmit={handleFilter}>
                                <Box component="form"
                                    method="post"
                                    onSubmit={handleFilter}
                                    noValidate sx={{ mt: 1 }}>
                                    <TextField
                                        id="standard-filter"
                                        label="Enter first or last name"
                                        type="search"
                                        variant="standard"
                                        onChange={e => setFilterInput(e.target.value)}
                                        value={filterInput}
                                        sx={{ mt: 1.8, ml: 2.5 }}
                                        />
                                    <Button
                                        type="submit"
                                        variant="contained"
                                        size="large"
                                        sx={{ mt: 2.5, ml: 3 }}>
                                            Filter
                                    </Button>
                                </Box>
                            </FormControl>
                        </Container>
                        <Container>
                            <CardList cards={loadData?.filteredMembers} />
                        </Container>
                    </> :
                    <></>
            }
        </>
    );
}
