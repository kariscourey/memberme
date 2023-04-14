from fastapi import APIRouter, Depends
from queries.saved_members import (
    SavedMemberIn,
    SavedMemberOut,
    SavedMemberQueries,
)


router = APIRouter()


@router.get("/api/saved_members")
def get_all_saved_members(
    queries: SavedMemberQueries = Depends(),
):

    return {
        "saved_members": queries.get_all_saved_members(),
    }


@router.post("/api/saved_members/", response_model=SavedMemberOut)
def create_or_update_saved_member(
    member_in: SavedMemberIn,
    queries: SavedMemberQueries = Depends(),
):
    return queries.create_or_update_saved_member(member_in)


@router.delete("/api/saved_members/{saved_member_uuid}", response_model=bool)
def delete_saved_member(
    saved_member_uuid: int,
    queries: SavedMemberQueries = Depends(),
):
    queries.delete_saved_member(saved_member_uuid)
    return True
