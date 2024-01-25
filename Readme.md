# Web3 Analytics Project

This project is a simple TypeScript application that interacts with a Web3 wallet using Infura, stores data in a MongoDB database, and tracks events using Google Analytics.

## Setup

### Prerequisites

- Node.js and npm installed
- MongoDB installed and running
- Infura API key (sign up [here](https://infura.io/))

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/web3-analytics-project.git

2. Navigate to project directory:

    ```bash
   cd web3-analytics-project

3. Install dependencies:

    ```bash
     npm install

4. Create a .env file in the project root and add your Infura node URL:

    ```bash
    INFURA_NODE_URL=https://mainnet.infura.io/v3/your-infura-api-key

Replace your-infura-api-key with your actual Infura API key.

5. Run the project:

    ```bash
    npm install


 **Project Structure**

src/: Contains TypeScript source code.
index.ts: Main script that orchestrates the Web3 interaction, database storage, and Google Analytics tracking.
web3-interaction.ts: Module for interacting with the Web3 wallet using Infura.
database.ts: Module for connecting to MongoDB and storing data.
google-analytics.ts: Module for tracking events using Google Analytics.

**Customization**

Replace placeholder values in the code with your actual wallet address, MongoDB connection details, and Google Analytics tracking ID.
Customize the Web3 interactions in web3-interaction.ts based on your project requirements.

**License**
This project is licensed under the ISC License - see the LICENSE file for details.

