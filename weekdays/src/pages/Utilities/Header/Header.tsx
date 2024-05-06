import './Header.css';

// Component representing the header UI, which also displays the total number of jobs available on the platform
export default function Header(props: any) {
    return (
        <div className='container'>
            <div className='Header'>
                {/* Header title */}
                Search Jobs
                {/* Display the total number of jobs available */}
                <div className='jobsCount'>
                    {props.jobsCount}
                </div>
            </div>
        </div>
    );
}
