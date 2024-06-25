import React from 'react';
import Cards from './Cards';
import LoanImg from '../../resources/applicant.png';
import JobImg from '../../resources/resume.png';
import ContactImg from '../../resources/calling.png';
import DepositeImg from '../../resources/application.png';

const Dashboard = () => {
    return (
        <div className="bg-gray-100 min-h-screen">
            <div className='bg-gray-700 h-20 flex items-center justify-center mb-6 md:mb-10'>
                <h1 className='text-center text-white text-3xl font-black'>Dashboard</h1>
            </div>
            
            <div className='max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8'>
                    <Cards 
                        title="Job Form"
                        entries="Total Entries"
                        imageSrc={JobImg}
                        destination="/JobForm"
                        buttonText="View Entries"
                    />

                    <Cards
                        title="Contact Form"
                        entries="Total Entries"
                        imageSrc={ContactImg}
                        destination="/ContactForm"
                        buttonText="View Entries"
                    />

                    <Cards
                        title="Loan Form"
                        entries="Total Entries"
                        imageSrc={LoanImg}
                        destination="/LoanForm"
                        buttonText="View Entries"
                    />

                    <Cards
                        title="Deposit Form"
                        entries="Total Entries"
                        imageSrc={DepositeImg}
                        destination="/DepositForm"
                        buttonText="View Entries"
                    />
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
