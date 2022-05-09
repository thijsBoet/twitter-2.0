import { RefreshIcon } from '@heroicons/react/outline'
import React from 'react'

const Feed = () => {
  return (
	  <div>
		  <div>
			  <h1 className='5-p pb-0 text-xl font-bold'>Home</h1>
			  <RefreshIcon className='h-8 w-8 cursor-pointer text-twitter transition-all duration-500 ease-out hover:rotate-180 active:scale-125' />
		  </div>
	</div>
  )
}

export default Feed