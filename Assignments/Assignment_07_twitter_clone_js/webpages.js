export default (function pageLoad() {
    // page id load-ins
    var home = document.getElementById('HomePage');
    var signIn = document.getElementById('Sign-In');
    var signUp = document.getElementById('Sign-Up');
    var dash = document.getElementById('Dashboard');


    // initialize functions for page displays
    function homeDisplay() {
        home.style.display = 'block';
        signIn.style.display = 'none';
        signUp.style.display = 'none';
        dash.style.display = 'none';
    }

    function signInDisplay() {
        home.style.display = 'none';
        signIn.style.display = 'block';
        signUp.style.display = 'none';
        dash.style.display = 'none';
    }

    function signUpDisplay() {
        home.style.display = 'none';
        signIn.style.display = 'none';
        signUp.style.display = 'block';
        dash.style.display = 'none';
    }

    function dashDisplay() {
        home.style.display = 'none';
        signIn.style.display = 'none';
        signUp.style.display = 'none';
        dash.style.display = 'block';
    }

    // IIFE Homepage
    (function homeImmediately() {
        homeDisplay()
    })();

    // initialize onclick events for each page
    $(`#homeSignIn`).click(() => {
        signInDisplay()
    })
    $(`#homeSignUp`).click(() => {
        signUpDisplay()
    })
    $(`#signInSignUp`).click(() => {
        signUpDisplay()
    })
    $(`#signUpSignIn`).click(() => {
        signInDisplay()
    })

    // css styles for both mobile and desktop view load-ins
    var homeMobile = document.getElementById('homeMobile');
    var homeDesk = document.getElementById('homeDesk');

    var signInMobile = document.getElementById('signInMobile');
    var signInDesk = document.getElementById('signInDesk');

    var signUpMobile = document.getElementById('signUpMobile');
    var signUpDesk = document.getElementById('signUpDesk');

    var dashMobile = document.getElementById('dashMobile');
    var dashDesk = document.getElementById('dashDesk');

    // HomePage Display
    if (home.style.display === 'block') {
        homeDisplay();
        // css display
        // homeMobile.style.display = 'block';
        // homeDesk.style.display = 'none'
    }
    // Sign-In Display
    else if (signIn.style.display === 'block') {
        signInDisplay();
        // css display
        // signInMobile.style.display = 'block';
        // signUpDesk.style.display = 'none'
    }
    // Sign-Up Display
    else if (signUp.style.display === 'block') {
        signUpDisplay();
        // css display
        // signUpMobile.style.display = 'block';
        // signUpDesk.style.display = 'none'
    }
    // Dashboard Display
    else {
        dashDisplay();
        // css display
        // dashMobile.style.display = 'block';
        // dashDesk.style.display = 'none'
    }

    // export { homeDisplay, signInDisplay, signUpDisplay, dashDisplay }
})();
