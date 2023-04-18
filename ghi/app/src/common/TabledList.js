import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { useGetSavedMembersQuery } from '../rtk-files/savedMembersApi';
import { CustomTable } from './CustomTable';
import { Loading } from './Loading';


export function TabledList() {

    // initialize rtk query
    const { data: savedMembersData, isLoading: savedMembersLoading } = useGetSavedMembersQuery();

    // render TabledList
    return (
        <Container sx={{ py: 8 }}>
            <Grid container spacing={4}>
                {savedMembersLoading ?
                    <Loading /> :
                    savedMembersData ?
                        <CustomTable rows={savedMembersData.saved_members} /> :
                        <></>
                }
            </Grid>
        </Container>
    )
}
