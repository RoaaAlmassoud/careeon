export default class ErrorMessages {
    static isRequired = fieldName => `${fieldName} is required field`;
}


//12
//21
//22 for from and to state
export const errorsMessages = [
    //User error

    {code: "USER000", field: "serviceType", message: "Invalid identifier and/or password!"},
    {code: "USER001", field: "fromState", message: "Invalid email address!"},
    {code: "USER002", field: "phoneNumberCountryCode", message: "The international calling code is invalid!"},
    {code: "USER003", field: "email", message: "Invalid email address format!"},
    {code: "USER004", field: "phoneNumberNSN", message: "Phone number must be between 8 and 11 digits!"},
    {
        code: "USER005",
        field: "password",
        message: "The password must be between 8 and 32 characters and contain 1 upper case letter, 1 small case l latter, 1 number and 1 special character at least! (Special characters are !@#$%^&*-)!"
    },
    {
        code: "USER005",
        field: "newPassword",
        message: "The password must be between 8 and 32 characters and contain 1 upper case letter, 1 small case l latter, 1 number and 1 special character at least! (Special characters are !@#$%^&*-)!"
    },
    {code: "USER006", field: "weightUnit", message: "Invalid identifier and/or verification code!"},
    {
        code: "USER007",
        field: "documentPrice",
        message: "This verification code is expired, used or invalid! please request a new one."
    },
    {code: "USER008", field: "weightUnitPrice", message: "This account is not active!"},
    {code: "USER009", field: "volumetricPrice", message: "Invalid email and/or verification code!"},
    {code: "USER011", field: "oldPassword", message: "Old password is not correct!"},
    {code: "USER012", field: "firstName", message: "First name must contain english or arabic letters only and be between 5 and 50 letters in length!"},
    {code: "USER013", field: "lastName", message: "Last name must contain english or arabic letters only and be between 5 and 50 letters in length!"},


    /*"USER002": {"The international calling code is invalid!", 400},
"USER003": {"Invalid email address format!", 400},
"USER004": {"Phone number must be between 8 and 11 digits!", 400},*/

//Trips error

    {code: "TRIP000", field: "serviceType", message: "Invalid trip type!"},
    {code: "TRIP001", field: "fromStateId", message: "Trip source state is invalid!"},
    {code: "TRIP002", field: "transportation", message: "Trip transportation can be plane, car, train or ship!"},
    {code: "TRIP003", field: "date2", message: "Trip date must be greater than now by 24 hours at least!"},
    {code: "TRIP004", field: "deliverableType", message: "Deliverable type can be anything or documents only!"},
    {code: "TRIP005", field: "weight", message: "Weight must be greater than zero!"},
    {code: "TRIP006", field: "weightUnit", message: "Weight unit can be Kg or Lbs only!"},
    {code: "TRIP007", field: "documentPrice", message: "Document price must be greater than zero!"},
    {code: "TRIP008", field: "weightUnitPrice", message: "Weight price must be greater than zero!"},
    {code: "TRIP009", field: "volumetricPrice", message: "Volumetric price must be greater than zero!"},
    {code: "TRIP010", field: "itemEstimatedDeliveryCharge", message: "Trip not found!"},
    {
        code: "TRIP011",
        field: "itemEstimatedInsurance",
        message: "A quote request has been already requested for this request!"
    },
    {code: "TRIP012", field: "deliverToAddress", message: "Only scheduled trips can be changed to ongoing ones!"},
    {code: "TRIP013", field: "itemName", message: "Only ongoing trips can be changed to completed ones!"},
    {code: "TRIP014", field: "itemQuantity", message: "Only scheduled and ongoing trips can be cancelled!"},
    {code: "TRIP015", field: "itemWeight", message: "Invalid trip status!"},
    {code: "TRIP016", field: "itemWeightUnit", message: "Only scheduled trips can be deleted!"},
    {code: "TRIP017", field: "itemPhoto", message: "Only ongoing trips can their requests be updated!"},
    {code: "TRIP018", field: "deliverableType", message: "No confirmed quotes for this request!"},
    {code: "TRIP019", field: "itemUrl", message: "Only confirmed trips can be switched to being delivered!"},
    {code: "TRIP020", field: "itemPhoto", message: "Only being delivered trips can be switched to delivered!"},
    {code: "TRIP021", field: "deliverToAddress", message: "Invalid request status!"},


    {code: "TRIP023", field: "fromCountryId", message: "Trip source country are invalid!"},
    {code: "TRIP024", field: "fromCityId", message: "Trip source destination city are invalid!"},
    {code: "TRIP028", field: "toCountryId", message: "Trip destination country are invalid!"},
    {code: "TRIP029", field: "toStateId", message: "Trip destination state is invalid!"},
    {code: "TRIP030", field: "toCityId", message: "Trip destination city are invalid!"},


    //Requests errors
    {code: "REQUEST000", field: "serviceType", message: "Invalid request type!"},
    {
        code: "REQUEST001",
        field: "deliveredBeforeDate2",
        message: "Request delivery date must be greater than now by 72 hours at least!"
    },
    {
        code: "REQUEST002",
        field: "deliverToAddress",
        message: "Request delivery address must consist of letters, numbers, dash, period and comma and it must be between 10 and 250 in length!!"
    },
    {code: "REQUEST003", field: "paymentMethod", message: "Invalid payment method!"},
    {
        code: "REQUEST004",
        field: "pickUpAddress",
        message: "Request pickup address must consist of letters, numbers, dash, period and comma!"
    },
    {code: "REQUEST005", field: "itemLength", message: "Item length must be greater than zero!"},
    {code: "REQUEST006", field: "itemWidth", message: "Item width must be greater than zero!"},
    {code: "REQUEST007", field: "itemHeight", message: "Item height must be greater than zero!"},
    {
        code: "REQUEST008",
        field: "itemDescription",
        message: "Request description must consists of english letters, arabic letters and numbers only and it must be between 10 and 150 in length!"
    },
    {code: "REQUEST009", field: "itemDimensionUnit", message: "Invalid dimension unit!"},
    {
        code: "REQUEST010",
        field: "itemEstimatedDeliveryCharge",
        message: "Estimated delivery charge must be greater than zero!"
    },
    {code: "REQUEST011", field: "itemEstimatedInsurance", message: "Estimated insurance must be greater than zero!"},
    {code: "REQUEST012", field: "deliverToAddress", message: "Estimated item price must be greater than zero!!"},
    {
        code: "REQUEST013",
        field: "itemName",
        message: "Item name must consists of english letters, arabic letters and numbers only and it must be between 5 and 50 in length!"
    },
    {code: "REQUEST014", field: "itemQuantity", message: "Item quantity must be greater than zero!"},
    {code: "REQUEST015", field: "itemWeight", message: "Item weight must be greater than zero!"},
    {code: "REQUEST016", field: "itemWeightUnit", message: "Invalid weight unit!"},
    {code: "REQUEST017", field: "itemPhoto", message: "Invalid item photo. Allowed extensions are JPG,JPEG and PNG!"},
    {code: "REQUEST018", field: "deliverableType", message: "Deliverable type can be anything or documents only!"},
    {code: "REQUEST019", field: "itemUrl", message: "Invalid item URL!"},
    {code: "REQUEST020", field: "itemPhoto", message: "Item photo size must be smaller than 2MB!"},
    {code: "REQUEST021", field: "deliverToAddress", message: "Request not found!"},
    {code: "REQUEST022", field: "fromStateId", message: "Request source state is invalid!"},
    {code: "REQUEST023", field: "deliverToAddress", message: "Request quote price must be greater than zero!"},
    {code: "REQUEST024", field: "deliverToAddress", message: "The request has already quote provided by that trip!"},
    {code: "REQUEST025", field: "deliverToAddress", message: "The request doesn't have quote requests for that trip!"},
    {code: "REQUEST026", field: "deliverToAddress", message: "The request has already an accepted quote!"},
    {code: "REQUEST027", field: "deliverToAddress", message: "The request doesn't have quotes provided by that trip!"},
    {
        code: "REQUEST028",
        field: "deliverToAddress",
        message: "Quotes that are not accepted by the requester can't be confirmed!"
    },
    {
        code: "REQUEST029",
        field: "deliverToAddress",
        message: "Confirmed, being delivered and delivered requests can't be deleted!"
    },

    {code: "REQUEST033", field: "fromCountryId", message: "Request source country is invalid!"},
    {code: "REQUEST034", field: "fromCityId", message: "Request source city is invalid!"},
    {
        code: "REQUEST038",
        field: "toCountryId",
        message: "Request destination country are invalid!"
    },
    {
        code: "REQUEST039",
        field: "toStateId",
        message: "Request destination state is invalid!"
    },
    {
        code: "REQUEST040",
        field: "toCityId",
        message: "Request destination city is invalid!"
    },
];