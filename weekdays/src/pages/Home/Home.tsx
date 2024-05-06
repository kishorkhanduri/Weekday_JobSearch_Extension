import { useEffect, useState } from 'react';
import Utilities from '../Utilities/Utilities';
import services from '../../services/services';
import './Home.css';

// Component representing the Home page
export default function Home() {
    // State to hold details of all the fetched jobs from Weekday's API
    let [jobCards, setJobsCards] = useState<Array<any>>([]);
    // State to hold the number of results returned per page 
    let [limit, setLimit] = useState<Number>(10);
    // State to hold the page number
    let [offset, setOffset] = useState<Number>(0);
    // State to hold a set of different job roles available
    let [roleArray, setRoleArray] = useState<Array<any>>([]);
    // State to hold a set of different job locations
    let [locationArray, setLocationArray] = useState<Array<any>>([]);
    // State to hold a set of different companies
    let [companyArray, setCompanyArray] = useState<Array<any>>([]);
    // State to hold the total number of jobs on the platform
    let [jobsCount, setJobsCount] = useState<Number>(0);
    // State to hold filter configurations
    let [filterConfigs, setFilterConfigs] = useState<any>(services.config['filterConfigs']);
    // State to hold available filter options
    let [options, setOptions] = useState<any>(services.config['options']);

    // Effect to populate jobs data from the API based on limit and offset
    useEffect(() => {
        services.populateJobsData(limit, offset, filterConfigs, jobCards, setJobsCards, setJobsCount);
    }, [limit, offset]);

    // Effect to change job visibility based on applied filters
    useEffect(() => {
        services.applyFilters(jobCards, filterConfigs, setJobsCards);
    }, [filterConfigs]);

    // Effect to populate filter options based on fetched jobs data
    useEffect(() => {
        services.initializeFilterOptions(jobCards, setRoleArray, setLocationArray, setCompanyArray);
    }, [jobCards]);

    // Effect to update new options across components
    useEffect(() => {
        setOptions({ ...options, 'Role': roleArray, 'Location': locationArray, 'Company': companyArray });
    }, [roleArray, locationArray, companyArray]);

    return (
        <div className='container'>
            <div className='header'>
                {/* Display header component */}
                <Utilities.Header jobsCount={jobsCount}></Utilities.Header>
                {/* Display filters component */}
                <Utilities.Filters
                    filterConfigs={filterConfigs}
                    setFilterConfigs={setFilterConfigs}
                    options={options}
                ></Utilities.Filters>
            </div>
            {/* Display job cards component */}
            <Utilities.JobCards
                jobCards={jobCards}
                setLimit={setLimit}
                limit={limit}
                setOffset={setOffset}
                offset={offset}
            ></Utilities.JobCards>
        </div>
    );
}
