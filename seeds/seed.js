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
        quantity: '12',
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
        quantity: '25',
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
      total_amount: '6',
      created_at: '2023-04-01 20:14:17'
    },
    {
      id: '2', 
      customer_email: 'ortiz@example.net',
      customer_name: 'Bethany Ortiz',
      total_amount: '4',
      created_at: '2023-04-01 21:14:17'
    },
    {
      id: '3', 
      customer_email: 'jodi.jackson@gmail.com',
      customer_name: 'Jodi Jackson',
      total_amount: '2',
      created_at: '2023-04-02 18:14:17'
    },
    {
      id: '4', 
      customer_email: 'joseph.lopez@gmail.com',
      customer_name: 'Joseph Lopez',
      total_amount: '15',
      created_at: '2023-04-02 20:04:17'
    },
    {
      id: '5', 
      customer_email: 'jodi.jackson@gmail.com',
      customer_name: 'Jodi Jackson',
      total_amount: '12',
      created_at: '2023-04-03 17:14:17'
    },
    {
      id: '6', 
      customer_email: 'jesse.bell@gmail.com',
      customer_name: 'Jesse Bell',
      total_amount: '24',
      created_at: '2023-04-03 20:20:17'
    },
    {
      id: '7', 
      customer_email: 'alvarez@gmail.com',
      customer_name: 'Nathaniel Alvarez',
      total_amount: '4',
      created_at: '2023-04-03 21:16:17'
    },
    {
      id: '8', 
      customer_email: 'barnett@gmail.com',
      customer_name: 'Gregory Barnett',
      total_amount: '4',
      created_at: '2023-04-04 21:14:17'
    },
    {
      id: '9', 
      customer_email: 'salazar@gmail.com',
      customer_name: 'Monica Salazar',
      total_amount: '3',
      created_at: '2023-04-05 21:14:17'
    },
    {
      id: '10', 
      customer_email: 'danielle.lewis@gmail.com',
      customer_name: 'Danielle Lewis',
      total_amount: '2',
      created_at: '2023-04-06 21:14:17'
    },
    {
      id: '11', 
      customer_email: 'lee789@example.com',
      customer_name: 'Ethan Lee',
      total_amount: '7',
      created_at: '2023-04-07 21:14:17'
    },
    {
      id: '12', 
      customer_email: 'davis012@example.com',
      customer_name: 'Olivia Davis',
      total_amount: '2',
      created_at: '2023-04-08 21:14:17'
    },
    {
      id: '13', 
      customer_email: 'mia234@example.com',
      customer_name: 'Mia Martinez',
      total_amount: '2',
      created_at: '2023-04-09 21:14:17'
    },
    {
      id: '14', 
      customer_email: 'taylor567@example.com',
      customer_name: 'William Taylor',
      total_amount: '9',
      created_at: '2023-04-10 21:14:17'
    },
    {
      id: '15', 
      customer_email: 'lau438@example.com',
      customer_name: 'Peter Lau',
      total_amount: '9',
      created_at: '2023-04-11 21:14:17'
    },
    {
      id: '16', 
      customer_email: 'taylor567@example.com',
      customer_name: 'Kevin Nguyen',
      total_amount: '5',
      created_at: '2023-04-12 13:14:17'
    }
  ]);

  await knex('order_items').del()
  await knex('order_items').insert([
    {
      id: '1', 
      order_id: '1', 
      product_id: '1',
      quantity: 2
    },
    {
      id: '2', 
      order_id: '1',
      product_id: '2', 
      quantity: 2
    },
    {
      id: '3', 
      order_id: '2', 
      product_id: '5',
      quantity: 1
    },
    {
      id: '4', 
      order_id: '2',
      product_id: '7', 
      quantity: 1
    },
    {
      id: '5', 
      order_id: '3',
      product_id: '8', 
      quantity: 1
    },
    {
      id: '6', 
      order_id: '4',
      product_id: '13', 
      quantity: 3
    },
    {
      id: '7', 
      order_id: '5',
      product_id: '9', 
      quantity: 3
    },
    {
      id: '8', 
      order_id: '6',
      product_id: '12', 
      quantity: 1
    },
    {
      id: '9', 
      order_id: '6',
      product_id: '11', 
      quantity: 1
    },
    {
      id: '10', 
      order_id: '6',
      product_id: '10', 
      quantity: 1
    },
    {
      id: '11', 
      order_id: '7',
      product_id: '4', 
      quantity: 1
    },
    {
      id: '12', 
      order_id: '8',
      product_id: '11', 
      quantity: 1
    },
    {
      id: '13', 
      order_id: '9',
      product_id: '8', 
      quantity: 1
    },
    {
      id: '14', 
      order_id: '10',
      product_id: '6', 
      quantity: 2
    },
    {
      id: '15', 
      order_id: '11',
      product_id: '9', 
      quantity: 1
    },
    {
      id: '16', 
      order_id: '11',
      product_id: '8', 
      quantity: 1
    },
    {
      id: '17', 
      order_id: '12',
      product_id: '2', 
      quantity: 1
    },
    {
      id: '18', 
      order_id: '13',
      product_id: '5', 
      quantity: 1
    },
    {
      id: '19', 
      order_id: '14',
      product_id: '9', 
      quantity: 1
    },
    {
      id: '20', 
      order_id: '14',
      product_id: '10', 
      quantity: 1
    },
    {
      id: '21', 
      order_id: '15',
      product_id: '3', 
      quantity: 2
    },
    {
      id: '22', 
      order_id: '15',
      product_id: '7', 
      quantity: 1
    },
    {
      id: '23', 
      order_id: '15',
      product_id: '8', 
      quantity: 1
    },
    {
      id: '24', 
      order_id: '16',
      product_id: '10', 
      quantity: 1
    }
  ]);

};


// [
//   {
//     id: '1',
//     product_name: 'Oil Paint Set',
//     description: 'A set of high-quality oil paints with a range of colors.',
//     category: 'Art Supplies',
//     status: 'In Stock',
//     quantity: '50',
//     purchase_price: '50',
//     sale_price: '70',
//     image_url: 'https://cdn.shopify.com/s/files/1/0333/1778/1637/products/TV510_1.jpg?v=1637144375'
//   },
//   {
//     id: '2',
//     product_name: 'Watercolor Paper Pad',
//     description: 'A pad of cold-pressed watercolor paper with 20 sheets.',
//     category: 'Art Supplies',
//     status: 'In Stock',
//     quantity: '25',
//     purchase_price: '20',
//     sale_price: '30',
//     image_url: 'https://cdn.shopify.com/s/files/1/0333/1778/1637/products/aarchpad_1.jpg?v=1637395985'
//   },
//   {
//     id: '3',
//     product_name: 'Sketchbook',
//     description: 'A high-quality sketchbook with 100 pages.',
//     category: 'Art Supplies',
//     status: 'In Stock',
//     quantity: '30',
//     purchase_price: '15',
//     sale_price: '25',
//     image_url: 'https://www.leuchtturm1917.ca/media/productdetail/700x700/362360/sketchbook-square-225-x-225-mm-hardcover-112-pages-150-gsqm-plain-lemon.jpg'
//   },
//   {
//     id: '4',
//     product_name: 'Crochet Hook Set',
//     description: 'A set of crochet hooks in a variety of sizes.',
//     category: 'Craft Supplies',
//     status: 'In Stock',
//     quantity: '20',
//     purchase_price: '10',
//     sale_price: '15',
//     image_url: 'https://m.media-amazon.com/images/I/51p4fchdLwL._AC_.jpg'
//   },
//   {
//     id: '5',
//     product_name: 'Knitting Yarn',
//     description: 'A skein of high-quality wool yarn in a natural color.',
//     category: 'Craft Supplies',
//     status: 'In Stock',
//     quantity: '40',
//     purchase_price: '3',
//     sale_price: '5',
//     image_url: 'https://cdn.shopify.com/s/files/1/0333/1778/1637/products/BARISIENNE7_1_ffcd8b79-ba33-4d0b-a0e9-532b680278ae.jpg?v=1670742175'
//   },
//   {
//     id: '6',
//     product_name: 'Embroidery Thread Set',
//     description: 'A set of 24 embroidery threads in a variety of colors.',
//     category: 'Craft Supplies',
//     status: 'In Stock',
//     quantity: '15',
//     purchase_price: '12',
//     sale_price: '20',
//     image_url: 'https://imgs.michaels.com/MAM/assets/1/726D45CA1C364650A39CD1B336F03305/img/D50D8E0A09C74E2981CDB0B8B68DCED7/10358147.jpg?fit=inside|1024:1024'
//   },
//   {
//     id: '7',
//     product_name: 'Paintbrush Set',
//     description: 'A set of high-quality paintbrushes in a variety of sizes.',
//     category: 'Art Supplies',
//     status: 'In Stock',
//     quantity: '35',
//     purchase_price: '10',
//     sale_price: '15',
//     image_url: 'https://imgs.michaels.com/MAM/assets/1/5E3C12034D34434F8A9BAAFDDF0F8E1B/img/2FBEA7127C0D45DA9447E852AB45D9D8/10504534_6.jpg?fit=inside|540:540'
//   },
//   {
//   id: '8',
//   product_name: 'Acrylic Paint Set',
//   description: 'A set of 24 high-quality acrylic paints in a variety of colors.',
//   category: 'Art Supplies',
//   status: 'In Stock',
//   quantity: '10',
//   purchase_price: '70',
//   sale_price: '110',
//   image_url: 'https://cdn.shopify.com/s/files/1/0333/1778/1637/products/LB1072_1.jpg?v=1638518969'
//   },
//   {
//     id: '9',
//     product_name: 'Oil Pastels Set',
//     description: 'A set of high-quality oil pastels with a range of colors.',
//     category: 'Art Supplies',
//     status: 'In Stock',
//     quantity: '40',
//     purchase_price: '10',
//     sale_price: '15',
//     image_url: 'https://cdn.shopify.com/s/files/1/0333/1778/1637/products/MOP48_1_1af90a5c-3bc7-40b7-940c-b63d2d65fb70.jpg?v=1637105103'
//   },
//   {
//     id: '10',
//     product_name: 'Canvas Panels',
//     description: 'A pack of 10 canvas panels for painting.',
//     category: 'Art Supplies',
//     status: 'In Stock',
//     quantity: '15',
//     purchase_price: '8',
//     sale_price: '13',
//     image_url: 'https://imgs.michaels.com/MAM/assets/1/5E3C12034D34434F8A9BAAFDDF0F8E1B/img/7980972664224283893F58BBF16AE95F/10156197_25.jpg?fit=inside|1024:1024'
//   },
//   {
//     id: '11',
//     product_name: 'Watercolor Brush Set',
//     description: 'A set of high-quality watercolor brushes in a variety of sizes.',
//     category: 'Art Supplies',
//     status: 'In Stock',
//     quantity: '20',
//     purchase_price: '50',
//     sale_price: '90',
//     image_url: 'https://cdn.shopify.com/s/files/1/0333/1778/1637/products/RI01_1_134e0458-2719-4a70-8041-ef9b001b5c53.jpg?v=1647936513'
//   },
//   {
//     id: '12',
//     product_name: 'Origami Paper Set',
//     description: 'A set of origami papers with a variety of patterns.',
//     category: 'Craft Supplies',
//     status: 'In Stock',
//     quantity: '25',
//     purchase_price: '5',
//     sale_price: '10',
//     image_url: 'https://m.media-amazon.com/images/I/71B9aYPn-4L._AC_SX679_.jpg'
//   },
//   {
//     id: '13',
//     product_name: 'Wood Panel',
//     description: 'Panels are handcrafted to be strong yet surprisingly lightweight, and their unprimed raw surface can be painting on directly.',
//     category: 'Craft Supplies',
//     status: 'In Stock',
//     quantity: '10',
//     purchase_price: '20',
//     sale_price: '35',
//     image_url: 'https://cdn.shopify.com/s/files/1/0333/1778/1637/products/apgb_1.jpg?v=1634717610'
//   }
// ]