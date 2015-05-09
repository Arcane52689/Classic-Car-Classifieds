# Schema Information

## part_sales
column name      | data type | details
-----------------|-----------|-----------------------
id               | integer   | not null, primary key
owner_id         | integer   | not null, foreign key (references users)
part_number      | integer   | not null
part_description | text      | not null
part_for_make    | text      |
part_for_model   | text      |
part_for_year    | text      |


## vehicle_sales
column name         | data type | details
--------------------|-----------|-----------------------
id                  | integer   | not null, primary key
owner_id            | integer   | not null, foreign key (references users)
VIN                 | integer   | not null
vehicle_description | text      | not null
part_for_make       | text      |
part_for_model      | text      |
part_for_year       | text      |

## looking_for_requests
column name   | data type | details
--------------|-----------|-----------------------
id            | integer   | not null, primary key
author_id     | integer   | not null, foreign key (references users)
title         | string    | not null
vehicle_make  | string    |
vehicle_model | string    |
vehicle_year  | integer   |
body          | text      |

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
email           | string    | not null, unique
password_digest | string    | not null
session_token   | string    | not null, unique



## Possible Changes:
Give Vehicles their own table
