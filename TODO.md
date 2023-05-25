# TODOs

## OpenAPI Specification

- implement

---

## Auth

- with easy on/off control

---

## Database

### Tables

- AppSetting (hard-coded keys):

  - Key (PK, string)
  - Value (string)
  - e.g., LabelProduct, LabelService

- UserPreference (hard-coded keys)

  - Id (PK, guid)
  - UserID (FK to Staff, guid)
  - Key (string)
  - Value (string)
  - e.g., DefaultPage, Theme

- Product

  - Id (PK, guid)
  -

- Service

  - Id (PK, guid)
  -

- Staff
  - Id (PK, guid)
  - FirstName
  - LastName
  - Email
  - PhoneHome
  - PhoneMobile

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
