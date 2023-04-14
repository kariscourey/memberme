from fastapi.testclient import TestClient
from main import app
from queries.saved_members import SavedMemberQueries

client = TestClient(app)


class SavedMemberQueriesMock:
    def get_all_saved_members(self):
        return {}

    def create_or_update_saved_member(self,):
        return {}

    def delete_saved_member(self, saved_member_id, account_id):
        return {}


def mockAccount():
    return {
        "id": "1",
        "first_name": "first",
        "last_name": "last",
        "age": "1",
        "email": "email@email.com",
        "postal_address": "111 Postal Address Way",
        "dob": "11/11/1111",
        "phone": "111-111-1111",
        "uuid": "ASLK1232A12",
    }


def override_account():
    return mockAccount


def test_get_all_saved_members():
    # arrange
    app.dependency_overrides[SavedMemberQueries] = SavedMemberQueriesMock

    # act
    response = client.get("api/saved_members")

    # assert
    assert response.status_code == 200


def test_create_or_update_saved_member():
    # arrange

    # act
    response = client.get("api/saved_members")

    # assert
    assert response.status_code == 200
