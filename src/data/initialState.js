const objectUser = {
    user: {
        uid: "",
        displayName: "",
        photoURL: "",
        email: "",
        emailVerified: false,
        phoneNumber: "",
        isAnonymous: false,
        lastLoginAt: "",
        createdAt: ""
    },
    isLogged: false
};

const _newStore = (obj) => {
	return JSON.parse(JSON.stringify(obj));
};

export {
    objectUser,

    _newStore
}