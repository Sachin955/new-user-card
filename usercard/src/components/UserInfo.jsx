import React from 'react'

const UserInfo = ({ data }) => {
    console.log(data)
    return (
        <div>
            <h2>User Info List</h2>
            <input/> <button>Add</button>
            <ul>
                {data.map((userData) => (
                    <div key={userData.id}>
                        {userData.id}
                        {userData.title}<button>delete</button>

                    </div>
                ))}
            </ul>
        </div>
    )
}

export default UserInfo;
