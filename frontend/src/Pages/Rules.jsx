import React from 'react'
import Navbar from '../Components/Navbar'
import { rules } from '../Components/Styles/Index'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faGraduationCap } from '@fortawesome/free-solid-svg-icons';


const Rules = () => {
  return (
    <div>
        <Navbar />
        <div className='rulesFirst'>
            <p>RULES AND REGULATIONS OF OUR SCHOOL</p>
        </div>
        <div className="rules">
            <div className="rule">
                <p>
                <FontAwesomeIcon icon={faGraduationCap} className='FontAwesomeIcon' />
                Every student in the morning. Must arrive at school before 7.15 p.m. Classrooms and designated areas should be cleaned and completed before 7.30 p.m. The teacher in charge of the class and the relevant student leaders should act responsibly in this regard. Without permission. Entry to school before 6.45 pm is strictly prohibited.
                </p>
            </div>
            <div className="rule">
                <p>
                <FontAwesomeIcon icon={faGraduationCap} className='FontAwesomeIcon'/>
                As soon as the school bell rings, all children must arrive at their designated meeting places.
                </p>
            </div>
            <div className="rule">
                <p>
                <FontAwesomeIcon icon={faGraduationCap} className='FontAwesomeIcon'/>
                During the morning religious ceremonies and the playing of the national anthem, the school anthem and the evening stanzas, the students, teachers, non-academic staff and all those who are in the school should refrain from their duties and participate respectfully and actively in those activities
                </p>
            </div>
            <div className="rule">
                <p>
                <FontAwesomeIcon icon={faGraduationCap} className='FontAwesomeIcon'/>
                All students must remain in their classroom until after school and must not stay in another classroom, playground, or other place for any reason. Permission must be obtained if going to another classroom for a need.                </p>
            </div>
            <div className="rule">
                <p>
                <FontAwesomeIcon icon={faGraduationCap} className='FontAwesomeIcon'/>
                At the end of each period you should quietly prepare for the next subject until the scheduled teacher arrives. If the teacher does not show up within 10 minutes, the class leader or subject leader should ask the teacher in charge of the section.
                </p>
            </div>
            <div className="rule">
                <p>
                <FontAwesomeIcon icon={faGraduationCap} className='FontAwesomeIcon'/>
                You have to go to the line when going to another place and back to class for group subjects. The list of students for each subject should be maintained by the teacher in charge of the subject and should be sent to the teacher in charge of the class by the subject leader / leader noting that he / she did not participate. If you are leaving for group subjects in the final period, you have to sing stanzas from those places and leave the school.
                </p>
            </div>
            <div className="rule">
                <p>
                <FontAwesomeIcon icon={faGraduationCap} className='FontAwesomeIcon'/>
                Any problems that arise in the children should be reported to the teacher in charge of the class first. The teacher in charge of the section or subject should be informed only in the absence of the relevant teacher.
                </p>
            </div>
            <div className="rule">
                <p>
                <FontAwesomeIcon icon={faGraduationCap} className='FontAwesomeIcon'/>
                The teacher in charge of the class should use a previously incorrect book on behalf of his students. Where more than three errors are noted, referral should be made to the teacher in charge of the section. At the end of the year the book should be handed over to the next class teacher. The book will be checked at the time of issuance of certificates.
                </p>
            </div>
            <div className="rule">
                <p>
                <FontAwesomeIcon icon={faGraduationCap} className='FontAwesomeIcon'/>
                It is forbidden to have contact with any outsider during school hours.
                </p>
            </div>
            <div className="rule">
                <p>
                <FontAwesomeIcon icon={faGraduationCap} className='FontAwesomeIcon'/>
                It is strictly forbidden to bring and keep photographs, articles, mobile phones, CDs and other equipment that are not relevant to the school education process. If caught with such items, they will not be returned until they have officially resigned from the school.
                </p>
            </div>
            <div className="rule">
                <p>
                <FontAwesomeIcon icon={faGraduationCap} className='FontAwesomeIcon'/>
                You will not be allowed to participate in any sports training without permission during school hours. Sportswear should not be worn anywhere other than on the playground.
                </p>
            </div> 
            <div className="rule">
                <p>
                <FontAwesomeIcon icon={faGraduationCap} className='FontAwesomeIcon'/>
                Must come to their classroom as soon as the break is over
                </p>
            </div>
        </div>
    </div>
  )
}

export default Rules