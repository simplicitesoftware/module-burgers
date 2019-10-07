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



`BRGBurger` business object definition
--------------------------------------



### Fields

| Name                                                         | Type                                     | Required | Updatable | Personal | Description                                                                      | 
| ------------------------------------------------------------ | ---------------------------------------- | -------- | --------- | -------- | -------------------------------------------------------------------------------- |
| `brgBurgerName`                                              | char(50)                                 | yes*     | yes       |          | -                                                                                |
| `brgBugerPrice`                                              | float(5, 2)                              | yes      | yes       |          | -                                                                                |
| `brgBurgerPicture`                                           | image                                    |          | yes       |          | -                                                                                |
| `brgBurgerDescription`                                       | html(100)                                |          | yes       |          | -                                                                                |

### Custom actions

No custom action

`BRGComposition` business object definition
-------------------------------------------



### Fields

| Name                                                         | Type                                     | Required | Updatable | Personal | Description                                                                      | 
| ------------------------------------------------------------ | ---------------------------------------- | -------- | --------- | -------- | -------------------------------------------------------------------------------- |
| `brgCompositionBurgerId` link to **`BRGBurger`**             | id                                       | yes*     | yes       |          | -                                                                                |
| _Ref. `brgCompositionBurgerId.brgBurgerName`_                | _char(50)_                               |          |           |          | -                                                                                |
| `brgCompositionIngredientId` link to **`BRGIngredient`**     | id                                       | yes*     | yes       |          | -                                                                                |
| _Ref. `brgCompositionIngredientId.brgIngredientName`_        | _char(50)_                               |          |           |          | -                                                                                |
| `brgCompositionQuantity`                                     | int(100)                                 | yes      | yes       |          | -                                                                                |

### Custom actions

No custom action

`BRGCustomer` business object definition
----------------------------------------



### Fields

| Name                                                         | Type                                     | Required | Updatable | Personal | Description                                                                      | 
| ------------------------------------------------------------ | ---------------------------------------- | -------- | --------- | -------- | -------------------------------------------------------------------------------- |
| `brgCustomerEmail`                                           | email(100)                               | yes*     | yes       |          | -                                                                                |
| `brgCustomerPhone`                                           | phone(20)                                |          | yes       |          | -                                                                                |
| `brgCustomerLastname`                                        | char(100)                                | yes      | yes       |          | -                                                                                |
| `brgCustomerFirstname`                                       | char(100)                                | yes      | yes       |          | -                                                                                |

### Custom actions

No custom action

`BRGExclusion` business object definition
-----------------------------------------



### Fields

| Name                                                         | Type                                     | Required | Updatable | Personal | Description                                                                      | 
| ------------------------------------------------------------ | ---------------------------------------- | -------- | --------- | -------- | -------------------------------------------------------------------------------- |
| `brgExclusionCustomerId` link to **`BRGCustomer`**           | id                                       | yes*     | yes       |          | -                                                                                |
| _Ref. `brgExclusionCustomerId.brgCustomerEmail`_             | _email(100)_                             |          |           |          | -                                                                                |
| `brgExclusionIngredientId` link to **`BRGIngredient`**       | id                                       | yes*     | yes       |          | -                                                                                |
| _Ref. `brgExclusionIngredientId.brgIngredientName`_          | _char(50)_                               |          |           |          | -                                                                                |

### Custom actions

No custom action

`BRGIngredient` business object definition
------------------------------------------



### Fields

| Name                                                         | Type                                     | Required | Updatable | Personal | Description                                                                      | 
| ------------------------------------------------------------ | ---------------------------------------- | -------- | --------- | -------- | -------------------------------------------------------------------------------- |
| `brgIngredientName`                                          | char(50)                                 | yes*     | yes       |          | -                                                                                |
| `brgIngredientPrice`                                         | float(5, 2)                              | yes      | yes       |          | -                                                                                |

### Custom actions

No custom action

`BRGOrder` business object definition
-------------------------------------



### Fields

| Name                                                         | Type                                     | Required | Updatable | Personal | Description                                                                      | 
| ------------------------------------------------------------ | ---------------------------------------- | -------- | --------- | -------- | -------------------------------------------------------------------------------- |
| `brgOrderDatetime`                                           | datetime                                 | yes*     |           |          | -                                                                                |
| `brgOrderCustomerId` link to **`BRGCustomer`**               | id                                       | yes*     | yes       |          | -                                                                                |
| _Ref. `brgOrderCustomerId.brgCustomerEmail`_                 | _email(100)_                             |          |           |          | -                                                                                |
| _Ref. `brgOrderCustomerId.brgCustomerFirstname`_             | _char(100)_                              |          |           |          | -                                                                                |
| _Ref. `brgOrderCustomerId.brgCustomerLastname`_              | _char(100)_                              |          |           |          | -                                                                                |
| `brgOrderBurgerId` link to **`BRGBurger`**                   | id                                       | yes*     | yes       |          | -                                                                                |
| _Ref. `brgOrderBurgerId.brgBurgerName`_                      | _char(50)_                               |          |           |          | -                                                                                |
| _Ref. `brgOrderBurgerId.brgBugerPrice`_                      | _float(5, 2)_                            |          |           |          | -                                                                                |
| `brgOrderComposition`                                        | text(10000)                              |          |           |          | -                                                                                |
| `brgOrderDate`                                               | date                                     |          |           |          | -                                                                                |

### Custom actions

No custom action

`burgers` external object definition
------------------------------------




