# Bypassing Checklist Prompts With No Options Selected

I created a minimal reproduction of the issue by creating a `pizza` generator where you select from three possible toppings.

The goal is to be able to bypass the `checklist` prompt and select none of the toppings.  
Or in pizza terms, I want to order a cheese pizza. 🍕

```
npm run plop

? Choose your toppings. (Press <space> to select, <a> to toggle all, <i> to invert selection, and <enter> to proceed)
>( ) pepperoni
 ( ) sausage
 ( ) onions
```

# PASS

```
npm run plop pepperoni

✔  -> {"toppings":["pepperoni"]}
```

# PASS

```
npm run plop pepperoni,sausage,onions

✔  -> {"toppings":["pepperoni","sausage","onions"]}
```

# FAIL

In this case, I would expect to be able to bypass the `checklist` prompt by including something like an empty string (`""`) or an empty array (`[]`).

```
npm run plop ""

✔  -> {"toppings":[]}
```
