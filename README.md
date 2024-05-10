# Your Package Name CLI

## Description

This CLI tool provides a simple command to output a greeting message. It is built using Node.js and the Commander.js library.

### Prerequisites

Ensure you have Node.js installed on your machine. You can download it from [Node.js official website](https://nodejs.org/).

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/your-package-name.git
   ```

2. Navigate into the project directory:

   ```bash
   cd your-package-name
   ```

3. Install the necessary dependencies:

   ```bash
   npm install
   ```

### Running

To use the CLI commands globally on your system, you can link the package:
4. To run the CLI locally without linking, you can use the `node` command followed by the script path:

   ```bash
   node ./src/cli.js
   ```

### Linking

5. To link the package and use the CLI commands globally on your system, run:

```bash
   npm link

```

then

```bash
   your-cli-command command
```

This will allow you to use the CLI command `your-cli-command` directly in your terminal.

### Adding New Commands

To add new commands to the CLI:

1. Open the `src/cli.js` file.
2. Define a new command using the `program.command()` method. For example:

```javascript
async function hello() {
    console.log("Hello")
}

module.exports = { hello };

```

```javascript
program
    .command('new-command')
    .description('Describe what this command does')
    .action(() => {
        const {hello} = require('./hello') 
        await hello();
    });
```

3. Save the changes and link the package again if necessary to test the new command globally.

### Testing Commands

To test the CLI commands:

1. You can manually test each command by running them from the terminal.
2. For automated testing, consider setting up a testing framework like Jest. Create a test file, for example `cli.test.js`, and write tests for each command:

   ```javascript
   describe('CLI Command Tests', () => {
       test('Test new-command', () => {
           const output = console.log;
           console.log = jest.fn(); // Mock console.log
           require('./src/cli.js');
           expect(console.log).toHaveBeenCalledWith('This is a new command');
           console.log = output; // Restore original console.log
       });
   });
   ```

3. Run your tests using:

   ```bash
   npm test
   ```
