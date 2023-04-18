# Data models

## API

### Members

| name              | type              | unique | optional |
| ----------------  | ----------------- | ------ | -------- |
| id                | int               | yes    | no       |
| name_first        | string            | no     | no       |
| name_last         | string            | no     | no       |
| dob_age           | int               | no     | no       |
| dob_date          | string            | no     | no       |
| email             | string            | yes    | no       |
| street_number     | int               | no     | no       |
| street_name       | string            | no     | no       |
| city              | string            | no     | no       |
| state             | string            | no     | no       |
| postcode          | string            | no     | no       |
| thumbnail         | string            | no     | no       |
| large             | string            | no     | no       |
| phone             | string            | no     | no       |
| uuid              | string            | yes    | no       |

Unique constraint on email, uuid.
