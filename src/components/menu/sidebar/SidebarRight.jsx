import React from 'react'
import './sidebar.css'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'

const contacts = [
  { id: 1, name: 'Clayton Shelton' },
  { id: 2, name: 'Alden Weaver' },
  { id: 3, name: 'Lucian Lozano' },
  { id: 4, name: 'Corey Espinoza' },
  { id: 5, name: 'Brendon Dyer' },
  { id: 6, name: 'Branson Medina' },
  { id: 7, name: 'Slade Middleton' },
  { id: 8, name: 'Jaquan Solis' },
  { id: 9, name: 'Randy Rangel' },
  { id: 10, name: 'Jamiya Arnold' },
  { id: 11, name: 'Angeline Buckley' },
  { id: 12, name: 'Kira Hess' },
  { id: 13, name: 'Jonah Snyder' },
  { id: 14, name: 'Griffin Mendez' },
  { id: 15, name: 'Giana Sharp' },
  { id: 16, name: 'Zechariah Cannon' },
  { id: 17, name: 'Belinda Sawyer' },
  { id: 18, name: 'Evelin Weber' },
  { id: 19, name: 'Jayleen Cantrell' }
]

console.log(contacts)

export default function SidebarRight() {
  return (
    <div className="sidebar-container sidebar-right">
      <div className="section-1">
        <h3>Contacts</h3>
        {contacts.map(c => {
          const contact = c.name
          const id = c.id
          return (
            <button key={id} className="btn">
              <AccountCircleIcon className="icon" />
              <span>{contact}</span>
            </button>
          )
        })}
      </div>
      <div className="sidebar-bottom"></div>
    </div>
  )
}
