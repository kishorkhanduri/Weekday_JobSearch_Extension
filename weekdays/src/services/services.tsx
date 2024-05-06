import fetchJobsFromAPI from "./fetchJobsFromAPI"
import config from "./config"
import populateJobsData from "./populateJobsData"
import applyFilters from "./applyFilters"
import initializeFilterOptions from "./initializeFilterOptions"
const services = {
    fetchJobsFromAPI: fetchJobsFromAPI,
    config: config,
    populateJobsData: populateJobsData,
    applyFilters: applyFilters,
    initializeFilterOptions: initializeFilterOptions
}

export default services