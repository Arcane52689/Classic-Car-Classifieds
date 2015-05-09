# Schema Information

## part_sales
column name      | data type | details
-----------------|-----------|-----------------------
id               | integer   | not null, primary key
owner_id         | integer   | not null, foreign key (references users)
part_number      | integer   | not null
part_description | text      | not null
part_for_makes   | text      |
part_for_models  | text      |
part_for_years   | text      |


## vehicle_sales
column name         | data type | details
--------------------|-----------|-----------------------
id                  | integer   | not null, primary key
owner_id            | integer   | not null, foreign key (references users)
VIN                 | integer   | not null
vehicle_description | text      | not null
vehicle_id          | integer   | not null, foreign key (references vehicles)

## looking_for_requests
column name   | data type | details
--------------|-----------|-----------------------
id            | integer   | not null, primary key
author_id     | integer   | not null, foreign key (references users)
title         | string    | not null
vehicle_id    | integer   | not null
part_number   | integer   | 
body          | text      |

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
email           | string    | not null, unique
password_digest | string    | not null
session_token   | string    | not null, unique



## Vehicles:
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
make            | string    | not null
model           | string    | not null
year            | integer   | not null
