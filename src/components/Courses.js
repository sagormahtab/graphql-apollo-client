import React from 'react';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';

const courses = gql`
    query{
        courses{
            id
            title
            author
            description
            topic
            url
        }
    }
`;

const Courses = () => {
    const { loading, error, data } = useQuery(courses);

    if(loading) return <p>loading...</p>;
    if(error) return <p>Error :(</p>;

    return data.courses.map(({id, title, author, description, topic, url}) => (
        <div key={id}>
            <p>{`Title: ${title}`}</p>
        </div>
    ))
};

export default Courses;