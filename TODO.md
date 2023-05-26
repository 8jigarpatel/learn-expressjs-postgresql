# TODOs

## OpenAPI Specification

- implement

---

## Auth

- with easy on/off control

---

## Screens

### Setting:

- Labels: Product, Service (Appointment), User (Staff), Customer (Patient)
- Site: Name, LogoURL

---

## Database

### Tables

- AppSetting (hard-coded keys):

  - Key (PK, string)
  - Value (string)
  - e.g., LabelProduct, LabelService, LabelUser,

- UserPreference (hard-coded keys)

  - Id (PK, guid)
  - UserID (FK to Staff, guid)
  - Key (string)
  - Value (string)
  - e.g., DefaultPage, Theme

- Product

  - Id (PK, guid)
  - Number (guid)
  - Name
  - Type
  - Status
  - Fixed Charge
  - Deliverable
  - Address
  - Customer(1)
  - User(1)

- Inventory (Products/ProductTypes)

  - Stock
  -

- Service

  - Id (PK, guid)
  - Number (guid)
  - Type
  - Status
  - Charge
  - Address
  - Customer(1)
  - User(1)

- ServiceType

  - Name
  - Initial Status

- User

  - Id (PK, guid)
  - LoginId
  - FirstName
  - LastName
  - Email
  - PhoneHome
  - PhoneMobile
  - Products(\*)
  - Services(\*)

- Customer

  - Id (PK, guid)
  - LoginId
  - FirstName
  - LastName
  - Email
  - PhoneHome
  - PhoneMobile
  - Products(\*)
  - Services(\*)

### Migration / Running Scripts

- Figure out a way to run script/apply migration for:
  - new table
  - remove table
  - new column in existing table
  - remove column from existing table
  - change column type
  - change column name

### Docker support

- Docker support for database

---

## Logging

- serilog/seq

---

## Docker support (for the entire app, including database)

- get ideas from private repo IdentityServer

---

## Redis / MongoDB / GraphQL

- see if any of these can be integrated for suitable use cases

---

#####################################
rough notes:

New: Service (or Appointment)/Product

Service:

- number (sGUID)
- type (date n time with duration, status, charge, contact, address, assignee)
- notes [1-*]
- reminders (email/sms) [1-*]
- ad-hoc contact (email/sms) [1-*]
- Payment: Billed, payment status, payment notes
  Service Status (customizable): e.g., New, Ready, Scheduled, Completed, Cancelled, No show
  ServiceType:
- name
- default status
- appointment date n time with optional default duration (hidden, optional, required)
- charge (fixed/hourly, per hour charge)
- contact (hidden, optional, required)
- address (hidden, optional, required)
- assigned to (hidden, optional, required)

Product: name, type, fixed charge, deliverable
Product type:
Contact: Given name, last name, email, number, note
Staff: Given name, last name, email, number, note
Find: Product/Service/Contact/Staff

Billing:

Reminders: Email/SMS/Both - days before

Setting: Labels (Service/Product/Contact/User), app name, logo, email/sms config

#####################################
SCREENS:

Dashboard:

- app name and logo
- menu: new (product / services),

Settings:

Logout

#####################################
