const COHORT_NAME = '2306-GHP-ET-WEB-FT-SF';
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`;




//get all post

export async function fetchAllPosts() {
    try {
        const response = await fetch(`${BASE_URL}/posts` )
        const result = await response.json();
        return result;
    } catch (error) {
        console.error("Cannot fetch all posts", error)
    }
}


//delete a post

export async function deletePost(postId) {
    try {
        const response = await fetch(`${BASE_URL}/posts/${postId}`, {
        method: "DELETE",
        headers: {Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGVkMzBkMzIxZDlkYjAwMTQ2YTExMmUiLCJ1c2VybmFtZSI6ImFhYSIsImlhdCI6MTY5MzI2NjEzMX0.sox5yWgw056XvPSgWYuqtd5Z9Ntpq5J_152XD88KvUk"}
        });
          
        const result = await response.json();
        console.log(result);
        return result;
    } catch (error) {
        console.error(error);
    }

}


