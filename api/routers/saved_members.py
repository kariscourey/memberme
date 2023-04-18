from fastapi import APIRouter, Depends
from queries.saved_members import (
    SavedMemberIn,
    SavedMemberOut,
    SavedMemberQueries,
)


# initialize router
router = APIRouter()


# get saved member router (one item)
@router.get("/api/saved_members/{saved_member_uuid}/")  # noqa 52
def get_saved_member(
    saved_member_uuid: str,
    queries: SavedMemberQueries = Depends(),
):
    return {
        "saved_member": queries.get_saved_member(saved_member_uuid),
    }


# get saved members router (list)
@router.get("/api/saved_members")
def get_all_saved_members(
    queries: SavedMemberQueries = Depends(),
):
    return {
        "saved_members": queries.get_all_saved_members(),
    }


# create or update saved member router
@router.post("/api/saved_members/", response_model=SavedMemberOut)
def create_or_update_saved_member(
    member_in: SavedMemberIn,
    queries: SavedMemberQueries = Depends(),
):
    return queries.create_or_update_saved_member(member_in)


# delete saved member router
@router.delete("/api/saved_members/{saved_member_uuid}", response_model=bool)
def delete_saved_member(
    saved_member_uuid: str,
    queries: SavedMemberQueries = Depends(),
):
    queries.delete_saved_member(saved_member_uuid)
    return True
