const {generateText} = require('./testing');

test('should output name', () => {
    const text = generateText('Max',29);
    expect(text).toBe('Max (29 years old)');
});

test('should output data-less text', () => {
    const text = generateText("",'');
    expect(text).toBe(' ( years old)');
})
