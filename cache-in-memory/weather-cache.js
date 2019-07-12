let cache = {}
const key = 'CKEY';

/**
 * Simple module to cache data from external source.
 * Ex: Assuming that we are calling an external endpoint to fetch
 * data and we would like to catch it instead of calling it
 * over again.
 */
const fetch = () => {
    if (cache[key]) {
        console.log('Fetching from cache')
        return Promise.resolve(cache[key])
    } else {
        const value = [
            {
                city: 'Kuala Lumpur',
                code: 'KUL',
                value: 40,
                unit: 'Degrees'
            },
            {
                name: 'New York',
                code: 'NY',
                value: 22,
                unit: 'Degrees'
            }
        ];
        // Assume that the above value comes from an endpoint.
        cache[key] = value;
        console.log('Setting cache')
        return Promise.resolve(cache[key]);
    }
}

exports.fetch = fetch;