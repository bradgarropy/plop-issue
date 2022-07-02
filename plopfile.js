const config = (plop) => {
    plop.setGenerator("bypass checklists", {
        description: "pizza",
        prompts: [{
            type: "checkbox",
            name: "toppings",
            message: "Choose your toppings.",
            choices: ["pepperoni", "sausage", "onions"]
        }],
        actions: [data => data]
    });
}

export default config
