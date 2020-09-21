import moment from "moment";

export const isAuthenticated = () => {
    const token = JSON.parse(window.localStorage.getItem("token"));
    if (token) {
        if (moment().isAfter(token.expiration)) {
            window.localStorage.removeItem("token");
            return false;
        }
        return true;
    }
    return false;
};
