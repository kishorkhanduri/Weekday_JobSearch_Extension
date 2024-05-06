import Utilities from '../Utilities';
import './JobCards.css';

// Flexbox container for displaying job cards
export default function JobCards(props: any) {
    return (
        <div className='jobCards'>
            {/* Flex container for job cards */}
            <div className='jobCardsFlex' onScroll={(event) => {
                let obj: any = event.target;
                // Requesting a new page when the bottom of the current results is reached
                if (obj.scrollTop >= obj.scrollHeight - obj.offsetHeight - 10) {
                    props.setOffset(props.offset + 1);
                }
            }}>
                {/* Mapping through job cards to render */}
                {
                    props.jobCards.map((jobCard: any, index: number) => {
                        return <Utilities.JobCard {...jobCard} index={index}></Utilities.JobCard>;
                    })
                }
            </div>
        </div>
    );
}
