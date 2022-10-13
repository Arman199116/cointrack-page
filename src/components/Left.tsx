import React from 'react'

function Left() {
	return (
		<div className='left-parrent'>
			<div className="billed-parrent">
				<div className='billed-child'>
					<p className='billed-child-1p'>Billed yearly</p>
					<p className='billed-p'><span className='small-1'>$</span><span className='starter-num'>3.99</span> <span className='small-y'>yearly</span></p>
					<p className='billed-child-1p'>Starter</p>
					<p className='radio-p'></p>
				</div>
				<div className='billed-child'>
					<p className='billed-child-1p'>Billed monthly</p>
					<p className='billed-p'><span className='small-1'>$</span><span className='starter-num'>4.99</span> <span className='small-y'>yearly</span></p>
					<p className='billed-child-1p'>Starter</p>
					<p className='radio-p'></p>
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
		</div>
	)
}

export default Left;