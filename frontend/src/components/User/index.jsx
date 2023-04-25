import { useState, useEffect } from "react";
import { useQuery, gql } from "@apollo/client";
import { RACES } from "../../GraphQL/Queries";


export default function Test() {
    const { error, loading, data } = useQuery(RACES)
    const [alignments, setAlignments] = useState([])
   
    useEffect(() => {
        if (data) {
            setAlignments(data.monsters)
        }
    
    }, [data] )
    

    if (loading) {
        return <div>Loading...</div>
    }

    if (error) {
        return <div>Error somewhere</div>
    }
 
    return (
        <>
            {/* {alignments.map(alignment => 
                    <div key={alignment.index}>
                        <p key={alignment.index} className="text-3xl font-bold underline">{alignment.name}</p>
                        
                        <br />
                    </div>
                )} */}
                
        </>
    )

}