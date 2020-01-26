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
    login(email, password, rememberMe = false, captcha = null) {
        return instance.post(`auth/login`, {email, password, rememberMe, captcha})
    },
    logout() {
        return instance.delete(`auth/login`)
    },
    getSecurity() {
        return instance.get(`security/get-captcha-url`)
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

export const userProfile = {
    getProfile(userId) {
        return instance.get(`profile/${userId}`)
    },
    updateStatus(status) {
        return instance.put(`profile/status`, {status})
    },
    getStatus(userId = 4917) {
        return instance.get(`profile/status/${userId}`)
    },
    savePhoto(photo) {
        let formData = new FormData()
        formData.append('image', photo)
        return instance.put(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    },
    saveProfile(profile) {
        return instance.put(`profile`, profile)
    }
}
