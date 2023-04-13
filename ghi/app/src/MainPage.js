import { useEffect, useState } from "react";
import { getMembers } from './common/util';
import { CardList } from './common/CardList';
import FormControl from '@mui/material/FormControl';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';



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
            <Container className="px-4 py-5 my-5 text-center">
                <Container className="display-5 fw-bold">MemberMe</Container>
                <Grid className="col-lg-6 mx-auto">
                    <Container className="lead mb-4">
                        For all your membership needs.
                    </Container>
                </Grid>
            </Container>
            {
                (Object.keys(loadData.members).length != 0) ?
                    <>
                        <Container>
                            {/* optimization: turn into a component, utilize React Redux for cross-component state compatability  */}
                            <FormControl className="flex-form" onSubmit={handleFilter}>
                                <TextField
                                    id="standard-filter"
                                    label="Enter first or last name"
                                    type="search"
                                    variant="standard"
                                    onChange={e => setFilterInput(e.target.value)}
                                    value={filterInput}
                                />
                                <Button className="action-button" variant="primary" type="submit">
                                    Filter
                                </Button>
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
