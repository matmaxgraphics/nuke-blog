import { useState, useEffect } from "react";


import React from 'react'

function useDeleteData(url, slug) {
    const [deleteData, setDeleteData] = useState(null);
    
    useEffect(()=>{
        let fetchUrl = url;

        if(slug){
            fetchUrl += `${slug}`
        }
    })
}

export default useDeleteData