import React from 'react';

function Rigth() {
	return (
		<div className='right-parrent'>
			<div className='billing-plan'>Billing plan</div>
			<div className='plan-check'>
				<span className='plan-span'>
					<p><img className="img1" src="/imgs/check.svg" alt=""/><span className='num-sp'>5&nbsp;</span>exchange connections</p>
					<p><img className="img1" src="/imgs/check.svg" alt=""/><span className='num-sp'>5&nbsp;</span>wallet connections</p>
					<p><img className="img1" src="/imgs/check.svg" alt=""/><p>Up to<span className='num-sp'>&nbsp;1000&nbsp;</span>transactionsPortfolio update - <span className='num-sp'>Daily</span></p></p>
				</span>
			</div>
			<p className='ideal-p'>
				Ideal for crypto beginners who want to manage different crypto accounts from one place and keep up with the portfolio updates every day. 
			</p>
			<p className='trust-p'>
				Trusted by more than <span>400,000</span> Teams  globally
			</p>
			<div className='logo-div'>
				<img className='check-100' src="/imgs/image100.png" alt="" />
				<img className='check-85' src="/imgs/image85.png" alt="" />
				<img className='check-87' src="/imgs/image87.png" alt="" />
				<img className='check-86' src="/imgs/image86.png" alt="" />
			</div>
			<p className='following-card'>We accept the following cards</p>
			<div className='cards-div'>
				<img  src="imgs/image88.png" alt="" />
				<img  src="imgs/image89.png" alt="" />
				<img  src="imgs/image90.png" alt="" />
				<img  src="imgs/image91.png" alt="" />
				<img  src="imgs/image92.png" alt="" />
			</div>
		</div>
	)
}

export default Rigth