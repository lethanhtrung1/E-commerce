function validator(options) {
    let selectorRules = {};

    function validate(inputElement, rule) {
        let errorElement = inputElement.parentElement.querySelector(".form-message");
        let arrayRule = selectorRules[rule.selector];
        let errorMessage;
        for (let i = 0; i < arrayRule.length; i++) {
            errorMessage = arrayRule[i](inputElement.value);
            if (errorMessage) {
                // console.log(errorMessage);
                break;
            }
        }

        if (errorMessage) {
            errorElement.innerText = errorMessage;
            inputElement.parentElement.classList.add("invalid");
        } else {
            errorElement.innerText = "";
            inputElement.parentElement.classList.remove("invalid");
        }
    }
    let form = document.querySelector(options.form);
    if (form) {
        form.onsubmit = (e) => {
            e.preventDefault();

            options.rules.forEach((rule) => {
                let inputElement = form.querySelector(rule.selector);
                // console.log(inputElement);
                // console.log(rule);
                validate(inputElement, rule);
            });
        };

        options.rules.forEach((rule) => {
            if (!Array.isArray(selectorRules[rule.selector])) {
                selectorRules[rule.selector] = [rule.test];
            } else {
                selectorRules[rule.selector].push(rule.test);
            }

            let inputElements = form.querySelectorAll(rule.selector);
            Array.from(inputElements).forEach((inputElement) => {
                inputElement.onblur = () => {
                    validate(inputElement, rule);
                };

                inputElement.oninput = () => {
                    let errorElement = inputElement.parentElement.querySelector(".form-message");
                    errorElement.innerText = "";
                    inputElement.parentElement.classList.remove("invalid");
                };
            });
        });
    }
}

validator.isRequired = (selector) => {
    return {
        selector: selector,
        test: function (value) {
            return value.trim() ? undefined : "This field is required. Please enter information.";
        },
    };
};

validator.isEmail = (selector) => {
    return {
        selector: selector,
        test: function (value) {
            let regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
            return regex.test(value) ? undefined : "Invalid email format. Please enter a valid email address.";
        },
    };
};

validator.minLength = (selector, minLength) => {
    return {
        selector: selector,
        test: function (value) {
            return value.length >= minLength ? undefined : `Your password is too short. Password must be at least ${minLength} characters.`;
        },
    };
};

validator.isPhone = (selector) => {
    return {
        selector: selector,
        test: function (value) {
            for (let i = 0; i < value.length; i++) {
                if (value[i] == " ") {
                    return "Phone number does not contain special characters and spaces";
                }
            }
            if (value.length < 10) return "Phone number is required 10 digits";
            return undefined;
        },
    };
};

validator({
    form: "#form-login",
    rules: [validator.isRequired(".email"), validator.isEmail(".email"), validator.isRequired(".password"), validator.minLength(".password", 6)],
});
