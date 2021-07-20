# [Nextjs WooCommerce Theme] :rocket:

> - This theme, built with Next JS, GraphQl and need to bind Wordpress Woocommerce Api
> - contains: Products Page, Single Product Page, AddToCart, CartPage and Checkout Page.

## Getting Started :rocket:

These instructions will get you a copy of the project up and running on your local machine for development purposes.

### Prerequisites :page_facing_up:

### Installing :wrench:

1. Clone this repo
2. `cd woo-next`
3. `yarn install`

## Add GraphQl support for WordPress

1. Download and activate the following plugins , in your WordPress plugin directory:

- [wp-graphql] Exposes graphql for WordPress ( **Tested with v-1.3.8** of this plugin )
- [wp-graphql-woocommerce]Adds Woocommerce functionality to a WPGraphQL schema ( **Tested with v-0.8.1** of this plugin )

- Make sure Woocommerce plugin is also installed in your WordPress site. You can also import default wooCommerce products that come with wooCommerce Plugin for development ( if you don't have any products in your WordPress install ) `WP Dashboard > Tools > Import > WooCommerce products(CSV)`: The WooCommerce default products csv file is available at `wp-content/plugins/woocommerce/sample-data/sample_products.csv`

## Hero Carousel.

To use Hero carousel, create a category called 'offers' from WordPress Dashboard > Products > Categories.
Now create and assign as many child categories to this parent 'offers' category with name, description and image.
These Child categories data will automatically be used to create hero carousel on the frontend.
