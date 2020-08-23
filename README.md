# Strapi application

This is the backend to the SkillsWest.London webapp.

## Database schema

There are three tables. career_path and course have a many-many relation. course exists in a one-to-many with module. 

These settings are encoded in files found at `api/*/models/*.settings.json` (where * represents the name of each table). Those files should be taken as the final source of truth. 

### career_path
exists in a many-many relation with course

|field | type | unique | required |
|-|-|-|-|
|id|unique primary key| T| T|
|name| varchar | T | T |
| description | rich text | F | T |
| video_url | varchar | F | F |
| lmi_code | varchar |F | F |
| color | varchar |T | T |

### provider
Exists in a one-to-many relation with course

|field | type | unique | required |
|-|-|-|-|
| id | unique primary key | T | F |
| name | varchar | T | T |
| address | varchar (long) | T | F |

### course
exists in a many-many relation with career_path
exists in a one-to-many relation with module

| field | type | unique | required |
|-|-|-|-|
|id|unique primary key| T| T|
|name| varchar | F | T |
| description | rich text | F | T |
| link | varchar | F | T |
| postcode | varchar | F | F |
| online | boolean | F | T |
| start_date | datetime | F | F |
| price | varchar | F | T |
| icon_url | varchar | F | T |

### module
exists in a many-to-one relation with course

order is an integer which represents the module's order relative to other modules in the course.

| field | type | unique | required |
|-|-|-|-|
|id|unique primary key| T| T|q
|course_id| integer reference | F | T |
| order | integer | F | F |
|name| varchar | F | T |
| description | rich text | F | T |
| link | varchar | F | T |
