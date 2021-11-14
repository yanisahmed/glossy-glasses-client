import React from 'react';

const SectionTitle = ({ title }) => {
    return (
        <div className="container mx-auto">
            <h3 className="text-2xl font-medium border-b pb-2 ">{title}</h3>
        </div>
    );
};

export default SectionTitle;