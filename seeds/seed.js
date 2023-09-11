/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  await knex('products').del()
  await knex('products').insert(
    [
      {
        id: '1',
        product_name: 'Bubly Raspberry',
        description: 'Bubly Sparkling Water Raspberry',
        category: 'Soft Drinks',
        status: 'In Stock',
        quantity: '42',
        purchase_price: '1',
        sale_price: '2',
        image_url: 'https://www.thebubbleverse.com/wp-content/uploads/2020/12/bubly-Raspberry.png'
      },
      {
        id: '2',
        product_name: 'Pear Hibiscus',
        description: 'Caffeinated Pear Hibiscus Sparkling Water by Good & Gather',
        category: 'Soft Drinks',
        status: 'In Stock',
        quantity: '35',
        purchase_price: '1',
        sale_price: '2',
        image_url: 'https://www.thebubbleverse.com/wp-content/uploads/2021/10/Good-Gather-Pear-Hibiscus.png'
      },
      {
        id: '3',
        product_name: 'Bubly Cranberry',
        description: 'Bubly Sparkling Water Cranberry',
        category: 'Soft Drinks',
        status: 'In Stock',
        quantity: '30',
        purchase_price: '1',
        sale_price: '2',
        image_url: 'https://www.thebubbleverse.com/wp-content/uploads/2021/05/bubly-cranberry.png'
      },
      {
        id: '4',
        product_name: 'Black Razzberry',
        description: 'Black Razzberry Sprakling Water by LaCroix',
        category: 'Soft Drinks',
        status: 'In Stock',
        quantity: '20',
        purchase_price: '1',
        sale_price: '2',
        image_url: 'https://www.thebubbleverse.com/wp-content/uploads/2021/04/LaCroix-Black-Razzberry.png'
      },
      {
        id: '5',
        product_name: 'AHA Mango & Coffee',
        description: 'AHA Black Cherry + Coffee',
        category: 'Soft Drinks',
        status: 'In Stock',
        quantity: '40',
        purchase_price: '1',
        sale_price: '2',
        image_url: 'https://www.thebubbleverse.com/wp-content/uploads/2021/03/AHA-Mango-Black-Tea.png'
      },
      {
        id: '6',
        product_name: 'AHA Peach & Honey',
        description: 'A set of 24 embroidery threads in a variety of colors.',
        category: 'Soft Drinks',
        status: 'In Stock',
        quantity: '15',
        purchase_price: '1',
        sale_price: '2',
        image_url: 'https://www.thebubbleverse.com/wp-content/uploads/2021/02/Aha-Peach-Honey.png'
      },
      {
        id: '7',
        product_name: 'PC Lemonade',
        description: 'A set of high-quality paintbrushes in a variety of sizes.',
        category: 'Soft Drinks',
        status: 'In Stock',
        quantity: '12',
        purchase_price: '1',
        sale_price: '2',
        image_url: 'https://i.ibb.co/h82sdhC/Screen-Shot-2023-04-12-at-9-59-34-PM-removebg-preview-1.png'
      },
      {
      id: '8',
      product_name: 'Oreo Sandwich Cookies',
      description: 'The Original Chocolate Sandwich Cookies',
      category: 'Snacks',
      status: 'In Stock',
      quantity: '20',
      purchase_price: '2',
      sale_price: '3',
      image_url: 'https://i.ibb.co/0KgsVnT/21005312-front-a01-2-removebg-preview.png'
      },
      {
        id: '9',
        product_name: 'Fig Bar Raspberry',
        description: 'Nature\'s Bakery Go big on berries, and never go wrong. Enjoy soft-baked, real raspberry-fueled goodness today.',
        category: 'Snacks',
        status: 'In Stock',
        quantity: '6',
        purchase_price: '10',
        sale_price: '4',
        image_url: 'https://cdn.shopify.com/s/files/1/0260/1884/0625/products/Nature_sBakeryFig_RaspberryBar57g_1_700x.png?v=1624845220'
      },
      {
        id: '10',
        product_name: 'Clif Bar Chocolate Chip',
        description: 'A cookie-lover\'s dream come true. 70% Organic Ingredients 23 Vitamins & Minerals.',
        category: 'Snacks',
        status: 'In Stock',
        quantity: '15',
        purchase_price: '3',
        sale_price: '5',
        image_url: 'https://i.ibb.co/cX6kRPw/Screen-Shot-2023-04-12-at-9-35-33-PM-removebg-preview.png'
      },
      {
        id: '11',
        product_name: 'Kashi Chewy Granola Bars',
        description: 'Our Chocolate Almond Sea Salt Kashi Chewy Granola Bars prove snacks can be simple, tasty, and nutritious all at once',
        category: 'Snacks',
        status: 'In Stock',
        quantity: '20',
        purchase_price: '2',
        sale_price: '4',
        image_url: 'https://i.ibb.co/G0KpKhw/00018627999485-C1-NB-removebg-preview.png'
      },
      {
        id: '12',
        product_name: 'Reese\'S Milk Chocolate ',
        description: 'REESE\'S MILK CHOCOLATE PEANUT BUTTER CUPS MINIATURES CANDY',
        category: 'Snacks',
        status: 'In Stock',
        quantity: '25',
        purchase_price: '10',
        sale_price: '15',
        image_url: 'https://i.ibb.co/1R3gYNb/prod-10319-3311-medium-removebg-preview.png'
      },
      {
        id: '13',
        product_name: 'GoMacro Bar',
        description: 'GoMacro MacroBar Protein Pleasure Peanut Butter + Chocolate Chip',
        category: 'Snacks',
        status: 'In Stock',
        quantity: '10',
        purchase_price: '3',
        sale_price: '5',
        image_url: 'https://i.ibb.co/B3n6bN2/4c9a32fe6595cbb333759a4f2319de1b-ra-w380-h380-pa-w380-h380-removebg-preview.png'
      }
    ]
  );

  await knex('orders').del()
  await knex('orders').insert([
    {
      id: '1', 
      customer_email: 'jane12360@example.com',
      customer_name: 'Jane Smith',
      total_amount: '8',
      created_at: '2023-09-01 10:14:17'
    },
    {
      id: '2', 
      customer_email: 'ortiz@example.net',
      customer_name: 'Bethany Ortiz',
      total_amount: '4',
      created_at: '2023-09-01 13:14:17'
    },
    {
      id: '3', 
      customer_email: 'jodi.jackson@gmail.com',
      customer_name: 'Jodi Jackson',
      total_amount: '3',
      created_at: '2023-09-02 10:14:17'
    },
    {
      id: '4', 
      customer_email: 'joseph.lopez@gmail.com',
      customer_name: 'Joseph Lopez',
      total_amount: '15',
      created_at: '2023-09-03 12:04:17'
    },
    {
      id: '5', 
      customer_email: 'jodi.jackson@gmail.com',
      customer_name: 'Jodi Jackson',
      total_amount: '12',
      created_at: '2023-09-04 17:14:17'
    },
    {
      id: '6', 
      customer_email: 'jesse.bell@gmail.com',
      customer_name: 'Jesse Bell',
      total_amount: '24',
      created_at: '2023-09-05 18:20:17'
    },
    {
      id: '7', 
      customer_email: 'alvarez@gmail.com',
      customer_name: 'Nathaniel Alvarez',
      total_amount: '4',
      created_at: '2023-09-06 09:16:17'
    },
    {
      id: '8', 
      customer_email: 'barnett@gmail.com',
      customer_name: 'Gregory Barnett',
      total_amount: '4',
      created_at: '2023-09-07 11:14:17'
    },
    {
      id: '9', 
      customer_email: 'salazar@gmail.com',
      customer_name: 'Monica Salazar',
      total_amount: '3',
      created_at: '2023-09-08 13:14:17'
    },
    {
      id: '10', 
      customer_email: 'danielle.lewis@gmail.com',
      customer_name: 'Danielle Lewis',
      total_amount: '4',
      created_at: '2023-09-09 09:14:17'
    },
    {
      id: '11', 
      customer_email: 'lee789@example.com',
      customer_name: 'Ethan Lee',
      total_amount: '7',
      created_at: '2023-09-10 11:14:17'
    },
    {
      id: '12', 
      customer_email: 'davis012@example.com',
      customer_name: 'Olivia Davis',
      total_amount: '2',
      created_at: '2023-09-10 13:14:17'
    },
    {
      id: '13', 
      customer_email: 'mia234@example.com',
      customer_name: 'Mia Martinez',
      total_amount: '2',
      created_at: '2023-09-10 09:14:17'
    },
    {
      id: '14', 
      customer_email: 'taylor567@example.com',
      customer_name: 'William Taylor',
      total_amount: '9',
      created_at: '2023-09-11 11:14:17'
    },
    {
      id: '15', 
      customer_email: 'lau438@example.com',
      customer_name: 'Peter Lau',
      total_amount: '9',
      created_at: '2023-09-11 13:14:17'
    },
    {
      id: '16', 
      customer_email: 'kevinng567@example.com',
      customer_name: 'Kevin Nguyen',
      total_amount: '5',
      created_at: '2023-09-12 14:14:17'
    },
    {
      id: '17', 
      customer_email: 'fadelasisha@gmail.com',
      customer_name: 'Aisha Fadel',
      total_amount: '10',
      created_at: '2023-09-12 15:14:17'
    }
  ]);

  await knex('order_items').del()
  await knex('order_items').insert([
    {
      id: '1', 
      order_id: '1', 
      product_id: '1',
      quantity: '2'
    },
    {
      id: '2', 
      order_id: '1',
      product_id: '2', 
      quantity: '2'
    },
    {
      id: '3', 
      order_id: '2', 
      product_id: '5',
      quantity: '1'
    },
    {
      id: '4', 
      order_id: '2',
      product_id: '7', 
      quantity: '1'
    },
    {
      id: '5', 
      order_id: '3',
      product_id: '8', 
      quantity: '1'
    },
    {
      id: '6', 
      order_id: '4',
      product_id: '13', 
      quantity: '3'
    },
    {
      id: '7', 
      order_id: '5',
      product_id: '9', 
      quantity: '3'
    },
    {
      id: '8', 
      order_id: '6',
      product_id: '12', 
      quantity: '1'
    },
    {
      id: '9', 
      order_id: '6',
      product_id: '11', 
      quantity: '1'
    },
    {
      id: '10', 
      order_id: '6',
      product_id: '10', 
      quantity: '1'
    },
    {
      id: '11', 
      order_id: '7',
      product_id: '4', 
      quantity: '2'
    },
    {
      id: '12', 
      order_id: '8',
      product_id: '11', 
      quantity: '1'
    },
    {
      id: '13', 
      order_id: '9',
      product_id: '8', 
      quantity: '1'
    },
    {
      id: '14', 
      order_id: '10',
      product_id: '6', 
      quantity: '2'
    },
    {
      id: '15', 
      order_id: '11',
      product_id: '9', 
      quantity: '1'
    },
    {
      id: '16', 
      order_id: '11',
      product_id: '8', 
      quantity: '1'
    },
    {
      id: '17', 
      order_id: '12',
      product_id: '2', 
      quantity: '1'
    },
    {
      id: '18', 
      order_id: '13',
      product_id: '5', 
      quantity: '1'
    },
    {
      id: '19', 
      order_id: '14',
      product_id: '9', 
      quantity: '1'
    },
    {
      id: '20', 
      order_id: '14',
      product_id: '10', 
      quantity: '1'
    },
    {
      id: '21', 
      order_id: '15',
      product_id: '3', 
      quantity: '2'
    },
    {
      id: '22', 
      order_id: '15',
      product_id: '7', 
      quantity: '1'
    },
    {
      id: '23', 
      order_id: '15',
      product_id: '8', 
      quantity: '1'
    },
    {
      id: '24', 
      order_id: '16',
      product_id: '10', 
      quantity: '1'
    },
    {
      id: '25', 
      order_id: '17',
      product_id: '7', 
      quantity: '2'
    },
    {
      id: '26', 
      order_id: '17',
      product_id: '8', 
      quantity: '2'
    }
  ]);

};


// MySQL

// [
//   {
//     id: '1',
//     product_name: 'Bubly Raspberry',
//     description: 'Bubly Sparkling Water Raspberry',
//     category: 'Soft Drinks',
//     status: 'In Stock',
//     quantity: '12',
//     purchase_price: '1',
//     sale_price: '2',
//     image_url: 'https://www.thebubbleverse.com/wp-content/uploads/2020/12/bubly-Raspberry.png'
//   },
//   {
//     id: '2',
//     product_name: 'Pear Hibiscus',
//     description: 'Caffeinated Pear Hibiscus Sparkling Water by Good & Gather',
//     category: 'Soft Drinks',
//     status: 'In Stock',
//     quantity: '25',
//     purchase_price: '1',
//     sale_price: '2',
//     image_url: 'https://www.thebubbleverse.com/wp-content/uploads/2021/10/Good-Gather-Pear-Hibiscus.png'
//   },
//   {
//     id: '3',
//     product_name: 'Bubly Cranberry',
//     description: 'Bubly Sparkling Water Cranberry',
//     category: 'Soft Drinks',
//     status: 'In Stock',
//     quantity: '30',
//     purchase_price: '1',
//     sale_price: '2',
//     image_url: 'https://www.thebubbleverse.com/wp-content/uploads/2021/05/bubly-cranberry.png'
//   },
//   {
//     id: '4',
//     product_name: 'Black Razzberry',
//     description: 'Black Razzberry Sprakling Water by LaCroix',
//     category: 'Soft Drinks',
//     status: 'In Stock',
//     quantity: '20',
//     purchase_price: '1',
//     sale_price: '2',
//     image_url: 'https://www.thebubbleverse.com/wp-content/uploads/2021/04/LaCroix-Black-Razzberry.png'
//   },
//   {
//     id: '5',
//     product_name: 'AHA Mango & Coffee',
//     description: 'AHA Black Cherry + Coffee',
//     category: 'Soft Drinks',
//     status: 'In Stock',
//     quantity: '40',
//     purchase_price: '1',
//     sale_price: '2',
//     image_url: 'https://www.thebubbleverse.com/wp-content/uploads/2021/03/AHA-Mango-Black-Tea.png'
//   },
//   {
//     id: '6',
//     product_name: 'AHA Peach & Honey',
//     description: 'A set of 24 embroidery threads in a variety of colors.',
//     category: 'Soft Drinks',
//     status: 'In Stock',
//     quantity: '15',
//     purchase_price: '1',
//     sale_price: '2',
//     image_url: 'https://www.thebubbleverse.com/wp-content/uploads/2021/02/Aha-Peach-Honey.png'
//   },
//   {
//     id: '7',
//     product_name: 'PC Lemonade',
//     description: 'A set of high-quality paintbrushes in a variety of sizes.',
//     category: 'Soft Drinks',
//     status: 'In Stock',
//     quantity: '12',
//     purchase_price: '1',
//     sale_price: '2',
//     image_url: 'https://i.ibb.co/h82sdhC/Screen-Shot-2023-04-12-at-9-59-34-PM-removebg-preview-1.png'
//   },
//   {
//   id: '8',
//   product_name: 'Oreo Sandwich Cookies',
//   description: 'The Original Chocolate Sandwich Cookies',
//   category: 'Snacks',
//   status: 'In Stock',
//   quantity: '20',
//   purchase_price: '2',
//   sale_price: '3',
//   image_url: 'https://i.ibb.co/0KgsVnT/21005312-front-a01-2-removebg-preview.png'
//   },
//   {
//     id: '9',
//     product_name: 'Fig Bar Raspberry',
//     description: 'Nature\'s Bakery Go big on berries, and never go wrong. Enjoy soft-baked, real raspberry-fueled goodness today.',
//     category: 'Snacks',
//     status: 'In Stock',
//     quantity: '6',
//     purchase_price: '10',
//     sale_price: '4',
//     image_url: 'https://cdn.shopify.com/s/files/1/0260/1884/0625/products/Nature_sBakeryFig_RaspberryBar57g_1_700x.png?v=1624845220'
//   },
//   {
//     id: '10',
//     product_name: 'Clif Bar Chocolate Chip',
//     description: 'A cookie-lover\'s dream come true. 70% Organic Ingredients 23 Vitamins & Minerals.',
//     category: 'Snacks',
//     status: 'In Stock',
//     quantity: '15',
//     purchase_price: '3',
//     sale_price: '5',
//     image_url: 'https://i.ibb.co/cX6kRPw/Screen-Shot-2023-04-12-at-9-35-33-PM-removebg-preview.png'
//   },
//   {
//     id: '11',
//     product_name: 'Kashi Chewy Granola Bars',
//     description: 'Our Chocolate Almond Sea Salt Kashi Chewy Granola Bars prove snacks can be simple, tasty, and nutritious all at once',
//     category: 'Snacks',
//     status: 'In Stock',
//     quantity: '20',
//     purchase_price: '2',
//     sale_price: '4',
//     image_url: 'https://i.ibb.co/G0KpKhw/00018627999485-C1-NB-removebg-preview.png'
//   },
//   {
//     id: '12',
//     product_name: 'Reese\'S Milk Chocolate ',
//     description: 'REESE\'S MILK CHOCOLATE PEANUT BUTTER CUPS MINIATURES CANDY',
//     category: 'Snacks',
//     status: 'In Stock',
//     quantity: '25',
//     purchase_price: '10',
//     sale_price: '15',
//     image_url: 'https://i.ibb.co/1R3gYNb/prod-10319-3311-medium-removebg-preview.png'
//   },
//   {
//     id: '13',
//     product_name: 'GoMacro Bar',
//     description: 'GoMacro MacroBar Protein Pleasure Peanut Butter + Chocolate Chip',
//     category: 'Snacks',
//     status: 'In Stock',
//     quantity: '10',
//     purchase_price: '3',
//     sale_price: '5',
//     image_url: 'https://i.ibb.co/B3n6bN2/4c9a32fe6595cbb333759a4f2319de1b-ra-w380-h380-pa-w380-h380-removebg-preview.png'
//   }
// ]




// await knex('order_items').del()
//   await knex('order_items').insert([
//     {
//       id: '1', 
//       order_id: '1', 
//       product_id: '1',
//       quantity: 2
//     },
//     {
//       id: '2', 
//       order_id: '1',
//       product_id: '2', 
//       quantity: 2
//     },
//     {
//       id: '3', 
//       order_id: '2', 
//       product_id: '5',
//       quantity: 1
//     },
//     {
//       id: '4', 
//       order_id: '2',
//       product_id: '7', 
//       quantity: 1
//     },
//     {
//       id: '5', 
//       order_id: '3',
//       product_id: '8', 
//       quantity: 1
//     },
//     {
//       id: '6', 
//       order_id: '4',
//       product_id: '13', 
//       quantity: 3
//     },
//     {
//       id: '7', 
//       order_id: '5',
//       product_id: '9', 
//       quantity: 3
//     },
//     {
//       id: '8', 
//       order_id: '6',
//       product_id: '12', 
//       quantity: 1
//     },
//     {
//       id: '9', 
//       order_id: '6',
//       product_id: '11', 
//       quantity: 1
//     },
//     {
//       id: '10', 
//       order_id: '6',
//       product_id: '10', 
//       quantity: 1
//     },
//     {
//       id: '11', 
//       order_id: '7',
//       product_id: '4', 
//       quantity: 1
//     },
//     {
//       id: '12', 
//       order_id: '8',
//       product_id: '11', 
//       quantity: 1
//     },
//     {
//       id: '13', 
//       order_id: '9',
//       product_id: '8', 
//       quantity: 1
//     },
//     {
//       id: '14', 
//       order_id: '10',
//       product_id: '6', 
//       quantity: 2
//     },
//     {
//       id: '15', 
//       order_id: '11',
//       product_id: '9', 
//       quantity: 1
//     },
//     {
//       id: '16', 
//       order_id: '11',
//       product_id: '8', 
//       quantity: 1
//     },
//     {
//       id: '17', 
//       order_id: '12',
//       product_id: '2', 
//       quantity: 1
//     },
//     {
//       id: '18', 
//       order_id: '13',
//       product_id: '5', 
//       quantity: 1
//     },
//     {
//       id: '19', 
//       order_id: '14',
//       product_id: '9', 
//       quantity: 1
//     },
//     {
//       id: '20', 
//       order_id: '14',
//       product_id: '10', 
//       quantity: 1
//     },
//     {
//       id: '21', 
//       order_id: '15',
//       product_id: '3', 
//       quantity: 2
//     },
//     {
//       id: '22', 
//       order_id: '15',
//       product_id: '7', 
//       quantity: 1
//     },
//     {
//       id: '23', 
//       order_id: '15',
//       product_id: '8', 
//       quantity: 1
//     },
//     {
//       id: '24', 
//       order_id: '16',
//       product_id: '10', 
//       quantity: 1
//     }
//   ]);

// };




// WORKED

// exports.seed = async function(knex) {
//   await knex('products').del()
//   await knex('products').insert(
//     [
//       {
//         id: 'a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a01',
//         product_name: 'Bubly Raspberry',
//         description: 'Bubly Sparkling Water Raspberry',
//         category: 'Soft Drinks',
//         status: 'In Stock',
//         quantity: '12',
//         purchase_price: '1',
//         sale_price: '2',
//         image_url: 'https://www.thebubbleverse.com/wp-content/uploads/2020/12/bubly-Raspberry.png'
//       },
//       {
//         id: 'a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a02',
//         product_name: 'Pear Hibiscus',
//         description: 'Caffeinated Pear Hibiscus Sparkling Water by Good & Gather',
//         category: 'Soft Drinks',
//         status: 'In Stock',
//         quantity: '25',
//         purchase_price: '1',
//         sale_price: '2',
//         image_url: 'https://www.thebubbleverse.com/wp-content/uploads/2021/10/Good-Gather-Pear-Hibiscus.png'
//       },
//       {
//         id: 'a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a03',
//         product_name: 'Bubly Cranberry',
//         description: 'Bubly Sparkling Water Cranberry',
//         category: 'Soft Drinks',
//         status: 'In Stock',
//         quantity: '30',
//         purchase_price: '1',
//         sale_price: '2',
//         image_url: 'https://www.thebubbleverse.com/wp-content/uploads/2021/05/bubly-cranberry.png'
//       },
//       {
//         id: 'a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a04',
//         product_name: 'Black Razzberry',
//         description: 'Black Razzberry Sprakling Water by LaCroix',
//         category: 'Soft Drinks',
//         status: 'In Stock',
//         quantity: '20',
//         purchase_price: '1',
//         sale_price: '2',
//         image_url: 'https://www.thebubbleverse.com/wp-content/uploads/2021/04/LaCroix-Black-Razzberry.png'
//       },
//       {
//         id: 'a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a05',
//         product_name: 'AHA Mango & Coffee',
//         description: 'AHA Black Cherry + Coffee',
//         category: 'Soft Drinks',
//         status: 'In Stock',
//         quantity: '40',
//         purchase_price: '1',
//         sale_price: '2',
//         image_url: 'https://www.thebubbleverse.com/wp-content/uploads/2021/03/AHA-Mango-Black-Tea.png'
//       },
//       {
//         id: 'a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a06',
//         product_name: 'AHA Peach & Honey',
//         description: 'A set of 24 embroidery threads in a variety of colors.',
//         category: 'Soft Drinks',
//         status: 'In Stock',
//         quantity: '15',
//         purchase_price: '1',
//         sale_price: '2',
//         image_url: 'https://www.thebubbleverse.com/wp-content/uploads/2021/02/Aha-Peach-Honey.png'
//       },
//       {
//         id: 'a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a07',
//         product_name: 'PC Lemonade',
//         description: 'A set of high-quality paintbrushes in a variety of sizes.',
//         category: 'Soft Drinks',
//         status: 'In Stock',
//         quantity: '12',
//         purchase_price: '1',
//         sale_price: '2',
//         image_url: 'https://i.ibb.co/h82sdhC/Screen-Shot-2023-04-12-at-9-59-34-PM-removebg-preview-1.png'
//       },
//       {
//       id: 'a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a08',
//       product_name: 'Oreo Sandwich Cookies',
//       description: 'The Original Chocolate Sandwich Cookies',
//       category: 'Snacks',
//       status: 'In Stock',
//       quantity: '20',
//       purchase_price: '2',
//       sale_price: '3',
//       image_url: 'https://i.ibb.co/0KgsVnT/21005312-front-a01-2-removebg-preview.png'
//       },
//       {
//         id: 'a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a09',
//         product_name: 'Fig Bar Raspberry',
//         description: 'Nature\'s Bakery Go big on berries, and never go wrong. Enjoy soft-baked, real raspberry-fueled goodness today.',
//         category: 'Snacks',
//         status: 'In Stock',
//         quantity: '6',
//         purchase_price: '10',
//         sale_price: '4',
//         image_url: 'https://cdn.shopify.com/s/files/1/0260/1884/0625/products/Nature_sBakeryFig_RaspberryBar57g_1_700x.png?v=1624845220'
//       },
//       {
//         id: 'a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a10',
//         product_name: 'Clif Bar Chocolate Chip',
//         description: 'A cookie-lover\'s dream come true. 70% Organic Ingredients 23 Vitamins & Minerals.',
//         category: 'Snacks',
//         status: 'In Stock',
//         quantity: '15',
//         purchase_price: '3',
//         sale_price: '5',
//         image_url: 'https://i.ibb.co/cX6kRPw/Screen-Shot-2023-04-12-at-9-35-33-PM-removebg-preview.png'
//       },
//       {
//         id: 'a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11',
//         product_name: 'Kashi Chewy Granola Bars',
//         description: 'Our Chocolate Almond Sea Salt Kashi Chewy Granola Bars prove snacks can be simple, tasty, and nutritious all at once',
//         category: 'Snacks',
//         status: 'In Stock',
//         quantity: '20',
//         purchase_price: '2',
//         sale_price: '4',
//         image_url: 'https://i.ibb.co/G0KpKhw/00018627999485-C1-NB-removebg-preview.png'
//       },
//       {
//         id: 'a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a12',
//         product_name: 'Reese\'S Milk Chocolate ',
//         description: 'REESE\'S MILK CHOCOLATE PEANUT BUTTER CUPS MINIATURES CANDY',
//         category: 'Snacks',
//         status: 'In Stock',
//         quantity: '25',
//         purchase_price: '10',
//         sale_price: '15',
//         image_url: 'https://i.ibb.co/1R3gYNb/prod-10319-3311-medium-removebg-preview.png'
//       },
//       {
//         id: 'a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a13',
//         product_name: 'GoMacro Bar',
//         description: 'GoMacro MacroBar Protein Pleasure Peanut Butter + Chocolate Chip',
//         category: 'Snacks',
//         status: 'In Stock',
//         quantity: '10',
//         purchase_price: '3',
//         sale_price: '5',
//         image_url: 'https://i.ibb.co/B3n6bN2/4c9a32fe6595cbb333759a4f2319de1b-ra-w380-h380-pa-w380-h380-removebg-preview.png'
//       }
//     ]
//   );

//   await knex('orders').del()
//   await knex('orders').insert([
//     {
//       id: 'b0eebc99-9c0b-4ef8-bb6d-6bb9bd380a01', 
//       customer_email: 'jane12360@example.com',
//       customer_name: 'Jane Smith',
//       total_amount: '6',
//       created_at: '2023-04-01 20:14:17'
//     },
//     {
//       id: 'b0eebc99-9c0b-4ef8-bb6d-6bb9bd380a02', 
//       customer_email: 'ortiz@example.net',
//       customer_name: 'Bethany Ortiz',
//       total_amount: '4',
//       created_at: '2023-04-01 21:14:17'
//     },
//     {
//       id: 'b0eebc99-9c0b-4ef8-bb6d-6bb9bd380a03', 
//       customer_email: 'jodi.jackson@gmail.com',
//       customer_name: 'Jodi Jackson',
//       total_amount: '2',
//       created_at: '2023-04-02 18:14:17'
//     },
//     {
//       id: 'b0eebc99-9c0b-4ef8-bb6d-6bb9bd380a04', 
//       customer_email: 'joseph.lopez@gmail.com',
//       customer_name: 'Joseph Lopez',
//       total_amount: '15',
//       created_at: '2023-04-02 20:04:17'
//     },
//     {
//       id: 'b0eebc99-9c0b-4ef8-bb6d-6bb9bd380a05', 
//       customer_email: 'jodi.jackson@gmail.com',
//       customer_name: 'Jodi Jackson',
//       total_amount: '12',
//       created_at: '2023-04-03 17:14:17'
//     },
//     {
//       id: 'b0eebc99-9c0b-4ef8-bb6d-6bb9bd380a06', 
//       customer_email: 'jesse.bell@gmail.com',
//       customer_name: 'Jesse Bell',
//       total_amount: '24',
//       created_at: '2023-04-03 20:20:17'
//     },
//     {
//       id: 'b0eebc99-9c0b-4ef8-bb6d-6bb9bd380a07', 
//       customer_email: 'alvarez@gmail.com',
//       customer_name: 'Nathaniel Alvarez',
//       total_amount: '4',
//       created_at: '2023-04-03 21:16:17'
//     },
//     {
//       id: 'b0eebc99-9c0b-4ef8-bb6d-6bb9bd380a08', 
//       customer_email: 'barnett@gmail.com',
//       customer_name: 'Gregory Barnett',
//       total_amount: '4',
//       created_at: '2023-04-04 21:14:17'
//     },
//     {
//       id: 'b0eebc99-9c0b-4ef8-bb6d-6bb9bd380a09', 
//       customer_email: 'salazar@gmail.com',
//       customer_name: 'Monica Salazar',
//       total_amount: '3',
//       created_at: '2023-04-05 21:14:17'
//     },
//     {
//       id: 'b0eebc99-9c0b-4ef8-bb6d-6bb9bd380a10', 
//       customer_email: 'danielle.lewis@gmail.com',
//       customer_name: 'Danielle Lewis',
//       total_amount: '2',
//       created_at: '2023-04-06 21:14:17'
//     },
//     {
//       id: 'b0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11', 
//       customer_email: 'lee789@example.com',
//       customer_name: 'Ethan Lee',
//       total_amount: '7',
//       created_at: '2023-04-07 21:14:17'
//     },
//     {
//       id: 'b0eebc99-9c0b-4ef8-bb6d-6bb9bd380a12', 
//       customer_email: 'davis012@example.com',
//       customer_name: 'Olivia Davis',
//       total_amount: '2',
//       created_at: '2023-04-08 21:14:17'
//     },
//     {
//       id: 'b0eebc99-9c0b-4ef8-bb6d-6bb9bd380a13', 
//       customer_email: 'mia234@example.com',
//       customer_name: 'Mia Martinez',
//       total_amount: '2',
//       created_at: '2023-04-09 21:14:17'
//     },
//     {
//       id: 'b0eebc99-9c0b-4ef8-bb6d-6bb9bd380a14', 
//       customer_email: 'taylor567@example.com',
//       customer_name: 'William Taylor',
//       total_amount: '9',
//       created_at: '2023-04-10 21:14:17'
//     },
//     {
//       id: 'b0eebc99-9c0b-4ef8-bb6d-6bb9bd380a15', 
//       customer_email: 'lau438@example.com',
//       customer_name: 'Peter Lau',
//       total_amount: '9',
//       created_at: '2023-04-11 21:14:17'
//     },
//     {
//       id: 'b0eebc99-9c0b-4ef8-bb6d-6bb9bd380a16', 
//       customer_email: 'taylor567@example.com',
//       customer_name: 'Kevin Nguyen',
//       total_amount: '5',
//       created_at: '2023-04-12 13:14:17'
//     }
//   ]);

//   await knex('order_items').del()
//   await knex('order_items').insert([
//     {
//       id: 'c0eebc99-9c0b-4ef8-bb6d-6bb9bd380a01', 
//       order_id: 'b0eebc99-9c0b-4ef8-bb6d-6bb9bd380a01', 
//       product_id: 'a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a01',
//       quantity: '2'
//     },
//     {
//       id: 'c0eebc99-9c0b-4ef8-bb6d-6bb9bd380a02', 
//       order_id: 'b0eebc99-9c0b-4ef8-bb6d-6bb9bd380a01',
//       product_id: 'a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a02', 
//       quantity: '2'
//     },
//     {
//       id: 'c0eebc99-9c0b-4ef8-bb6d-6bb9bd380a03', 
//       order_id: 'b0eebc99-9c0b-4ef8-bb6d-6bb9bd380a02', 
//       product_id: 'a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a05',
//       quantity: '1'
//     },
//     {
//       id: 'c0eebc99-9c0b-4ef8-bb6d-6bb9bd380a04', 
//       order_id: 'b0eebc99-9c0b-4ef8-bb6d-6bb9bd380a02',
//       product_id: 'a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a07', 
//       quantity: '1'
//     },
//     {
//       id: 'c0eebc99-9c0b-4ef8-bb6d-6bb9bd380a05', 
//       order_id: 'b0eebc99-9c0b-4ef8-bb6d-6bb9bd380a03',
//       product_id: 'a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a08', 
//       quantity: '1'
//     },
//     {
//       id: 'c0eebc99-9c0b-4ef8-bb6d-6bb9bd380a06', 
//       order_id: 'b0eebc99-9c0b-4ef8-bb6d-6bb9bd380a04',
//       product_id: 'a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a13', 
//       quantity: '3'
//     },
//     {
//       id: 'c0eebc99-9c0b-4ef8-bb6d-6bb9bd380a07', 
//       order_id: 'b0eebc99-9c0b-4ef8-bb6d-6bb9bd380a05',
//       product_id: 'a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a09', 
//       quantity: '3'
//     },
//     {
//       id: 'c0eebc99-9c0b-4ef8-bb6d-6bb9bd380a08', 
//       order_id: 'b0eebc99-9c0b-4ef8-bb6d-6bb9bd380a06',
//       product_id: 'a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a12', 
//       quantity: '1'
//     },
//     {
//       id: 'c0eebc99-9c0b-4ef8-bb6d-6bb9bd380a09', 
//       order_id: 'b0eebc99-9c0b-4ef8-bb6d-6bb9bd380a06',
//       product_id: 'a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11', 
//       quantity: '1'
//     },
//     {
//       id: 'c0eebc99-9c0b-4ef8-bb6d-6bb9bd380a10', 
//       order_id: 'b0eebc99-9c0b-4ef8-bb6d-6bb9bd380a06',
//       product_id: 'a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a10', 
//       quantity: '1'
//     },
//     {
//       id: 'c0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11', 
//       order_id: 'b0eebc99-9c0b-4ef8-bb6d-6bb9bd380a07',
//       product_id: 'a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a04', 
//       quantity: '1'
//     },
//     {
//       id: 'c0eebc99-9c0b-4ef8-bb6d-6bb9bd380a12', 
//       order_id: 'b0eebc99-9c0b-4ef8-bb6d-6bb9bd380a08',
//       product_id: 'a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11', 
//       quantity: '1'
//     },
//     {
//       id: 'c0eebc99-9c0b-4ef8-bb6d-6bb9bd380a13', 
//       order_id: 'b0eebc99-9c0b-4ef8-bb6d-6bb9bd380a09',
//       product_id: 'a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a08', 
//       quantity: '1'
//     },
//     {
//       id: 'c0eebc99-9c0b-4ef8-bb6d-6bb9bd380a14', 
//       order_id: 'b0eebc99-9c0b-4ef8-bb6d-6bb9bd380a10',
//       product_id: 'a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a06', 
//       quantity: '2'
//     },
//     {
//       id: 'c0eebc99-9c0b-4ef8-bb6d-6bb9bd380a15', 
//       order_id: 'b0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11',
//       product_id: 'a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a09', 
//       quantity: '1'
//     },
//     {
//       id: 'c0eebc99-9c0b-4ef8-bb6d-6bb9bd380a16', 
//       order_id: 'b0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11',
//       product_id: 'a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a08', 
//       quantity: '1'
//     },
//     {
//       id: 'c0eebc99-9c0b-4ef8-bb6d-6bb9bd380a17', 
//       order_id: 'b0eebc99-9c0b-4ef8-bb6d-6bb9bd380a12',
//       product_id: 'a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a02', 
//       quantity: '1'
//     },
//     {
//       id: 'c0eebc99-9c0b-4ef8-bb6d-6bb9bd380a18', 
//       order_id: 'b0eebc99-9c0b-4ef8-bb6d-6bb9bd380a13',
//       product_id: 'a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a05', 
//       quantity: '1'
//     },
//     {
//       id: 'c0eebc99-9c0b-4ef8-bb6d-6bb9bd380a19', 
//       order_id: 'b0eebc99-9c0b-4ef8-bb6d-6bb9bd380a14',
//       product_id: 'a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a09', 
//       quantity: '1'
//     },
//     {
//       id: 'c0eebc99-9c0b-4ef8-bb6d-6bb9bd380a20', 
//       order_id: 'b0eebc99-9c0b-4ef8-bb6d-6bb9bd380a14',
//       product_id: 'a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a10', 
//       quantity: '1'
//     },
//     {
//       id: 'c0eebc99-9c0b-4ef8-bb6d-6bb9bd380a21', 
//       order_id: 'b0eebc99-9c0b-4ef8-bb6d-6bb9bd380a15',
//       product_id: 'a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a03', 
//       quantity: '2'
//     },
//     {
//       id: 'c0eebc99-9c0b-4ef8-bb6d-6bb9bd380a22', 
//       order_id: 'b0eebc99-9c0b-4ef8-bb6d-6bb9bd380a15',
//       product_id: 'a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a07', 
//       quantity: '1'
//     },
//     {
//       id: 'c0eebc99-9c0b-4ef8-bb6d-6bb9bd380a23', 
//       order_id: 'b0eebc99-9c0b-4ef8-bb6d-6bb9bd380a15',
//       product_id: 'a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a08', 
//       quantity: '1'
//     },
//     {
//       id: 'c0eebc99-9c0b-4ef8-bb6d-6bb9bd380a24', 
//       order_id: 'b0eebc99-9c0b-4ef8-bb6d-6bb9bd380a16',
//       product_id: 'a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a10', 
//       quantity: '1'
//     }
//   ]);

// };