import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Header from './Components/Header';
import Inbox from './Components/Inbox';
import EmailDetails from './Components/EmailDetails';
import SendEmail from './Components/SendEmail';
function App() {
  const [emails, setEmails] = useState([
    { date: '22.4.22', from: 'era@gmail.com', to: 'sdf1sfe@walla.com', subject: 'Heroku sfdgdfgecufdgdgdfrity notification - resetting user account passwords TODAY, May 4, 202', message: 'eroku will say 4, 2022, as mentioned in our previous notification. We recommend that you reset your user account password in advance here and follow the best practices below: ' },
    { date: '2.4.22', from: 'era@gmail.com', to: 'sdffdsdfs@walla.com', subject: 'Herokur 33seaaaasa22curiopipiopiopiopty notification - resetting user account passwords TODAY, May 4, 202', message: 'eroku will ractices below: ' },
    { date: '12.4.22', from: 'era@gmail.com', to: 's332333dfs@walla.com', subject: 'Herokuds securitpiopoipiopotification - resetting user account passwords TODAY, May 4, 202', message: 'eroku will kjhkhkhkhhjkhjkhuser account passwords today, May 4, 2022, as mentioned in our previous notification. We recommend that you reset your user account password in advance here and follow the best practices below: ' },
    { date: '1.4.22', from: 'era@gmail.com', to: '1@walla.com', subject: 'Heroku securityhdfg notification - resetting user account passwords TODAY, May 4, 202', message: 'eroku will start rehjkhgjkghjghioned in our previous notification. We recommend that you reset your user account password in advance here and follow the best practices below: ' },
    { date: '3.4.22', from: 'era@gmail.com', to: 'fd@walla.com', subject: 'Heroku secsswords TODAY, May 4, 202', message: 'eroku will startgfh, as mentioned in our previous notification. We recommend that you reset your user account password in advance here and follow the best practices below: ' },
    { date: '5.4.22', from: 'era@gmail.com', to: 'sdf@walla.com', subject: 'Heroku security notification - resetting user account passwords TODAY, May 4, 202', message: '' },
    { date: '6.4.22', from: 'era@gmail.com', to: 'sdfs@walla.com', subject: '', message: 'erokghfghfghhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhfghfgu will start resetting user account passwords today, May 4, 2022, as mentioned in our previous notification. We recommend that you reset your user account password in advance here and follow the best practices below: ' },
  ]);

  const getCreatedAt = () => {
    let newDate = new Date();
    let getTime = newDate.getFullYear() + '-' +
      (newDate.getMonth() + 1) + '-' +
      newDate.getDate() +
      ' At: ' + newDate.getHours() + ':' + newDate.getMinutes()

    return getTime;
  }

  const sendAddEmail = (from, to, subject, message) => {
    let email = {
      date: getCreatedAt(),
      from: from,
      to: to,
      subject: subject,
      message: message
    }
    setEmails([...emails, email]);
  }
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/react-email" element={<Inbox emails={emails} />} />
          {emails.map((email, idx) => {
            return (<Route path={"/react-email/emaildetails" + email.from} element={<EmailDetails idx={idx} date={email.date} to={email.to} from={email.from} subject={email.subject} message={email.message} />} />)
          })}
        </Routes>
        <SendEmail sendAddaEmail={sendAddEmail}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
