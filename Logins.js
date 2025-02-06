import React from 'react';
import './Logins.scss';

function Logins() {
  return (
	<div>
		<div className='container'>

         <div>
			<img src={require('./images/main.png')} alt='main_img' width={200} height={100} />
		 </div>

		 <div className='main-form'>
			<div className='form'>
				<p>Log in to Facebook</p>
				<div>
					<form className='#'>
						<input type='text' className='email' placeholder='Email address or phone number' /><br></br>
						<input type='text' className='password' placeholder='Password' />
					
	
					<button className='login'>Log in</button>
					<a href='/' className='forgotpassword'>Forgotten password?</a>
					
					</form>
				</div>

				

			</div>
			
			</div>
			</div>
			

    

	</div>
  )
}

export default Logins;