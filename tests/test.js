document.addEventListener('DOMContentLoaded', () => {
    const testInput = document.getElementById('test-input');
    const testSelect = document.getElementById('test-select');
    const testButton = document.getElementById('test-button');
    const passwordInput = document.getElementById('password');
    const passwordToggle = document.querySelector('.password-toggle');
    const rangeInput = document.getElementById('volume');

    // Test 1: Check if form-input has a border
    const inputBorder = getComputedStyle(testInput).borderWidth;
    console.assert(inputBorder === '2px', 'Test 1 Failed: Input border width is not 2px');

    // Test 2: Check if btn-primary has a background color
    const buttonBg = getComputedStyle(testButton).backgroundColor;
    console.assert(buttonBg !== 'rgba(0, 0, 0, 0)', 'Test 2 Failed: Button background is transparent');

    // Test 3: Check if form-select has padding
    const selectPadding = getComputedStyle(testSelect).padding;
    console.assert(selectPadding.includes('12px'), 'Test 3 Failed: Select padding is incorrect');

    // Test 4: Password toggle functionality
    if (passwordInput && passwordToggle) {
        passwordToggle.click(); // Toggle to text
        console.assert(passwordInput.getAttribute('type') === 'text', 'Test 4 Failed: Password input type did not change to text');
        passwordToggle.click(); // Toggle back to password
        console.assert(passwordInput.getAttribute('type') === 'password', 'Test 4 Failed: Password input type did not change back to password');
    }

    // Test 5: Range input background color
    if (rangeInput) {
        const rangeBg = getComputedStyle(rangeInput).background;
        console.assert(rangeBg.includes('rgb(221, 221, 221)'), 'Test 5 Failed: Range input background color is incorrect');
    }

    // Test 6: Focus-within styling for label
    const formGroup = testInput.closest('.form-group');
    const label = formGroup.querySelector('label');
    if (testInput && formGroup && label) {
        testInput.focus();
        const labelColorOnFocus = getComputedStyle(label).color;
        console.assert(labelColorOnFocus === 'rgb(102, 126, 234)', 'Test 6 Failed: Label color did not change on focus-within');
        testInput.blur();
    }

    console.log('All basic CSS style and functionality tests completed.');
});

