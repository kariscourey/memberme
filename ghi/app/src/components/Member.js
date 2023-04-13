import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { DetailCard } from "../common/DetailCard";


export default function Member() {
    let params = useParams();

    const [member, setMember] = useState(
        {
            color: "",
            id: 0,
            manufacturer: "",
            model: "",
            picture_url: "",
            member_bin: {},
        }
    );


    // useEffect(() => {
    //     const fetchMember = async () => {
    //         const memberData = await getArticle("member", 8080, parseInt(params.memberId, 10));
    //         console.log(memberData);
    //         setMember(memberData);
    //     }
    //     fetchMember();
    // }, []);


    return (

        <DetailCard />

    );
}
