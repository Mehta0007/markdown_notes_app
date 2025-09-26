


export default function Login() {
    return(
        <>
        <div className="login-container">
            <h1 className="text-gradient">T Notes</h1>
            <h2>Organized note taking made easy</h2>
            <p>
                Build your very own archive of easily navigated and indexed information and notes.
            </p>
            <div>
                <p>Email</p>
                <input type="text" placeholder="Enter your email address"  />
            </div>
            <div>
                <p>Password</p>
                <input type="password" placeholder="**********"  />
            </div>
            <button className="submit-btn">
               <h6>Submit</h6>
            </button>
            <div className="secondary-btns-container">
                <button className="card-button-secondary">
<small>Login</small>
                </button>
                <button className="card-button-secondary">
                    <small>Forgot password?</small>
                </button>
            </div>

            <div className="full-line"></div>







            <footer>
                <a href="https://github.com/Mehta0007" target="_blank">
                <img src="https://avatars.githubusercontent.com/u/145217011?v=4" alt="pfp" />
                @Mehta0007
                </a>
                
 
<i className="fa-brands fa-github"></i>
            </footer>

        </div>
        </>
    )
}