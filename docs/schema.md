# Schema Information

## part_sales
column name        | data type | details
-------------------|-----------|-----------------------
id                 | integer   | not null, primary key
user_id           | integer   | not null, foreign key (references users)
part_number        | string    | not null, indexed
part_type          | string    | not null
part_description   | text      | not null
location(zip code) | integer   | not null (eventually)


## part_tagging
A join table for parts and vehicles
column name      | data type | details
-----------------|-----------|-----------------------
id               | integer   | not null, primary key
part_#number     | integer   | not null, foreign key (references part_sales#part_number)
vehicle_id       | integer   | not null, foreign key (references vehicles)


## vehicle_sales
column name         | data type | details
--------------------|-----------|-----------------------
id                  | integer   | not null, primary key
user_id            | integer   | not null, foreign key (references users)
Chasis Number/VIN   | string    | not null
vehicle_description | text      | not null
vehicle condition   | string    | not null
title_status        | string    | not null
vehicle_id          | integer   | not null, foreign key (references vehicles)
location(zip code)  | integer   | not null (eventually)

## looking_for_requests
column name   | data type | details
--------------|-----------|-----------------------
id            | integer   | not null, primary key
user_id       | integer   | not null, foreign key (references users)
title         | string    | not null
vehicle_id    | integer   | not null
part_number   | integer   |
body          | text      |
location      | integer   |

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
email           | string    | not null, unique
password_digest | string    | not null



## sessions
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
token           | string    | not null, unique
user_id         | integer   | not null, foreign key (references user)


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
(maybe have a user_id?)
