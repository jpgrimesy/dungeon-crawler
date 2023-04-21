import { useState, useEffect } from "react";
import { useQuery, gql } from "@apollo/client";
import { TEST_GQL } from "../../GraphQL/Queries";


export default function Test() {
    const { error, loading, data } = useQuery(TEST_GQL)
    const [alignments, setAlignments] = useState([])
   
    useEffect(() => {
        if (data) {
            setAlignments(data.alignments)
        }
    
    }, [data] )
    

    if (loading) {
        return <div>Loading...</div>
    }

    if (error) {
        return <div>Error somehwere</div>
    }
 
    return (
        <>
            {alignments.map(alignment => 
                    <div key={alignment.index}>
                        <p key={alignment.index} className="text-3xl font-bold underline">{alignment.name}</p>
                        <p>{alignment.desc}</p>
                        <br />
                    </div>
                )}
                
        </>
    )

}