<!--
 ___ _            _ _    _ _    __
/ __(_)_ __  _ __| (_)__(_) |_ /_/
\__ \ | '  \| '_ \ | / _| |  _/ -_)
|___/_|_|_|_| .__/_|_\__|_|\__\___|
            |_| 
-->
![](https://docs.simplicite.io//logos/logo250.png)
* * *

`Burgers` module definition
===========================

[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=com.simplicite.modules%3ABurgers&metric=alert_status)](https://sonarcloud.io/dashboard?id=com.simplicite.modules%3ABurgers)

### Introduction

This is a sample **Burger shop** application (backend and frontend).

### Import

To import this module:

- Create a module named `Burgers`
- Set the settings as:

```json
{
	"type": "git",
	"origin": {
		"uri": "https://github.com/simplicitesoftware/module-burgers.git"
	}
}
```

- Click on the _Import module_ button

### Configure

In order to have the frontend working the password for the
webservices-only user `burgers` must be `simplicite`.

This can be achieved by importing the following XML:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<simplicite xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://www.simplicite.fr/base" xsi:schemaLocation="http://www.simplicite.fr/base https://www.simplicite.io/resources/schemas/base.xsd">
<object>
	<name>UserPwd</name>
	<action>update</action>
	<data>
		<usr_login_read>burgers</usr_login_read>
		<usr_password>simplicite</usr_password>
	</data>
</object>
</simplicite>
```

### Load data

Some sample data is provided as a module's dataset.

Open this dataset and click on the _Apply_ button after having imported the module and made a full clear cache.


`BrgBurger` business object definition
--------------------------------------

**Burger** business object

### Fields

| Name                                                         | Type                                     | Required | Updatable | Personal | Description                                                                      | 
| ------------------------------------------------------------ | ---------------------------------------- | -------- | --------- | -------- | -------------------------------------------------------------------------------- |
| `brgBurgerName`                                              | char(50)                                 | yes*     | yes       |          | Name                                                                             |
| `brgBurgerPrice`                                             | float(5, 2)                              | yes      | yes       |          | Price                                                                            |
| `brgBurgerPicture`                                           | image                                    |          | yes       |          | Picture                                                                          |
| `brgBurgerDescription`                                       | html(100)                                |          | yes       |          | Description                                                                      |

`BrgComposition` business object definition
-------------------------------------------

Burger **composition** business object

### Fields

| Name                                                         | Type                                     | Required | Updatable | Personal | Description                                                                      | 
| ------------------------------------------------------------ | ---------------------------------------- | -------- | --------- | -------- | -------------------------------------------------------------------------------- |
| `brgCompositionBurgerId` link to **`BrgBurger`**             | id                                       | yes*     | yes       |          | Burger                                                                           |
| _Ref. `brgCompositionBurgerId.brgBurgerName`_                | _char(50)_                               |          |           |          | _Name_                                                                           |
| `brgCompositionIngredientId` link to **`BrgIngredient`**     | id                                       | yes*     | yes       |          | Ingredient                                                                       |
| _Ref. `brgCompositionIngredientId.brgIngredientName`_        | _char(50)_                               |          |           |          | _Name_                                                                           |
| `brgCompositionQuantity`                                     | int(100)                                 | yes      | yes       |          | Quantity                                                                         |

`BrgCustomer` business object definition
----------------------------------------

Burger **customer** business object

### Fields

| Name                                                         | Type                                     | Required | Updatable | Personal | Description                                                                      | 
| ------------------------------------------------------------ | ---------------------------------------- | -------- | --------- | -------- | -------------------------------------------------------------------------------- |
| `brgCustomerEmail`                                           | email(100)                               | yes*     | yes       |          | Email                                                                            |
| `brgCustomerPhone`                                           | phone(20)                                |          | yes       |          | Phone number                                                                     |
| `brgCustomerLastname`                                        | char(100)                                | yes      | yes       |          | Last name                                                                        |
| `brgCustomerFirstname`                                       | char(100)                                | yes      | yes       |          | First name                                                                       |

`BrgExclusion` business object definition
-----------------------------------------

Burger **user's ingredient exclusion** business object

### Fields

| Name                                                         | Type                                     | Required | Updatable | Personal | Description                                                                      | 
| ------------------------------------------------------------ | ---------------------------------------- | -------- | --------- | -------- | -------------------------------------------------------------------------------- |
| `brgExclusionCustomerId` link to **`BrgCustomer`**           | id                                       | yes*     | yes       |          | Customer                                                                         |
| _Ref. `brgExclusionCustomerId.brgCustomerEmail`_             | _email(100)_                             |          |           |          | _Email_                                                                          |
| `brgExclusionIngredientId` link to **`BrgIngredient`**       | id                                       | yes*     | yes       |          | Ingredient                                                                       |
| _Ref. `brgExclusionIngredientId.brgIngredientName`_          | _char(50)_                               |          |           |          | _Name_                                                                           |

`BrgIngredient` business object definition
------------------------------------------

Burger **ingredient**

### Fields

| Name                                                         | Type                                     | Required | Updatable | Personal | Description                                                                      | 
| ------------------------------------------------------------ | ---------------------------------------- | -------- | --------- | -------- | -------------------------------------------------------------------------------- |
| `brgIngredientName`                                          | char(50)                                 | yes*     | yes       |          | Name                                                                             |
| `brgIngredientPrice`                                         | float(5, 2)                              | yes      | yes       |          | Price                                                                            |

`BrgOrder` business object definition
-------------------------------------

Burger **order**

### Fields

| Name                                                         | Type                                     | Required | Updatable | Personal | Description                                                                      | 
| ------------------------------------------------------------ | ---------------------------------------- | -------- | --------- | -------- | -------------------------------------------------------------------------------- |
| `brgOrderDatetime`                                           | datetime                                 | yes*     |           |          | Date and time                                                                    |
| `brgOrderCustomerId` link to **`BrgCustomer`**               | id                                       | yes*     | yes       |          | Customer                                                                         |
| _Ref. `brgOrderCustomerId.brgCustomerEmail`_                 | _email(100)_                             |          |           |          | _Email_                                                                          |
| _Ref. `brgOrderCustomerId.brgCustomerFirstname`_             | _char(100)_                              |          |           |          | _First name_                                                                     |
| _Ref. `brgOrderCustomerId.brgCustomerLastname`_              | _char(100)_                              |          |           |          | _Last name_                                                                      |
| `brgOrderBurgerId` link to **`BrgBurger`**                   | id                                       | yes*     | yes       |          | Burger                                                                           |
| _Ref. `brgOrderBurgerId.brgBurgerName`_                      | _char(50)_                               |          |           |          | _Name_                                                                           |
| _Ref. `brgOrderBurgerId.brgBurgerPrice`_                     | _float(5, 2)_                            |          |           |          | _Price_                                                                          |
| `brgOrderComposition`                                        | text(10000)                              |          |           |          | Composition                                                                      |
| `brgOrderDate`                                               | date                                     |          |           |          | Date                                                                             |

`burgers` external object definition
------------------------------------

Burger shop responsive web **frontend**


