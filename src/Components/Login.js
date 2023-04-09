import './Stylesheet/Login.css'

const Login =()=>{
    return(<div>
        <div class="container">
	<div class="login__content">
		<img src="https://assets.codepen.io/7773162/4kNYC.jpeg" alt="login image" class="login__img"/>

		<form action="" class="login__form">
			<div>
				<h1 class="login__title">
					<span>Welcome</span> Back!
				</h1>
				<p class="login__description">
					Welcome! Please login to continue.
				</p>
			</div>

			<div>
				<div class="login__inputs">
					<div>
						<label for="" class="login__label">Email</label>
						<input type="email" placeholder="Enter your email address" required class="login__input"/>
					</div>

					<div>
						<label for="" class="login__label">Password</label>

						<div class="login__box">
							<input type="password" placeholder="Enter your password" required class="login__input" id="input-pass"/>
							<i class="ri-eye-off-line login__eye" id="input-icon"></i>
						</div>
					</div>
				</div>

				<div class="login__check">
					<input type="checkbox" class="login__check-input"/>
					<label for="" class="login__check-label">Remember me</label>
				</div>
			</div>

			<div>
				<div class="login__buttons">
					<button class="login__button">Log In</button>
					<button class="login__button login__button-ghost">Sign Up</button>
				</div>

				<a href="#" class="login__forgot">Forgot Password?</a>
			</div>
		</form>
	</div>
</div>


    </div>)
}
export default Login;