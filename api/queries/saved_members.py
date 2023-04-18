from pydantic import BaseModel
from typing import List
from queries.pool import pool


# define SavedMemberIn
class SavedMemberIn(BaseModel):
    name_first: str
    name_last: str
    dob_age: int
    email: str
    street_number: int
    street_name: str
    city: str
    state: str
    postcode: str
    thumbnail: str
    large: str
    dob_date: str
    phone: str
    uuid: str


# define SavedMemberOut
class SavedMemberOut(BaseModel):
    id: int
    name_first: str
    name_last: str
    dob_age: int
    email: str
    street_number: int
    street_name: str
    city: str
    state: str
    postcode: str
    thumbnail: str
    large: str
    dob_date: str
    phone: str
    uuid: str


# define SavedMembersOut
class SavedMembersOut(BaseModel):
    members: List[SavedMemberOut]


# define SavedMemberQueries
class SavedMemberQueries:

    # get saved member query (one item)
    def get_saved_member(self, saved_member_uuid: int) -> SavedMemberOut:
        with pool.connection() as conn:
            with conn.cursor() as cur:
                params = [
                    saved_member_uuid,
                ]
                cur.execute(
                    """
                    SELECT id,
                        name_first,
                        name_last,
                        dob_age,
                        email,
                        street_number,
                        street_name,
                        city,
                        state,
                        postcode,
                        thumbnail,
                        large,
                        dob_date,
                        phone,
                        uuid
                    FROM saved_members
                    WHERE uuid= %s
                    """,
                    params,
                )
                results = []
                for row in cur.fetchall():
                    record = {}
                    for i, column in enumerate(cur.description):
                        record[column.name] = row[i]
                    results.append(record)
                return results

    # get saved members query (list)
    def get_all_saved_members(self) -> SavedMembersOut:
        with pool.connection() as conn:
            with conn.cursor() as cur:
                cur.execute(
                    """
                    SELECT id,
                        name_first,
                        name_last,
                        dob_age,
                        email,
                        street_number,
                        street_name,
                        city,
                        state,
                        postcode,
                        thumbnail,
                        large,
                        dob_date,
                        phone,
                        uuid
                    FROM saved_members
                    """
                )
                results = []
                for row in cur.fetchall():
                    record = {}
                    for i, column in enumerate(cur.description):
                        record[column.name] = row[i]
                    results.append(record)
                return results

    # create or update saved member query
    def create_or_update_saved_member(self, data: SavedMemberIn) -> SavedMemberOut:  # noqa 52
        with pool.connection() as conn:
            with conn.cursor() as cur:
                params = [
                    data.name_first,
                    data.name_last,
                    data.dob_age,
                    data.email,
                    data.street_number,
                    data.street_name,
                    data.city,
                    data.state,
                    data.postcode,
                    data.thumbnail,
                    data.large,
                    data.dob_date,
                    data.phone,
                    data.uuid,
                ]
                cur.execute(
                    """
                    INSERT INTO saved_members (
                        name_first,
                        name_last,
                        dob_age,
                        email,
                        street_number,
                        street_name,
                        city,
                        state,
                        postcode,
                        thumbnail,
                        large,
                        dob_date,
                        phone,
                        uuid
                    )
                    VALUES (
                        %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s
                    )
                    ON CONFLICT (uuid, email) DO UPDATE
                      SET thumbnail=(EXCLUDED.thumbnail)
                    RETURNING id,
                        name_first,
                        name_last,
                        dob_age,
                        email,
                        street_number,
                        street_name,
                        city,
                        state,
                        postcode,
                        thumbnail,
                        large,
                        dob_date,
                        phone,
                        uuid
                    """,
                    params,
                )
                record = None
                row = cur.fetchone()
                if row is not None:
                    record = {}
                    for i, column in enumerate(cur.description):
                        record[column.name] = row[i]
                return record

    # delete saved member query
    def delete_saved_member(self, saved_member_uuid: int) -> bool:
        with pool.connection() as conn:
            with conn.cursor() as cur:
                params = [
                    saved_member_uuid,
                ]
                cur.execute(
                    """
                    DELETE FROM saved_members
                    WHERE uuid = %s
                    """,
                    params,
                )
