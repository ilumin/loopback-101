# Coffee Shop Reviews app
---

## Models

- CoffeeShop
- Review
- Reviewer

## Relations

- A CoffeeShop has many reviews
- A CoffeeShop has many reviewers
- A review belongs to a CoffeeShop
- A review belongs to a reviewer
- A reviewer has many reviews

## ACLs

- Anyone can read reviews, but you must be logged in to create, edit, or delete them.
- Anyone can register as a user; then log in and log out.
- Logged-in users can create new reviews, and edit or delete their own reviews; however they cannot modify the originally chosen CoffeeShop.  
