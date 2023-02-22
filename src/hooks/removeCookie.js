import Cookie from "js-cookie";

const removeCookie = (key) => {
    Cookie.remove(key)
};

export default removeCookie;