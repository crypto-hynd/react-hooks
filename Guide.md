# useFetch Hook
## Introduction
In this tutorial we will learn how to build our
own custom hook to extract component
logic for fetching data intoareusable
function.

We'll create the useFetch hook to fetch
data from different API endpoints without
unnecessary code repetition.

To create custom hooks you need to be
familiar with useState and useEffect hook.

# Let's get started
For this example we will be using the SWAPI
API to fetch data related to planets
Instead of repeating the logic for fetching
data in the list and detail component we can
createacustom hook that will handle this
logic and bring it into both components ina
more clean and nicer way

## Final notes
If you want to manage fetching updated
data you can make useFetch accept not
only the url but also the refresh
argument as boolean
Manage this value from the component
which uses the useFetch hook
Make sure to add refresh to the
useEffect dependency array in the
use-fetch.js file
Remember to remove strict mode
wrapper around the App component