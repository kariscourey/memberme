from pydantic import BaseModel
from typing import List
from queries.pool import pool


class SavedMemberIn(BaseModel):
    first_name: str
    last_name: str
    age: int
    email: str
    postal_address: str
    dob: str
    phone: str
    uuid: str


class SavedMemberOut(BaseModel):
    id: int
    first_name: str
    last_name: str
    age: int
    email: str
    postal_address: str
    dob: str
    phone: str
    uuid: str


class SavedMembersOut(BaseModel):
    members: List[SavedMemberOut]


class SavedMemberQueries:
    def get_all_saved_members(self) -> SavedMembersOut:
        with pool.connection() as conn:
            with conn.cursor() as cur:
                cur.execute(
                    """
                    SELECT id,
                        first_name,
                        last_name,
                        age,
                        email,
                        postal_address,
                        dob,
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

    def create_or_update_saved_member(
            self, data: SavedMemberIn
    ) -> SavedMemberOut:
        with pool.connection() as conn:
            with conn.cursor() as cur:
                params = [
                    data.first_name,
                    data.last_name,
                    data.age,
                    data.email,
                    data.postal_address,
                    data.dob,
                    data.phone,
                    data.uuid,
                ]
                cur.execute(
                    """
                    INSERT INTO saved_members (
                        first_name,
                        last_name,
                        age,
                        email,
                        postal_address,
                        dob,
                        phone,
                        uuid
                    )
                    VALUES (%s, %s, %s, %s, %s, %s, %s, %s)
                    ON CONFLICT (uuid) DO UPDATE
                      SET postal_address=(EXCLUDED.postal_address)
                    RETURNING id,
                        first_name,
                        last_name,
                        age,
                        email,
                        postal_address,
                        dob,
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
