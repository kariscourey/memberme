from fastapi.testclient import TestClient
from main import app
from queries.saved_members import SavedMemberQueries

client = TestClient(app)


# define queries override
class SavedMemberQueriesMock:
    def get_all_saved_members(self):
        return {}


# get saved members (list) test
def test_get_all_saved_members():
    # arrange
    app.dependency_overrides[SavedMemberQueries] = SavedMemberQueriesMock

    # act
    response = client.get("api/saved_members")

    # assert
    assert response.status_code == 200

    # clean up
    app.dependency_overrides = {}
