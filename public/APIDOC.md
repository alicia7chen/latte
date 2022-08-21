# Latte Art Fetch API Documentation
This Latte Art API provides various latte art images and recipes to the user
on request

## Drinks
**Request Format:** /drinks

**Request Type:** GET

**Returned Data Format**: Plain Text

**Description:** Returns a drink composition recipe

**Example Request:** /drinks?word=latte

**Example Response:**

```
espresso + milk",
"espresso + milk + dollop of foam",
"two shots of espresso",
"espresso + water",
"brewed coffee",
"hot water + coffee grounds",
"syrup + ice + espresso",
"espresso + some milk + milk foam on top"

```

**Error Handling:**
- Possible 400 (invalid request) errors (all plain text):
  - If passed in an invalid drink name, returns an error with the message: `this drink does not exist in our recipe book`

## Get Latte Art
**Request Format:** /friend

**Request Type:** GET

**Returned Data Format**: JSON

**Description:** gets latte art based on animal selection

**Example Request:** /friend/cat

**Example Response:**
```json
{
  "image": "bird.png"
}
```

**Error Handling:**
N/A
