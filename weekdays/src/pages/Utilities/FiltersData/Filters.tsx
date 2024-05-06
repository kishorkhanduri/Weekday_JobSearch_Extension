import Utilities from '../Utilities';
import './Filters.css';

// Component responsible for populating UI with different filters
export default function FiltersData(props: any) {
    // Extracting filter names from filterConfigs to create a filter for each filter name
    let filterNames = Object.keys(props.filterConfigs);

    return (
        <div className='Filters'>
            <div className='FilterOption'>
                {/* Map through each filter name and render a Filter component */}
                {filterNames.map((filterName: string, index: number) => (
                    <Utilities.Filter
                        key={index}
                        title={filterName}
                        index={index}
                        options={props.options}
                        filterConfigs={props.filterConfigs}
                        setFilterConfigs={props.setFilterConfigs}
                    />
                ))}
            </div>
        </div>
    );
}
