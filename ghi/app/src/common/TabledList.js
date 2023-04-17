import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CustomTable } from './CustomTable';
import { getInstances } from './util';
import { toUpper } from './format';
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
                <Typography variant="h1">{toUpper(app)}</Typography>
                <Grid>
                    <CustomTable data={Object.values(loadData)[0]} />
                </Grid>
            </>
        )
    }
}
