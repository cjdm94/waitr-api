define({ "api": [
  {
    "type": "get",
    "url": "/auth/login",
    "title": "Login",
    "group": "Auth",
    "version": "1.0.0",
    "name": "Login",
    "description": "<p>If valid login credentials are provided, a user object, containing an authentication token, will be returned. If the user has the restaurateur roleID, the response body will also contain restaurant and menu objects.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>The email address which is associated to the user's Waitr account</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>The user's password</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response (200):",
          "content": "{\n   \"user\": {\n       \"userId\": String,\n       \"firstName\": String,\n       \"lastName\": String,\n       \"email\": String,\n       \"role\": Int,\n       \"token\": String\n   },\n   \"restaurant\": {\n       \"restaurantId\": String,\n       \"name\": String,\n       \"isStripeAccountVerified\": Bool\n   },\n   \"menu\": {\n       \"menuId\": String,\n       \"name\": String\n   }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "emailNotRegistered (401):",
          "content": "{\n  \"statusCode\": 401,\n  \"errorKey\": \"emailNotRegistered\",\n  \"type\": \"_auth\",\n  \"devMsg\": String,\n  \"userMsg\": String\n}",
          "type": "json"
        },
        {
          "title": "passwordIncorrect (401):",
          "content": "{\n  \"statusCode\": 401,\n  \"errorKey\": \"passwordIncorrect\",\n  \"type\": \"_auth\",\n  \"devMsg\": String,\n  \"userMsg\": String\n}",
          "type": "json"
        },
        {
          "title": "restaurantNotFound (404):",
          "content": "{\n  \"statusCode\": 404,\n  \"errorKey\": \"restaurantNotFound\",\n  \"type\": \"_auth\",\n  \"devMsg\": String,\n  \"userMsg\": String\n}",
          "type": "json"
        },
        {
          "title": "menuNotFound (404):",
          "content": "{\n  \"statusCode\": 404,\n  \"errorKey\": \"menuNotFound\",\n  \"type\": \"_auth\",\n  \"devMsg\": String,\n  \"userMsg\": String\n}",
          "type": "json"
        }
      ]
    },
    "filename": "C:/users/cal/desktop/waitr/waitr-api/router/AuthRouter.js",
    "groupTitle": "Auth",
    "groupDescription": "<p>Used by clients to retrieve an access token for users, which will be provided in all requests thereafter</p>",
    "sampleRequest": [
      {
        "url": "/api/auth/login"
      }
    ]
  },
  {
    "type": "post",
    "url": "/category",
    "title": "Create",
    "group": "Category",
    "version": "1.0.0",
    "name": "Create",
    "description": "<p>A user may add a new category to an existing menu.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "menuId",
            "description": "<p>The ID of the menu to which the category is to be added</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>The category name, e.g. &quot;Desserts&quot;</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "description",
            "description": "<p>A string describing the category</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response (201):",
          "content": "{\n   \"categoryId\": String \n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "menuNotFound (404):",
          "content": "{\n  \"statusCode\": 404,\n  \"errorKey\": \"menuNotFound\",\n  \"type\": \"_auth\",\n  \"devMsg\": String,\n  \"userMsg\": String\n}",
          "type": "json"
        }
      ]
    },
    "filename": "C:/users/cal/desktop/waitr/waitr-api/router/CategoryRouter.js",
    "groupTitle": "Category",
    "groupDescription": "<p>All endpoints relating to the Category resource</p>",
    "sampleRequest": [
      {
        "url": "/api/category"
      }
    ]
  },
  {
    "type": "patch",
    "url": "/category/:categoryId",
    "title": "Update",
    "group": "Category",
    "version": "1.0.0",
    "name": "Update",
    "description": "<p>The details of a category may be updated by the user.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "categoryId",
            "description": "<p>The ID of the category to be updated</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "name",
            "description": "<p>A new name for the category, e.g. &quot;Puddings&quot;</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "description",
            "description": "<p>A new description for the category</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "active",
            "description": "<p>This parameter can be used to activate or deactivate a category (only active categories will be visible to customers).</p>"
          }
        ]
      }
    },
    "error": {
      "examples": [
        {
          "title": "categoryNotFound (404):",
          "content": "{\n  \"statusCode\": 404,\n  \"errorKey\": \"categoryNotFound\",\n  \"type\": \"_auth\",\n  \"devMsg\": String,\n  \"userMsg\": String\n}",
          "type": "json"
        }
      ]
    },
    "filename": "C:/users/cal/desktop/waitr/waitr-api/router/CategoryRouter.js",
    "groupTitle": "Category",
    "groupDescription": "<p>All endpoints relating to the Category resource</p>",
    "sampleRequest": [
      {
        "url": "/api/category/:categoryId"
      }
    ]
  },
  {
    "type": "post",
    "url": "/item",
    "title": "Create",
    "group": "Item",
    "version": "1.0.0",
    "name": "Create",
    "description": "<p>A user may add a new item to an existing menu category.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "categoryId",
            "description": "<p>The ID of the category to which the item is to be added</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>The item name, e.g. &quot;BBQ Ribs&quot;</p>"
          },
          {
            "group": "Parameter",
            "type": "Float",
            "optional": false,
            "field": "price",
            "description": "<p>The price of the item, to two decimal places</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "description",
            "description": "<p>A string describing the item</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response (201):",
          "content": "{\n   \"itemId\": String \n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "categoryNotFound (404):",
          "content": "{\n  \"statusCode\": 404,\n  \"errorKey\": \"categoryNotFound\",\n  \"type\": \"_auth\",\n  \"devMsg\": String,\n  \"userMsg\": String\n}",
          "type": "json"
        }
      ]
    },
    "filename": "C:/users/cal/desktop/waitr/waitr-api/router/ItemRouter.js",
    "groupTitle": "Item",
    "groupDescription": "<p>All endpoints relating to the Item resource</p>",
    "sampleRequest": [
      {
        "url": "/api/item"
      }
    ]
  },
  {
    "type": "patch",
    "url": "/item/:itemId",
    "title": "Update",
    "group": "Item",
    "version": "1.0.0",
    "name": "Update",
    "description": "<p>The details of an item may be updated by the user.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "itemId",
            "description": "<p>The ID of the item to be updated</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "name",
            "description": "<p>A new name for the item, e.g. &quot;BBQ Pork Ribs&quot;</p>"
          },
          {
            "group": "Parameter",
            "type": "Float",
            "optional": true,
            "field": "price",
            "description": "<p>The new price of the item, to two decimal places</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "description",
            "description": "<p>A new description for the item</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "active",
            "description": "<p>This parameter can be used to activate or deactivate an item (only active items will be visible to customers).</p>"
          }
        ]
      }
    },
    "error": {
      "examples": [
        {
          "title": "itemNotFound (404):",
          "content": "{\n  \"statusCode\": 404,\n  \"errorKey\": \"itemNotFound\",\n  \"type\": \"_auth\",\n  \"devMsg\": String,\n  \"userMsg\": String\n}",
          "type": "json"
        }
      ]
    },
    "filename": "C:/users/cal/desktop/waitr/waitr-api/router/ItemRouter.js",
    "groupTitle": "Item",
    "groupDescription": "<p>All endpoints relating to the Item resource</p>",
    "sampleRequest": [
      {
        "url": "/api/item/:itemId"
      }
    ]
  },
  {
    "type": "post",
    "url": "/menu",
    "title": "Create",
    "group": "Menu",
    "version": "1.0.0",
    "name": "Create",
    "description": "<p>A user can add a new menu to an existing restaurant.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "restaurantId",
            "description": "<p>The ID of the restaurant to which the menu is to be assigned</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>The name of the menu, e.g. &quot;Main Menu&quot;</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "description",
            "description": "<p>A description of the menu, e.g. &quot;Our delicious main courses&quot;</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response (201):",
          "content": "{\n   \"menuId\": String\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "restaurantNotFound (404):",
          "content": "{\n  \"statusCode\": 404,\n  \"errorKey\": \"restaurantNotFound\",\n  \"type\": \"_auth\",\n  \"devMsg\": String,\n  \"userMsg\": String\n}",
          "type": "json"
        }
      ]
    },
    "filename": "C:/users/cal/desktop/waitr/waitr-api/router/MenuRouter.js",
    "groupTitle": "Menu",
    "groupDescription": "<p>All endpoints relating to the Menu resource</p>",
    "sampleRequest": [
      {
        "url": "/api/menu"
      }
    ]
  },
  {
    "type": "get",
    "url": "/menu/:menuId",
    "title": "Get",
    "group": "Menu",
    "version": "1.0.0",
    "name": "Get",
    "description": "<p>A user can retrieve a menu, including all its categories and items.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "menuId",
            "description": "<p>The ID of the menu to be retrieved</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response (200):",
          "content": "{\n   \"id\": String,\n   \"name\": String,\n   \"restaurant\": {\n      \"id\": String,\n      \"name\": String\n   },\n   \"categories\": [\n      {\n          \"id\": String,\n          \"name\": String,\n          \"items\": [\n               {\n                   \"id\": String,\n                   \"name\": String,\n                   \"price\": Float,\n                   \"description\": String\n               }, \n               ...\n          ]\n      },\n      ...\n   ] \n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "menuNotFound (404):",
          "content": "{\n  \"statusCode\": 404,\n  \"errorKey\": \"menuNotFound\",\n  \"type\": \"_auth\",\n  \"devMsg\": String,\n  \"userMsg\": String\n}",
          "type": "json"
        }
      ]
    },
    "filename": "C:/users/cal/desktop/waitr/waitr-api/router/MenuRouter.js",
    "groupTitle": "Menu",
    "groupDescription": "<p>All endpoints relating to the Menu resource</p>",
    "sampleRequest": [
      {
        "url": "/api/menu/:menuId"
      }
    ]
  },
  {
    "type": "post",
    "url": "/menu/:menuId",
    "title": "Update",
    "group": "Menu",
    "version": "1.0.0",
    "name": "Update",
    "description": "<p>A user can add a new menu to an existing restaurant.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "menuId",
            "description": "<p>The ID of the menu to be updated</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "name",
            "description": "<p>A new name for the menu, e.g. &quot;Mains&quot;</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "description",
            "description": "<p>A new description of the menu, e.g. &quot;A variety of our delicious main courses&quot;</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "active",
            "description": "<p>This parameter can be used to deactivate the menu (only active menus are visible to customers). If this parameter is provided, all other optional parameters will be ignored.</p>"
          }
        ]
      }
    },
    "error": {
      "examples": [
        {
          "title": "menuNotFound (404):",
          "content": "{\n  \"statusCode\": 404,\n  \"errorKey\": \"menuNotFound\",\n  \"type\": \"_auth\",\n  \"devMsg\": String,\n  \"userMsg\": String\n}",
          "type": "json"
        }
      ]
    },
    "filename": "C:/users/cal/desktop/waitr/waitr-api/router/MenuRouter.js",
    "groupTitle": "Menu",
    "groupDescription": "<p>All endpoints relating to the Menu resource</p>",
    "sampleRequest": [
      {
        "url": "/api/menu/:menuId"
      }
    ]
  },
  {
    "type": "get",
    "url": "/order/:orderId",
    "title": "Get",
    "group": "Order",
    "version": "1.0.0",
    "name": "Get",
    "description": "<p>A user can retrieve a specific order. Useful when a customer wishes to see a breakdown of an order they've placed.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "orderId",
            "description": "<p>The ID of the order to be retrieved</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response (200):",
          "content": "{\n\t\t\"id\": String,\n\t\t\"price\": Float,\n\t\t\"status\": Int,\n\t\t\"timePlaced\": Int,\n\t\t\"customer\": {\n\t\t\t\"id\": String,\n\t\t\t\"firstName\": String,\n\t\t\t\"lastName\": String\n\t\t},\n\t\t\"restaurant\": {\n\t\t\t\"id\": String,\n\t\t\t\"name\": String,\n\t\t\t\"tableNo\": String\n\t\t},\n     \"items\": [\n         {\n             \"id\": String,\n             \"name\": String,\n             \"price\": Float\n         },\n         ...\n     ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "orderNotFound (404):",
          "content": "{\n  \"statusCode\": 404,\n  \"errorKey\": \"orderNotFound\",\n  \"type\": \"_auth\",\n  \"devMsg\": String,\n  \"userMsg\": String\n}",
          "type": "json"
        }
      ]
    },
    "filename": "C:/users/cal/desktop/waitr/waitr-api/router/OrderRouter.js",
    "groupTitle": "Order",
    "groupDescription": "<p>All endpoints relating to the Order resource</p>",
    "sampleRequest": [
      {
        "url": "/api/order/:orderId"
      }
    ]
  },
  {
    "type": "get",
    "url": "/order/:ownerId",
    "title": "List",
    "group": "Order",
    "version": "1.0.0",
    "name": "List",
    "description": "<p>A user can retrieve a list of orders; either all orders placed by a particular diner, or all those placed at a particular restaurant.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ownerId",
            "description": "<p>The ID of the owner of the orders. For a diner's orders, provide a valid userId. For a restaurant's orders, provide a valid restaurantId.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "liveOnly",
            "description": "<p>Setting this parameter to true will cause the server to filter out any resolved orders (e.g. accepted orders, rejected orders etc.). Defaults to <code>false</code>.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response (200):",
          "content": "{\n [\n   {\n\t\t   \"id\": String,\n\t\t   \"price\": Float,\n\t\t   \"status\": Int,\n\t\t   \"timePlaced\": Int,\n\t\t   \"customer\": {\n\t\t\t   \"id\": String,\n\t\t\t   \"firstName\": String,\n\t\t\t   \"lastName\": String\n\t\t   },\n\t\t   \"restaurant\": {\n\t\t\t   \"id\": String,\n\t\t\t   \"name\": String,\n\t\t\t   \"tableNo\": String\n\t\t   },\n        \"items\": [\n           {\n                \"id\": String,\n                \"name\": String,\n                \"price\": Float\n           },\n           ...\n        ]\n   },\n   ...\n ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "restaurantNotFound (404):",
          "content": "{\n  \"statusCode\": 404,\n  \"errorKey\": \"restaurantNotFound\",\n  \"type\": \"_auth\",\n  \"devMsg\": String,\n  \"userMsg\": String\n}",
          "type": "json"
        },
        {
          "title": "userNotFound (404):",
          "content": "{\n  \"statusCode\": 404,\n  \"errorKey\": \"userNotFound\",\n  \"type\": \"_auth\",\n  \"devMsg\": String,\n  \"userMsg\": String\n}",
          "type": "json"
        }
      ]
    },
    "filename": "C:/users/cal/desktop/waitr/waitr-api/router/OrderRouter.js",
    "groupTitle": "Order",
    "groupDescription": "<p>All endpoints relating to the Order resource</p>",
    "sampleRequest": [
      {
        "url": "/api/order/:ownerId"
      }
    ]
  },
  {
    "type": "patch",
    "url": "/order/:orderId",
    "title": "Refund",
    "group": "Order",
    "version": "1.0.0",
    "name": "Refund",
    "description": "<p>A restaurant can refund an existing paid-for order. The server calls the Stripe API to reverse the charge.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "orderId",
            "description": "<p>The ID of the order to be refunded</p>"
          }
        ]
      }
    },
    "error": {
      "examples": [
        {
          "title": "orderNotFound (404):",
          "content": "{\n  \"statusCode\": 404,\n  \"errorKey\": \"orderNotFound\",\n  \"type\": \"_auth\",\n  \"devMsg\": String,\n  \"userMsg\": String\n}",
          "type": "json"
        },
        {
          "title": "chargeNotFound (404):",
          "content": "{\n  \"statusCode\": 404,\n  \"errorKey\": \"chargeNotFound\",\n  \"type\": \"_auth\",\n  \"devMsg\": String,\n  \"userMsg\": String\n}",
          "type": "json"
        },
        {
          "title": "cannotRefundUnpaidOrder (401):",
          "content": "{\n  \"statusCode\": 401,\n  \"errorKey\": \"cannotRefundUnpaidOrder\",\n  \"type\": \"_auth\",\n  \"devMsg\": String,\n  \"userMsg\": String\n}",
          "type": "json"
        },
        {
          "title": "stripeError (4XX, 5XX):",
          "content": "{\n  \"statusCode\": Int,\n  \"errorKey\": \"stripeError\",\n  \"type\": \"_stripe\",\n  \"devMsg\": String,\n  \"userMsg\": String\n}",
          "type": "json"
        }
      ]
    },
    "filename": "C:/users/cal/desktop/waitr/waitr-api/router/OrderRouter.js",
    "groupTitle": "Order",
    "groupDescription": "<p>All endpoints relating to the Order resource</p>",
    "sampleRequest": [
      {
        "url": "/api/order/:orderId"
      }
    ]
  },
  {
    "type": "get",
    "url": "/restaurant/:restaurantId",
    "title": "Get",
    "group": "Restaurant",
    "version": "1.0.0",
    "name": "Get",
    "description": "<p>A user can retrieve a particular restaurant.</p>",
    "success": {
      "examples": [
        {
          "title": "Success-Response (200):",
          "content": "{  \n   \"general\": {  \n       \"id\": String,\n       \"name\": String,\n       \"description\": String,\n       \"location\": String,\n       \"phoneNumber\": String,\n       \"emailAddress\": String,\n       \"registrationDate\": Int,\n       \"active\": Bool,\n       \"owner\": {  \n           \"id\": String,\n           \"firstName\": String,\n           \"lastName\": String,\n           \"email\": String,\n           \"roleId\": Int,\n           \"active\": Bool,\n           \"verified\": Bool,\n           \"registrationDate\": Int\n       }\n   },\n   \"stripeAccount\": {  \n       \"id\": String,\n       \"object\": String,\n       \"business_name\": String,\n       \"business_url\": String,\n       \"charges_enabled\": Bool,\n       \"country\": String,\n       \"created\": Int,\n       \"debit_negative_balances\": Bool,\n       \"decline_charge_on\": {  \n           \"avs_failure\": Bool,\n           \"cvc_failure\": Bool\n       },\n       \"default_currency\": String,\n       \"details_submitted\": Bool,\n       \"display_name\": String,\n       \"email\": String,\n       \"external_accounts\": {  \n           \"object\": String,\n           \"data\": Array,\n           \"has_more\": Bool,\n           \"total_count\": Int,\n           \"url\": String\n       },\n       \"legal_entity\": {  \n           \"additional_owners\": Array,\n           \"address\": {  \n               \"city\": String,\n               \"country\": String,\n               \"line1\": String,\n               \"line2\": String,\n               \"postal_code\": String,\n               \"state\": String\n           },\n           \"business_name\": String,\n           \"business_tax_id_provided\": Bool,\n           \"dob\": {  \n               \"day\": Int,\n               \"month\": Int,\n               \"year\": Int\n           },\n           \"first_name\": String,\n           \"last_name\": String,\n           \"personal_address\": {  \n               \"city\": String,\n               \"country\": String,\n               \"line1\": String,\n               \"line2\": String,\n               \"postal_code\": String,\n               \"state\": String\n           },\n           \"type\": String,\n           \"verification\": {  \n               \"details\": String,\n               \"details_code\": String,\n               \"document\": String,\n               \"document_back\": String,\n               \"status\": String\n           }\n       },\n       \"metadata\": {},\n       \"payout_schedule\": {  \n           \"delay_days\": Int,\n           \"interval\": String\n       },\n       \"payout_statement_descriptor\": String,\n       \"payouts_enabled\": Bool,\n       \"product_description\": String,\n       \"statement_descriptor\": String,\n       \"support_email\": String,\n       \"support_phone\": String,\n       \"timezone\": String,\n       \"tos_acceptance\": {  \n           \"date\": Int,\n           \"ip\": String,\n           \"user_agent\": String\n       },\n       \"type\": \"custom\",\n       \"verification\": {  \n           \"disabled_reason\": String,\n           \"due_by\": String,\n           \"fields_needed\": Array\n       }\n   },\n   \"menus\": [  \n       {  \n           \"id\": String,\n           \"name\": String,\n           \"restaurant\": {  \n               \"id\": String,\n               \"name\": String\n           },\n           \"categories\": [  \n               {  \n                   \"id\": String,\n                   \"name\": String,\n                   \"items\": [  \n                       {  \n                           \"id\": String,\n                           \"name\": String,\n                           \"price\": Float,\n                           \"description\": String\n                       }\n                   ]\n               }\n           ]\n       }\n   ],\n   \"orders\": [  \n       {  \n           \"id\": String,\n           \"price\": Float,\n           \"status\": Int,\n           \"timePlaced\": Int,\n           \"customer\": {  \n               \"id\": String,\n               \"firstName\": String,\n               \"lastName\": String\n           },\n           \"restaurant\": {  \n               \"id\": String,\n               \"name\": String,\n               \"tableNo\": String\n           },\n           \"items\": [  \n               {  \n                   \"id\": String,\n                   \"name\": String,\n                   \"price\": Float\n               }\n           ]\n       }\n   ],\n   \"tableUsers\": [  \n       {  \n           \"id\": String,\n           \"restaurantId\": String,\n           \"customerId\": String,\n           \"tableNo\": String,\n           \"time\": Int\n       }\n   ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "restaurantNotFound (404):",
          "content": "{\n  \"statusCode\": 404,\n  \"errorKey\": \"restaurantNotFound\",\n  \"type\": \"_auth\",\n  \"devMsg\": String,\n  \"userMsg\": String\n}",
          "type": "json"
        }
      ]
    },
    "filename": "C:/users/cal/desktop/waitr/waitr-api/router/RestaurantRouter.js",
    "groupTitle": "Restaurant",
    "groupDescription": "<p>All endpoints relating to the Restaurant resource</p>",
    "sampleRequest": [
      {
        "url": "/api/restaurant/:restaurantId"
      }
    ]
  },
  {
    "type": "get",
    "url": "/restaurant",
    "title": "List",
    "group": "Restaurant",
    "version": "1.0.0",
    "name": "List",
    "description": "<p>A user can retrieve a complete list of Waitr's active restaurants.</p>",
    "success": {
      "examples": [
        {
          "title": "Success-Response (200):",
          "content": "{\n  [\n    {\n      \"restaurantId\": String,\n      \"name\": String,\n      \"menus\": [\n      \t{\n\t            \"id\": String,\n\t            \"name\": String,\n\t            \"restaurant\": {\n\t                \"id\": String,\n\t                \"name\": String\n\t            },\n\t            \"categories\": [\n\t                {\n\t                    \"id\": String,\n\t                    \"name\": String,\n\t                    \"items\": [\n\t\t\t\t\t\t\t{\n\t\t\t\t\t\t\t    \"id\": String,\n\t\t\t\t\t\t        \"name\": String,\n\t\t\t\t\t\t        \"price\": Float,\n\t\t\t\t\t\t        \"description\": String\n\t\t\t\t\t\t\t},\n\t\t\t\t\t\t\t...\n\t                    ]\n\t                },\n\t\t\t\t\t...\n         \t]\n          },\n          ...\n      ]\n    },\n    ...\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "C:/users/cal/desktop/waitr/waitr-api/router/RestaurantRouter.js",
    "groupTitle": "Restaurant",
    "groupDescription": "<p>All endpoints relating to the Restaurant resource</p>",
    "sampleRequest": [
      {
        "url": "/api/restaurant"
      }
    ]
  },
  {
    "type": "get",
    "url": "/restaurant/:restaurantId/tableUsers",
    "title": "Get",
    "group": "Restaurant",
    "version": "1.0.0",
    "name": "List",
    "description": "<p>A restaurant can retrieve an up-to-date breakdown of which of their tables are occupied by active customers.</p>",
    "success": {
      "examples": [
        {
          "title": "Success-Response (200):",
          "content": " {\n   \"tableUsers\": [\n        {\n\t\t\t   \"id\": tu.id,\n\t\t\t   \"restaurantId\": String,\n\t\t\t   \"customerId\": String,\n\t\t\t   \"tableNo\": String,\n\t\t\t   \"time\": Int\n\t\t   },\n\t\t   ...\n    ]\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "restaurantNotFound (404):",
          "content": "{\n  \"statusCode\": 404,\n  \"errorKey\": \"restaurantNotFound\",\n  \"type\": \"_auth\",\n  \"devMsg\": String,\n  \"userMsg\": String\n}",
          "type": "json"
        }
      ]
    },
    "filename": "C:/users/cal/desktop/waitr/waitr-api/router/RestaurantRouter.js",
    "groupTitle": "Restaurant",
    "groupDescription": "<p>All endpoints relating to the Restaurant resource</p>",
    "sampleRequest": [
      {
        "url": "/api/restaurant/:restaurantId/tableUsers"
      }
    ]
  },
  {
    "type": "post",
    "url": "/user",
    "title": "Create",
    "group": "User",
    "version": "1.0.0",
    "name": "Create",
    "description": "<p>Handles the creation of a new user account.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>The type of user account to be created. Can be either &quot;diner&quot; or &quot;restaurateur&quot;</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "firstName",
            "description": "<p>The user's first name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "lastName",
            "description": "<p>The user's surname (family name)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>A valid email address to be assigned to the user's Waitr account</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>A string containing a minimum of eight characters, at least one letter, and at least one number.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "restaurantName",
            "description": "<p>If the <code>type</code> parameter is &quot;restaurateur&quot;, this parameter must be provided. Otherwise it will be ignored.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response (201):",
          "content": "{\n   \"user\": {\n       \"id\": String,\n       \"firstName\": String,\n       \"lastName\": String,\n       \"email\": String,\n       \"role\": Int\n   },\n   \"restaurant\": {\n       \"id\": String,\n       \"ownerId\": String,\n       \"name\": String\n   },\n   \"menu\": {\n       \"id\": String,\n       \"restaurantId\": String,\n       \"name\": String\n   }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "invalidUserType (401):",
          "content": "{\n  \"statusCode\": 401,\n  \"errorKey\": \"invalidUserType\",\n  \"type\": \"_auth\",\n  \"devMsg\": String,\n  \"userMsg\": String\n}",
          "type": "json"
        },
        {
          "title": "emailInvalid (400):",
          "content": "{\n  \"statusCode\": 400,\n  \"errorKey\": \"emailInvalid\",\n  \"type\": \"_auth\",\n  \"devMsg\": String,\n  \"userMsg\": String\n}",
          "type": "json"
        },
        {
          "title": "emailAlreadyRegistered (401):",
          "content": "{\n  \"statusCode\": 401,\n  \"errorKey\": \"emailAlreadyRegistered\",\n  \"type\": \"_auth\",\n  \"devMsg\": String,\n  \"userMsg\": String\n}",
          "type": "json"
        },
        {
          "title": "passwordInvalid (400):",
          "content": "{\n  \"statusCode\": 400,\n  \"errorKey\": \"passwordInvalid\",\n  \"type\": \"_auth\",\n  \"devMsg\": String,\n  \"userMsg\": String\n}",
          "type": "json"
        }
      ]
    },
    "filename": "C:/users/cal/desktop/waitr/waitr-api/router/UserRouter.js",
    "groupTitle": "User",
    "groupDescription": "<p>All endpoints relating to the User resource</p>",
    "sampleRequest": [
      {
        "url": "/api/user"
      }
    ]
  },
  {
    "type": "patch",
    "url": "/user/:userId",
    "title": "Update",
    "group": "User",
    "version": "1.0.0",
    "name": "Update",
    "description": "<p>Handles the modification of the details of an existing user account.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userId",
            "description": "<p>The ID of the user to be updated</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "firstName",
            "description": "<p>The user's new first name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "lastName",
            "description": "<p>The user's new surname (family name)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "email",
            "description": "<p>A new valid email address to be assigned to the user's Waitr account. (If this parameter is provided, all other optional parameters will be ignored.)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "password",
            "description": "<p>A string containing a minimum of eight characters, at least one letter, and at least one number. (If this parameter is provided, all other optional parameters will be ignored.)</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "active",
            "description": "<p>A string containing a minimum of eight characters, at least one letter, and at least one number.</p>"
          }
        ]
      }
    },
    "error": {
      "examples": [
        {
          "title": "userNotFound (404):",
          "content": "{\n  \"statusCode\": 404,\n  \"errorKey\": \"userNotFound\",\n  \"type\": \"_auth\",\n  \"devMsg\": String,\n  \"userMsg\": String\n}",
          "type": "json"
        }
      ]
    },
    "filename": "C:/users/cal/desktop/waitr/waitr-api/router/UserRouter.js",
    "groupTitle": "User",
    "groupDescription": "<p>All endpoints relating to the User resource</p>",
    "sampleRequest": [
      {
        "url": "/api/user/:userId"
      }
    ]
  }
] });
