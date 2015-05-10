# Schema Information

## part_sales
column name      | data type | details
-----------------|-----------|-----------------------
id               | integer   | not null, primary key
owner_id         | integer   | not null, foreign key (references users)
part_number      | integer   | not null
part_type        | string    | not null
part_description | text      | not null
part_for_makes   | text      |
part_for_models  | text      |
part_for_years   | text      |


## vehicle_sales
column name         | data type | details
--------------------|-----------|-----------------------
id                  | integer   | not null, primary key
owner_id            | integer   | not null, foreign key (references users)
Chasis Number/VIN   | integer   | not null
vehicle_description | text      | not null
vehicle condition   | string    | not null
title_status        | string    | not null
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
contact number  | string    |



## Vehicles:
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
make            | string    | not null
model           | string    | not null
year            | integer   | not null

## Images:
column name       | data type | details
------------------|-----------|-----------------------
id                | integer   | not null, primary key
file_location     | string    | not null
requestable_id    | string    | not null
requestable_type  | string    | not null
