import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {'API-KEY': '31066793-0c82-43e0-88fb-db49a2d80799'}
})


export const UsersAPI = {
    getUsers(currentPage = 20, pageSize = 5) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => {
            return response.data
        })
    }
}

export const AuthAPI = {
    getAuth() {
        return instance.get(`auth/me`).then(response => {
            return response.data
        })
    }
}

export const FollowAPI = {
    getFollow(u = 4917) {
        return instance.post(`follow/${u.id}`)
            .then(response => {
                return response.data
            })}
}

export const UnfollowAPI = {
   getUnfollow(u = 4917) {
       return instance.delete(`follow/${u.id}`)
        .then(response => {
            return response.data
        })}
}