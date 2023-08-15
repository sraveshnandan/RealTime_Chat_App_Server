
import axios from "axios";
import React from "react";
const AuthPage = (props) => {
    const onSubmit = (e) => {
        e.preventDefault();
        const { value } = e.target[0];
        axios
            .post("https://realtime-chat-app-server-mntp.onrender.com/authenticate", { username: value })
            .then((r) => props.onAuth({ ...r.data, secret: value }))
            .catch((e) => console.log("Auth Error", e));
    };

    return (
        <div className="background">
            <form onSubmit={onSubmit} className="form-card">
                <div className="form-title">Welcome 👋</div>

                <div className="form-subtitle">Set a username to get started</div>

                <div className="auth">
                    <div className="auth-label">Username</div>
                    <input className="auth-input" name="username" />
                    <button className="auth-button" type="submit">
                        Enter
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AuthPage;