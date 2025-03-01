# Travel Agency

This Node.js project fetches and displays travel agency information based on a combination of city names and search queries. It uses the Facebook Graph API to search for places related to travel and a postal API to retrieve location details based on a given pincode. The project demonstrates the use of modular JavaScript, HTTP requests, and the composition of query parameters to interact with external APIs.

## Overview

The project consists of several modules:

- **app.js:**  
  Combines arrays of cities and search queries to create API endpoints dynamically. It then calls the function to fetch and display data from the Facebook Graph API.

- **crossProduct.js:**  
  Generates a Cartesian product of two arrays (cities and search queries) to pair every city with each query.

- **fetchData.js:**  
  Makes HTTP requests to the constructed API URLs using the `request` package, processes the JSON responses, and logs the details (including travel agency name and location) to the console.

- **getLocation.js:**  
  Uses a postal API to fetch location details (such as Post Office names) for a given pincode.

- **resources.js:**  
  Contains the base URL and query string segments for constructing the API request URLs.

## Features

- **Dynamic Query Generation:**  
  Combines multiple cities with various search queries to generate a comprehensive list of API endpoints for fetching travel agency data.

- **External API Integration:**  
  - **Facebook Graph API:** Searches for travel-related places by combining search queries with city names.
  - **Postal API:** Retrieves postal details for a given pincode (demonstrated in `getLocation.js`).

- **Modular Design:**  
  Code is divided into multiple modules for clear separation of concerns and easier maintenance.

- **Simple Console Output:**  
  Logs fetched travel agency details, including name and formatted location, directly to the console.

## Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/en/download/) installed on your system.

### Installation

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/Vipin-1999/travel-agency.git
   cd travel-agency
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   ```
   This project uses the [`request`](https://www.npmjs.com/package/request) package for making HTTP requests. Please refer to its [installation and troubleshooting guide](https://www.npmjs.com/package/request) if you encounter any issues.

### Running the Project

Start the project by running:
```bash
npm start
```
This command executes the `app.js` script, which will fetch and display travel agency data in the console.

## External Packages

- **[request](https://www.npmjs.com/package/request):**  
  Used for making HTTP requests to external APIs. For installation details and troubleshooting, please see the [package documentation](https://www.npmjs.com/package/request).

- **[node-fetch](https://www.npmjs.com/package/node-fetch):**  
  Although included in the dependencies, this package is not utilized in the current codebase.

## Contributing

Contributions are welcome! If you have suggestions, improvements, or fixes (especially for better error handling or API integrations), please open an issue or submit a pull request.

## License

This project is licensed under the ISC License. See the [LICENSE](LICENSE) file for details.
