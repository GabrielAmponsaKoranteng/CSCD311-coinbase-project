import {useState} from 'react';

let LoginComponent = () => {
    let [visible, setVisible] = useState("password");
    let [visibleStatus, setVisibleStatus] = useState("");

    return (
        <div className="container" id="page">
            <div className="session">
                <h2 className="header">Sign in to Coinbase</h2>

                <div className="account-form">
                    <div className="form">
                        <form className="form-vertical" action="/sessions" acceptCharset="UTF-8" method="post">
                            <input name="utf8" type="hidden" value="&#x2713;" />
                            <input type="hidden" name="authenticity_token"/>
                            <div className="control-group">
                                <div className="controls">
                                    <input type="email" name="email" id="email" className="focus text-field" placeholder="Email" tabIndex="1" autoComplete="off" />
                                </div>
                            </div>

                            <div className="control-group">

                                <div className="controls">
                                    <span className={"visible_active " + visibleStatus} onClick={() => {
                                            if (visible == "password") {
                                                setVisible("text");
                                                setVisibleStatus("visible_inactive");
                                            } else {
                                                setVisible("password");
                                                setVisibleStatus("");
                                            }
                                        }}>
                                    </span>
                                    <input type={visible} name="password" id="password" className="text-field password" placeholder="Password" autoComplete="off" tabIndex="2" />
                                </div>
                                <input type="hidden" id="recaptcha_token" name="recaptcha_token" />
                            </div>


                            <div className="control-group">
                                <div className="controls clearfix">
                                    <input type="submit" name="commit" value="Sign In" className="btn btn-primary pull-right" id="signin_button" tabIndex="4" data-disable-with="Signing in..." />
                                    <label className="checkbox">
                                        <input type="checkbox" name="stay_signed_in" id="stay_signed_in" value="1" tabIndex="3" /> Keep me signed in on this computer
                                    </label>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

                <div className="account-extras">
                    <p>
                        <a href="#">Forgot password?</a>
                        &middot; <a href="#">Don&#39;t have an account?</a>
                        &middot; <a href="#">Privacy Policy</a><br />
                    </p>
                    <p>
                        <a href="#" target="_blank">Have an issue with 2-factor authentication?</a>
                    </p>
                </div>

            </div>

        </div>
    );
}

export default LoginComponent;