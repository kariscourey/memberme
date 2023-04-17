import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Table } from './Table';
import { getInstances } from './util';
import { toTitleCase } from './format';
import { UhOh } from "./UhOh";
import { Grid } from '@mui/material';
import Typography from "@mui/material/Typography";


export function TabledList(props) {

    let app = props.app;
    let port = props.port;

    const [loadData, setLoadData] = useState(
        {
            listData: [],
        }
    );

    useEffect(() => {
        const fetchInstances = async () => {

            try {

                const data = await getInstances(port, app);

                setLoadData({
                    ...loadData, listData: data
                });

            } catch (e) {
                console.error(e);
            }
        }
        fetchInstances();
    }, []);


    if (loadData.listData.length === 0) {
        return (
            <UhOh uhOhType="noData" />
        )
    } else {
        return (
            <>
                <Typography variant="h1">{toTitleCase(app)}</Typography>
                <Grid>
                    <Table data={Object.values(loadData)[0]} />
                </Grid>
            </>
        )
    }
}
