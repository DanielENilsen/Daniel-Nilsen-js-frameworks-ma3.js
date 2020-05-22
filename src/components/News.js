import React from "react";
import NewsList from "./NewsList/NewsList";
import Heading from "./Heading/Heading";



function News() { 
    return (
        <div>
            <Heading title="Heading" />
            <NewsList />
        </div>
        
    );
}
export default News;