import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {'API-KEY': '31066793-0c82-43e0-88fb-db49a2d80799'}
})


export const UsersAPI = {
    getUsers(currentPage = 20, pageSize = 5) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
    }
}

export const AuthAPI = {
    getAuth() {
        return instance.get(`auth/me`)
    },
    login(email, password, rememberMe = false) {
        return instance.post(`auth/login`, {email, password, rememberMe})
    },
    logout() {
        return instance.delete(`auth/login`)
    }
}

export const FollowAPI = {
    getFollow(u = 4917) {
        return instance.post(`follow/${u.id}`)
    }
}

export const UnfollowAPI = {
    getUnfollow(u = 4917) {
        return instance.delete(`follow/${u.id}`)
    }
}

export const getUserProfile = {
    getProfile(userId) {
        return instance.get(`profile/${userId}`)
    }
}

export const userProfileStatus = {
    updateStatus(status) {
        return instance.put(`profile/status`, {status})
    },
    getStatus(userId = 4917) {
        return instance.get(`profile/status/${userId}`)
    }
}
