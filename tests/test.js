document.addEventListener('DOMContentLoaded', () => {
    const testInput = document.getElementById('test-input');
    const testSelect = document.getElementById('test-select');
    const testButton = document.getElementById('test-button');
    const validTextInput = document.getElementById('valid-input');
    const invalidTextInput = document.getElementById('invalid-input');
    const checkbox = document.getElementById('checkbox1');
    const radio = document.getElementById('radio1');
    const textarea = document.getElementById('message');
    const fileInputLabel = document.querySelector('.file-input-label');

    let testsPassed = 0;
    let totalTests = 0;

    function runTest(name, assertion) {
        totalTests++;
        if (assertion()) {
            console.log(`✅ ${name}: Passed`);
            testsPassed++;
        } else {
            console.error(`❌ ${name}: Failed`);
        }
    }

    // Test 1: Input border width
    runTest('Input border width', () => getComputedStyle(testInput).borderWidth === '2px');

    // Test 2: Primary button background (should have a background image for gradient)
    runTest("Primary button background", () => getComputedStyle(testButton).backgroundImage.includes("linear-gradient"));

    // Test 3: Select padding
    runTest('Select padding', () => getComputedStyle(testSelect).padding.includes('12px'));

    // Test 4: Valid input border color
    runTest('Valid input border color', () => getComputedStyle(validTextInput).borderColor === 'rgb(40, 167, 69)'); // --success-color

    // Test 5: Invalid input border color
    runTest('Invalid input border color', () => getComputedStyle(invalidTextInput).borderColor === 'rgb(220, 53, 69)'); // --error-color

    // Test 6: Checkbox accent color
    runTest('Checkbox accent color', () => getComputedStyle(checkbox).accentColor === 'rgb(102, 126, 234)'); // --primary-color

    // Test 7: Radio button accent color
    runTest('Radio button accent color', () => getComputedStyle(radio).accentColor === 'rgb(102, 126, 234)'); // --primary-color

    // Test 8: Textarea min-height
    runTest('Textarea min-height', () => getComputedStyle(textarea).minHeight === '120px');

    // Test 9: File input label border style
    runTest('File input label border style', () => getComputedStyle(fileInputLabel).borderStyle === 'dashed');

    console.log(`\n--- Test Summary ---\n${testsPassed} of ${totalTests} tests passed.`);

    if (testsPassed === totalTests) {
        console.log('All CSS style tests passed successfully!');
    } else {
        console.error('Some CSS style tests failed. Please check the console for details.');
    }
});

