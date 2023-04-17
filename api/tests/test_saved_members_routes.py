from fastapi.testclient import TestClient
from main import app
from queries.saved_members import SavedMemberQueries

client = TestClient(app)


class SavedMemberQueriesMock:
    def get_all_saved_members(self):
        return {}


def mockAccount():
    return {
        "id": "1",
        "name_first": "first",
        "name_last": "last",
        "dob_age": "1",
        "dob_date": "1/1/2020",
        "email": "email@email.com",
        "street_number": "111",
        "street_name": "Postal Address Way",
        "city": "Post",
        "state": "Post State",
        "postcode": "11111",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/75.jpg",
        "large": "https://randomuser.me/api/portraits/men/75.jpg",
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

    # clean up
    app.dependency_overrides = {}
