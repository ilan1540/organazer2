import React from 'react'

export const UserImage = ({url}) => {

  const style ={
    width: '18rem',
    borderRadius: '50%',
  }
  return (
    <div className="card" style={style}>
  <img src={url} className="card-img-top" alt="..."/>
  <div className="choose_file">
		<label htmlFor="choose_file">
			<input type="file" id="choose_file" />
			<span>Choose Files</span>
		</label>
	</div>
  
</div>
  )
}
