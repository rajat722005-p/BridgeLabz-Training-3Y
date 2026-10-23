// Q4: Custom Form Builder

class FormBuilder {
    constructor(fields, container) {
        this.fields = fields;
        this.container = container;
        this.form = null;
    }

    // Generate the form dynamically
    renderForm() {
        const fieldsHTML = this.fields.map((field, index) => {
            const fieldName = field.name || `field${index + 1}`;

            const requiredAttribute = field.required === false
                ? ""
                : "required";

            return `
                <label for="field${index}">${field.label}</label>
                <input
                    type="${field.type}"
                    id="field${index}"
                    name="${fieldName}"
                    ${requiredAttribute}
                >
            `;
        }).join("");

        // Insert the generated form into the container
        this.container.innerHTML = `
            <form id="dynamicForm">
                ${fieldsHTML}
                <button type="submit">Submit</button>
            </form>

            <h3>Submitted Form Data</h3>
            <pre id="formOutput"></pre>
        `;

        this.form = this.container.querySelector("#dynamicForm");

        // Handle form submission
        this.form.addEventListener("submit", event => {
            event.preventDefault();

            const formData = this.getFormData();

            this.container.querySelector("#formOutput").textContent =
                JSON.stringify(formData, null, 2);
        });
    }

    // Return all entered values as an object
    getFormData() {
        return Object.fromEntries(
            new FormData(this.form).entries()
        );
    }
}

// Define the fields required in the form
const fields = [
    {
        type: "text",
        label: "Username",
        name: "username"
    },
    {
        type: "email",
        label: "Email",
        name: "email"
    },
    {
        type: "password",
        label: "Password",
        name: "password"
    }
];

// Create and display the dynamic form
const formContainer = document.getElementById("formContainer");

const formBuilder = new FormBuilder(fields, formContainer);

formBuilder.renderForm();