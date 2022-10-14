import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, CardNumberElement, CardCvcElement , CardCvcElementComponent} from '@stripe/react-stripe-js';
import styled from "@emotion/styled";



function Left() {

	const CardElementContainer = styled.div`
		width: 450px;
		display: flex;
		align-items: center;
		border: 1px solid #686868;
		background-color: #212834;
		border-radius: 7px;
		padding: 14px 0px;
		& .StripeElement {
			width: 100%;
			padding: 15px;
		}
	`;

	
	let stripePromise = loadStripe('pk_test_51LspDyEM3dDqspf4ngvmMspg5MQGUXL0B2uNUVIiDKhU2acPY084YQvQIxmPzV5P2ONtEupXzh2YMdB9hHkXeP1m00P6egomfj');
	let cardElementOptions = {
		style : {
			base : {

				
				border : "1px solid grey",
				"::placeholder" : {
					color : '#8D8D8D',
				},
				
			},
			
		}
	}

	return (
		<div className='left-parrent'>
			<div className="billed-parrent">
				<div className='billed-child'>
					<p className='billed-child-1p'>Billed yearly</p>
					<p className='billed-p'><span className='small-1'>$</span><span className='starter-num'>3.99</span> <span className='small-y'>yearly</span></p>
					<p className='billed-child-1p'>Starter</p>
					
					<img className='radio-p' src="/imgs/ellipse.png" alt="" />
				</div>
				<div className='billed-child'>
					<p className='billed-child-1p'>Billed monthly</p>
					<p className='billed-p'><span className='small-1'>$</span><span className='starter-num'>4.99</span> <span className='small-y'>yearly</span></p>
					<p className='billed-child-1p'>Starter</p>
					<img className='radio-p' src="/imgs/ellips1.png" alt="" />
				</div>
			</div>
			<div>

				<div className='starter-plan'>
					<p>Yearly Starter plan </p>
					<p>$60/Year</p>
				</div>
				<hr className="new1" />
			</div>

			<div className='billed-today-parrent'>
				<div className='billed-today'>
					<p className='billed-today-1p'>Billed today</p>
					<p className='billed-today-2p'>$60</p>
				</div>
				<hr className="new2" />
				<div className='billed-today-2'>
					<p>Renews for $60 every year</p>
				</div>
			</div>
			<div className='payment-detalis'>
				<p>Payment detalis</p>
			</div>
			<Elements stripe={stripePromise} >
				
				<CardElementContainer>
					<img className='form-icon' src="/imgs/Vector(1).png" alt="" />
					<CardNumberElement options={cardElementOptions}/> 
				</CardElementContainer>
				<CardElementContainer>
					<img className='form-icon2' src="/imgs/Vector(1)11.png" alt="" />
					<CardCvcElement />	
				</CardElementContainer>
					
				<form className='pay-form' >
					<div className='form-div1'>
						
						<input type="text" className='form-input1' placeholder="Credit card number" />	
					</div>
					<div className='form-div2'>
						<img className='form-icon2' src="/imgs/Vector(1)11.png" alt="" />
						<input type="text"  className='form-input2' placeholder="Expirind MMYY" />
					</div>
					<div className='form-div3 form-div2'>
						<img className='form-icon3' src="/imgs/Vector33.png" alt=""  />
						<input type="text" className='form-input3 form-input2' placeholder="CVV Code" />
					</div>
					
					{/* <input type="submit" className='form-input4' value="Pay now" /> */}
					<button className='form-input4'>Pay now</button>
				</form>
			
			</Elements>
		</div>
	)
}

export default Left;