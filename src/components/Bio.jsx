import { useState } from 'react'
import profileIcon from '../assets/profileIcon.svg'

const Bio = () => {
    // destructuring
    const [userDetails, setUserDetails] = useState({
        name: 'Ehioje Erabor',
        about: 'Building Greatdev.io - Learn to code and connect with great mentors'
    }) // the string values refers to the use state hook' 

    const [editFormIsOpen, setEditFormIsOpen] = useState(false)


    const updateUserDetails = (event) => {
        event.preventDefault()
        setUserDetails({
            name: event.target.nameOfUser.value,
            about: event.target.aboutUser.value,
        })

        setEditFormIsOpen(false) // after successfully updating the user details, set edit form as false
    }

    const editForm = (
        <form className='edit-bio-form' onSubmit={(e) => updateUserDetails(e)}>
            <input type='text' id='' name='nameOfUser' placeholder='Your name'/>
            <input type='text' id='' name='aboutUser' placeholder='About you'/>
            <br />
            <button type='button' className='cancel-button' onClick={() => setEditFormIsOpen(false)}>Cancel</button>
            <button type='submit'>Save</button>
        </form>
    )

    const editButton = <button onClick={() => setEditFormIsOpen(true)}>Edit</button>

    return (
        <section className="bio">
            <div className="profile-photo" role="button" title="Click to edit photo">
                <img src={profileIcon} alt="" />
            </div>
            <div className="profile-info">
                <p className="name">{userDetails.name}</p>
                <p className="about">{userDetails.about}</p>
                {editFormIsOpen ? editForm : editButton}
            </div>
        </section>
    )
}

export default Bio