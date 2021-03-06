let data = {

    // -- A --
    "troubleshootingCategory": {
        "stepId": "troubleshootingCategory",
        "formTitle": "Troubleshooting Category",
        "stepTitle": "Please select the relevant category:",
        "buttonsArray": [
            {
                // -- 1 --
                "buttonDescription": "Troubleshooting orders issues",
                "stepId": "ordersIssues"
            },
            {
                // -- 2 --
                "buttonDescription": "Troubleshooting shipping issues",
                "stepId": "shippingIssues"
            },
            {
                // -- 3 --
                "buttonDescription": "Troubleshooting store manager issues",
                "stepId": "storeManagerIssues"
            }
        ]
    },

    // -- 1 --
    "ordersIssues": {
        "stepId": "ordersIssues",
        "formTitle": "Troubleshooting Orders Issues",
        "stepTitle": "Please select the relevant category:",
        "buttonsArray": [
            {
                // -- 1.1 --
                "buttonDescription": "Orders are missing in the store manager",
                "stepId": "missingOrders"
            }
        ]
    },

    // -- 1.1 --
    "missingOrders": {
        "stepId": "missingOrders",
        "formTitle": "Troubleshooting Orders Issues",
        "stepTitle": "Did the user receive an Email notification from the online payment provider?",
        "buttonsArray": [
            {
                // -- 1.1.1 --
                "buttonDescription": "Yes",
                "stepId": "userAcceptedEmailNotification"
            },
            {
                // -- 1.1.2 --
                "buttonDescription": "No",
                "stepId": "userDidntAcceptedEmailNotification"
            }
        ]
    },

    // -- 1.1.1 --
    "userAcceptedEmailNotification": {
        "stepId": "userAcceptedEmailNotification",
        "formTitle": "Troubleshooting Orders Issues",
        "stepTitle": "Does the order exist in the Orders tab of the Store manager?",
        "buttonsArray": [
            {
                // -- 1.1.1.1 --
                "buttonDescription": "Yes",
                "stepId": "orderExistStoreManager"
            },
            {
                // -- 1.1.1.2 --
                "buttonDescription": "No",
                "stepId": "orderDoesntExistStoreManager"
            }
        ]
    },

    // -- 1.1.2 --
    "userDidntAcceptedEmailNotification": {
        "stepId": "userDidntAcceptedEmailNotification",
        "formTitle": "Troubleshooting Orders Issues",
        "stepTitle": "Order not appearing in the store manager",
        "buttonsArray": [  ],
        "instructions": "Ask the user to contact the online payment provider.",
        "note": "For an order to appear on the store manager, the payment has to be completed. This means that the status of the order has to be approved."
    },

    // -- 1.1.1.1 --
    "orderExistStoreManager": {
        "stepId": "orderExistStoreManager",
        "formTitle": "Troubleshooting Orders Issues",
        "stepTitle": "Order not appearing in the store manager",
        "buttonsArray": [  ],
        "instructions": "Provide the user with the order number and a screenshot of it."
    },

    // -- 1.1.1.2 --
    "orderDoesntExistStoreManager": {
        "stepId": "orderDoesntExistStoreManager",
        "formTitle": "Missing orders in the store manager",
        "stepTitle": "Please select the relevant payment gateway:",
        "buttonsArray": [
            {
                // -- 1.1.1.2.1 --
                "buttonDescription": "PayPal",
                "stepId": "missingOrdersPayPal"
            },
            {
                // -- 1.1.1.2.2 --
                "buttonDescription": "Stripe",
                "stepId": "missingOrdersStripe"
            },
            {
                // -- 1.1.1.2.3 --
                "buttonDescription": "Square",
                "stepId": "missingOrdersSquare"
            },
            {
                // -- 1.1.1.2.4 --
                "buttonDescription": "Leumi Card",
                "stepId": "missingOrdersLeumiCard"
            }
        ]
    },

    // -- 1.1.1.2.1 --
    "missingOrdersPayPal": {
        "stepId": "missingOrdersPayPal",
        "formTitle": "Missing orders in the store manager",
        "stepTitle": "Missing orders- PayPal",
        "buttonsArray": [  ],
        "faqTitle": "PayPal Orders Which Do Not Appear in the Store Manager" ,
        "faqURL": "https://support.wix.com/en/article/internal-wix-stores-paypal-orders-which-do-not-appear-in-the-store-manager"
    },

    // -- 1.1.1.2.2 --
    "missingOrdersStripe": {
        "stepId": "missingOrdersStripe",
        "formTitle": "Missing orders in the store manager",
        "stepTitle": "Missing orders- Stripe",
        "buttonsArray": [  ],
        "faqTitle": "Orders Which Do Not Appear in the Store Manager (other than PayPal)" ,
        "faqURL": "https://support.wix.com/en/article/internal-wix-stores-orders-which-do-not-appear-in-the-store-manager-other-than-paypal"
    },

    // -- 1.1.1.2.3 --
    "missingOrdersSquare": {
        "stepId": "missingOrdersSquare",
        "formTitle": "Missing orders in the store manager",
        "stepTitle": "Missing orders- Square",
        "buttonsArray": [  ],
        "faqTitle": "Orders Which Do Not Appear in the Store Manager (other than PayPal)" ,
        "faqURL": "https://support.wix.com/en/article/internal-wix-stores-orders-which-do-not-appear-in-the-store-manager-other-than-paypal"
    },

    // -- 1.1.1.2.4 --
    "missingOrdersLeumiCard": {
        "stepId": "missingOrdersLeumiCard",
        "formTitle": "Missing orders in the store manager",
        "stepTitle": "Missing orders- Leumi Card",
        "buttonsArray": [  ],
        "faqTitle": "Orders Which Do Not Appear in the Store Manager (other than PayPal)" ,
        "faqURL": "https://support.wix.com/en/article/internal-wix-stores-orders-which-do-not-appear-in-the-store-manager-other-than-paypal"
    },

    // -- 2 --
    "shippingIssues": {
        "stepId": "shippingIssues",
        "formTitle": "Troubleshooting Category",
        "stepTitle": "Has the user created shipping rules by a weight range?",
        "buttonsArray": [
            {
                // -- 2.1 --
                "buttonDescription": "Yes",
                "stepId": "userCreatedShippingRulesByWeight"
            },
            {
                // -- 2.2 --
                "buttonDescription": "No",
                "stepId": "userNotCreatedShippingRulesByWeight"
            }
        ]
    },

    // -- 2.1 --
    "userCreatedShippingRulesByWeight": {
        "stepId": "userCreatedShippingRulesByWeight",
        "formTitle": "Shipping Rules By Weight",
        "stepTitle": "Shipping Rules By Weight",
        "buttonsArray": [  ],
        "csInternalURL": "https://csinternal.wixanswers.com/en/article/shipping-was-calculated-incorrectly",
        "instructions": "Make sure that the user added a weight value to his products.",
    },

    // --2.2 --
    "userNotCreatedShippingRulesByWeight": {
        "stepId": "userNotCreatedShippingRulesByWeight",
        "formTitle": "Shipping Rules",
        "stepTitle": "Does the user get additional shipping charges when proceeding to the PayPal checkout form Wix?",
        "buttonsArray": [
            {
                // -- 2.2.1 --
                "buttonDescription": "Yes",
                "stepId": "additionalChargesPayPalProceeding"
            } ,
            {
                // -- 2.2.2 --
                "buttonDescription": "No",
                "stepId": "shippingCalculatedIncorrectly"
            }
        ]
    },

    // -- 2.2.1 --
    "additionalChargesPayPalProceeding": {
        "stepId": "additionalChargesPayPalProceeding",
        "formTitle": "Shipping Rules",
        "stepTitle": "Does the user get additional shipping charges when proceeding PayPal checkout form Wix?",
        "buttonsArray": [],
        "csInternalURL": "https://csinternal.wixanswers.com/en/article/paypal-additional-shippingtax-fees-appear-when-proceeding-to-the-checkout-page",
        "instructions": "If you can recreate, it means that the user has created additional shipping rules in his PayPal account and he will need to disable them."
    },

    // -- 2.2.2 --
    "shippingCalculatedIncorrectly": {
        "stepId": "shippingCalculatedIncorrectly",
        "formTitle": "Shipping Rules",
        "stepTitle": "Does the user get additional shipping charges when proceeding to the PayPal checkout form Wix?",
        "buttonsArray": [ ],
        "faqTitle": "​Wix Stores Shipping/Taxes Are Calculated Incorrectly",
        "faqURL": "https://support.wix.com/en/article/internal-%E2%80%8Bwix-stores-shippingtaxes-are-calculated-incorrectly"
    },

    // -- 3 --
    "storeManagerIssues": {
        "stepId": "storeManagerIssues",
        "formTitle": "Troubleshooting store manager issues",
        "stepTitle": "Please select the relevant category:",
        "buttonsArray": [
            {
                // -- 3.1 --
                "buttonDescription": "Unable to connect the online payment method on the store manager",
                "stepId": "unableConnectingPaymentStoreManager"
            },
            {
                // --3.2 --
                "buttonDescription": "Confirmation Email is not sent to the seller",
                "stepId": "confirmationEmailSeller"
            },
            {
                // -- 3.3 --
                "buttonDescription": "Receiving an ExecuteBulk error after performing an action in the Store Manager",
                "stepId": "executeBulkErrorMessage"
            },
            {
                // -- 3.4 --
                "buttonDescription":"Confirmation Email is not being sent to buyers",
                "stepId": "confirmationEmailBuyers"
            }
        ]
    },

    // -- 3.1 --
    "unableConnectingPaymentStoreManager": {
        "stepId": "unableConnectingPaymentStoreManager",
        "formTitle": "Troubleshooting store manager issues",
        "stepTitle": "Please select the relevant payment gateway:",
        "buttonsArray": [
            {
                // --3.1.1 --
                "buttonDescription": "Leumi Card",
                "stepId": "unableConnectingLeumiCardStoreManager"
            }

        ]
    },

    // --3.1.1 --
    "unableConnectingLeumiCardStoreManager":{
        "stepId": "unableConnectingLeumiCardStoreManager",
        "formTitle": "Troubleshooting store manager issues",
        "stepTitle": "Unable to connect Leumi Card in the Store Manager",
        "buttonsArray": [  ],
        "csInternalURL": "https://csinternal.wixanswers.com/en/article/leumi-card-unable-to-connect-leumi-card-in-the-store-manager",
        "instructions": "Ask the user to provide a screenshot of confirmation email from Leumi Card."
    },

    // --3.2 --
    "confirmationEmailSeller":{
        "stepId": "confirmationEmailSeller",
        "formTitle": "Troubleshooting store manager issues",
        "stepTitle": "Confirmation Email is not sent to the seller",
        "buttonsArray": [  ],
        "faqTitle": "Wix Stores - Confirmation Email Not Received",
        "faqURL": "https://support.wix.com/en/article/internal-wix-stores-confirmation-email-not-received"
    },

    // -- 3.3 --
     "executeBulkErrorMessage":{
         "stepId": "executeBulkErrorMessage",
         "formTitle": "Troubleshooting store manager issues",
         "stepTitle": "Did the user provided a detailed description of the steps he went through and a video of the issue?",
         "buttonsArray": [
             {
                 // -- 3.3.1 --
                 "buttonDescription": "Yes",
                 "stepId": "executeBulkWithVideo"
             } ,
             {
                 // -- 3.3.2 --
                 "buttonDescription": "No",
                 "stepId": "executeBulkNoVideo"
             }
         ]
    },

    // -- 3.3.1 --
    "executeBulkWithVideo":{
        "stepId": "executeBulkWithVideo",
        "formTitle": "Troubleshooting store manager issues",
        "stepTitle": "Were you able to recreate from scratch?",
        "buttonsArray": [
            {
                // -- 3.3.1.1 --
                "buttonDescription": "Yes",
                "stepId": "executeBulkRecreate"
            },
            {
                // -- 3.3.1.2 --
                "buttonDescription": "No",
                "stepId": "executeBulkNoRecreate"
            }
        ]
    },

    // -- 3.3.2 --
    "executeBulkNoVideo":{
        "stepId": "executeBulkNoVideo",
        "formTitle": "Troubleshooting store manager issues",
        "stepTitle": "ExecuteBulk Error message",
        "buttonsArray": [  ],
        "faqTitle": "User Receives an ExecuteBulk Error When Trying to Add a Product",
        "faqURL": "https://support.wix.com/en/article/internal-wix-stores-user-receives-an-executebulk-error-when-trying-to-add-a-product"
    },

    // -- 3.3.1.1 --
    "executeBulkRecreate":{
        "stepId": "executeBulkRecreate",
        "formTitle": "Troubleshooting store manager issues",
        "stepTitle": "ExecuteBulk Error message",
        "buttonsArray": [  ],
        "instructions": "Please escalate to the Wix Stores gang."
    },

    // -- 3.3.1.2 --
    "executeBulkNoRecreate":{
        "stepId": "executeBulkNoRecreate",
        "formTitle": "Troubleshooting store manager issues",
        "stepTitle": "ExecuteBulk Error message",
        "buttonsArray": [  ],
        "instructions": "It seems like a local issue. Provide the user with the regular Troubleshooter."
    },

    // -- 3.4 --
    "confirmationEmailBuyers":{
        "stepId": "confirmationEmailBuyers",
        "formTitle": "Troubleshooting store manager issues",
        "stepTitle": "Is the 'Send an order confirmation email to buyers after purchase' checkbox enabled? ",
        "exampleScreenshot": "https://dl2.pushbulletusercontent.com/zxnqzbMfxSoLkPbnACiCg062vesKtYQS/cccc.png",
        "buttonsArray": [
            {
                // -- 3.4.1 --
                "buttonDescription": "Yes",
                "stepId": "confirmationEmailCheckboxEnabled"
            },
            {
                // -- 3.4.2 --
                "buttonDescription": "No",
                "stepId": "confirmationEmailCheckboxDisabled"
            },
            {
                // -- 3.4.3 --
                "buttonDescription": "The user does not have this feature",
                "stepId": "noConfirmationEmailCheckbox"
            }
        ]
    },

    // -- 3.4.1 --
    "confirmationEmailCheckboxEnabled":{
        "stepId": "confirmationEmailCheckboxEnabled",
        "formTitle": "Troubleshooting store manager issues",
        "stepTitle": "Confirmation Email Checkbox was Enabled",
        "buttonsArray": [  ],
        "faqTitle": "Confirmation Email Not Sent To Customers",
        "faqURL": "https://support.wix.com/en/article/internal-wix-stores-confirmation-email-not-sent-to-customers"
    },

    // -- 3.4.2 --
    "confirmationEmailCheckboxDisabled":{
        "stepId": "confirmationEmailCheckboxDisabled",
        "formTitle": "Troubleshooting store manager issues",
        "stepTitle": "Confirmation Email Checkbox was Disabled",
        "buttonsArray": [  ],
        "faqTitle": "ending Confirmation Emails to Your Customers Following a Store Purchase",
        "faqURL": "https://support.wix.com/en/article/sending-confirmation-emails-to-your-customers-following-a-store-purchase"
    },

    // -- 3.4.3 --
    "noConfirmationEmailCheckbox":{
        "stepId": "noConfirmationEmailCheckbox",
        "formTitle": "Troubleshooting store manager issues",
        "stepTitle": "Using Smart Action",
        "buttonsArray": [  ],
        "faqTitle": "Sending Automated Confirmation Emails to Your Store Customers",
        "faqURL": "https://support.wix.com/en/article/sending-automated-confirmation-emails-to-your-store-customers-using-smart-actions"
    }
}
