import React from 'react'

const WorkCardSkeleton = () => {
	return (
		<div className='flex items-end max-w-sm h-56 min-h-full min-w-full p-5 bg-zinc-200 dark:bg-neutral-700 rounded-lg transition-background'>
			<div className='flex flex-col flex-auto gap-2'>
				<div className='w-2/3 h-4 background-pulse'></div>
				<div className='flex gap-3'>
					<div className='w-14 h-4 background-pulse rounded-sm'></div>
					<div className='w-14 h-4 background-pulse rounded-sm'></div>
					<div className='w-14 h-4 background-pulse rounded-sm'></div>
				</div>
			</div>
			<div className='self-start md:self-end min-w-[28px] min-h-[28px] background-pulse rounded-full'></div>
		</div>
	)
}

export default WorkCardSkeleton
