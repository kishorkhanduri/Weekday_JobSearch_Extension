// Configuration object to store default values for filters and options
const config = {
    // Object containing default values for filters
    'filterConfigs': {
        // Default value for minimum experience filter
        'Min experience': null,
        // Default value for location filter
        'Location': null,
        // Default value for remote/on-site filter
        'Remote/on-site': null,
        // Default value for company filter
        'Company': null,
        // Default value for role filter
        'Role': null,
        // Default value for minimum base pay filter
        'Min base pay': null
    },
    // Object containing default options for each filter
    'options': {
        // Options for minimum experience filter
        'Min experience': [
            { value: '2', label: '1' },
            { value: '2', label: '2' },
            { value: '3', label: '3' },
            { value: '4', label: '4' },
            { value: '5', label: '5' },
            { value: '6', label: '6' },
            { value: '7', label: '7' },
            { value: '8', label: '8' },
            { value: '9', label: '9' },
            { value: '10', label: '10' }
        ],
        // Default options for location filter
        'Location': [],
        // Options for remote/on-site filter
        'Remote/on-site': [
            { value: 'Remote', label: 'Remote' },
            { value: 'In-office', label: 'In-office' }
        ],
        // Default options for company filter
        'Company': [],
        // Default options for role filter
        'Role': [],
        // Options for minimum base pay filter
        'Min base pay': [
            { value: '0', label: '0L' },
            { value: '1', label: '1L' },
            { value: '2', label: '2L' },
            { value: '3', label: '3L' },
            { value: '4', label: '4L' },
            { value: '5', label: '5L' },
            { value: '6', label: '6L' },
            { value: '7', label: '7L' },
            { value: '8', label: '8L' },
            { value: '9', label: '9L' },
            { value: '10', label: '10L' }
        ]
    }
}

// Exporting the configuration object
export default config;
