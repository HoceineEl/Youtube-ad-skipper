setInterval(() => {
    const button1 = document.querySelector('.ytp-ad-skip-button');
    const button2 = document.querySelector('.ytp-ad-skip-button-modern');
    if (button2) {
        button2.click()
    } else if (button1) {
        button1.click()
    } else {
        const buttons = document.querySelectorAll('button');
        for (let button of buttons) {
            if (button.className.includes('skip')) {
                button.click();
                break;
            }
        }
    }
}, 30); 
