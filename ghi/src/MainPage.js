import ClearIcon from '@mui/icons-material/Clear';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import FormControl from '@mui/material/FormControl';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import { useEffect, useState } from "react";
import { CardList } from './common/CardList';
import { Loading } from './common/Loading';
import UhOh from './common/UhOh';
import { getRandomUsers } from './common/util';


export default function MainPage() {

    // initialize filter consts
    const [filterInput, setFilterInput] = useState("");
    const [filterClick, setFilterClick] = useState(false);

    // initialize data
    const [loadData, setLoadData] = useState(
        {
            members: {},
            filteredMembers: {},
        }
    );

    // handle filter based on user input
    const handleFilter = async (e) => {

        e.preventDefault();

        if (filterInput && filterInput !== "") {

            let data = [...loadData.members];

            data = data?.filter(
                i => i.name?.first.toLowerCase().includes(filterInput.toLowerCase()) ||
                    i.name?.last.toLowerCase().includes(filterInput.toLowerCase())
            );

            setLoadData({
                ...loadData, filteredMembers: data
            });
            setFilterClick(true);
        }

        else {
            setLoadData({
                ...loadData, filteredMembers: loadData.members
            });
            setFilterClick(false);
        }
    }

    // handle clear filter based on user input
    const handleClear = async (e) => {

        e.preventDefault();

        setLoadData({
            ...loadData, filteredMembers: loadData.members
        });

        setFilterInput("");
        setFilterClick(false);
    }

    // initialize component with random user instances
    useEffect(() => {
        const fetchMembers = async () => {

            let data = {};
            data.members = (await getRandomUsers()).results;
            data.filteredMembers = data.members;
            setLoadData(data);
        }
        fetchMembers();
    }, []);

    // render MainPage (filter, cards)
    return (
        <>
            <Container>
                <FormControl className="flex-form">
                    <Box component="form"
                        method="post"
                        onSubmit={handleFilter}
                        noValidate sx={{ mt: 1 }}>
                        <TextField
                            id="standard-filter"
                            label="Filter by name"
                            variant="standard"
                            onChange={e => setFilterInput(e.target.value)}
                            value={filterInput}
                            sx={{ mt: 1.8, ml: 2.5 }}
                        />
                        <IconButton
                            type="submit"
                            variant="contained"
                            size="small"
                            sx={{ mt: 3.5, ml: 2 }}>
                            <FilterAltIcon />
                        </IconButton>
                    </Box>
                </FormControl>
                <FormControl className="flex-form">
                    <Box component="form"
                        method="post"
                        onSubmit={handleClear}
                        noValidate sx={{ mt: 1 }}>
                        <IconButton
                            type="submit"
                            variant="contained"
                            size="small"
                            sx={{ mt: 3.5, ml: 1 }}>
                            <ClearIcon />
                        </IconButton>
                    </Box>
                </FormControl>
            </Container>
            <Container>
                {
                    (Object.keys(loadData.filteredMembers).length === 0) ?
                        filterClick === true ?
                            <UhOh uhOhType="noData" /> :
                            <Loading /> :
                        <CardList cards={loadData?.filteredMembers} />
                }
            </Container>

        </>
    );
}
