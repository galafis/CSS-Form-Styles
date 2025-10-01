document.addEventListener('DOMContentLoaded', () => {
    const testInput = document.getElementById('test-input');
    const testSelect = document.getElementById('test-select');
    const testButton = document.getElementById('test-button');

    // Test 1: Check if form-input has a border
    const inputBorder = getComputedStyle(testInput).borderWidth;
    console.assert(inputBorder === '2px', 'Test 1 Failed: Input border width is not 2px');

    // Test 2: Check if btn-primary has a background color
    const buttonBg = getComputedStyle(testButton).backgroundColor;
    console.assert(buttonBg !== 'rgba(0, 0, 0, 0)', 'Test 2 Failed: Button background is transparent');

    // Test 3: Check if form-select has padding
    const selectPadding = getComputedStyle(testSelect).padding;
    console.assert(selectPadding.includes('12px'), 'Test 3 Failed: Select padding is incorrect');

    console.log('All basic CSS style tests completed.');
});
