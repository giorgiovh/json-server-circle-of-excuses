import ImgMediaCard from './ImgMediaCard';

import './ExcuseList.css'

export default function ExcuseList({ uid, excuses }) {

  if (excuses.length === 0) {
    return <div>No excuses to load...</div>
  }

  return (
    <div className='card-grid'>
      {/* adding the filter below to fix the issue where after a user logs out, they could still see their user-created excuses. Only after a manual refresh did the user-created excuses disappear*/}
      {excuses.map(excuse => (
        <ImgMediaCard key={excuse.id} excuse={excuse} />
      ))}
    </div>
  )
}