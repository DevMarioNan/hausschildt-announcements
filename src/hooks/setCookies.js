import Cookie from "js-cookie";

const setCookie = (key, value) => {
    Cookie.set(key, value, {
        expires: 1,
        secure: true,
        sameSite: "strict",
        path: "/"
    });
};

export default setCookie;