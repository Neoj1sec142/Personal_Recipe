Models: 
Recipe: 
    - title
    - description
    - oven_preheat
    - meal_type (Breakfast, Lunch, Dinner, Snack, Drink, Alcohol)
    - time_cook
    - serves
Ingredient:
    - recipe
    - name
    - description
    - amount
Step:
    - recipe
    - label
    - description

[Django Netlify Deployment](https://www.netlify.com/blog/2016/04/08/a-step-by-step-guide-cactus-on-netlify/)