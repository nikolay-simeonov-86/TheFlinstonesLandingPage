$(document).ready(function () {
    // Validation functions
    function validateEmail(email) {
        let regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return regex.test(email);
    }
    function validateUsername(username) {
        let regex = /^[A-Za-z]{4,12}$/;
        return regex.test(username);
    }
    function validatePassword(password) {
        let regex = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+-=])[a-zA-Z0-9!@#$%^&*]{6,12}$/;
        return regex.test(password);
    }
    function validateConfirmPassword(confirmPassword, password) {
        let regex = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+-=])[a-zA-Z0-9!@#$%^&*]{6,12}$/;
        if (confirmPassword === password) {
            return regex.test(confirmPassword);
        } else {
            return false;
        }
    }

    let screenWidth = screen.availWidth;

    // Mobile device
    if (screenWidth < 767) {
        $('.navbar-brand').removeClass('p-4');
        $('#left-col').removeClass('col-6').addClass('col-12');
        $('#first-row-right-col').removeClass('col-6').addClass('col-12');
        $('#form-column').removeClass('col-4').addClass('col-12');
        $('#nav-bar-login-btn').detach().appendTo('.navbar');
        $('#darker-backgound-container').appendTo('#main-content');
        $('#uk-flag').detach().appendTo('#header-menu-items');
        $('#gambling-commission').detach().appendTo('#header-menu-items');
        $('.navbar .fas.fa-lock').detach().appendTo('#header-menu-items');
        $('#secure-payments').detach().appendTo('#header-menu-items');
        $('.fas.fa-shield-alt').detach().appendTo('#header-menu-items');
        $('#data-protection').detach().appendTo('#header-menu-items');
        $('#ligal-line').detach().appendTo('#darker-backgound-container').text('© Ligal line (s17)');
        $('#terms-and-conditions').detach().appendTo('#darker-backgound-container').removeClass('col-6').addClass('col-12');
        $('#icons-container').detach().appendTo('#darker-backgound-container');
        $('#right-col').removeClass('col-6').addClass('col-12').clone().appendTo('#darker-backgound-container').removeClass('col-5').addClass('col-12');
        $('#get-your-discount-line-three').text('+100 Free Spins');
        $('#exclusive-offer').html('Exclusive offer ' + '<span>/ logo</span>');
        [...document.getElementsByClassName("game-icons")].forEach(
            (element, index, array) => {
                if (index > 3) {
                    element.classList.add('d-none');
                }
            }
        );
    }

    // Tablet device
    if (screenWidth >= 768 && screenWidth <= 1024) {
        $('.navbar-brand').removeClass('p-4').addClass('pl-3');
        $('#first-row-right-col').removeClass('col-6').addClass('col-12');
        $('#flinstones-car').removeClass('col-6').addClass('col-12');
        $("#terms-and-conditions").detach().appendTo('#flinstones-div').removeClass('col-6').addClass('col-12');
        $('#form-column').removeClass('col-4').addClass('col-12');
        $('#get-your-discount-line-three').text('+100 Free Spins');
        [...document.getElementsByClassName("game-icons")].forEach(
            (element, index, array) => {
                if (index > 3) {
                    element.classList.add('d-none');
                }
            }
        );
        [...document.getElementsByClassName("space-between-covers")].forEach(
            (element, index, array) => {
                if (index >= 3) {
                    element.classList.add('d-none');
                }
            }
        );
    }

    // Slide form action
    $('form').addClass('form-transform-animation');

    // Hover action on game cover photos
    $(".game-icons").on({
        mouseenter: function () {
            $(this).find('.hover-over-cover-image').toggleClass('d-none');
        },
        mouseleave: function () {
            $(this).find('.hover-over-cover-image').toggleClass('d-none');
        }
    });

    // Validate and submit action on first form
    $('#join-now-btn').on({
        click: function (e) {
            e.preventDefault();
            let emailValidationCheck = false;
            let usernameValidationCheck = false;
            let passwordValidationCheck = false;
            let confirmPasswordValidationCheck = false;
            let termsOfUseValidationCheck = false;
            let email = $('#defaultRegisterFormEmail');
            if (validateEmail(email.val())) {
                $('#email-form').find('.form-notification').addClass('d-none');
                emailValidationCheck = true;
            } else {
                $('#email-form').find('.form-notification').removeClass('d-none').text('Email not correctly written!').css('color','red');
            }
            let username = $('#defaultRegisterFormUserName');
            if (validateUsername(username.val())) {
                $('#username-form').find('.form-notification').addClass('d-none');
                usernameValidationCheck = true;
            } else {
                $('#username-form').find('.form-notification').removeClass('d-none').text('Username not correctly written!').css('color','red');
            }
            let password = $('#defaultRegisterFormPassword');
            if (validatePassword(password.val())) {
                $('#password-form').find('.form-notification').addClass('d-none');
                passwordValidationCheck = true;
            } else {
                $('#password-form').find('.form-notification').removeClass('d-none').text('Password not correctly written!').css('color','red');
            }
            let confirmPassword = $('#defaultRegisterFormConfirmPassword');
            if (validateConfirmPassword(confirmPassword.val(), password.val())) {
                $('#confirm-password-form').find('.form-notification').addClass('d-none');
                confirmPasswordValidationCheck = true;
            } else {
                $('#confirm-password-form').find('.form-notification').removeClass('d-none').text('Confirm password not correctly written!').css('color','red');
            }
            let termsOfUse = $('#defaultRegisterFormTermsOfUseCheckbox');
            if (termsOfUse.is(':checked')) {
                $('#terms-of-use-checkbox-form').find('.form-notification').addClass('d-none');
                termsOfUseValidationCheck = true;
            } else {
                $('#terms-of-use-checkbox-form').find('.form-notification').removeClass('d-none').text('Terms of use must be accepted').css('color','red');
            }
            if (emailValidationCheck && usernameValidationCheck && passwordValidationCheck && confirmPasswordValidationCheck && termsOfUseValidationCheck) {
                $('#first-form').addClass('d-none');
                $('#second-form').removeClass('d-none');
            }
        }
    });

    $('#defaultRegisterFormBonusCodeCheckbox').on({
        click: function () {
            $('#bonus-code-form').toggleClass('d-none');
        }
    });

    $('#continue-registration-btn').on({
        click: function (e) {
            e.preventDefault();
            $('#second-form').addClass('d-none');
            $('#third-form').removeClass('d-none');
        }
    });

    $('#continue-registration-last-btn').on({
        click: function (e) {
            e.preventDefault();
            let phoneNumberContainer = $('#phone-number-form');
            let phoneNumber = $('#defaultRegisterFormPhoneNumber');
            let phoneNumberEmpty = true;
            let postalCodeContainer = $('#postal-code-form');
            let postalCode = $('#defaultRegisterFormPostalCode');
            let postalCodeEmpty = true;
            let countryContainer = $('#country-form');
            let country = $('#defaultRegisterFormCountry');
            let countryEmpty = true;
            let cityContainer = $('#city-form');
            let city = $('#defaultRegisterFormCity');
            let cityEmpty = true;
            let addressTwoContainer = $('#address-two-form');
            let addressTwo = $('#defaultRegisterFormAddressTwo');
            let addressTwoEmpty = true;
            let addressOneContainer = $('#address-one-form');
            let addressOne = $('#defaultRegisterFormAddressOne');
            let addressOneEmpty = true;
            let bonusCodeContainer = $('#bonus-code-form');
            let bonusCode = $('#defaultRegisterFormBonusCode');
            let bonusCodeEmpty = true;
            let bonusCodeCheckbox = $('#defaultRegisterFormBonusCodeCheckbox');

            if (phoneNumber.val().length) {
                phoneNumberEmpty = false;
                phoneNumberContainer
                    .find('.form-notification')
                    .addClass('d-none');
            } else {
                phoneNumberContainer
                    .find('.form-notification')
                    .removeClass('d-none')
                    .text('Phone Number is empty!')
                    .css('color','red');
            }
            if (postalCode.val().length) {
                postalCodeEmpty = false;
                postalCodeContainer
                    .find('.form-notification')
                    .addClass('d-none');
            } else {
                postalCodeContainer
                    .find('.form-notification')
                    .removeClass('d-none')
                    .text('Postal Code is empty!')
                    .css('color','red');
            }
            if (country.val().length) {
                countryEmpty = false;
                countryContainer
                    .find('.form-notification')
                    .addClass('d-none');
            } else {
                countryContainer
                    .find('.form-notification')
                    .removeClass('d-none')
                    .text('Country is empty!')
                    .css('color','red');
            }
            if (city.val().length) {
                cityEmpty = false;
                cityContainer
                    .find('.form-notification')
                    .addClass('d-none');
            } else {
                cityContainer
                    .find('.form-notification')
                    .removeClass('d-none')
                    .text('City is empty!')
                    .css('color','red');
            }
            if (addressTwo.val().length) {
                addressTwoEmpty = false;
                addressTwoContainer
                    .find('.form-notification')
                    .addClass('d-none');
            } else {
                addressTwoContainer
                    .find('.form-notification')
                    .removeClass('d-none')
                    .text('Address Two is empty!')
                    .css('color','red');
            }
            if (addressOne.val().length) {
                addressOneEmpty = false;
                addressOneContainer
                    .find('.form-notification')
                    .addClass('d-none');
            } else {
                addressOneContainer
                    .find('.form-notification')
                    .removeClass('d-none')
                    .text('Address One is empty!')
                    .css('color','red');
            }
            if (bonusCodeCheckbox.is(':checked')) {
                if (bonusCode.val().length) {
                    bonusCodeEmpty = false;
                    bonusCodeContainer
                        .find('.form-notification')
                        .addClass('d-none');
                } else {
                    bonusCodeContainer
                        .find('.form-notification')
                        .removeClass('d-none')
                        .text('Bonus Code is empty!')
                        .css('color','red');
                }
                if (!phoneNumberEmpty &&
                    !postalCodeEmpty &&
                    !countryEmpty &&
                    !cityEmpty &&
                    !addressTwoEmpty &&
                    !addressOneEmpty &&
                    !bonusCodeEmpty) {
                    $('#third-form').addClass('d-none');
                    $('#fourth-form').removeClass('d-none');
                }
            } else {
                if (!phoneNumberEmpty &&
                    !postalCodeEmpty &&
                    !countryEmpty &&
                    !cityEmpty &&
                    !addressTwoEmpty &&
                    !addressOneEmpty) {
                    $('#third-form').addClass('d-none');
                    $('#fourth-form').removeClass('d-none');
                }
            }
        }
    });
});