import React from 'react'
import Card from '../Card'

import './index.css'

function Cards() {
  return (
    <div className='cards'>
<Card title="Title1" desc="desciption1" img="https://images.pexels.com/photos/1109354/pexels-photo-1109354.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"></Card>
<Card title="Title2" desc="desciption2" img="https://images.pexels.com/photos/1572386/pexels-photo-1572386.jpeg"></Card>
<Card title="Title3" desc="desciption3" img="https://images.pexels.com/photos/1183992/pexels-photo-1183992.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"></Card>
<Card title="Title4" desc="desciption4" img="https://images.pexels.com/photos/1568607/pexels-photo-1568607.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"></Card>
<Card title="Title5" desc="desciption5" img="https://images.pexels.com/photos/1616403/pexels-photo-1616403.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"></Card>
<Card title="Title6" desc="desciption6" img="https://images.pexels.com/photos/1690351/pexels-photo-1690351.jpeg"></Card>

    </div>
  )
}

export default Cards