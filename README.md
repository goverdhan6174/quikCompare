# [Nextjs WooCommerce Theme]

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development purposes.

### Prerequisites :page_facing_up:

### Installing :wrench:

1. Clone this repo
2. `cd woo-next`
3. `yarn install`

## Add GraphQl support for WordPress

1. Download and activate the following plugins , in your WordPress plugin directory:

- [wp-graphql] Exposes graphql for WordPress 
- [wp-graphql-woocommerce] Adds Woocommerce functionality to a WPGraphQL schema
- Make sure Woocommerce plugin is also installed in your WordPress site.

## Hero Carousel.

To use Hero carousel, create a category called 'offers' from WordPress Dashboard > Products > Categories.
Now create and assign as many child categories to this parent 'offers' category with name, description and image.
These Child categories data will automatically be used to create hero carousel on the frontend.

## Configuration(for GraphQL implementation) :wrench:

- _Note_ Below is for GraphQL implementation , for REST API check [feature/rest-api] branch

- (Required) Create a `.env` file taking reference from `.env-example` and update your WordPressSite URL.
