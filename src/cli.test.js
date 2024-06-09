const { resolve } = require('path');
const { render } = require('cli-testing-library');
require('cli-testing-library/extend-expect');

describe('CLI Command Tests', () => {
    test('hello command outputs correct message', async () => {
        const { findByText } = await render('node', [
            resolve(__dirname, './cli.js'),
            'hello'
        ]);

        const output = await findByText('hello');
        expect(output).toBeInTheConsole();
    });
});
