// Sample services information
const services = {
    laboratory: [
        { name: "Drug Test", description: "Testing for drugs in the system", price: 100 },
        { name: "X-Ray", description: "Imaging for bone fractures", price: 200 },
        { name: "Blood Test", description: "General blood analysis", price: 150 },
        { name: "Histopathology", description: "Tissue examination", price: 300 },
        { name: "Molecular Diagnosis", description: "DNA testing", price: 400 }
    ],
    checkups: [
        { name: "Creatinine Test", description: "Kidney function test", price: 80 },
        { name: "Blood Pressure Check", description: "Monitoring blood pressure", price: 20 },
        { name: "Uric Acid Test", description: "Testing uric acid levels", price: 75 },
        { name: "Temperature Check", description: "Checking body temperature", price: 15 },
        { name: "Iron Panel", description: "Iron level analysis", price: 60 }
    ],
    operations: [
        { name: "Appendectomy", description: "Removal of the appendix", price: 1500 },
        { name: "Cesarean Section", description: "Surgical delivery", price: 2000 },
        { name: "Cataract Surgery", description: "Eye surgery", price: 2500 },
        { name: "Tonsillectomy", description: "Removal of tonsils", price: 1000 },
        { name: "Hernia Repair", description: "Operation to repair hernias", price: 1200 }
    ]
};

// Function to admit a patient
function admitPatient() {
    const name = prompt("Enter the patient's name:");
    const birthday = prompt("Enter the patient's birthday (YYYY-MM-DD):");
    const address = prompt("Enter the patient's address:");
    const gender = prompt("Enter the patient's gender:");

    return { name, birthday, address, gender };
}

// Function to display available services
function displayServices() {
    console.log("Available Services:");
    for (const category in services) {
        console.log(`\nCategory: ${category}`);
        services[category].forEach(service => {
            console.log(`- ${service.name}: ${service.description}, Price: $${service.price}`);
        });
    }
}

// Function to add a service
function addService(selectedServices) {
    const category = prompt("Enter the category of service (laboratory, checkups, operations):");
    const serviceName = prompt("Enter the service name:");
    let found = false;

    services[category].forEach(service => {
        if (service.name.toLowerCase() === serviceName.toLowerCase()) {
            selectedServices.push(service);
            found = true;
            alert(`${service.name} has been added to services.`);
        }
    });

    if (!found) {
        alert("Service not found!");
    }
}

// Function to remove a service
function removeService(selectedServices) {
    const serviceName = prompt("Enter the service name to remove:");
    const index = selectedServices.findIndex(service => service.name.toLowerCase() === serviceName.toLowerCase());

    if (index > -1) {
        selectedServices.splice(index, 1);
        alert(`${serviceName} has been removed from services.`);
    } else {
        alert("Service not found in the selected services.");
    }
}

// Function to calculate total payment
function calculateTotal(selectedServices) {
    return selectedServices.reduce((total, service) => total + service.price, 0);
}

// Main function to run the program
function main() {
    const patient = admitPatient();
    const selectedServices = [];

    let running = true;

    while (running) {
        const action = prompt("Choose an action: (1) Display Services (2) Add Service (3) Remove Service (4) Checkout (5) Exit");

        switch (action) {
            case '1':
                displayServices();
                break;
            case '2':
                addService(selectedServices);
                break;
            case '3':
                removeService(selectedServices);
                break;
            case '4':
                const totalPayment = calculateTotal(selectedServices);
                alert(`Total Payment for ${patient.name}: $${totalPayment}`);
                running = false;
                break;
            case '5':
                running = false;
                break;
            default:
                alert("Invalid choice! Please try again.");
        }
    }

    // Final message
    alert("Thank you for using our hospital admission system!");
}

// Run the main function
main();
