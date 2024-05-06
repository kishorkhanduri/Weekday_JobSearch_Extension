import './JobCard.css';
import { MdBolt } from "react-icons/md";
// Component representing a card displaying various job details
export default function JobCard(props: any) {
    return (
        <div className='jobCard' key={props.index} style={
            /* Set display property based on visibility */
            {
                display: props.visibility ? "inherit" : "none"
            }
        }>
            <div className='jobCardContainer'>
                {/* Company details section */}
                <div className='jobCardCompany'>
                    <img src={props.logoUrl} className='jobCardCompanyLogo'></img>
                    <div className='jobCardCompanyText'>
                        <a href={props.jdLink} target='_blank'><div className='jobCardCompanyName'>{props.companyName}</div></a>
                        <div className='jobCardJobRole'>{props.jobRole}</div>
                        <div className='jobCardLocation'>{props.location}</div>
                    </div>
                </div>
                {/* Salary details */}
                <div className='jobCardSalary'>Estimated Salary: {props.minJdSalary ? props.salaryCurrencyCode + " " + props.minJdSalary + " - " : ""} {props.maxJdSalary} $ ✅
                </div>
                {/* About company section */}
                <div className='jobCardAboutCompanyLabel'>About Company</div>
                <div className='jobCardAboutCompany'>{props.jobDetailsFromCompany}</div>
                {/* View job button */}
                <div className='jobCardViewJob'>View job</div>

                {/* Experience details */}
                <div className='jobCardExperienceFlex'>
                    <div className='jobCardExperienceLabel'>
                        {props.minExp ? "Minimum Experience" : "Minimum Experience"}
                    </div>
                    <div className='jobCardExperience'>
                        {props.minExp ? props.minExp + " years" : "NA"}
                    </div>
                </div>
                {/* Easy apply button */}
                <a><button className='jobCardEasyApply'><MdBolt className="applyicon" size={24} />Easy Apply</button></a>
            </div>
        </div>
    )
}
