import React from 'react';
import SectionTitle from '../../../../components/SectionTitle/SectionTitle';

const DashboardHome = ({ products }) => {
    return (
        <>
            <SectionTitle title="Dashboard" />

            <div>
                <h3 className="mb-8">Total Products</h3>
                <span className="bg-blue-900 text-white py-4 px-8 text-center">{products.length}</span>
            </div>
        </>
    );
};

export default DashboardHome;