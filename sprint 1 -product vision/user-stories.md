# Product Personas and Stories

## Team Theta

Table of Contents

- [Product Definition](#product-definition)
- [Vision Statement](#vision-statement)
- [Product Personas](#product-personas)
- [Product Scenarios](#product-scenarios)
- [User Stories](#user-stories)
- [User Experience](#user-experience)

## Product Definition

**Pawsome Prices**; will offer links to pet products across multiple different online storefronts so that the user can choose the one with the best price.

## Vision Statement

FOR pet owners WHO want to save time and money on pet products, Pawsome Prices is a site/app THAT will compare prices for products that users can search for, saving them time and money to get the best deal. UNLIKE similar sites that search for all products, OUR PRODUCT focuses on the specific niche, pet products, and will make it more convenient for users who are searching for products in this area, saving them time and money.

## Product Personas

- **Persona 1**: Exotic pet owner who has trouble finding their pet food or medicine at common stores and needs to pay a lot of money for them online.
- **Persona 2**: Pet owner who has a list of things they regularly have to buy, but they are all at different websites.
- **Persona 3**: Website manager who needs to create pages for every item.
- **Persona 4**: Single working parent who does not have time to run around to a lot of different stores and would rather buy online.

## Product Scenarios

### Product Scenario 1
**Website Administrator** wants to display highly visited items on the front page of the website in order to increase traffic to those popular items, making more profit from affiliate links.

**Louie**, who owns a bearded dragon, does not know where to get the cheapest crickets to feed it, and spends a lot of time searching on sites like Amazon and Walmart to compare the prices. He visits Pawsome Prices and searches for crickets, then chooses the cheapest one, leading to a link to Amazon. 

**Roger Sampson** has bought 3 cat towers for his Siamese cat Henrietta in the past year. Henrietta always manages to destroy the tower after a short time. Roger is tired of spending money on things that are going to break but he knows that Henrietta needs this tower to feel comfortable at home. Roger wants to buy another cat tower for as little money as possible, knowing that he'll need to replace it soon. He adds the tower that his cat likes to his wishlist and buys it from the cheapest website listed on Pawsome Prices.


## User Stories

### Feature1: Multi-tenant Authentication

**Description**

- As a Blockr.io client, I need a way to manage my Blockr.io subscriptions which include adding and removing users.
- As an investigator using Blockr.io, I need a way to log into the application. Authentication will grant me the necessary permission to complete my tasks.
- As a member of the organization's (client) leadership team, I need to log into the Blockr.io application and access dashboards.

**Constraints**

Authentication from the SaaS application requires verification through the client’s authentication protocol or through our authentication mechanism.

**Comments**

- All users will authenticate through a single page and will be routed to the appropriate instance based on access policies setup by instance administrators.
- Users may only set up an account through invitation from instance administrators.

### Feature2: Dashboard

**Description**

- As a Blockr.io user, I want to visualize my organization’s performance and usage of the Blockr.io application.
- As a Blockr.io user, I need to know the breakdown of exception backlogs, displayed by status group (open/in-progress/closed).
- As a Blockr.io user, I need to know if exceptions were assigned to me for further review.
- As a Blockr.io user, I need to know when progress was made on an exception I am "watching".
- As a member of the Leadership/management team, I want to know how many active users are working.
- As a member of the Leadership/management team, I want to know how many exceptions were escalated for further review by the investigations team.

**Constraints**

Dashboard must only share tenant-specific statistics.

### Feature3: Network Graph User Interface

**Description**

- As an investigator, I need a way to search a given bitcoin address on the blockchain.
- As an investigator, I need a way to view connections to a bitcoin address as a graph.
- As an investigator, I need a way to click on a bitcoin address node on the graph and read information about the address such as the number of transactions, holdings, and reports of abuse.
- As an investigator, I need a way to flag bitcoin address nodes for ongoing monitoring.
- As an investigator, I need a way to assign a network graph to a colleague, including escalating to senior management.
- As an investigator, I need a way to enter comments about a network to share with colleagues, including senior management.

**Constraints**

Sharing/assigning networks to colleagues is limited to those within the tenant instance.

### Feature4: Administrator Panel

**Description**

- As an administrator, I need to have a way to invite users to the organization’s instance.
- As an administrator, I need a way to manage a watchlist of addresses.
- As an administrator, I need a way to adjust the parameters for our transactions monitoring system.

**Constraints**

Limited to the tenant's instance.

## User Experience

Describe the user interface for your product.

- [Insert simple wireframes of your product—what will it look like from a user interface perspective]

  Login page: <insert picture here>

  Manage users: <insert picture here>

  Dashboard: <insert picture here>

  Exceptions assigned to the user: <insert picture here>

  Notifications: <insert picture here>

  Administrator panel: <insert picture here>

  Investigative UI – warnings detected: <insert picture here>

  Sharing networks with colleagues: <insert picture here>
